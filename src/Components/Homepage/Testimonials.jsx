"use client";

import Marquee from "react-fast-marquee";
import { FiStar, FiCheckCircle, FiArrowUpRight } from "react-icons/fi";

const testimonials = [
  {
    quote:
      "SourceX has made supplier sourcing much faster for our procurement team. We can submit a requirement and quickly start comparing relevant suppliers.",
    name: "Arif Rahman",
    role: "Procurement Manager",
    company: "Nexa Trading",
    initials: "AR",
  },
  {
    quote:
      "Instead of managing supplier conversations across multiple channels, everything is now organized around the request.",
    name: "Sarah Ahmed",
    role: "Operations Lead",
    company: "Vertex Manufacturing",
    initials: "SA",
  },
  {
    quote:
      "The quote comparison workflow gives our team a much clearer view before making purchasing decisions.",
    name: "Tanvir Hasan",
    role: "Head of Procurement",
    company: "BuildCore Ltd.",
    initials: "TH",
  },
  {
    quote:
      "We have been able to discover new business opportunities from companies actively looking for the products we supply.",
    name: "Nabil Hossain",
    role: "Sales Director",
    company: "Prime Industrial",
    initials: "NH",
  },
  {
    quote:
      "SourceX brings structure to a process that used to involve too many spreadsheets, messages, and follow-ups.",
    name: "Mariam Chowdhury",
    role: "Business Operations",
    company: "Orbit Commerce",
    initials: "MC",
  },
  {
    quote:
      "The platform gives us a simple way to manage sourcing requests and keep track of supplier responses.",
    name: "Fahim Karim",
    role: "Purchasing Manager",
    company: "Atlas Supply",
    initials: "FK",
  },
];

const TestimonialCard = ({ item }) => {
  return (
    <div className="group mx-3 w-[380px] shrink-0 rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(17,24,39,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(17,24,39,0.08)]">
      {/* Top */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <FiStar
              key={star}
              size={14}
              className="fill-[#FFB800] text-[#FFB800]"
            />
          ))}
        </div>

        <FiCheckCircle size={18} className="text-[#00AEEF]" />
      </div>

      {/* Quote */}
      <p className="min-h-[92px] text-[15px] leading-7 text-gray-600">
        “{item.quote}”
      </p>

      {/* Divider */}
      <div className="my-5 h-px bg-gray-100" />

      {/* User */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F8FD] text-xs font-bold text-[#008DBF]">
            {item.initials}
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#111827]">
              {item.name}
            </h4>

            <p className="mt-0.5 text-xs text-gray-500">{item.role}</p>

            <p className="text-xs font-medium text-[#00AEEF]">{item.company}</p>
          </div>
        </div>

        <FiArrowUpRight
          size={17}
          className="text-gray-300 transition-colors group-hover:text-[#00AEEF]"
        />
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F9FA] py-20">
      {/* Soft background decoration */}
      <div className="pointer-events-none absolute -left-24 top-20 h-56 w-56 rounded-full bg-[#00AEEF]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#FF4F0A]/10 blur-3xl" />

      {/* Section Header */}
      <div className="relative z-10 mx-auto mb-12 max-w-[1400px] px-5 text-center lg:px-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00AEEF]/20 bg-[#E8F8FD] px-3.5 py-1.5 text-xs font-semibold text-[#008DBF]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00AEEF]" />
          CUSTOMER FEEDBACK
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
          Trusted by teams building better
          <span className="text-[#00AEEF]"> procurement workflows.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
          See how businesses use SourceX to simplify sourcing, connect with
          suppliers, and make better purchasing decisions.
        </p>
      </div>

      {/* Single-line Infinite Marquee */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#F8F9FA] to-transparent" />

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#F8F9FA] to-transparent" />

        <Marquee speed={45} direction="left" gradient={false} pauseOnHover play>
          {testimonials.map((item, index) => (
            <TestimonialCard key={`${item.name}-${index}`} item={item} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
