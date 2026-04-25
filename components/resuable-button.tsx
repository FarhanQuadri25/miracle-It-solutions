import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  backgroundColor?: string;
  className?: string;
}

const CTAButton = ({
  children,
  backgroundColor,
  className,
}: CTAButtonProps) => {
  return (
    <button
      className={cn(
        "flex items-center gap-2 border-2 border-[#1a1a1a] px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-new-dark shadow-[4px_5px_0px_0px_#1a1a1a] transition-all duration-200 ease-out hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_#1a1a1a]",
        inter.className,
        backgroundColor,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default CTAButton;
