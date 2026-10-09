"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function ProductOverviewChart({ monthlyData = [] }) {
  const safeData = Array.isArray(monthlyData) ? monthlyData : [];
  const hasData = safeData.some((item) => item.products > 0);

  return (
    <section className="h-full rounded-xl border border-[#E0E8EF] bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-[#102A4C]">
            Product Overview
          </h2>
          <p className="mt-1 text-xs text-[#8795A5]">
            Monthly listing activity
          </p>
        </div>

        <span className="shrink-0 rounded-lg bg-[#EAF8FD] px-2.5 py-1 text-[11px] font-semibold text-[#007EA8]">
          6 months
        </span>
      </div>

      <div className="h-[220px] w-full sm:h-[250px]">
        {hasData ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={safeData}
              margin={{ top: 8, right: 8, left: -22, bottom: 0 }}
            >
              <defs>
                <linearGradient
                  id="productAreaGradient"
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
                stroke="#EAF0F5"
                strokeDasharray="4 4"
                vertical={false}
              />

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#8795A5", fontSize: 11 }}
                dy={8}
              />

              <YAxis
                allowDecimals={false}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#8795A5", fontSize: 11 }}
              />

              <Tooltip
                formatter={(value) => [`${value} products`, "Listings"]}
                contentStyle={{
                  border: "1px solid #E0E8EF",
                  borderRadius: "10px",
                  fontSize: "12px",
                }}
              />

              <Area
                type="monotone"
                dataKey="products"
                stroke="#00AEEF"
                strokeWidth={2.5}
                fill="url(#productAreaGradient)"
                activeDot={{ r: 5 }}
                dot={{ r: 2.5, fill: "#00AEEF", strokeWidth: 0 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-full items-center justify-center rounded-lg bg-[#F8FBFE] text-center text-sm text-[#8795A5]">
            No product activity available for this period.
          </div>
        )}
      </div>

      <div className="mt-2 flex items-center gap-2 text-[11px] text-[#8795A5]">
        <span className="h-2 w-2 rounded-full bg-[#00AEEF]" />
        Products created per month
      </div>
    </section>
  );
}
