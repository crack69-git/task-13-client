import { getPostById } from "@/lib/actions/getData";
import React from "react";
import {
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiMail,
  FiPrinter,
  FiShield,
  FiShare2,
  FiUploadCloud,
} from "react-icons/fi";

const procurementSteps = [
  { step: "STEP 01", title: "Inquiry", status: "Completed" },
  { step: "STEP 02", title: "Research", status: "Completed" },
  { step: "STEP 03", title: "Source Found", status: "Locked Quote" },
  { step: "STEP 04", title: "Verified", status: "Active Stage" },
  { step: "STEP 05", title: "Fulfilment", status: "Upcoming" },
  { step: "STEP 06", title: "Completed", status: "Pending Delivery" },
];

const specs = [
  { label: "Required Volume", value: "25,000 KG" },
  { label: "Lot spec 500 bags × 50kg", value: "" },
  { label: "Verified Quality Standard", value: "Curcumin 3.5%" },
  { label: "Packaging Specification", value: "Multi-Wall Kraft + PE" },
  { label: "Unit & Total Target Cost", value: "$2.107 KG - $52,500" },
  { label: "Origin", value: "India" },
  { label: "Destination", value: "Chittagong Port" },
];

const activities = [
  {
    text: "Batch file analysis completed and COA approved",
    date: "Oct 22, 2024",
  },
  {
    text: "Supplier shortlisted and commercial rate locked",
    date: "Oct 19, 2024",
  },
  {
    text: "Dedicated sourcing specialist assigned",
    date: "Oct 16, 2024",
  },
  {
    text: "Order intake submitted by procurement team",
    date: "Oct 16, 2024",
  },
];

