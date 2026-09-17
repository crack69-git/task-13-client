"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={
        isActive
          ? "bg-slate-800 text-white font-semibold p-2 rounded-lg text-sm hover:bg-slate-900 transition-colors duration-200"
          : ""
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
