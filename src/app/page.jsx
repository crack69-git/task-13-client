import BusinessStrip from "@/Components/Homepage/BusinessStrip";
import CTA from "@/Components/Homepage/CTASection";
import Features from "@/Components/Homepage/FeatureSection";
import HeroSection from "@/Components/Homepage/HeroSection";
import HowItWorks from "@/Components/Homepage/HowItWorkSection";
import SupplierSection from "@/Components/Homepage/SupplierSection";
import ValueSection from "@/Components/Homepage/ValueSection";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <BusinessStrip />
      <ValueSection />
      <HowItWorks />
      <Features />
      <SupplierSection />
      <CTA />
    </div>
  );
};

export default page;