const page = async ({ params }) => {
  const { id } = await params;
  console.log("Order ID:", id);
  const post = await getPostById(id);

  return (
    <main className="min-h-screen bg-[#f3f3ef] px-4 py-8 text-slate-800 md:px-8">
      <div className="mx-auto max-w-6xl rounded-[18px] border border-slate-200 bg-[#f9f9f7] shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
        <div className="border-b border-slate-200 px-6 py-6 md:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
              <span className="rounded bg-[#0f172a] px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-white">
                {post._id.slice(0, 8)}...
              </span>
              <span className="inline-flex items-center gap-1 rounded border border-slate-200 bg-white px-2 py-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                STAGE 4 • {post.status.toUpperCase()}
              </span>
              <span className="inline-flex items-center gap-1 rounded border border-emerald-200 bg-emerald-50 px-2 py-1 text-emerald-700">
                <FiCheck className="h-3.5 w-3.5" />
                Submitted {post?.createdAt?.slice(8, 10)}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                <FiPrinter className="h-4 w-4" />
                Print Summary
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-[#0f172a] px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
                <FiShare2 className="h-4 w-4" />
                Share Tracker
              </button>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <h1 className="text-3xl font-semibold tracking-[-0.04em] text-slate-900 md:text-[2.1rem]">
              {post.requirementName}
            </h1>
            <p className="text-base text-slate-500">{post.specifications}</p>
          </div>

          <div className="mt-6 grid gap-3 border border-slate-200 bg-white/60 p-3 text-slate-700 md:grid-cols-4 md:gap-4 md:p-4">
            <div className="rounded-md border border-slate-200 bg-[#fbfbfa] px-3 py-3">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Contract Volume
              </p>
              <p className="text-2xl font-semibold tracking-[-0.04em]">
                {post.targetQuantity}{" "}
                {post.unitOfMeasure === "MT" ? "Metric Tons" : ""}
              </p>
            </div>
            <div className="rounded-md border border-slate-200 bg-[#fbfbfa] px-3 py-3">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Agreed Budget
              </p>
              <p className="text-2xl font-semibold tracking-[-0.04em]">
                ${post.price} USD
              </p>
            </div>
            <div className="rounded-md border border-slate-200 bg-[#fbfbfa] px-3 py-3">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Destination
              </p>
              <p className="text-2xl font-semibold tracking-[-0.04em]">
                {post.deliveryAddress}
              </p>
            </div>
            <div className="rounded-md border border-slate-200 bg-[#fbfbfa] px-3 py-3">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Target Delivery
              </p>
              <p className="text-2xl font-semibold tracking-[-0.04em]">
                {post.targetDate}
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 py-6 md:px-8">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Procurement Lifecycle Progress
                </h2>
                <p className="text-sm text-slate-500">
                  Track stage milestones from sourcing inquiry to final
                  clearance.
                </p>
              </div>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                Phase 4 of 6 active
              </span>
            </div>

            <div className="relative mt-6">
              <div className="absolute left-0 right-0 top-[18px] h-px bg-slate-200" />

              <div className="grid gap-4 md:grid-cols-6">
                {procurementSteps.map((item, index) => {
                  const isActive = index === 3;
                  const isDone = index < 3;
                  const isFuture = index > 3;

                  return (
                    <div
                      key={item.step}
                      className="relative flex flex-col items-center text-center"
                    >
                      <div className="flex h-10 w-full items-center justify-center">
                        <div
                          className={`relative z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                            isActive
                              ? "border-blue-500 bg-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.12)]"
                              : isDone
                                ? "border-slate-900 bg-slate-900"
                                : "border-slate-300 bg-slate-200"
                          }`}
                        >
                          {isActive && (
                            <div className="h-1.5 w-1.5 rounded-full bg-white" />
                          )}
                          {isDone && !isActive && (
                            <FiCheck className="h-2.5 w-2.5 text-white" />
                          )}
                        </div>
                      </div>

                      <div
                        className={`mt-2 w-full rounded-lg border px-2 py-2 text-left ${
                          isActive
                            ? "border-blue-200 bg-blue-50"
                            : isDone
                              ? "border-slate-200 bg-slate-100"
                              : "border-slate-200 bg-white"
                        }`}
                      >
                        <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                          {item.step}
                        </div>
                        <div className="text-sm font-medium text-slate-800">
                          {item.title}
                        </div>
                        <div className="mt-1 text-[11px] text-slate-500">
                          {item.status}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_0.9fr]">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-900">
                  Key Sourcing Specifications
                </h3>
                <span className="rounded border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Contract verified
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {specs.map((item, index) => (
                  <div
                    key={`${item.label}-${index}`}
                    className={`rounded-lg border border-slate-200 bg-[#fafaf9] p-3 ${
                      index === 0 || index === 2 ? "md:col-span-1" : ""
                    }`}
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-base font-medium text-slate-800">
                      {item.value || "—"}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Dedicated Lead
                  </h3>
                  <span className="rounded border border-sky-200 bg-sky-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-700">
                    Online now
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dfeaf5] text-sm font-semibold text-sky-700">
                    EV
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-slate-900">
                      Elena Vance
                    </p>
                    <p className="text-sm text-slate-500">
                      Sourcing Lead • Agro Commodities
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0f172a] px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                    <FiMail className="h-4 w-4" />
                    Message Lead
                  </button>
                  <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                    <FiUploadCloud className="h-4 w-4" />
                    Download Spec Sheet & COA
                  </button>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Source X Protection
                  </h3>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                    <FiShield className="h-3 w-3" />
                    Secure
                  </span>
                </div>

                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <FiCheckCircle className="h-3.5 w-3.5" />
                    </span>
                    <span>100% independent accredited lab verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <FiCheckCircle className="h-3.5 w-3.5" />
                    </span>
                    <span>
                      Escrow payment release on port of entry dispatch
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <FiCheckCircle className="h-3.5 w-3.5" />
                    </span>
                    <span>Full cargo transit marine insurance coverage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-slate-900">
                Milestone & Audit Trail
              </h3>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                <FiClock className="h-3.5 w-3.5" />
                Last updated today
              </span>
            </div>

            <div className="space-y-4">
              {activities.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 border-t border-slate-200 pt-4 first:border-t-0 first:pt-0"
                >
                  <div className="flex flex-col items-center">
                    <span className="mt-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-slate-900" />
                    {/* {index < activities.length - 1 && (
                      <span className="mt-2 h-8 w-px bg-slate-200" />
                    )} */}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                      <p className="text-sm text-slate-700">{item.text}</p>
                      <span className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
