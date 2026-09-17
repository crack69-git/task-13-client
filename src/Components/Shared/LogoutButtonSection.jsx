"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlineLogout } from "react-icons/hi";

const LogoutButtonSection = () => {
  const router = useRouter();
  return (
    <Button
      onClick={async () => {
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/login");
            },
          },
        });
      }}
      className="bg-red-50 p-2 w-10 h-10 rounded-full hover:bg-red-100 transition-colors duration-200 border border-red-200"
    >
      <HiOutlineLogout color="red" size={25} />
    </Button>
  );
};

export default LogoutButtonSection;
