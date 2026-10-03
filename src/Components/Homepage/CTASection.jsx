import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const CTA = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="overflow-hidden rounded-[22px] bg-[#111827] px-7 py-12 sm:px-12 lg:px-16">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#00AEEF]">
                Get Started
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Ready to simplify your sourcing process?
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-400 sm:text-base">
                Create your first sourcing request and bring your B2B purchasing
                workflow into one place.
              </p>
            </div>

            <Link
              href="/request"
              className="flex shrink-0 items-center gap-2 rounded-lg bg-[#FF4F0A] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e84605]"
            >
              Create New Request
              <FiArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
