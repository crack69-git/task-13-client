import { Button, Separator } from "@heroui/react";
import Link from "next/link";

import { MdDashboard, MdProductionQuantityLimits } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import LogoutButtonSection from "../Shared/LogoutButtonSection";
import NavLink from "../Shared/NavLink";

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
          <NavLink href="/admin">
            <Button variant="">
              <MdDashboard />
              Dashboard
            </Button>
          </NavLink>
          <NavLink href="/admin/post-product">
            <Button variant="" className="">
              <MdProductionQuantityLimits />
              Post Products
            </Button>
          </NavLink>
          <NavLink href="/admin/all-products">
            <Button variant="" className="">
              <MdProductionQuantityLimits />
              All Products
            </Button>
          </NavLink>
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
