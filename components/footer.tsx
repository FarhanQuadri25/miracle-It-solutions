import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowRight, Home, MessageCircle } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    // { name: "Features", href: "#features", icon: Layers },
    { name: "Contact", href: "#contact", icon: MessageCircle },
  ];

  return (
    <footer
      className={cn(
        "w-full border-t-2 border-[#1a1a1a] bg-[#1a1a1a]",
        inter.className,
      )}
    >
      <div className="mx-auto max-w-7xl">
        {/* Main footer body */}
        <div className="grid grid-cols-1 divide-y-2 divide-white/10 md:grid-cols-3 md:divide-x-2 md:divide-y-0">
          {/* Brand */}
          <div className="space-y-5 px-8 py-10">
            <Link
              href="/#home"
              className="group flex w-fit items-center gap-2.5"
            >
              <div className="flex h-9 w-9 items-center justify-center border-2 border-[#f0f0e8]/20 bg-new-accent shadow-[2px_2px_0px_0px_rgba(240,240,232,0.2)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:shadow-[1px_1px_0px_0px_rgba(240,240,232,0.2)]">
                <span
                  className={cn(
                    "text-xs font-black text-new-dark",
                    inter.className,
                  )}
                >
                  MI
                </span>
              </div>
              <span
                className={cn(
                  "text-base font-black uppercase tracking-tight text-[#f0f0e8]",
                  inter.className,
                )}
              >
                Miracle IT Solutions
              </span>
            </Link>
            <p className="max-w-xs text-sm font-medium leading-relaxed text-[#f0f0e8]/40">
              Empowering businesses with innovative technology solutions built
              to scale and engineered to last.
            </p>
            {/* Accent rule */}
            <div className="flex items-center gap-2 pt-1">
              <div className="h-[2px] w-8 bg-new-accent" />
              <div className="h-[2px] w-2 bg-new-accent/40" />
              <div className="h-[2px] w-1 bg-new-accent/20" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5 px-8 py-10">
            <p
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.3em] text-[#f0f0e8]/30",
                inter.className,
              )}
            >
              Quick Links
            </p>
            <ul className="space-y-2">
              {navLinks.map((link, i) => (
                <li key={link.name}>
                  <Link
                    href={`/${link.href}`}
                    className={cn(
                      "group flex items-center justify-between border-2 border-white/5 px-4 py-3 transition-all duration-150 hover:border-new-accent hover:bg-new-accent/5",
                      inter.className,
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black tabular-nums text-[#f0f0e8]/20">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "text-sm font-bold uppercase tracking-tight text-[#f0f0e8]/60 transition-colors group-hover:text-[#f0f0e8]",
                          inter.className,
                        )}
                      >
                        {link.name}
                      </span>
                    </div>
                    <link.icon className="h-3.5 w-3.5 text-[#f0f0e8]/20 transition-colors group-hover:text-new-accent" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-5 px-8 py-10">
            <p
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.3em] text-[#f0f0e8]/30",
                inter.className,
              )}
            >
              Start a Project
            </p>
            <p className="text-sm font-medium leading-relaxed text-[#f0f0e8]/40">
              Ready to transform your business? Let&apos;s discuss your next
              project and bring your vision to life.
            </p>
            <Link
              href="/#contact"
              className={cn(
                "inline-flex items-center gap-2 border-2 border-[#f0f0e8]/20 bg-new-accent px-5 py-3 text-sm font-black uppercase tracking-widest text-new-dark shadow-[4px_4px_0px_0px_rgba(240,240,232,0.15)] transition-all duration-200 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(240,240,232,0.15)]",
                inter.className,
              )}
            >
              Contact Us
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t-2 border-white/10 px-8 py-5 sm:flex-row">
          <p
            className={cn(
              "text-[11px] font-semibold uppercase tracking-widest text-[#f0f0e8]/25",
              inter.className,
            )}
          >
            © {currentYear} Miracle IT Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "text-[11px] font-semibold uppercase tracking-widest text-[#f0f0e8]/25",
                inter.className,
              )}
            >
              Built with
            </span>
            <div className="h-[2px] w-4 bg-new-accent" />
            <span
              className={cn(
                "text-[11px] font-black uppercase tracking-widest text-new-accent",
                inter.className,
              )}
            >
              Passion
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
