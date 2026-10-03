import {
  FiFileText,
  FiUsers,
  FiDollarSign,
  FiBell,
  FiShield,
  FiBarChart2,
} from "react-icons/fi";

const Features = () => {
  const features = [
    {
      icon: FiFileText,
      title: "Sourcing Requests",
      text: "Create structured requests with product, quantity and requirement details.",
    },
    {
      icon: FiUsers,
      title: "Supplier Network",
      text: "Organize supplier interactions around each sourcing requirement.",
    },
    {
      icon: FiDollarSign,
      title: "Quote Management",
      text: "Review and compare supplier quotations from one workspace.",
    },
    {
      icon: FiBell,
      title: "Request Updates",
      text: "Keep track of responses and important sourcing activity.",
    },
    {
      icon: FiShield,
      title: "Business-First Workflow",
      text: "Designed around structured B2B purchasing and sourcing processes.",
    },
    {
      icon: FiBarChart2,
      title: "Decision Visibility",
      text: "Keep important purchasing information organized for better review.",
    },
  ];

  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#00AEEF]">
              Platform Features
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
              Everything you need for sourcing
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#6B7C93]">
            A focused workspace for businesses that need a clearer way to handle
            sourcing requirements and supplier responses.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-[18px] border border-gray-200 bg-white p-6 transition hover:border-gray-300 hover:shadow-[0_8px_25px_rgba(17,24,39,0.06)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F4F6F8] text-[#111827] transition group-hover:bg-[#111827] group-hover:text-white">
                  <Icon size={18} />
                </div>

                <h3 className="mt-5 text-sm font-bold text-[#111827]">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#6B7C93]">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
