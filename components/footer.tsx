import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowRight, Home, Layers, MessageCircle } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Features", href: "#features", icon: Layers },
    { name: "Contact", href: "#contact", icon: MessageCircle },
  ];

  return (
    <footer
      className={cn(
        "w-full border-t-2 border-[#1a1a1a] bg-[#1a1a1a]",
        inter.className,
      )}
    >
      <div className="max-w-7xl mx-auto">

        {/* Main footer body */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-white/10">

          {/* Brand */}
          <div className="px-8 py-10 space-y-5">
            <Link href="/#home" className="flex items-center gap-2.5 group w-fit">
              <div className="w-9 h-9 bg-new-accent border-2 border-[#f0f0e8]/20 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(240,240,232,0.2)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:shadow-[1px_1px_0px_0px_rgba(240,240,232,0.2)] transition-all duration-200">
                <span className={cn("text-new-dark text-xs font-black", inter.className)}>
                  MI
                </span>
              </div>
              <span className={cn("text-[#f0f0e8] font-black text-base uppercase tracking-tight", inter.className)}>
                Miracle IT Solutions
              </span>
            </Link>
            <p className="text-[#f0f0e8]/40 text-sm leading-relaxed max-w-xs font-medium">
              Empowering businesses with innovative technology solutions built
              to scale and engineered to last.
            </p>
            {/* Accent rule */}
            <div className="flex items-center gap-2 pt-1">
              <div className="w-8 h-[2px] bg-new-accent" />
              <div className="w-2 h-[2px] bg-new-accent/40" />
              <div className="w-1 h-[2px] bg-new-accent/20" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="px-8 py-10 space-y-5">
            <p className={cn("text-[10px] uppercase tracking-[0.3em] text-[#f0f0e8]/30 font-bold", inter.className)}>
              Quick Links
            </p>
            <ul className="space-y-2">
              {navLinks.map((link, i) => (
                <li key={link.name}>
                  <Link
                    href={`/${link.href}`}
                    className={cn(
                      "group flex items-center justify-between px-4 py-3 border-2 border-white/5 hover:border-new-accent hover:bg-new-accent/5 transition-all duration-150",
                      inter.className,
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black text-[#f0f0e8]/20 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={cn("text-sm font-bold text-[#f0f0e8]/60 group-hover:text-[#f0f0e8] uppercase tracking-tight transition-colors", inter.className)}>
                        {link.name}
                      </span>
                    </div>
                    <link.icon className="w-3.5 h-3.5 text-[#f0f0e8]/20 group-hover:text-new-accent transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="px-8 py-10 space-y-5">
            <p className={cn("text-[10px] uppercase tracking-[0.3em] text-[#f0f0e8]/30 font-bold", inter.className)}>
              Start a Project
            </p>
            <p className="text-[#f0f0e8]/40 text-sm leading-relaxed font-medium">
              Ready to transform your business? Let&apos;s discuss your next
              project and bring your vision to life.
            </p>
            <Link
              href="/#contact"
              className={cn(
                "inline-flex items-center gap-2 px-5 py-3 bg-new-accent text-new-dark text-sm font-black uppercase tracking-widest border-2 border-[#f0f0e8]/20 shadow-[4px_4px_0px_0px_rgba(240,240,232,0.15)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(240,240,232,0.15)] transition-all duration-200",
                inter.className,
              )}
            >
              Contact Us
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-2 border-white/10 px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className={cn("text-[11px] text-[#f0f0e8]/25 font-semibold uppercase tracking-widest", inter.className)}>
            © {currentYear} Miracle IT Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className={cn("text-[11px] text-[#f0f0e8]/25 font-semibold uppercase tracking-widest", inter.className)}>
              Built with
            </span>
            <div className="w-4 h-[2px] bg-new-accent" />
            <span className={cn("text-[11px] text-new-accent font-black uppercase tracking-widest", inter.className)}>
              Passion
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;