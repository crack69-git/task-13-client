import BusinessStrip from "@/Components/Homepage/BusinessStrip";
import CTA from "@/Components/Homepage/CTASection";
import Features from "@/Components/Homepage/FeatureSection";
import HeroSection from "@/Components/Homepage/HeroSection";
import HowItWorks from "@/Components/Homepage/HowItWorkSection";
import SupplierSection from "@/Components/Homepage/SupplierSection";
import Testimonials from "@/Components/Homepage/Testimonials";
import ValueSection from "@/Components/Homepage/ValueSection";
import { Fab } from "@mui/material";
import React from "react";
import { FaPlus } from "react-icons/fa6";

const page = () => {
  return (
    <div className="relative">
      <Fab
        size="medium"
        color="secondary"
        aria-label="add"
        sx={{
          position: "fixed",
          right: 24,
          bottom: 24,
          zIndex: 1400,
        }}
      >
        <FaPlus />
      </Fab>

      <div>
        <HeroSection />
        <Testimonials />
        {/* <BusinessStrip /> */}
        <ValueSection />
        <HowItWorks />
        <Features />
        <SupplierSection />
        <CTA />
      </div>
    </div>
  );
};

export default page;
