import { Button, Separator } from "@heroui/react";
import Link from "next/link";

import {
  MdDashboard,
  MdProductionQuantityLimits,
  MdInventory2,
  MdStorefront,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import { RiLogoutBoxRLine } from "react-icons/ri";

import LogoutButtonSection from "../Shared/LogoutButtonSection";
import NavLink from "../Shared/NavLink";

const SidebarSection = async () => {
  return (
    <aside className="w-full shrink-0 border-b border-slate-200 bg-white lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:border-b-0 lg:border-r">
      <div className="flex h-full flex-col p-4 sm:p-5">
        {/* Brand / Header */}
        <div className="mb-6">
          <Link href="/admin" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#102A4C] text-white shadow-sm transition group-hover:bg-[#163A65]">
              <MdStorefront size={24} />
            </div>

            <div className="min-w-0">
              <h2 className="text-lg font-extrabold tracking-tight text-[#102A4C]">
                SourceX
              </h2>
              <p className="mt-0.5 text-xs font-medium text-slate-500">
                Admin Dashboard
              </p>
            </div>
          </Link>
        </div>

        <Separator className="mb-6 bg-slate-200" />

        {/* Navigation */}
        <div className="mb-3 px-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Workspace
          </p>
        </div>

        <nav className="grid grid-cols-3 gap-2 lg:flex lg:flex-col lg:gap-1.5">
          {/* Dashboard */}
          <NavLink href="/admin">
            <Button variant="light">
              <MdDashboard size={21} className="shrink-0" />
              <span>Dashboard</span>
            </Button>
          </NavLink>

          {/* Post Products */}
          <NavLink href="/admin/post-product">
            <Button variant="light">
              <MdProductionQuantityLimits size={21} className="shrink-0" />
              <span>Post Products</span>
            </Button>
          </NavLink>

          {/* All Products */}
          <NavLink href="/admin/all-products">
            <Button variant="light">
              <MdInventory2 size={21} className="shrink-0" />
              <span>All Products</span>
            </Button>
          </NavLink>
        </nav>

        {/* Helpful panel */}
        <div className="mt-7 hidden rounded-2xl border border-sky-100 bg-sky-50/70 p-4 lg:block">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#00AEEF] shadow-sm">
              <MdStorefront size={18} />
            </div>

            <p className="text-sm font-bold text-[#102A4C]">
              SourceX Workspace
            </p>
          </div>

          <p className="text-xs leading-5 text-slate-500">
            Manage your product catalog and keep your marketplace up to date.
          </p>

          <Link
            href="/admin/all-products"
            className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#007EA8] transition hover:text-[#102A4C]"
          >
            View product catalog
            <MdOutlineKeyboardArrowRight size={17} />
          </Link>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Admin Profile */}
        <div className="mb-3 hidden items-center gap-3 rounded-xl bg-slate-50 p-3 lg:flex">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#102A4C] text-sm font-bold text-white">
            AD
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-[#102A4C]">
              Administrator
            </p>
            <p className="mt-0.5 text-xs text-slate-500">Manage your content</p>
          </div>
        </div>

        <Separator className="mb-3 bg-slate-200" />

        {/* Logout */}
        <div className="flex items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-red-50">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
            <RiLogoutBoxRLine size={20} />
          </div>

          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-700">Sign out</p>
            <p className="mt-0.5 text-xs text-slate-400">
              End your admin session
            </p>
          </div>

          <LogoutButtonSection />
        </div>
      </div>
    </aside>
  );
};

export default SidebarSection;
