"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const NAV_LINKS = [
  { id: 1, label: "Home", link: "home" },
  { id: 2, label: "About", link: "about" },
  { id: 3, label: "Contact", link: "Contact Us" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="fixed top-0 left-0 w-full bg-[whitesmoke] text-[#171717] p-6 z-[10000]">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold font-inter">Logo</h1>
        <Menu size={40} onClick={handleClick} />
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 1 }}
            className="fixed top-0 left-0 bottom-0 h-full w-full bg-indigo-700 bg-opacity-300 z-[9999]"
          >
            <div
              className="flex justify-self-end p-4 font-inter text-white text-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              <h2>Close</h2>
            </div>
            <ul className="px-4 text-4xl font-inter text-center text-white space-y-8">
              {NAV_LINKS.map((link) => (
                <li key={link.id} onClick={() => setIsOpen(false)}>
                  <Link href={`#${link.link}`}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
