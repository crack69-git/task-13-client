import { Button, Separator } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import LogoutButtonSection from "../Shared/LogoutButtonSection";

const SidebarSection = async () => {
  return (
    <div className="w-72 h-screen bg-gray-100">
      <div className="h-full p-4 flex flex-col items-stretch">
        <div>
          <p className="font-bold">Admin Panel</p>

          <p className="text-sm text-gray-500">Manage your content here</p>
          <Separator className="my-4" />
        </div>
        <div className="flex-1">
          <Link href="/admin">
            <Button
              variant="primary"
              className="mt-4 w-full rounded-lg bg-green-950"
            >
              <MdDashboard />
              Dashboard
            </Button>
          </Link>
          <Button variant="ghost" className="mt-2 w-full rounded-lg">
            Users
          </Button>
          <Button variant="ghost" className="mt-2 w-full rounded-lg">
            Settings
          </Button>
        </div>
        <div className="mx-auto flex items-center gap-2 mt-4">
          <LogoutButtonSection />
          Logout
        </div>
      </div>
    </div>
  );
};

export default SidebarSection;
