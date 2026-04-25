"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { inter } from "@/lib/fonts";
import CTAButton from "./resuable-button";

const navLinks = [
  { label: "Home", href: "#home" },
  // { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className={cn("max-w-7xl mx-auto relative", inter.className)}>
      <nav className="px-5 sm:px-8 py-5 flex items-center justify-between border-b-2 border-[#1a1a1a]">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link href="/#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-new-dark border-2 border-[#1a1a1a] flex items-center justify-center shadow-[2px_2px_0px_0px_#1a1a1a] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:shadow-[1px_1px_0px_0px_#1a1a1a] transition-all duration-200">
              <span
                className={cn(
                  "text-new-accent text-sm font-black",
                  inter.className,
                )}>
                MI
              </span>
            </div>
            <span
              className={cn(
                "text-new-dark font-black text-base uppercase tracking-tight hidden sm:block",
                inter.className,
              )}>
              Miracle IT Solutions
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={`/${link.href}`}
                className={cn(
                  "px-4 py-2 text-sm font-semibold text-new-neutral hover:text-new-dark hover:bg-[#f0f0e8] border-2 border-transparent hover:border-[#1a1a1a] transition-all duration-150 uppercase tracking-widest",
                  inter.className,
                )}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/#contact">
            <CTAButton backgroundColor="bg-new-accent">
              Contact Us
              <ArrowRight size={15} />
            </CTAButton>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-9 h-9 bg-[#f0f0e8] border-2 border-[#1a1a1a] shadow-[2px_2px_0px_0px_#1a1a1a] flex items-center justify-center hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[1px_1px_0px_0px_#1a1a1a] transition-all duration-200"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(true)}>
          <Menu size={18} className="text-new-dark" />
        </button>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-[360px] bg-[#f0f0e8] z-50 border-l-2 border-[#1a1a1a] transition-transform duration-300 ease-in-out md:hidden flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}>
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b-2 border-[#1a1a1a] bg-[#1a1a1a]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-new-accent flex items-center justify-center">
              <span
                className={cn(
                  "text-new-dark text-xs font-black",
                  inter.className,
                )}>
                MI
              </span>
            </div>
            <span
              className={cn(
                "text-base font-black text-[#f0f0e8] uppercase tracking-widest",
                inter.className,
              )}>
              Miracle IT
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 border-2 border-[#f0f0e8]/30 flex items-center justify-center hover:border-new-accent hover:bg-new-accent/10 transition-all duration-150"
            aria-label="Close menu">
            <X size={16} className="text-[#f0f0e8]" />
          </button>
        </div>

        {/* Drawer Nav Links */}
        <div className="flex flex-col flex-1 p-6 gap-2">
          <p
            className={cn(
              "text-[10px] uppercase tracking-[0.3em] text-new-neutral/50 font-bold mb-2",
              inter.className,
            )}>
            Navigation
          </p>
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={`/${link.href}`}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center justify-between px-5 py-4 bg-white border-2 border-[#1a1a1a] shadow-[3px_3px_0px_0px_#1a1a1a] text-new-dark font-bold hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[1px_1px_0px_0px_#1a1a1a] transition-all duration-150 group",
                inter.className,
              )}>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-black text-new-dark/20 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base uppercase tracking-tight">
                  {link.label}
                </span>
              </div>
              <ArrowRight
                size={15}
                className="text-new-neutral group-hover:text-new-accent transition-colors"
              />
            </Link>
          ))}
        </div>

        {/* Drawer CTA */}
        <div className="p-6 border-t-2 border-[#1a1a1a]">
          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className={cn(
              "flex items-center justify-center gap-2 w-full bg-new-accent text-new-dark py-4 font-bold border-2 border-[#1a1a1a] shadow-[4px_4px_0px_0px_#1a1a1a] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_#1a1a1a] transition-all duration-200 uppercase tracking-widest text-sm",
              inter.className,
            )}>
            Contact Us
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
