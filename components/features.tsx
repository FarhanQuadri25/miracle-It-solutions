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
          "group relative flex flex-col bg-[#f0f0e8] border-2 border-[#1a1a1a]",
          "shadow-[6px_6px_0px_0px_#1a1a1a]",
          "hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_#1a1a1a]",
          "transition-all duration-200 ease-out",
          inter.className,
        )}>
        {/* Dark header bar */}
        <div className="border-b-2 border-[#1a1a1a] bg-[#1a1a1a] text-[#f0f0e8] px-6 py-4 flex justify-between items-center">
          <div className="w-10 h-10 bg-new-accent flex items-center justify-center shrink-0">
            <Icon size={20} className="text-new-dark" />
          </div>
          <span
            className={cn(
              "text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1",
              TAG_STYLES[feature.tag],
            )}>
            {feature.tag}
          </span>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col flex-1">
          {/* Index watermark */}
          <span className="text-6xl font-black leading-none text-[#1a1a1a]/8 select-none mb-3 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Heading */}
          <h3
            className={cn(
              "text-new-dark font-black text-lg uppercase tracking-tight leading-tight pb-4 mb-4 border-b-2 border-[#1a1a1a]",
              inter.className,
            )}>
            {feature.name}
          </h3>

          {/* Description */}
          <p
            className={cn(
              "text-new-neutral text-sm leading-relaxed flex-1",
              inter.className,
            )}>
            {feature.description}
          </p>

          {/* Bottom CTA */}
          <div className="mt-6 flex items-center justify-between">
            <span
              className={cn(
                "text-xs font-semibold uppercase tracking-widest text-new-neutral/50 group-hover:text-new-dark transition-colors duration-200",
                inter.className,
              )}>
              Learn more
            </span>
            <div className="w-7 h-7 border-2 border-[#1a1a1a] bg-[#f0f0e8] group-hover:bg-new-accent flex items-center justify-center transition-all duration-300">
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
      className="px-5 py-2 sm:px-8 max-w-7xl mx-auto border-new-dark/10">
      {/* Section header */}
      <SectionHeader
        tag="Our Services"
        header="What We"
        description="Comprehensive digital solutions designed to elevate your business and
          deliver measurable results."
        span="Build"
      />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {FEATURES.map((feature, i) => (
          <FeatureCard key={feature.name} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
