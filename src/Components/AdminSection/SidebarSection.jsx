import { Button, Separator } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import LogoutButtonSection from "../Shared/LogoutButtonSection";

const SidebarSection = async () => {
  return (
    <div className="w-full shrink-0 bg-gray-100 lg:sticky lg:top-0 lg:h-screen lg:w-72">
      <div className="flex h-auto flex-col items-stretch p-3 sm:p-4 lg:h-full">
        <div>
          <p className="font-bold">Admin Panel</p>

          <p className="text-sm text-gray-500">Manage your content here</p>
          <Separator className="my-4" />
        </div>
        <div className="grid flex-1 grid-cols-3 gap-2 lg:block">
          <Link href="/admin">
            <Button
              variant="primary"
              className="mt-0 w-full rounded-lg bg-green-950 lg:mt-4"
            >
              <MdDashboard />
              Dashboard
            </Button>
          </Link>
          <Button variant="ghost" className="mt-0 w-full rounded-lg lg:mt-2">
            Users
          </Button>
          <Button variant="ghost" className="mt-0 w-full rounded-lg lg:mt-2">
            Settings
          </Button>
        </div>
        <div className="mx-auto mt-4 flex items-center gap-2">
          <LogoutButtonSection />
          Logout
        </div>
      </div>
    </div>
  );
};

export default SidebarSection;
