const BusinessStrip = () => {
  const categories = [
    "Procurement",
    "Manufacturing",
    "Wholesale",
    "Construction",
    "Retail",
    "Corporate Purchasing",
  ];

  return (
    <section className="border-y border-gray-200 bg-white">
      <div className="mx-auto max-w-[1400px] px-5 py-7 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
            Built for modern B2B teams
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((item) => (
              <span
                key={item}
                className="rounded-md border border-gray-200 bg-[#FAFAFA] px-3 py-2 text-xs font-medium text-[#53657A]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessStrip;
