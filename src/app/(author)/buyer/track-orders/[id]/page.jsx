import StatusWindow from "@/Components/BuyerSection/StatusWindow";
import { getPostById } from "@/lib/actions/getData";
import { ST } from "next/dist/shared/lib/utils";

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
    <main className="min-h-screen min-w-0 overflow-x-hidden bg-[#f3f3ef] px-3 py-5 text-slate-800 sm:px-5 sm:py-8 md:px-8">
      <div className="mx-auto max-w-6xl rounded-[18px] border border-slate-200 bg-[#f9f9f7] shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
        <div className="border-b border-slate-200 px-4 py-5 sm:px-6 sm:py-6 md:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
              <span className="rounded bg-[#0f172a] px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-white">
                {post._id.slice(0, 8)}...
              </span>
              <span className="inline-flex items-center gap-1 rounded border border-slate-200 bg-white px-2 py-1">
                <span
                  className={`h-2 w-2 rounded-full ${post.status === "approved" ? "bg-emerald-500" : "bg-yellow-500"}`}
                />
                STAGE 4 • {post.status.toUpperCase()}
              </span>
              <span className="inline-flex items-center gap-1 rounded border border-emerald-200 bg-emerald-50 px-2 py-1 text-emerald-700">
                <FiCheck className="h-3.5 w-3.5" />
                Submitted {post?.createdAt?.slice(8, 10)}
              </span>
            </div>

            <div className="flex w-full flex-wrap gap-2 sm:w-auto sm:items-center sm:gap-3">
              <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:flex-none">
                <FiPrinter className="h-4 w-4" />
                Print Summary
              </button>
              <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#0f172a] px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-800 sm:flex-none">
                <FiShare2 className="h-4 w-4" />
                Share Tracker
              </button>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <h1 className="break-words text-2xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-3xl md:text-[2.1rem]">
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

        <div className="px-4 py-5 sm:px-6 sm:py-6 md:px-8">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
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

            <StatusWindow delivaryStatus={post.delivaryStatus} />
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
                <div className="rounded-lg border border-slate-200 bg-[#fafaf9] p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Required Volume
                  </p>
                  <p className="mt-2 text-base font-medium text-slate-800">
                    {post.targetQuantity} {post.unitOfMeasure}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-[#fafaf9] p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Quality Tier
                  </p>
                  <p className="mt-2 text-base font-medium text-slate-800">
                    {post.qualityTier || "—"}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-[#fafaf9] p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Price Target
                  </p>
                  <p className="mt-2 text-base font-medium text-slate-800">
                    {post.price ? `$${post.price} USD` : "—"}
                  </p>
                </div>

                <div className="rounded-lg border border-slate-200 bg-[#fafaf9] p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Target Delivery
                  </p>
                  <p className="mt-2 text-base font-medium text-slate-800">
                    {post.targetDate || "—"}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-[#fafaf9] p-3 md:col-span-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Delivery Address
                  </p>
                  <p className="mt-2 text-base font-medium text-slate-800">
                    {post.deliveryAddress || "—"}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-[#fafaf9] p-3 md:col-span-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Specifications
                  </p>
                  <p className="mt-2 text-base font-medium text-slate-800">
                    {post.specifications || "—"}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Dedicated Lead
                  </h3>
                  {/* <span className="rounded border border-sky-200 bg-sky-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-700">
                    Online now
                  </span> */}
                </div>

                <p className="text-sm text-slate-500 mb-10">
                  No dedicated lead assigned
                </p>

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

            {/* <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm col-span-2">
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
                      {index < activities.length - 1 && (
                      <span className="mt-2 h-8 w-px bg-slate-200" />
                    )}
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
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
