import AuthNav from "@/Components/Shared/AuthNav";

const layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <AuthNav />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default layout;
