"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "motion/react";

const LINKS = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Contact", href: "#contact" },
];

const FloatedNavbar = () => {
  return (
    <nav className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-[10000]">
      <SlideTabs />
    </nav>
  );
};

// Type for Position
type Position = {
  left: number;
  width: number;
  opacity: number;
};

const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1 shadow-2xl">
      {LINKS.map((link) => (
        <Tab key={link.id} href={link.href} setPosition={setPosition}>
          {link.name}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

// Type for Tab Props
type TabProps = {
  children: React.ReactNode;
  href: string;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
};

const Tab = ({ children, href, setPosition }: TabProps) => {
  const ref = useRef<HTMLLIElement | null>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xl font-inter font-normal uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

// Type for Cursor Props
type CursorProps = {
  position: Position;
};

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      className="absolute z-0 h-7 rounded-full bg-[#171717] md:h-12"
    />
  );
};

export default FloatedNavbar;
