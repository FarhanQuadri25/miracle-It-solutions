import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./section-header";
import Link from "next/link";
import { FeatureDetail, FEATURES } from "@/lib/feature-data";

const TAG_STYLES: Record<string, string> = {
  Enterprise: "bg-indigo-100 text-indigo-800 border border-indigo-400",
  Design: "bg-fuchsia-100 text-fuchsia-800 border border-fuchsia-400",
  Engineering: "bg-teal-100 text-teal-800 border border-teal-400",
  Growth: "bg-orange-100 text-orange-800 border border-orange-400",
  Productivity: "bg-lime-100 text-lime-800 border border-lime-400",
};

function FeatureCard({
  feature,
  index,
}: {
  feature: FeatureDetail;
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <Link href={`/features/${feature.slug}`}>
      <div
        className={cn(
          "group relative flex flex-col border-2 border-[#1a1a1a] bg-[#f0f0e8]",
          "shadow-[6px_6px_0px_0px_#1a1a1a]",
          "hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_#1a1a1a]",
          "transition-all duration-200 ease-out",
          inter.className,
        )}
      >
        {/* Dark header bar */}
        <div className="flex items-center justify-between border-b-2 border-[#1a1a1a] bg-[#1a1a1a] px-6 py-4 text-[#f0f0e8]">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-new-accent">
            <Icon size={20} className="text-new-dark" />
          </div>
          <span
            className={cn(
              "px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest",
              TAG_STYLES[feature.tag],
            )}
          >
            {feature.tag}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          {/* Index watermark */}
          <span className="text-[#1a1a1a]/8 mb-3 select-none text-6xl font-black tabular-nums leading-none">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Heading */}
          <h3
            className={cn(
              "mb-4 border-b-2 border-[#1a1a1a] pb-4 text-lg font-black uppercase leading-tight tracking-tight text-new-dark",
              inter.className,
            )}
          >
            {feature.name}
          </h3>

          {/* Description */}
          <p
            className={cn(
              "flex-1 text-sm leading-relaxed text-new-neutral",
              inter.className,
            )}
          >
            {feature.description}
          </p>

          {/* Bottom CTA */}
          <div className="mt-6 flex items-center justify-between">
            <span
              className={cn(
                "text-xs font-semibold uppercase tracking-widest text-new-neutral/50 transition-colors duration-200 group-hover:text-new-dark",
                inter.className,
              )}
            >
              Learn more
            </span>
            <div className="flex h-7 w-7 items-center justify-center border-2 border-[#1a1a1a] bg-[#f0f0e8] transition-all duration-300 group-hover:bg-new-accent">
              <ArrowUpRight
                size={13}
                className="text-new-dark transition-colors duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl border-new-dark/10 px-5 py-2 sm:px-8"
    >
      {/* Section header */}
      <SectionHeader
        tag="Our Services"
        header="What We"
        description="Comprehensive digital solutions designed to elevate your business and
          deliver measurable results."
        span="Build"
      />

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {FEATURES.map((feature, i) => (
          <FeatureCard key={feature.name} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
