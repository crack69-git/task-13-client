import Image from "next/image";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const footerLinks = {
  company: ["About us", "Careers", "Partners", "Newsroom"],
  resources: ["Blog", "Documentation", "Help center", "API"],
  legal: ["Privacy", "Terms", "Cookies", "Security"],
};

const socialLinks = [
  { icon: FiInstagram, label: "Instagram" },
  { icon: FiTwitter, label: "Twitter" },
  { icon: FiLinkedin, label: "LinkedIn" },
  { icon: FiGithub, label: "GitHub" },
];

const FooterSection = () => {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-800">
                <Image
                  src="/logo.png"
                  alt="SOURCE-X logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xl font-bold tracking-[0.2em] text-white">
                  SOURCE-X
                </p>
                <p className="text-sm text-slate-400">
                  Build smarter. Ship faster.
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
              We help teams turn ideas into polished digital experiences with
              modern workflows, thoughtful design, and dependable technology.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-300 transition hover:border-sky-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                {title}
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-700 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SOURCE-X. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
