import AuthNav from "@/Components/Shared/AuthNav";
import FooterSection from "@/Components/Shared/FooterSection";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <AuthNav />
      <main className="flex-1">{children}</main>
      <FooterSection />
    </div>
  );
};

export default layout;
