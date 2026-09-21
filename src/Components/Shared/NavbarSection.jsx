import React from "react";
import { Input, Avatar, Badge, Button, Chip } from "@heroui/react";
import { FiSearch, FiBell } from "react-icons/fi";
import Link from "next/link";
import { HiOutlineLogout, HiOutlineNewspaper } from "react-icons/hi";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { getUserById } from "@/lib/actions/getData";
import LogoutButtonSection from "./LogoutButtonSection";
import NavLink from "./NavLink";
import { GiRadarDish } from "react-icons/gi";

export default async function NavbarSection() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  console.log("Current user session:", user.id);
  const users = await getUserById(user?.id); // Fetch user data using the getUserById function
  console.log("Fetched user data:", users);
  return (
    <div className="w-full  flex justify-center">
      <div className="mx-auto flex w-full flex-wrap items-center justify-between gap-3 border border-gray-200/80 bg-white px-3 py-3 shadow-sm sm:px-4 sm:py-4">
        {/* Brand / Logo Section */}
        <div className="flex min-w-0 items-center gap-2 shrink-0 sm:gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-[#0F172A] rounded-xl shadow-md shrink-0">
            <span className="text-cyan-400 font-extrabold text-xl tracking-tighter">
              X
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm leading-none tracking-wider text-slate-900 sm:text-lg">
                SOURCE<span className="text-cyan-500">·</span>X
              </span>
              <Chip
                size="sm"
                variant="flat"
                className="bg-slate-100 text-slate-600 font-semibold text-[10px] h-5 px-1 rounded-md"
              >
                <span className="hidden sm:inline">B2B</span>
              </Chip>
            </div>
            <span className="mt-0.5 hidden text-[11px] font-medium tracking-tight text-slate-400 sm:block">
              Sourcing Platform
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="order-3 flex w-full items-center justify-center gap-3 border-t border-slate-100 pt-2 md:order-0 md:w-auto md:border-0 md:pt-0 md:gap-5">
          <NavLink href="/buyer">
            <HiOutlineNewspaper />
            <span> New Request</span>
          </NavLink>
          <NavLink href="/buyer/track-orders">
            <GiRadarDish />
            Track Order
          </NavLink>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center justify-end gap-3">
          <LogoutButtonSection />
          <div className="hidden h-5 w-px bg-slate-200 sm:block" />

          {/* User Profile */}
          <div className="flex items-center gap-2.5 pl-1">
            <div>
              {users?.image ? (
                <Image
                  loading="lazy"
                  src={users?.image}
                  alt="User Image"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-700">
                  {users?.name?.charAt(0)?.toUpperCase() || "U"}
                </div>
              )}
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-semibold text-slate-900 leading-tight">
                {users?.name}
              </span>
              <span className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">
                {users?.role}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
