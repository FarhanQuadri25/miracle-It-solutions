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
        "mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between",
        inter.className,
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="h-px w-6 bg-new-dark/30" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-new-neutral">
            {tag}
          </span>
        </div>
        <h2 className="text-3xl font-bold leading-[1.05] tracking-tighter text-new-dark sm:text-5xl">
          {header}{" "}
          <span className="bg-new-accent px-1.5 shadow-[8px_10px_0px_0px_#1a1a1a]">
            {span}
          </span>
        </h2>
      </div>
      <p className="max-w-xs text-sm leading-relaxed text-new-neutral sm:max-w-sm sm:text-right sm:text-base">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
