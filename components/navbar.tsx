"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight, Menu, Layers } from "lucide-react"
import { Inter } from "next/font/google"
import Link from "next/link"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
})

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav
            className={cn(
                "px-4 sm:px-8 py-5 max-w-7xl mx-auto border-x-2 relative",
                inter.className
            )}
        >
            <div className="flex items-center justify-between">

                {/* Left Section */}
                <div className="flex items-center gap-8">

                    {/* Logo */}
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
                        className="bg-new-accent px-5 py-2.5 rounded-full text-new-dark text-sm font-medium flex items-center gap-2 hover:bg-new-dark transition-colors"
                    >
                        Contact Us
                        <ArrowRight size={16} />
                    </Link>
                </div>

                {/* Mobile Sheet */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <button
                            className="md:hidden w-10 h-10 bg-new-light-color hover:bg-[#e5e5e5] rounded-xl flex items-center justify-center transition-colors"
                            aria-label="Open menu"
                        >
                            <Menu size={20} className="text-new-dark" />
                        </button>
                    </SheetTrigger>

                    <SheetContent
                        side="right"
                        className="w-full sm:w-[400px] bg-white border-l border-[#e5e5e5] p-0"
                    >
                        <SheetHeader className="p-6 border-b border-[#e5e5e5]">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-new-dark rounded-xl flex items-center justify-center">
                                    <Layers className="w-5 h-5 text-white" strokeWidth={2} />
                                </div>
                                <SheetTitle
                                    className={cn(
                                        "text-xl font-bold text-new-dark",
                                        inter.className
                                    )}
                                >
                                    Menu
                                </SheetTitle>
                            </div>
                        </SheetHeader>

                        {/* Mobile Nav Links */}
                        <div className="flex flex-col p-6">
                            <nav className="space-y-2">
                                {navLinks.map((link) => (
                                    <SheetClose asChild key={link.label}>
                                        <Link
                                            href={`/${link.href}`}
                                            className="flex items-center justify-between p-4 rounded-xl text-new-dark font-medium transition-all hover:bg-new-light-color hover:pl-6 border border-transparent hover:border-[#e5e5e5]"
                                        >
                                            <span className="text-lg">{link.label}</span>
                                            <ArrowRight
                                                size={18}
                                                className="text-[#9a9a9a]"
                                            />
                                        </Link>
                                    </SheetClose>
                                ))}
                            </nav>

                            {/* Mobile CTA */}
                            <div className="mt-8 pt-6 border-t border-[#e5e5e5]">
                                <SheetClose asChild>
                                    <Link
                                        href="/#contact"
                                        className="flex items-center justify-center gap-2 w-full bg-new-dark text-white py-4 rounded-xl font-semibold hover:bg-[#2d2d2d] transition-colors"
                                    >
                                        Contact Us
                                        <ArrowRight size={18} />
                                    </Link>
                                </SheetClose>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}

export default Navbar