"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { BiTask } from "react-icons/bi";
import { MdPendingActions, MdVerified, MdCheckCircle } from "react-icons/md";

const COLORS = ["#F59E0B", "#10B981", "#3B82F6", "#94A3B8"];

const statusConfig = [
  {
    key: "pending",
    label: "Pending",
    color: "#F59E0B",
    icon: <MdPendingActions size={18} />,
  },
  {
    key: "approved",
    label: "Approved",
    color: "#10B981",
    icon: <MdVerified size={18} />,
  },
  {
    key: "completed",
    label: "Completed",
    color: "#3B82F6",
    icon: <MdCheckCircle size={18} />,
  },
  {
    key: "other",
    label: "Other",
    color: "#94A3B8",
    icon: <BiTask size={18} />,
  },
];

export default function DashboardCharts({
  monthlyData,
  statusData,
  totalRequests = 0,
}) {
  // Safely handle undefined or invalid props.
  const safeMonthlyData = Array.isArray(monthlyData) ? monthlyData : [];

  const safeStatusData = Array.isArray(statusData) ? statusData : [];

  const safeTotalRequests = Number(totalRequests) || 0;

  const hasMonthlyData = safeMonthlyData.some(
    (item) => Number(item?.requests) > 0,
  );

  const hasStatusData = safeStatusData.some((item) => Number(item?.value) > 0);

  return (
    <div className="mb-7 grid grid-cols-1 gap-5 xl:grid-cols-3">
      {/* MONTHLY REQUEST TREND */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 xl:col-span-2">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-slate-800">
              Request Overview
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Monthly sourcing request activity
            </p>
          </div>

          <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
            Last 6 months
          </span>
        </div>

        <div className="h-[280px] w-full">
          {hasMonthlyData ? (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={safeMonthlyData}
                margin={{
                  top: 10,
                  right: 8,
                  left: -20,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient
                    id="requestGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#00AEEF" stopOpacity={0.25} />

                    <stop offset="95%" stopColor="#00AEEF" stopOpacity={0.01} />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  stroke="#E9EFF5"
                  strokeDasharray="4 4"
                  vertical={false}
                />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "#94A3B8",
                    fontSize: 12,
                  }}
                  dy={10}
                />

                <YAxis
                  allowDecimals={false}
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "#94A3B8",
                    fontSize: 12,
                  }}
                />

                <Tooltip
                  cursor={{
                    stroke: "#CBD5E1",
                    strokeDasharray: "4 4",
                  }}
                  contentStyle={{
                    border: "1px solid #E2E8F0",
                    borderRadius: "12px",
                    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
                    fontSize: "13px",
                  }}
                  formatter={(value) => [`${value} requests`, "Requests"]}
                />

                <Area
                  type="monotone"
                  dataKey="requests"
                  name="Requests"
                  stroke="#00AEEF"
                  strokeWidth={3}
                  fill="url(#requestGradient)"
                  activeDot={{
                    r: 6,
                    stroke: "#FFFFFF",
                    strokeWidth: 3,
                  }}
                  dot={{
                    r: 3,
                    fill: "#00AEEF",
                    strokeWidth: 0,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-full flex-col items-center justify-center rounded-xl bg-slate-50 text-center">
              <BiTask className="mb-3 text-3xl text-slate-300" />

              <p className="text-sm font-semibold text-slate-600">
                No request activity yet
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Requests with valid creation dates will appear here.
              </p>
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
          <span className="h-2.5 w-2.5 rounded-full bg-[#00AEEF]" />
          Total requests created per month
        </div>
      </section>

      {/* STATUS BREAKDOWN */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-3">
          <h2 className="text-base font-bold text-slate-800">Request Status</h2>

          <p className="mt-1 text-sm text-slate-500">
            Current request distribution
          </p>
        </div>

        <div className="relative h-[210px]">
          {hasStatusData ? (
            <>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={safeStatusData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={58}
                    outerRadius={82}
                    paddingAngle={4}
                    stroke="none"
                  >
                    {safeStatusData.map((entry, index) => (
                      <Cell
                        key={entry.key ?? entry.name ?? index}
                        fill={entry.color ?? COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>

                  <Tooltip
                    formatter={(value, name) => [`${value} requests`, name]}
                    contentStyle={{
                      border: "1px solid #E2E8F0",
                      borderRadius: "10px",
                      fontSize: "12px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>

              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-3xl font-extrabold text-slate-800">
                  {safeTotalRequests}
                </p>

                <p className="mt-1 text-xs text-slate-400">Total requests</p>
              </div>
            </>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-slate-400">
              No requests to display
            </div>
          )}
        </div>

        {/* STATUS LEGEND */}
        <div className="mt-3 space-y-4">
          {statusConfig.map((item) => {
            const count = Number(
              safeStatusData.find((status) => status?.key === item.key)
                ?.value ?? 0,
            );

            const percentage =
              safeTotalRequests > 0
                ? Math.round((count / safeTotalRequests) * 100)
                : 0;

            return (
              <div key={item.key}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span style={{ color: item.color }}>{item.icon}</span>

                    <span className="text-sm font-medium text-slate-600">
                      {item.label}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-sm font-bold text-slate-800">
                      {count}
                    </span>

                    <span className="ml-2 text-xs text-slate-400">
                      {percentage}%
                    </span>
                  </div>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${Math.min(percentage, 100)}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
