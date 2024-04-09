import ApplicantsPopup from "@/components/ApplictantsPopup";
import React from "react";
import Footer from "@/components/Footer";
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
      <Footer />
    </div>
  );
};

export default Home;

const CTA = () => {
  return (
    <div className="bg-primary py-10">
      <div className="flex flex-col items-center gap-5 container">
        <h2 className="text-3xl font-semibold text-center text-white">
          Get your ideas out there.
        </h2>
        <a href="/auth">
          <Button variant="secondary" className="text-white bg-[#928bff]">
            Get Started
          </Button>
        </a>
        <img src="/MAC.webp" alt="" className="w-full max-w-[900px]" />
      </div>
    </div>
  );
};
