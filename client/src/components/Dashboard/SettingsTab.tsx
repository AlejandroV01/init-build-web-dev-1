import React, { lazy } from "react";
import SettingsInput from "@/components/SettingsInput";
const SettingsTab = () => {
  const handleSave = (firstName: string, lastName: string, email: string) => {
    firstName = "John";
    lastName = "Doe";
    email = "alexvera0109@gmail.com";
  };

  return (
    <div>
      {" "}
      <SettingsInput handleSave={handleSave} />
    </div>
  );
};

export default SettingsTab;
