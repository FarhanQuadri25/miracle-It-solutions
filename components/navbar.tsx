"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight, Menu, Layers, X } from "lucide-react"
import Link from "next/link"
import { inter } from "@/lib/fonts"

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    // Lock body scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : ""
        return () => { document.body.style.overflow = "" }
    }, [isOpen])

    return (
        <div className={cn("max-w-7xl mx-auto border-x-2 relative", inter.className)}>
            <nav className="px-4 sm:px-8 py-5 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-8">
                    <Link
                        href="/#home"
                        className="w-10 h-10 bg-new-dark rounded-xl flex items-center justify-center hover:bg-[#2d2d2d] transition-colors"
                    >
                        <Layers className="w-5 h-5 text-white" strokeWidth={2} />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6 text-new-neutral text-sm font-medium">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={`/${link.href}`}
                                className="hover:text-new-dark transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="/#contact"
                        className="bg-new-accent px-5 py-2.5 rounded-full text-new-dark text-sm font-medium flex items-center gap-2 hover:bg-new-dark hover:text-white transition-colors"
                    >
                        Contact Us
                        <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden w-10 h-10 bg-new-light-color hover:bg-[#e5e5e5] rounded-xl flex items-center justify-center transition-colors"
                    aria-label="Toggle menu"
                    onClick={() => setIsOpen(true)}
                >
                    <Menu size={20} className="text-new-dark" />
                </button>
            </nav>

            {/* Backdrop */}
            <div
                onClick={() => setIsOpen(false)}
                className={cn(
                    "fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            />

            {/* Drawer */}
            <div
                className={cn(
                    "fixed top-0 right-0 h-full w-full sm:w-[380px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-6 border-b border-[#e5e5e5]">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-new-dark rounded-xl flex items-center justify-center">
                            <Layers className="w-5 h-5 text-white" strokeWidth={2} />
                        </div>
                        <span className="text-xl font-bold text-new-dark">Menu</span>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="w-9 h-9 rounded-xl bg-new-light-color hover:bg-[#e5e5e5] flex items-center justify-center transition-colors"
                        aria-label="Close menu"
                    >
                        <X size={18} className="text-new-dark" />
                    </button>
                </div>

                {/* Drawer Nav Links */}
                <div className="flex flex-col p-6 gap-2 flex-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={`/${link.href}`}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between p-4 rounded-xl text-new-dark font-medium hover:bg-new-light-color hover:pl-6 border border-transparent hover:border-[#e5e5e5] transition-all duration-200"
                        >
                            <span className="text-lg">{link.label}</span>
                            <ArrowRight size={18} className="text-new-neutral" />
                        </Link>
                    ))}
                </div>

                {/* Drawer CTA */}
                <div className="p-6 border-t border-[#e5e5e5]">
                    <Link
                        href="/#contact"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center gap-2 w-full bg-new-dark text-white py-4 rounded-xl font-semibold hover:bg-[#2d2d2d] transition-colors"
                    >
                        Contact Us
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar