import Image from "next/image";
import React from "react";

const AuthNav = () => {
  return (
    <div className="flex items-center gap-2 justify-center py-4 border-b border-gray-200">
      <Image
        src="/logo.png"
        alt="Logo"
        width={40}
        height={40}
        className="opacity-80"
      ></Image>
      <h2 className="text-2xl font-semibold text-gray-600">SOURCE-X</h2>
    </div>
  );
};

export default AuthNav;
