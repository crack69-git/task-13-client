import { FiLayers, FiSearch, FiTrendingUp } from "react-icons/fi";

const ValueSection = () => {
  const items = [
    {
      icon: FiSearch,
      title: "Find the right suppliers",
      text: "Bring your sourcing requirement to one place and make supplier discovery easier.",
    },
    {
      icon: FiLayers,
      title: "Manage every request",
      text: "Keep product requirements, quotations and purchasing information organized.",
    },
    {
      icon: FiTrendingUp,
      title: "Make informed decisions",
      text: "Compare supplier responses and evaluate available options before purchasing.",
    },
  ];

  return (
    <section className="bg-white py-20" id="about">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#00AEEF]">
            Why SourceX
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
            A simpler way to manage B2B sourcing
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#6B7C93] sm:text-base">
            Replace scattered communication and manual follow-ups with a
            structured sourcing workflow designed for business teams.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[18px] border border-gray-200 bg-white p-6 shadow-[0_4px_20px_rgba(17,24,39,0.04)] transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0FAFD] text-[#00AEEF]">
                  <Icon size={20} />
                </div>

                <h3 className="mt-5 text-base font-bold text-[#111827]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#6B7C93]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
