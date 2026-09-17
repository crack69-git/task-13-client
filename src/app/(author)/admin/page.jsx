"use client";

import { useMemo, useState } from "react";
import {
  FiAward,
  FiCheckCircle,
  FiClipboard,
  FiRefreshCw,
  FiSearch,
} from "react-icons/fi";

const requests = [
  {
    id: "#SRC-89231",
    buyer: "BioSpice Global",
    location: "Hamburg, Germany",
    requirement: "Organic Turmeric Powder",
    quantity: "25,000 KG",
    budget: "$52,500 USD",
    status: "Verified",
  },
  {
    id: "#SRC-89230",
    buyer: "Apex Agro Industries",
    location: "Dubai, UAE",
    requirement: "Raw Cashew Nuts W240",
    quantity: "50 Metric Tons",
    budget: "$115,000 USD",
    status: "Researching",
  },
  {
    id: "#SRC-89228",
    buyer: "Delta ChemTech",
    location: "Chicago, USA",
    requirement: "Food Grade Citric Acid",
    quantity: "12,000 Liters",
    budget: "$28,400 USD",
    status: "Researching",
  },
  {
    id: "#SRC-89225",
    buyer: "Nordic Foods Ltd",
    location: "Stockholm, Sweden",
    requirement: "Refined Palm Stearin",
    quantity: "100 MT",
    budget: "$98,000 USD",
    status: "New",
  },
  {
    id: "#SRC-89221",
    buyer: "Vanguard Pharma Corp",
    location: "Singapore",
    requirement: "Pharmaceutical Grade Dextrose",
    quantity: "40 Metric Tons",
    budget: "$64,800 USD",
    status: "Fulfillment",
  },
  {
    id: "#SRC-89219",
    buyer: "Solventis Chemical BV",
    location: "Rotterdam, Netherlands",
    requirement: "Anhydrous Ethanol 99.9%",
    quantity: "80,000 Liters",
    budget: "$148,000 USD",
    status: "Completed",
  },
];

const tabs = [
  "All",
  "New",
  "Researching",
  "Verified",
  "Fulfillment",
  "Completed",
];

const statusStyles = {
  New: "bg-blue-50 text-blue-700 before:bg-blue-500",
  Researching: "bg-amber-50 text-amber-700 before:bg-amber-500",
  Verified: "bg-emerald-50 text-emerald-700 before:bg-emerald-500",
  Fulfillment: "bg-orange-50 text-orange-700 before:bg-orange-500",
  Completed: "bg-emerald-50 text-emerald-700 before:bg-emerald-500",
};

