import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiFileText,
} from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="bg-[#F8F9FA]">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        {/* Left */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-[#53657A] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#00AEEF]" />
            B2B Sourcing Platform
          </div>

          <h1 className="max-w-[650px] text-4xl font-extrabold leading-[1.1] tracking-tight text-[#111827] sm:text-5xl lg:text-[58px]">
            Source smarter.
            <br />
            <span className="text-[#00AEEF]">Buy better.</span>
          </h1>

          <p className="mt-6 max-w-[570px] text-base leading-7 text-[#66768A] sm:text-lg">
            Submit your sourcing requirements, connect with qualified suppliers,
            compare quotations, and manage your B2B purchasing workflow from one
            place.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/request"
              className="flex items-center gap-2 rounded-lg bg-[#FF4F0A] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e84605]"
            >
              Create Sourcing Request
              <FiArrowRight size={16} />
            </Link>

            <Link
              href="#how-it-works"
              className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-[#111827] transition hover:bg-gray-50"
            >
              See How It Works
            </Link>
          </div>

          {/* Small benefits */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            <div className="flex items-center gap-2 text-xs font-medium text-[#607086]">
              <FiCheckCircle className="text-[#00AEEF]" />
              Verified suppliers
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-[#607086]">
              <FiCheckCircle className="text-[#00AEEF]" />
              Quote comparison
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-[#607086]">
              <FiCheckCircle className="text-[#00AEEF]" />
              Centralized workflow
            </div>
          </div>
        </div>

        {/* Right dashboard preview */}
        <div className="relative">
          <div className="rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_12px_40px_rgba(17,24,39,0.08)]">
            {/* Browser-like top */}
            <div className="mb-5 flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <p className="text-xs font-medium text-gray-400">
                  SOURCING REQUEST
                </p>

                <h3 className="mt-1 text-base font-bold text-[#111827]">
                  Office Equipment
                </h3>
              </div>

              <span className="rounded-md bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-600">
                Active
              </span>
            </div>

            {/* Requirement */}
            <div className="rounded-xl border border-gray-200 bg-[#FAFAFA] p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] font-medium text-gray-400">
                    REQUIREMENT
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#111827]">
                    Business Laptops
                  </p>
                </div>

                <FiFileText className="text-[#00AEEF]" />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-gray-200 bg-white p-3">
                  <p className="text-[10px] text-gray-400">Quantity</p>
                  <p className="mt-1 text-sm font-bold text-gray-800">
                    50 Units
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-3">
                  <p className="text-[10px] text-gray-400">Delivery</p>
                  <p className="mt-1 text-sm font-bold text-gray-800">
                    30 Days
                  </p>
                </div>
              </div>
            </div>

            {/* Supplier quotes */}
            <div className="mt-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-bold text-[#111827]">
                  Supplier Quotes
                </p>

                <span className="text-[10px] text-[#6B7C93]">4 received</span>
              </div>

              {[
                ["Supplier A", "$18,500"],
                ["Supplier B", "$19,200"],
                ["Supplier C", "$20,100"],
              ].map(([name, price], index) => (
                <div
                  key={name}
                  className="mb-2 flex items-center justify-between rounded-lg border border-gray-100 bg-white px-3 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111827] text-xs font-bold text-white">
                      {name.slice(-1)}
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-800">
                        {name}
                      </p>

                      <p className="text-[10px] text-gray-400">
                        Verified supplier
                      </p>
                    </div>
                  </div>

                  <p className="text-sm font-bold text-[#111827]">{price}</p>
                </div>
              ))}
            </div>

            {/* Bottom status */}
            <div className="mt-4 flex items-center gap-2 rounded-lg bg-[#F2FBFE] px-3 py-2.5">
              <FiClock className="text-[#00AEEF]" size={14} />

              <p className="text-[11px] font-medium text-[#53657A]">
                Waiting for supplier responses
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
