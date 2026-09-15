import AuthNav from "@/Components/Shared/AuthNav";
import FooterSection from "@/Components/Shared/FooterSection";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex flex-col ">
      <AuthNav />
      <main className="flex-grow">{children}</main>
      <FooterSection />
    </div>
  );
};

export default layout;