const stats = [
  {
    label: "Total Requests",
    value: "142",
    icon: FiClipboard,
    tone: "bg-slate-100 text-slate-900",
  },
  {
    label: "In Progress",
    value: "41",
    icon: FiRefreshCw,
    tone: "bg-amber-50 text-amber-700",
  },
  {
    label: "Verified",
    value: "64",
    icon: FiAward,
    tone: "bg-teal-50 text-teal-700",
  },
  {
    label: "Completed",
    value: "51",
    icon: FiCheckCircle,
    tone: "bg-emerald-50 text-emerald-700",
  },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  const filteredRequests = useMemo(() => {
    const query = search.toLowerCase().trim();
    return requests.filter((request) => {
      const matchesTab = activeTab === "All" || request.status === activeTab;
      const matchesSearch =
        !query ||
        Object.values(request).some((value) =>
          value.toLowerCase().includes(query),
        );
      return matchesTab && matchesSearch;
    });
  }, [activeTab, search]);

  return (
    <section className="min-h-screen bg-[#f7f8f9] px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ label, value, icon: Icon, tone }) => (
            <div
              key={label}
              className="flex min-h-[76px] items-center justify-between rounded-md border border-slate-200 bg-white px-4 py-3 shadow-[0_1px_2px_rgba(15,23,42,0.02)]"
            >
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-slate-500">
                  {label}
                </p>
                <p className="mt-1 text-[27px] font-semibold leading-none tracking-[-0.04em]">
                  {value}
                </p>
              </div>
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-sm ${tone}`}
              >
                <Icon className="h-[18px] w-[18px]" />
              </span>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
          <div className="flex flex-col gap-3 border-b border-slate-200 px-3 py-3 sm:flex-row sm:items-center">
            <label className="relative block min-w-0 flex-1 sm:max-w-[365px]">
              <span className="sr-only">Search requests</span>
              <FiSearch className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by ID or Buyer..."
                className="h-8 w-full rounded-sm border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs text-slate-900 outline-none placeholder:text-slate-500 focus:border-slate-400 focus:bg-white"
              />
            </label>
            <nav
              aria-label="Request status"
              className="flex min-w-0 gap-1 overflow-x-auto pb-0.5"
            >
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap rounded-sm px-3 py-2 text-[11px] font-medium transition ${activeTab === tab ? "bg-slate-950 text-white" : "text-slate-700 hover:bg-slate-100"}`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] border-collapse text-left">
              <thead className="bg-slate-100/80 text-[9px] font-semibold uppercase tracking-[0.08em] text-slate-600">
                <tr>
                  <th className="px-3 py-2.5">Request ID</th>
                  <th className="px-3 py-2.5">Buyer / Organization</th>
                  <th className="px-3 py-2.5">Item Requirement</th>
                  <th className="px-3 py-2.5">Quantity</th>
                  <th className="px-3 py-2.5">Budget</th>
                  <th className="px-3 py-2.5">Status</th>
                  <th className="px-3 py-2.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredRequests.map((request) => (
                  <tr
                    key={request.id}
                    className="text-[11px] text-slate-900 transition hover:bg-slate-50"
                  >
                    <td className="whitespace-nowrap px-3 py-3 font-semibold">
                      {request.id}
                    </td>
                    <td className="px-3 py-2.5">
                      <p className="font-medium leading-tight">
                        {request.buyer}
                      </p>
                      <p className="text-[10px] leading-tight text-slate-500">
                        {request.location}
                      </p>
                    </td>
                    <td className="whitespace-nowrap px-3 py-2.5">
                      {request.requirement}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2.5 flex justify-end ">
                      {request.quantity}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2.5">
                      {""}
                      {request.budget}
                    </td>
                    <td className="px-3 py-2.5">
                      <span
                        className={`relative inline-flex items-center gap-1 rounded-full px-2 py-1 pl-3 text-[10px] font-medium before:absolute before:left-1 before:h-1.5 before:w-1.5 before:rounded-full ${statusStyles[request.status]}`}
                      >
                        {request.status}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-right">
                      <button
                        type="button"
                        className="rounded-sm border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-medium text-slate-700 hover:bg-slate-100"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-3 bg-slate-100/80 px-3 py-3 text-[10px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Showing {filteredRequests.length ? 1 : 0} to{" "}
              {filteredRequests.length} of 142 requests
            </p>
            <div className="flex items-center gap-1">
              <button
                type="button"
                disabled
                className="rounded-sm bg-white px-2.5 py-1.5 text-slate-400"
              >
                Previous
              </button>
              <button
                type="button"
                className="rounded-sm bg-slate-950 px-2.5 py-1.5 text-white"
              >
                1
              </button>
              <button
                type="button"
                className="rounded-sm bg-white px-2.5 py-1.5 text-slate-700 hover:bg-slate-200"
              >
                2
              </button>
              <button
                type="button"
                className="rounded-sm bg-white px-2.5 py-1.5 text-slate-700 hover:bg-slate-200"
              >
                3
              </button>
              <span className="px-1 text-slate-400">...</span>
              <button
                type="button"
                className="rounded-sm bg-white px-2.5 py-1.5 text-slate-700 hover:bg-slate-200"
              >
                15
              </button>
              <button
                type="button"
                className="rounded-sm bg-white px-2.5 py-1.5 text-slate-700 hover:bg-slate-200"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
