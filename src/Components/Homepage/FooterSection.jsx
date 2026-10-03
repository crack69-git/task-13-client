import Link from "next/link";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-[1400px] px-5 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111827] text-xl font-bold text-[#00AEEF]">
                X
              </div>

              <div>
                <div className="text-[17px] font-extrabold text-[#111827]">
                  SOURCE<span className="text-[#00AEEF]">·</span>X
                </div>

                <p className="text-[10px] text-[#6B7C93]">Sourcing Platform</p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#6B7C93]">
              A B2B sourcing platform designed to make business requirements,
              supplier communication and purchasing workflows easier to manage.
            </p>

            <div className="mt-5 space-y-2 text-xs text-[#6B7C93]">
              <div className="flex items-center gap-2">
                <FiMail />
                hello@sourcex.com
              </div>

              <div className="flex items-center gap-2">
                <FiPhone />
                +880 XXX XXX XXXX
              </div>

              <div className="flex items-center gap-2">
                <FiMapPin />
                Bangladesh
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm font-bold text-[#111827]">Platform</h4>

            <div className="mt-4 space-y-3 text-sm text-[#6B7C93]">
              <Link href="/request" className="block hover:text-[#111827]">
                Create Request
              </Link>

              <Link href="#features" className="block hover:text-[#111827]">
                Features
              </Link>

              <Link href="#how-it-works" className="block hover:text-[#111827]">
                How It Works
              </Link>

              <Link href="#suppliers" className="block hover:text-[#111827]">
                Suppliers
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-[#111827]">Company</h4>

            <div className="mt-4 space-y-3 text-sm text-[#6B7C93]">
              <Link href="/about" className="block hover:text-[#111827]">
                About
              </Link>

              <Link href="/contact" className="block hover:text-[#111827]">
                Contact
              </Link>

              <Link href="/privacy" className="block hover:text-[#111827]">
                Privacy
              </Link>

              <Link href="/terms" className="block hover:text-[#111827]">
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-gray-100 pt-6 text-xs text-gray-400 sm:flex-row">
          <p>© 2026 SourceX. All rights reserved.</p>

          <p>B2B Sourcing Platform</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
