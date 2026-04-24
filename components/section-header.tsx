import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag: string;
  header: string;
  span: string;
  description?: string;
}

const SectionHeader = ({
  tag,
  header,
  span,
  description,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16",
        inter.className,
      )}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-px bg-new-dark/30" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-new-neutral font-semibold">
            {tag}
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-new-dark tracking-tighter leading-[1.05]">
          {header}{" "}
          <span className="bg-new-accent px-1.5 shadow-[8px_10px_0px_0px_#1a1a1a]">
            {span}
          </span>
        </h2>
      </div>
      <p className="text-new-neutral text-sm sm:text-base max-w-xs sm:max-w-sm leading-relaxed sm:text-right">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
