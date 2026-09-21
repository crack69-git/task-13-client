import SidebarSection from "@/Components/AdminSection/SidebarSection";

const layout = ({ children }) => {
  return (
    <div className="flex min-h-screen min-w-0 flex-col lg:flex-row">
      <SidebarSection />
      <main className="min-w-0 flex-1">{children} </main>
    </div>
  );
};

export default layout;
