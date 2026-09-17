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
          ? "bg-orange-600 text-white font-semibold p-2 rounded-lg text-sm hover:bg-orange-700 transition-colors duration-200 flex items-center gap-1"
          : "flex items-center gap-1 text-sm font-medium"
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
