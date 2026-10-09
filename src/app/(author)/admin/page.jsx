import AdminTable from "@/Components/AdminSection/AdminTable";
import DashboardCharts from "@/Components/AdminSection/DashboardCharts";

import { getPosts } from "@/lib/actions/getData";
import { auth } from "@/lib/auth";

import { headers } from "next/headers";

import { BiTask } from "react-icons/bi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LuRefreshCcw } from "react-icons/lu";

import {
  MdVerified,
  MdOutlineInventory2,
  MdPendingActions,
} from "react-icons/md";

export const metadata = {
  title: "SourceX Admin Dashboard",
  description: "Admin dashboard for managing SourceX sourcing requests",
};

// ============================================================
// STAT CARD
// ============================================================

const StatCard = ({
  title,
  value,
  description,
  icon,
  iconBg,
  iconColor,
  accent,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6">
      <div
        className="absolute left-0 top-0 h-full w-1"
        style={{ backgroundColor: accent }}
      />

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-500">{title}</p>

          <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
            {value}
          </p>
        </div>

        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
          style={{
            backgroundColor: iconBg,
            color: iconColor,
          }}
        >
          {icon}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: accent }}
        />

        <p className="text-xs text-slate-500">{description}</p>
      </div>
    </div>
  );
};

// ============================================================
// SERVER PAGE
// ============================================================

const page = async () => {
  // Authentication
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  // Fetch requests
  const response = await getPosts(token);

  const totalRequests = Array.isArray(response) ? response : [];

  // Request status counts
  const pendingRequests = totalRequests.filter(
    (request) => String(request.status).toLowerCase() === "pending",
  );

  const verifiedRequests = totalRequests.filter(
    (request) => String(request.status).toLowerCase() === "approved",
  );

  const completedRequests = totalRequests.filter(
    (request) => String(request.status).toLowerCase() === "completed",
  );

  const otherRequests = totalRequests.filter(
    (request) =>
      !["pending", "approved", "completed"].includes(
        String(request.status).toLowerCase(),
      ),
  );

  // ==========================================================
  // MONTHLY REQUEST DATA
  // ==========================================================

  const now = new Date();

  const monthlyData = Array.from({ length: 6 }, (_, index) => {
    const date = new Date(now.getFullYear(), now.getMonth() - 5 + index, 1);

    return {
      year: date.getFullYear(),
      monthIndex: date.getMonth(),

      month: date.toLocaleDateString("en-US", {
        month: "short",
      }),

      requests: 0,
    };
  });

  totalRequests.forEach((request) => {
    const rawDate =
      request.createdDate ?? request.createdAt ?? request.created_at;

    if (!rawDate) return;

    const date = new Date(rawDate);

    if (Number.isNaN(date.getTime())) return;

    const matchingMonth = monthlyData.find(
      (item) =>
        item.year === date.getFullYear() && item.monthIndex === date.getMonth(),
    );

    if (matchingMonth) {
      matchingMonth.requests += 1;
    }
  });

  // Pass only the chart fields to the client component.
  const chartMonthlyData = monthlyData.map(({ month, requests }) => ({
    month,
    requests,
  }));

  // ==========================================================
  // STATUS CHART DATA
  // ==========================================================

  const statusData = [
    {
      key: "pending",
      name: "Pending",
      value: pendingRequests.length,
      color: "#F59E0B",
    },
    {
      key: "approved",
      name: "Approved",
      value: verifiedRequests.length,
      color: "#10B981",
    },
    {
      key: "completed",
      name: "Completed",
      value: completedRequests.length,
      color: "#3B82F6",
    },
    {
      key: "other",
      name: "Other",
      value: otherRequests.length,
      color: "#94A3B8",
    },
  ];

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <main className="min-h-screen w-full bg-[#F8FAFC]">
      <div className="mx-auto w-full max-w-[1600px] px-3 py-6 sm:px-5 sm:py-7 lg:px-8">
        {/* HEADER */}
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00AEEF]" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#008FC0]">
                SOURCEX WORKSPACE
              </p>
            </div>

            <h1 className="text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl">
              Dashboard Overview
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Monitor sourcing requests, review their progress, and manage your
              marketplace activity.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm md:self-auto">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#008FC0]">
              <MdOutlineInventory2 size={23} />
            </div>

            <div>
              <p className="text-xs text-slate-400">Total Requests</p>

              <p className="text-lg font-extrabold text-slate-800">
                {totalRequests.length}
              </p>
            </div>
          </div>
        </div>

        {/* STAT CARDS */}
        <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Requests"
            value={totalRequests.length}
            description="All sourcing requests"
            icon={<BiTask size={26} />}
            iconBg="#EFF6FF"
            iconColor="#2563EB"
            accent="#3B82F6"
          />

          <StatCard
            title="Pending Requests"
            value={pendingRequests.length}
            description="Awaiting review"
            icon={<LuRefreshCcw size={25} />}
            iconBg="#FFF7E6"
            iconColor="#D97706"
            accent="#F59E0B"
          />

          <StatCard
            title="Verified Requests"
            value={verifiedRequests.length}
            description="Approved requests"
            icon={<MdVerified size={26} />}
            iconBg="#ECFDF5"
            iconColor="#059669"
            accent="#10B981"
          />

          <StatCard
            title="Completed Requests"
            value={completedRequests.length}
            description="Successfully completed"
            icon={<IoCheckmarkCircleOutline size={27} />}
            iconBg="#EFF6FF"
            iconColor="#2563EB"
            accent="#3B82F6"
          />
        </div>

        {/* CHARTS */}
        <DashboardCharts
          monthlyData={chartMonthlyData}
          statusData={statusData}
          totalRequests={totalRequests.length}
        />

        {/* REQUEST TABLE */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:p-6">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#008FC0]">
                  <MdPendingActions size={21} />
                </div>

                <h2 className="text-lg font-bold text-slate-800">
                  Sourcing Requests
                </h2>
              </div>

              <p className="mt-2 text-sm text-slate-500">
                Review and manage incoming buyer requirements.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 sm:self-auto">
              <span className="h-2 w-2 rounded-full bg-[#00AEEF]" />
              {totalRequests.length} total records
            </div>
          </div>

          <div className="p-3 sm:p-5">
            <AdminTable />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="flex flex-col justify-between gap-2 py-6 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>SourceX Admin Dashboard</p>

          <p>Sourcing operations & marketplace management</p>
        </footer>
      </div>
    </main>
  );
};

export default page;
