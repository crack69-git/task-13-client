import {
  FiUserCheck,
  FiMessageSquare,
  FiPackage,
  FiArrowRight,
} from "react-icons/fi";

const SupplierSection = () => {
  return (
    <section id="suppliers" className="bg-[#F8F9FA] py-20">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#00AEEF]">
              For Suppliers
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
              Connect with businesses looking for what you provide.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#6B7C93]">
              SourceX can provide a structured channel for suppliers to respond
              to business sourcing requirements and manage relevant quotation
              information.
            </p>

            <button className="mt-7 flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-[#111827] transition hover:bg-gray-50">
              Become a Supplier
              <FiArrowRight size={15} />
            </button>
          </div>

          {/* Right card */}
          <div className="rounded-[20px] border border-gray-200 bg-white p-6 shadow-sm">
            <div className="border-b border-gray-100 pb-5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Supplier Workspace
              </p>

              <h3 className="mt-1 text-lg font-bold text-[#111827]">
                Incoming Requirements
              </h3>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-4 rounded-xl border border-gray-100 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F0FAFD] text-[#00AEEF]">
                  <FiPackage />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#111827]">
                    Product Requirement
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Quantity and specifications available
                  </p>
                </div>

                <span className="rounded-md bg-green-50 px-2 py-1 text-[10px] font-semibold text-green-600">
                  Open
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-gray-100 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F4F6F8] text-[#111827]">
                  <FiMessageSquare />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#111827]">
                    Quote Response
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Submit pricing and delivery information
                  </p>
                </div>

                <span className="rounded-md bg-blue-50 px-2 py-1 text-[10px] font-semibold text-blue-600">
                  Ready
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-gray-100 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F0FAFD] text-[#00AEEF]">
                  <FiUserCheck />
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#111827]">
                    Supplier Profile
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Keep business information organized
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplierSection;
