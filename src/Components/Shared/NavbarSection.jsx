import React from "react";
import { Input, Avatar, Badge, Button, Chip } from "@heroui/react";
import { FiSearch, FiBell } from "react-icons/fi";

export default function NavbarSection() {
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
          <Button
            variant="solid"
            className="bg-slate-200/80 text-slate-900 font-bold text-xs h-10 px-4 rounded-xl"
          >
            New Request
          </Button>

          <Button
            variant="light"
            className="text-slate-600 font-medium hover:text-slate-900 text-xs h-10 px-4 rounded-xl"
          >
            Track Order
          </Button>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center justify-end gap-3">
          <div className="h-5 w-[1px] bg-slate-200 hidden sm:block" />

          {/* User Profile */}
          <div className="flex items-center gap-2.5 pl-1">
            <Avatar
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
              className="w-8 h-8 text-xs shrink-0"
              isBordered={false}
            />
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-semibold text-slate-900 leading-tight">
                Elena Vance
              </span>
              <span className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">
                Sourcing Lead
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
