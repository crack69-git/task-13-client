import React from "react";
import { Input, Avatar, Badge, Button, Chip } from "@heroui/react";
import { FiSearch, FiBell } from "react-icons/fi";
import Link from "next/link";
import { HiOutlineLogout } from "react-icons/hi";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { getUserById } from "@/lib/actions/getData";
import LogoutButtonSection from "./LogoutButtonSection";

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
      <div className="w-full mx-auto bg-white border border-gray-200/80  shadow-sm px-4 py-4 flex items-center justify-between gap-4">
        {/* Brand / Logo Section */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center justify-center w-10 h-10 bg-[#0F172A] rounded-xl shadow-md shrink-0">
            <span className="text-cyan-400 font-extrabold text-xl tracking-tighter">
              X
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-slate-900 text-lg tracking-wider leading-none">
                SOURCE<span className="text-cyan-500">·</span>X
              </span>
              <Chip
                size="sm"
                variant="flat"
                className="bg-slate-100 text-slate-600 font-semibold text-[10px] h-5 px-1 rounded-md"
              >
                B2B
              </Chip>
            </div>
            <span className="text-[11px] text-slate-400 font-medium tracking-tight mt-0.5">
              Sourcing Platform
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1 justify-center">
          <Link href="/">
            <Button
              variant="solid"
              className="bg-slate-200/80 text-slate-900 font-bold text-xs h-10 px-4 rounded-xl"
            >
              New Request
            </Button>
          </Link>
          <Link href="/track-order">
            <Button
              variant="light"
              className="text-slate-600 font-medium hover:text-slate-900 text-xs h-10 px-4 rounded-xl"
            >
              Track Order
            </Button>
          </Link>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center justify-end gap-3">
          <LogoutButtonSection />
          <div className="h-5 w-[1px] bg-slate-200 hidden sm:block" />

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
