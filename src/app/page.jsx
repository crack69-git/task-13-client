import BusinessStrip from "@/Components/Homepage/BusinessStrip";
import HeroSection from "@/Components/Homepage/HeroSection";
import ValueSection from "@/Components/Homepage/ValueSection";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <BusinessStrip />
      <ValueSection />
    </div>
  );
};

export default page;
