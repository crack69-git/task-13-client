import Image from "next/image";

const AuthNav = () => {
  return (
    <div className="flex items-center justify-center gap-2 border-b border-gray-200 px-4 py-3 sm:py-4">
      <Image
        loading="lazy"
        src="/logo.png"
        alt="Logo"
        width={40}
        height={40}
        className="opacity-80"
      ></Image>
      <h2 className="text-xl font-semibold text-gray-600 sm:text-2xl">
        SOURCE-X
      </h2>
    </div>
  );
};

export default AuthNav;
