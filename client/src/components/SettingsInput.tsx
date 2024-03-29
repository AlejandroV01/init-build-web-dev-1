import React from "react";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import updateProfileByEmail from "@/database/profiles/updateProfileByEmail";

const SettingsInput = ({
  handleSave,
}: {
  handleSave: (firstName: string, lastName: string, email: string) => void;
}) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");

  const handleUpdateInfo = async () => {
    await updateProfileByEmail(email, {
      email: email,
      first_name: firstName,
      last_name: lastName,
    });

    handleSave(firstName, lastName, email);
  };

  return (
    <div className="create w-[500px] p-3">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl"> Account Info</h1>
          <label htmlFor=" First Name:" className="font-bold">
            {" "}
            First Name
          </label>
          <Input
            type="text"
            required
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            className="p-2 outline outline-[1px] outline-gray-400 rounded w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor=" First Name:" className="font-bold">
            {" "}
            Last Name
          </label>
          <Input
            type="text"
            required
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            className="p-2 outline outline-[1px] outline-gray-400 rounded w-full"
          />
        </div>
        {/*<label className="font-bold">School Year </label>
         <select
          className="font-bold p-2 outline outline-[1px] outline-gray-400 rounded "
          onChange={(e) => setGrade(e.target.value)}
        >
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </select> */}
        <label htmlFor=" Email:" className="font-bold">
          {" "}
          Email
        </label>
        <Input
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 outline outline-[1px] outline-gray-400 rounded w-full"
        />
        <h1 className="font-bold text-lg"> Password </h1>
        <div className="flex justify-between">
          <Button variant="secondary"> Reset Password</Button>
          <Button onClick={handleUpdateInfo} variant="primary">
            {" "}
            Save Changes{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default SettingsInput;
