import React, { useEffect } from "react";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import updateProfileByEmail from "@/database/profiles/updateProfileByEmail";

import { useAppSelector } from "@/store/hooks";

const SettingsInput = () => {
  const user = useAppSelector((state) => state.auth);
  console.log(user.first_name);

  const [firstName, setfirstName] = useState(`${user.first_name}`);
  const [lastName, setlastName] = useState(`${user.last_name}`);
  const [email, setEmail] = useState(`${user.email}`);

  const handleUpdateInfo = async () => {
    await updateProfileByEmail(email, {
      email: email,
      first_name: firstName,
      last_name: lastName,
    });
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
            placeholder={user.first_name}
          />
        </div>
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
