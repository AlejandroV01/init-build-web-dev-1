import { useAppSelector } from "@/store/hooks";
import CardBox from "../CardBox";
import Label from "../Label";
import Input from "../Input";
import { ChangeEvent, useState } from "react";
import CheckboxComponent from "../checkbox";
import TextArea from "../TextArea";
import Button from "../Button";
import insertProject from "@/database/projects/insertProject";

interface Project {
  name: string;
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

const projectObject = {
  name: "",
  position: "",
  startMonth: "",
  startYear: "",
  endMonth: "",
  endYear: "",
  description: "",
  isPresent: false,
};

const ProjectStep: React.FC<Props> = ({ handleStepSkip, handleStepSubmit }) => {
  const user = useAppSelector((state) => state.auth);
  const [projects, setProjects] = useState<Project[]>([projectObject]);

  const handleAddProject = () => {
    setProjects([...projects, projectObject]);
  };

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects];
      updatedProjects[index] = {
        ...updatedProjects[index],
        [name]: value,
      };
      return updatedProjects;
    });
  };

  const handleRemove = (index: number) => {
    setProjects((prevProjects) => {
      const updatedProjects = [];
      for (let i = 0; i < prevProjects.length; ++i) {
        if (i != index) {
          updatedProjects.push(prevProjects[i]);
        }
      }
      return updatedProjects;
    });
  };

  const handleChecked = (index: number) => {
    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects];
      updatedProjects[index] = {
        ...updatedProjects[index],
        isPresent: !updatedProjects[index].isPresent,
      };
      return updatedProjects;
    });
  };

  const handleSubmit = () => {
    projects.forEach(async (project) => {
      //needed check to circument "profile_id cannot be number | null" error
      if (user.id) {
        const data = {
          profile_id: user.id,
          project_name: project.name,
          position_title: project.position,
          start_date: `${project.startMonth} ${project.startYear}`,
          end_date: project.isPresent
            ? "Present"
            : `${project.endMonth} ${project.endYear}`,
          description: project.description,
        };
        await insertProject(data);
      }
    });
    handleStepSubmit();
  };

  return (
    <CardBox>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-3xl">Project</h1>
        <span className="text-sm text-slate-500">
          Share some projects you have done!
        </span>
        <div>
          {projects.map((project, i) => {
            return (
              <div key={i} className="mb-3">
                <h2 className="font-bold text-lg">Project {i + 1}</h2>
                <div className="grid grid-cols-12  gap-5">
                  <div className="col-span-6">
                    <Label htmlFor={`name[${i}]`}>Project Name</Label>
                    <Input
                      type="text"
                      value={project.name}
                      onChange={(e) => handleFormChange(e, i)}
                      name="name"
                      id={`name[${i}]`}
                      className="w-full"
                      placeholder="Project name"
                      required
                    />
                  </div>
                  <div className="col-span-6">
                    <Label htmlFor={`position[${i}]`}>
                      Project Position Title
                    </Label>
                    <Input
                      type="text"
                      value={project.position}
                      onChange={(e) => handleFormChange(e, i)}
                      name="position"
                      id={`position[${i}]`}
                      className="w-full"
                      placeholder="Title"
                      required
                    />
                  </div>
                  <div className="col-span-6">
                    <div className="grid grid-cols-6 gap-3">
                      <div className="col-span-3">
                        <Label htmlFor={`startMonth[${i}]`}>Start Month</Label>
                        <Input
                          type="text"
                          value={project.startMonth}
                          onChange={(e) => handleFormChange(e, i)}
                          name="startMonth"
                          id={`startMonth[${i}]`}
                          className="w-full"
                          placeholder="Month"
                          required
                        />
                      </div>
                      <div className="col-span-3">
                        <Label htmlFor={`startYear[${i}]`}>Start Year</Label>
                        <Input
                          type="number"
                          value={project.startYear}
                          onChange={(e) => handleFormChange(e, i)}
                          name="startYear"
                          id={`startYear[${i}]`}
                          className="w-full"
                          placeholder="Year"
                          required
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
                          value={!project.isPresent ? project.endMonth : ""}
                          onChange={(e) => handleFormChange(e, i)}
                          name="endMonth"
                          id={`endMonth[${i}]`}
                          className="w-full"
                          placeholder="Month"
                          disabled={project.isPresent}
                          required
                        />
                      </div>
                      <div className="col-span-3">
                        <Label htmlFor={`endYear[${i}]`}>End Year</Label>
                        <Input
                          type="number"
                          value={!project.isPresent ? project.endYear : ""}
                          onChange={(e) => handleFormChange(e, i)}
                          name="endYear"
                          id={`endYear[${i}]`}
                          className="w-full"
                          placeholder="Year"
                          disabled={project.isPresent}
                          required
                        />
                      </div>
                      <div className="col-span-6 flex flex-row align-middle gap-1 checkbox">
                        <CheckboxComponent
                          checked={project.isPresent}
                          onChange={() => handleChecked(i)}
                        />
                        <Label
                          htmlFor="checkbox"
                          className="font-normal text-sm"
                        >
                          Still working on it?
                        </Label>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <Label htmlFor={`description[${i}]`}>Description</Label>
                    <TextArea
                      value={project.description}
                      onChange={(e) => handleFormChange(e, i)}
                      resizable={false}
                      name="description"
                      id={`description[${i}]`}
                      placeholder="A couple sentences about your experience working on the project"
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
              onClick={handleAddProject}
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

export default ProjectStep;
