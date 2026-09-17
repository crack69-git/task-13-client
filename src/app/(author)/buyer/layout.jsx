import NavbarSection from "@/Components/Shared/NavbarSection";

const layout = ({ children }) => {
  return (
    <div>
      <NavbarSection />
      <main>{children}</main>
    </div>
  );
};

export default layout;
