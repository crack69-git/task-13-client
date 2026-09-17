import { Button, Separator } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";

const SidebarSection = () => {
  return (
    <div className="w-72 h-screen bg-gray-100">
      <div className="p-4">
        <p className="font-bold">Admin Panel</p>

        <p className="text-sm text-gray-500">Manage your content here</p>
        <Separator className="my-4" />
        <div>
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
      </div>
    </div>
  );
};

export default SidebarSection;
