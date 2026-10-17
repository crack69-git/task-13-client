import InspectButton from "@/Components/AdminSection/InspectButton";
import { getPosts } from "@/lib/actions/getData";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
import {
  FiFileText,
  FiClock,
  FiCheckCircle,
  FiPackage,
  FiTrendingUp,
} from "react-icons/fi";

export const metadata = {
  title: "SourceX - Requested Products",
  description: "Manage buyer product requests on SourceX.",
};

const statusStyles = {
  PENDING: "border-amber-300 bg-amber-50 text-amber-600",
  APPROVED: "border-green-300 bg-green-50 text-green-600",
  COMPLETED: "border-purple-300 bg-purple-50 text-purple-600",
};

function StatCard({ title, value = "—", subtitle, icon: Icon, iconStyle }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            {value}
          </p>
        </div>

        <div
          className={`flex size-11 items-center justify-center rounded-xl ${iconStyle}`}
        >
          <Icon className="size-5" />
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-400">{subtitle}</p>
    </div>
  );
}

function RequestCharts() {
  // Connect API-derived counts here when your backend is ready.
  const chartData = [
    { label: "Pending", count: null, color: "#F59E0B" },
    { label: "Approved", count: null, color: "#22C55E" },
    { label: "Completed", count: null, color: "#A855F7" },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Status distribution */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-base font-bold text-slate-900">
          Request Status Overview
        </h2>
        <p className="mt-1 text-xs text-slate-500">
          Distribution of buyer requests by status
        </p>

        <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:justify-around">
          <div className="relative size-44 shrink-0">
            <svg viewBox="0 0 120 120" className="size-full">
              <circle
                cx="60"
                cy="60"
                r="43"
                fill="none"
                stroke="#F1F5F9"
                strokeWidth="13"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-extrabold text-slate-900">—</span>
              <span className="mt-1 text-xs text-slate-500">
                Total requests
              </span>
            </div>
          </div>

          <div className="w-full max-w-xs space-y-5">
            {chartData.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs font-medium text-slate-600">
                    <span
                      className="size-2.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    {item.label}
                  </span>
                  <span className="text-sm font-bold text-slate-700">—</span>
                </div>

                <div className="h-2 rounded-full bg-slate-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status comparison */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-base font-bold text-slate-900">
          Requests by Status
        </h2>
        <p className="mt-1 text-xs text-slate-500">
          Request workload by processing stage
        </p>

        <div className="mt-7 space-y-6">
          {chartData.map((item) => (
            <div key={item.label}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-600">
                  {item.label}
                </span>
                <span className="text-sm font-bold text-slate-700">—</span>
              </div>

              <div className="h-9 rounded-lg bg-slate-50" />
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-xs text-slate-500">
          <FiTrendingUp className="size-4 shrink-0 text-[#007EA8]" />
          Request statistics will appear when backend data is connected.
        </div>
      </section>
    </div>
  );
}

export default async function RequestedProductsPage() {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const requests = await getPosts(token);
  console.log("Fetched requests:", requests);
  const stats = {
    total: null,
    pending: null,
    approved: null,
    completed: null,
  };

  return (
    <main className="min-h-screen bg-[#F5F7FA] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        {/* Page heading */}
        <header className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#007EA8]">
              <FiPackage className="size-4" />
              SourceX Marketplace
            </div>

            <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-[#102A4C] sm:text-3xl">
              Requested Products
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Review buyer requirements and manage product requests from one
              place.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <FiFileText className="size-5 text-[#007EA8]" />
            <div>
              <p className="text-xs text-slate-500">Request register</p>
              <p className="text-sm font-bold text-slate-800">
                Buyer requirements
              </p>
            </div>
          </div>
        </header>

        {/* Stat cards */}
        <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Requests"
            value={stats.total ?? "—"}
            subtitle="All buyer requirements"
            icon={FiFileText}
            iconStyle="bg-sky-50 text-sky-600"
          />

          <StatCard
            title="Pending Requests"
            value={stats.pending ?? "—"}
            subtitle="Awaiting review"
            icon={FiClock}
            iconStyle="bg-amber-50 text-amber-600"
          />

          <StatCard
            title="Approved Requests"
            value={stats.approved ?? "—"}
            subtitle="Approved for processing"
            icon={FiCheckCircle}
            iconStyle="bg-emerald-50 text-emerald-600"
          />

          <StatCard
            title="Completed Requests"
            value={stats.completed ?? "—"}
            subtitle="Fulfillment completed"
            icon={FiPackage}
            iconStyle="bg-purple-50 text-purple-600"
          />
        </section>

        {/* Charts */}
        <section className="mb-7">
          <RequestCharts />
        </section>

        {/* Requested products table */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5 sm:p-6">
            <h2 className="text-lg font-bold text-[#102A4C]">
              All Product Requests
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Buyer requirements and their current processing status
            </p>
          </div>

          <div className="overflow-x-auto px-4 pb-5 pt-3 sm:px-5">
            <table className="w-full min-w-[850px] border-collapse text-left">
              <thead>
                <tr className="bg-[#F0F2F5] text-[11px] font-semibold text-slate-500">
                  {[
                    "Request ID",
                    "Buyer Name",
                    "Requirement",
                    "Quantity",
                    "Budget",
                    "Status",
                    "Action",
                  ].map((heading, index) => (
                    <th
                      key={heading}
                      className={`px-4 py-3 ${
                        index === 0 ? "rounded-l-xl" : ""
                      } ${index === 6 ? "rounded-r-xl" : ""}`}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {requests.length > 0 ? (
                  requests.map((request) => (
                    <tr
                      key={request._id}
                      className="border-b border-slate-200 text-[13px]"
                    >
                      <td className="px-4 py-4 font-medium text-slate-700">
                        {String(request._id).slice(0, 8)}...
                      </td>

                      <td className="px-4 py-4 text-slate-700">
                        {String(request.userId).slice(0, 8) || "N/A"}...
                      </td>

                      <td className="px-4 py-4 font-medium text-slate-800">
                        {request.requirementName || "N/A"}
                      </td>

                      <td className="px-4 py-4 whitespace-nowrap text-slate-600">
                        {request.targetQuantity ?? "N/A"}{" "}
                        {request.unitOfMeasure || ""}
                      </td>

                      <td className="px-4 py-4 whitespace-nowrap text-slate-700">
                        {request.price != null
                          ? `$${Number(request.price).toLocaleString()}`
                          : "N/A"}
                      </td>

                      <td className="px-4 py-4">
                        {(() => {
                          const status = String(
                            request.status ||
                              request.delivaryStatus ||
                              "PENDING",
                          ).toUpperCase();

                          return (
                            <span
                              className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold ${
                                statusStyles[status] ||
                                "border-slate-200 bg-slate-50 text-slate-600"
                              }`}
                            >
                              {status}
                            </span>
                          );
                        })()}
                      </td>

                      <td className="px-4 py-4">
                        {/* Add your HeroUI Approve / Inspect actions here. */}
                        <span className="text-xs text-slate-400">
                          <InspectButton
                            status={request.status}
                            id={request._id}
                            token={token}
                          />
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-4 py-16 text-center">
                      <div className="flex flex-col items-center">
                        <FiPackage className="size-9 text-slate-300" />
                        <p className="mt-3 text-sm font-semibold text-slate-700">
                          No product requests to display
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          Connect your backend API to display buyer requests.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="border-t border-slate-100 px-5 py-4 text-xs text-slate-400">
            SourceX · Buyer Request Management
          </div>
        </section>
      </div>
    </main>
  );
}
