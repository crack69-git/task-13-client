import { FiEdit3, FiSend, FiCheckCircle } from "react-icons/fi";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: FiEdit3,
      title: "Submit your requirement",
      text: "Tell us what product or service your business needs, including quantity and specifications.",
    },
    {
      number: "02",
      icon: FiSend,
      title: "Receive supplier quotes",
      text: "Suppliers can respond with their available pricing, delivery details and terms.",
    },
    {
      number: "03",
      icon: FiCheckCircle,
      title: "Compare and decide",
      text: "Review supplier responses in one place and move forward with your preferred option.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#F8F9FA] py-20">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#00AEEF]">
            Simple Process
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
            How SourceX works
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#6B7C93]">
            From requirement to supplier response, keep your sourcing process
            clear and organized.
          </p>
        </div>

        <div className="relative mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-[18px] border border-gray-200 bg-white p-7 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#111827] text-white">
                    <Icon size={19} />
                  </div>

                  <span className="text-3xl font-extrabold text-gray-100">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-base font-bold text-[#111827]">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#6B7C93]">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
