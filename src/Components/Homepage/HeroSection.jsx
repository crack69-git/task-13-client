"use client";

import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiPackage,
  FiTrendingUp,
  FiUsers,
  FiGlobe,
  FiShoppingCart,
} from "react-icons/fi";

const suppliers = [
  {
    name: "Vertex Supply",
    match: "98% Match",
    letter: "A",
  },
  {
    name: "Global Source",
    match: "94% Match",
    letter: "G",
  },
  {
    name: "TechTrade Ltd.",
    match: "91% Match",
    letter: "T",
  },
];

const quotes = [
  {
    name: "Vertex Supply",
    price: "$18,500",
    tag: "Best price",
  },
  {
    name: "Global Source",
    price: "$19,200",
    tag: "Fast delivery",
  },
  {
    name: "TechTrade Ltd.",
    price: "$20,100",
    tag: "High rating",
  },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FBFE]">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      {/* Large top-right blue shape */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[180px]
          -top-[210px]
          h-[430px]
          w-[430px]
          rounded-full
          bg-[#DCEEFF]
          opacity-70
        "
      />

      {/* Large bottom-left blue shape */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[260px]
          bottom-[80px]
          h-[570px]
          w-[570px]
          rounded-full
          bg-[#DCEEFF]
          opacity-60
        "
      />

      {/* Cyan glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[18%]
          top-[18%]
          h-[280px]
          w-[280px]
          rounded-full
          bg-[#00AEEF]/[0.06]
          blur-3xl
        "
      />

      {/* Orange glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[18%]
          bottom-[10%]
          h-[260px]
          w-[260px]
          rounded-full
          bg-[#FF4F0A]/[0.05]
          blur-3xl
        "
      />

      {/* =====================================================
          DOT PATTERN - LEFT
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-20px]
          top-[70px]
          h-[180px]
          w-[180px]
          opacity-60
        "
        style={{
          backgroundImage: "radial-gradient(#B8D8F1 1.4px, transparent 1.4px)",
          backgroundSize: "13px 13px",
          maskImage: "linear-gradient(135deg, black, transparent 75%)",
          WebkitMaskImage: "linear-gradient(135deg, black, transparent 75%)",
        }}
      />

      {/* =====================================================
          DOT PATTERN - RIGHT
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-20px]
          top-[130px]
          h-[200px]
          w-[200px]
          opacity-45
        "
        style={{
          backgroundImage: "radial-gradient(#9BCBEF 1.3px, transparent 1.3px)",
          backgroundSize: "13px 13px",
          maskImage: "linear-gradient(225deg, black, transparent 75%)",
          WebkitMaskImage: "linear-gradient(225deg, black, transparent 75%)",
        }}
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1500px]
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* ===================================================
            HERO TEXT
        =================================================== */}

        <div
          className="
            mx-auto
            max-w-[850px]
            pt-14
            text-center
            sm:pt-20
            lg:pt-24
          "
        >
          {/* Badge */}
          <div
            className="
              mx-auto
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#DCE6F0]
              bg-white
              px-4
              py-2
              text-xs
              font-semibold
              text-[#39719E]
              shadow-[0_5px_20px_rgba(17,24,39,0.04)]
            "
          >
            <span className="h-2 w-2 rounded-full bg-[#00AEEF]" />
            B2B Sourcing Platform
          </div>

          {/* Heading */}

          <h1
            className="
              text-[42px]
              font-extrabold
              leading-[0.98]
              tracking-[-0.045em]
              text-[#102A4C]
              sm:text-[56px]
              lg:text-[76px]
              xl:text-[82px]
            "
          >
            Smarter sourcing.
            <br />
            <span className="relative inline-block text-[#1687D8]">
              Better business.
              {/* Underline */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  -bottom-2
                  left-[12%]
                  h-[5px]
                  w-[76%]
                  rotate-[-2deg]
                  rounded-full
                  bg-[#00B8E6]
                  sm:-bottom-3
                  sm:h-[6px]
                "
              />
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-7
              max-w-[650px]
              text-sm
              leading-6
              text-[#6D7F92]
              sm:text-base
              sm:leading-7
            "
          >
            Connect sourcing requirements with suppliers, manage quotations,
            compare options, and keep your B2B purchasing workflow organized
            from one place.
          </p>

          {/* CTA */}

          <div
            className="
              mt-8
              flex
              flex-col
              items-stretch
              justify-center
              gap-3
              sm:flex-row
              sm:items-center
            "
          >
            <Link
              href="/request"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#FF4F0A]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_20px_rgba(255,79,10,0.18)]
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#E84605]
              "
            >
              Create Sourcing Request
              <FiArrowRight size={16} />
            </Link>

            <Link
              href="#how-it-works"
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                border
                border-[#DCE2E8]
                bg-white
                px-6
                py-3.5
                text-sm
                font-semibold
                text-[#18283A]
                shadow-[0_5px_15px_rgba(17,24,39,0.04)]
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#FAFCFE]
              "
            >
              Explore Platform
            </Link>
          </div>

          {/* Trust points */}

          <div
            className="
              mt-7
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-7
              gap-y-3
            "
          >
            <div className="flex items-center gap-2 text-xs text-[#718196]">
              <FiCheckCircle size={15} className="text-[#00AEEF]" />
              Structured requests
            </div>

            <div className="hidden h-4 w-px bg-[#D9E1E8] sm:block" />

            <div className="flex items-center gap-2 text-xs text-[#718196]">
              <FiCheckCircle size={15} className="text-[#00AEEF]" />
              Supplier responses
            </div>

            <div className="hidden h-4 w-px bg-[#D9E1E8] sm:block" />

            <div className="flex items-center gap-2 text-xs text-[#718196]">
              <FiCheckCircle size={15} className="text-[#00AEEF]" />
              Quote comparison
            </div>
          </div>
        </div>

        {/* ===================================================
            FLOATING PRODUCT UI
        =================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-14
            h-[410px]
            max-w-[1250px]
            sm:mt-16
            lg:mt-20
          "
        >
          {/* =================================================
              DECORATIVE LEFT TEXT
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-[35px]
              hidden
              -rotate-[8deg]
              text-[#167AC3]
              lg:block
            "
          >
            <p
              className="
                text-[17px]
                font-semibold
                leading-6
              "
              style={{
                fontFamily: "cursive",
              }}
            >
              Your global
              <br />
              sourcing partner
            </p>

            <div className="mt-1 flex items-center">
              <span className="h-[2px] w-28 rotate-[-3deg] rounded-full bg-[#167AC3]" />
              <FiArrowRight size={20} className="-ml-1 rotate-[-15deg]" />
            </div>
          </div>

          {/* =================================================
              LEFT SOURCING REQUEST CARD
          ================================================= */}

          <div
            className="
              absolute
              left-0
              top-[80px]
              z-20
              hidden
              w-[290px]
              -rotate-[6deg]
              rounded-2xl
              border
              border-[#E2E8EF]
              bg-white
              p-4
              shadow-[0_20px_50px_rgba(24,55,85,0.10)]
              transition
              duration-500
              hover:-translate-y-2
              hover:rotate-[-3deg]
              lg:block
            "
          >
            {/* Header */}

            <div className="flex items-start justify-between">
              <div>
                <p className="text-[9px] font-bold tracking-[0.08em] text-[#98A6B5]">
                  NEW REQUEST
                </p>

                <p className="mt-1 text-sm font-bold text-[#17283D]">
                  Laptop Procurement
                </p>
              </div>

              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#EDF9FD]
                  text-[#00AEEF]
                "
              >
                <FiFileText size={16} />
              </div>
            </div>

            {/* Product */}

            <div
              className="
                mt-4
                rounded-xl
                border
                border-[#EDF1F5]
                bg-[#FAFCFD]
                px-3
                py-3
              "
            >
              <p className="text-[9px] text-[#9AA7B4]">PRODUCT</p>

              <p className="mt-1 text-xs font-semibold text-[#17283D]">
                Business Laptop
              </p>
            </div>

            {/* Quantity / Deadline */}

            <div className="mt-2 grid grid-cols-2 gap-2">
              <div
                className="
                  rounded-xl
                  border
                  border-[#EDF1F5]
                  bg-[#FAFCFD]
                  px-3
                  py-3
                "
              >
                <p className="text-[9px] text-[#9AA7B4]">QUANTITY</p>

                <p className="mt-1 text-xs font-semibold text-[#17283D]">
                  50 Units
                </p>
              </div>

              <div
                className="
                  rounded-xl
                  border
                  border-[#EDF1F5]
                  bg-[#FAFCFD]
                  px-3
                  py-3
                "
              >
                <p className="text-[9px] text-[#9AA7B4]">DEADLINE</p>

                <p className="mt-1 text-xs font-semibold text-[#17283D]">
                  30 Days
                </p>
              </div>
            </div>

            {/* Bottom */}

            <div className="mt-4 flex items-center justify-between">
              <span
                className="
                  rounded-md
                  bg-[#EEF7FF]
                  px-2
                  py-1
                  text-[9px]
                  font-semibold
                  text-[#2683C6]
                "
              >
                Draft
              </span>

              <span className="text-[9px] text-[#A0ACB8]">
                Updated just now
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT SUPPLIER CARD
          ================================================= */}

          <div
            className="
              absolute
              right-0
              top-[70px]
              z-20
              hidden
              w-[300px]
              rotate-[6deg]
              rounded-2xl
              border
              border-[#E2E8EF]
              bg-white
              p-4
              shadow-[0_20px_50px_rgba(24,55,85,0.10)]
              transition
              duration-500
              hover:-translate-y-2
              hover:rotate-[3deg]
              lg:block
            "
          >
            {/* Header */}

            <div className="flex items-start justify-between">
              <div>
                <p className="text-[9px] font-bold tracking-[0.08em] text-[#98A6B5]">
                  SUPPLIER MATCHES
                </p>

                <p className="mt-1 text-sm font-bold text-[#17283D]">
                  4 Suppliers Found
                </p>
              </div>

              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#102A4C]
                  text-white
                "
              >
                <FiUsers size={16} />
              </div>
            </div>

            {/* Suppliers */}

            <div className="mt-4 space-y-2">
              {suppliers.map((supplier) => (
                <div
                  key={supplier.name}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-[#EDF1F5]
                    bg-white
                    p-2.5
                  "
                >
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#F2F5F8]
                      text-[10px]
                      font-bold
                      text-[#17283D]
                    "
                  >
                    {supplier.letter}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11px] font-semibold text-[#17283D]">
                      {supplier.name}
                    </p>

                    <p className="mt-0.5 text-[9px] text-[#9AA7B4]">
                      Verified supplier
                    </p>
                  </div>

                  <span className="text-[9px] font-bold text-[#32A889]">
                    {supplier.match}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="
                mt-3
                rounded-lg
                bg-[#F0FBFE]
                px-3
                py-2
                text-[9px]
                font-medium
                text-[#577086]
              "
            >
              New supplier responses are available.
            </div>
          </div>

          {/* =================================================
              CENTER QUOTE COMPARISON
          ================================================= */}

          <div
            className="
              absolute
              bottom-[-15px]
              left-1/2
              z-30
              w-[calc(100%-20px)]
              max-w-[360px]
              -translate-x-1/2
              rounded-2xl
              border
              border-[#E0E7EE]
              bg-white
              p-4
              shadow-[0_25px_65px_rgba(24,55,85,0.14)]
              transition
              duration-500
              hover:-translate-y-2
            "
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b border-[#EDF1F5] pb-3">
              <div>
                <p className="text-[9px] font-bold tracking-[0.08em] text-[#98A6B5]">
                  QUOTE COMPARISON
                </p>

                <p className="mt-1 text-sm font-bold text-[#17283D]">
                  Business Laptop
                </p>
              </div>

              <FiTrendingUp size={18} className="text-[#1687D8]" />
            </div>

            {/* Quotes */}

            <div className="mt-3 space-y-2">
              {quotes.map((quote, index) => (
                <div
                  key={quote.name}
                  className={`
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    px-3
                    py-2.5
                    ${
                      index === 0
                        ? "border-[#00AEEF]/20 bg-[#F0FBFE]"
                        : "border-[#EDF1F5] bg-white"
                    }
                  `}
                >
                  <div>
                    <p className="text-[10px] font-semibold text-[#17283D]">
                      {quote.name}
                    </p>

                    <p className="mt-0.5 text-[9px] text-[#9AA7B4]">
                      {quote.tag}
                    </p>
                  </div>

                  <p className="text-xs font-bold text-[#17283D]">
                    {quote.price}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer */}

            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[9px] text-[#9AA7B4]">
                <FiClock size={11} />
                Updated 2 min ago
              </div>

              <span
                className="
                  rounded-md
                  bg-[#ECF9F3]
                  px-2
                  py-1
                  text-[9px]
                  font-semibold
                  text-[#2E9B7D]
                "
              >
                4 Quotes
              </span>
            </div>
          </div>

          {/* =================================================
              SMALL LEFT FLOATING CARD
          ================================================= */}

          <div
            className="
              absolute
              bottom-[35px]
              left-[19%]
              z-10
              hidden
              w-[175px]
              rotate-[4deg]
              rounded-xl
              border
              border-[#E2E8EF]
              bg-white
              p-3
              shadow-[0_15px_35px_rgba(24,55,85,0.08)]
              lg:block
            "
          >
            <div className="flex items-center gap-2">
              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#EDF9FD]
                  text-[#00AEEF]
                "
              >
                <FiPackage size={14} />
              </div>

              <div>
                <p className="text-[9px] text-[#98A6B5]">ACTIVE REQUESTS</p>

                <p className="text-sm font-bold text-[#17283D]">24</p>
              </div>
            </div>
          </div>

          {/* =================================================
              SMALL RIGHT FLOATING CARD
          ================================================= */}

          <div
            className="
              absolute
              bottom-[45px]
              right-[17%]
              z-10
              hidden
              w-[185px]
              -rotate-[4deg]
              rounded-xl
              border
              border-[#E2E8EF]
              bg-white
              p-3
              shadow-[0_15px_35px_rgba(24,55,85,0.08)]
              lg:block
            "
          >
            <div className="flex items-center gap-2">
              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#ECF9F3]
                  text-[#2E9B7D]
                "
              >
                <FiCheckCircle size={14} />
              </div>

              <div>
                <p className="text-[9px] text-[#98A6B5]">SUPPLIER RESPONSE</p>

                <p className="text-[10px] font-bold text-[#17283D]">
                  New quote received
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              DECORATIVE PRODUCT ICONS
          ================================================= */}

          <div
            className="
              absolute
              right-[20%]
              top-[-5px]
              hidden
              h-12
              w-12
              rotate-[8deg]
              items-center
              justify-center
              rounded-xl
              border
              border-[#DCE9F3]
              bg-white
              text-[#1687D8]
              shadow-[0_10px_25px_rgba(24,55,85,0.06)]
              lg:flex
            "
          >
            <FiPackage size={21} />
          </div>

          <div
            className="
              absolute
              right-[11%]
              top-[95px]
              hidden
              h-12
              w-12
              rotate-[8deg]
              items-center
              justify-center
              rounded-xl
              border
              border-[#DCE9F3]
              bg-white
              text-[#2EAD8B]
              shadow-[0_10px_25px_rgba(24,55,85,0.06)]
              lg:flex
            "
          >
            <FiUsers size={21} />
          </div>

          <div
            className="
              absolute
              right-[8%]
              top-[180px]
              hidden
              h-12
              w-12
              rotate-[8deg]
              items-center
              justify-center
              rounded-xl
              border
              border-[#DCE9F3]
              bg-white
              text-[#7B61D1]
              shadow-[0_10px_25px_rgba(24,55,85,0.06)]
              lg:flex
            "
          >
            <FiFileText size={20} />
          </div>

          {/* =================================================
              MOBILE PRODUCT SUMMARY
          ================================================= */}

          <div
            className="
              absolute
              bottom-[-35px]
              left-1/2
              z-30
              w-[calc(100%-10px)]
              -translate-x-1/2
              rounded-2xl
              border
              border-[#E0E7EE]
              bg-white
              p-4
              shadow-[0_20px_50px_rgba(24,55,85,0.12)]
              sm:max-w-[440px]
              lg:hidden
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] font-bold tracking-[0.08em] text-[#98A6B5]">
                  QUOTE COMPARISON
                </p>

                <p className="mt-1 text-sm font-bold text-[#17283D]">
                  Business Laptop
                </p>
              </div>

              <span
                className="
                  rounded-md
                  bg-[#ECF9F3]
                  px-2
                  py-1
                  text-[9px]
                  font-semibold
                  text-[#2E9B7D]
                "
              >
                4 Quotes
              </span>
            </div>

            <div className="mt-3 space-y-2">
              <div
                className="
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  bg-[#F0FBFE]
                  px-3
                  py-2.5
                "
              >
                <span className="text-xs font-semibold text-[#17283D]">
                  Vertex Supply
                </span>

                <span className="text-xs font-bold text-[#17283D]">
                  $18,500
                </span>
              </div>

              <div
                className="
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-[#EDF1F5]
                  px-3
                  py-2.5
                "
              >
                <span className="text-xs font-semibold text-[#17283D]">
                  Global Source
                </span>

                <span className="text-xs font-bold text-[#17283D]">
                  $19,200
                </span>
              </div>

              <div
                className="
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-[#EDF1F5]
                  px-3
                  py-2.5
                "
              >
                <span className="text-xs font-semibold text-[#17283D]">
                  TechTrade Ltd.
                </span>

                <span className="text-xs font-bold text-[#17283D]">
                  $20,100
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            MOBILE BOTTOM SPACE
        =================================================== */}

        <div className="h-[70px] sm:h-[80px] lg:hidden" />
      </div>
    </section>
  );
};

export default Hero;
