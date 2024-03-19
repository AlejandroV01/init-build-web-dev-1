import ApplicantsPopup from "@/components/ApplictantsPopup";
import React from "react";

export interface IApplicants {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
}
const Home = () => {
  const mockApplicants = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      role: "Software Engineer",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      role: "Product Manager",
    },
    {
      id: 3,
      firstName: "Mike",
      lastName: "Smith",
      role: "Software Engineer",
    },
    {
      id: 4,
      firstName: "Daniela",
      lastName: "Smith",
      role: "Product Manager",
    },
  ];
  return (
    <div>
      <h1>Home</h1>
      <ApplicantsPopup applicants={mockApplicants} />
    </div>
  );
};
export default Home;
