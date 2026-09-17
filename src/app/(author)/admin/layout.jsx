import SidebarSection from "@/Components/AdminSection/SidebarSection";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <SidebarSection />
      <main className="flex-1">{children} </main>
    </div>
  );
};

export default layout;
