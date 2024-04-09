import { useAppSelector } from "@/store/hooks";
import CardBox from "../CardBox";
import Label from "../Label";
import Input from "../Input";
import { ChangeEvent, useState } from "react";
import CheckboxComponent from "../checkbox";
import TextArea from "../TextArea";
import Button from "../Button";
import insertExperience from "@/database/experiences/insertExperience";

interface Experience {
  company: string;
  position: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  description: string;
  isPresent: boolean;
}

interface Props {
  handleStepSubmit: () => void;
  handleStepSkip: () => void;
}

const experienceObject = {
  company: "",
  position: "",
  startMonth: "",
  startYear: "",
  endMonth: "",
  endYear: "",
  description: "",
  isPresent: false,
};

const ExperienceStep: React.FC<Props> = ({
  handleStepSubmit,
  handleStepSkip,
}) => {
  const user = useAppSelector((state) => state.auth);
  const [experiences, setExperiences] = useState<Experience[]>([
    experienceObject,
  ]);

  const handleAddExperience = () => {
    setExperiences([...experiences, experienceObject]);
  };

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setExperiences((prevExperiences) => {
      const updatedExperiences = [...prevExperiences];
      updatedExperiences[index] = {
        ...updatedExperiences[index],
        [name]: value,
      };
      return updatedExperiences;
    });
  };

  const handleRemove = (index: number) => {
    setExperiences((prevExperiences) => {
      const updatedExperiences = [];
      for (let i = 0; i < prevExperiences.length; ++i) {
        if (i != index) {
          updatedExperiences.push(prevExperiences[i]);
        }
      }
      return updatedExperiences;
    });
  };

  const handleChecked = (index: number) => {
    setExperiences((prevExperiences) => {
      const updatedExperiences = [...prevExperiences];
      updatedExperiences[index] = {
        ...updatedExperiences[index],
        isPresent: !updatedExperiences[index].isPresent,
      };
      return updatedExperiences;
    });
  };

  const handleSubmit = () => {
    experiences.forEach(async (experience) => {
      //needed check to circument "profile_id cannot be number | null" error
      if (user.id) {
        const data = {
          profile_id: user.id,
          company: experience.company,
          title: experience.position,
          start_date: `${experience.startMonth} ${experience.startYear}`,
          end_date: experience.isPresent
            ? "Present"
            : `${experience.endMonth} ${experience.endYear}`,
          description: experience.description,
        };
        await insertExperience(data);
      }
    });
    handleStepSubmit();
  };

  return (
    <CardBox>
      <div
        className="flex flex-col gap-2 max-h-[600px] overflow-y-scroll"
        style={{
          scrollbarWidth: experiences.length > 1 ? "auto" : "none",
          paddingInlineEnd: experiences.length > 1 ? "12px" : "none",
        }}
      >
        <h1 className="font-bold text-3xl">Experience</h1>
        <span className="text-sm text-slate-500">
          List your experience(s) here!
        </span>
        <div>
          {experiences.map((experience, i) => {
            return (
              <div key={i} className="mb-3">
                <h2 className="font-bold text-lg">Work Experience {i + 1}</h2>
                <div className="grid grid-cols-12  gap-5">
                  <div className="col-span-6">
                    <Label htmlFor={`company[${i}]`}>Company</Label>
                    <Input
                      type="text"
                      value={experience.company}
                      onChange={(e) => handleFormChange(e, i)}
                      name="company"
                      id={`company[${i}]`}
                      className="w-full"
                      placeholder="Company name"
                    />
                  </div>
                  <div className="col-span-6">
                    <Label htmlFor={`position[${i}]`}>Position Title</Label>
                    <Input
                      type="text"
                      value={experience.position}
                      onChange={(e) => handleFormChange(e, i)}
                      name="position"
                      id={`position[${i}]`}
                      className="w-full"
                      placeholder="Title"
                    />
                  </div>
                  <div className="col-span-6">
                    <div className="grid grid-cols-6 gap-3">
                      <div className="col-span-3">
                        <Label htmlFor={`startMonth[${i}]`}>Start Month</Label>
                        <Input
                          type="text"
                          value={experience.startMonth}
                          onChange={(e) => handleFormChange(e, i)}
                          name="startMonth"
                          id={`startMonth[${i}]`}
                          className="w-full"
                          placeholder="Month"
                        />
                      </div>
                      <div className="col-span-3">
                        <Label htmlFor={`startYear[${i}]`}>Start Year</Label>
                        <Input
                          type="number"
                          value={experience.startYear}
                          onChange={(e) => handleFormChange(e, i)}
                          name="startYear"
                          id={`startYear[${i}]`}
                          className="w-full"
                          placeholder="Year"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="grid grid-cols-6 gap-3">
                      <div className="col-span-3">
                        <Label htmlFor={`endMonth[${i}]`}>End Month</Label>
                        <Input
                          type="text"
                          value={
                            !experience.isPresent ? experience.endMonth : ""
                          }
                          onChange={(e) => handleFormChange(e, i)}
                          name="endMonth"
                          id={`endMonth[${i}]`}
                          className="w-full"
                          placeholder="Month"
                          disabled={experience.isPresent}
                        />
                      </div>
                      <div className="col-span-3">
                        <Label htmlFor={`endYear[${i}]`}>End Year</Label>
                        <Input
                          type="number"
                          value={
                            !experience.isPresent ? experience.endYear : ""
                          }
                          onChange={(e) => handleFormChange(e, i)}
                          name="endYear"
                          id={`endYear[${i}]`}
                          className="w-full"
                          placeholder="Year"
                          disabled={experience.isPresent}
                        />
                      </div>
                      <div className="col-span-6 flex flex-row align-middle gap-1 checkbox">
                        <CheckboxComponent
                          checked={experience.isPresent}
                          onChange={() => handleChecked(i)}
                        />
                        <Label
                          htmlFor="checkbox"
                          className="font-normal text-sm"
                        >
                          Still work here?
                        </Label>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <Label htmlFor={`description[${i}]`}>Description</Label>
                    <TextArea
                      value={experience.description}
                      onChange={(e) => handleFormChange(e, i)}
                      resizable={false}
                      name="description"
                      id={`description[${i}]`}
                      placeholder="A couple sentences about your experience"
                      className="w-full"
                    />
                  </div>
                  {i != 0 && (
                    <div className="col-span-12">
                      <Button
                        variant="destructive"
                        className="w-full"
                        onClick={() => handleRemove(i)}
                      >
                        Remove
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          <div className="flex flex-col items-center">
            <Button
              variant="secondary"
              className="w-full mb-5"
              onClick={handleAddExperience}
            >
              Add More
            </Button>
            <Button
              variant="primary"
              className="w-1/2 py-2.5 mt-5"
              onClick={handleSubmit}
            >
              Next Step
            </Button>
            <Button
              variant="secondary"
              className="w-1/2 py-2.5 bg-transparent text-foreground"
              onClick={handleStepSkip}
            >
              Skip this step
            </Button>
          </div>
        </div>
      </div>
    </CardBox>
  );
};

export default ExperienceStep;
