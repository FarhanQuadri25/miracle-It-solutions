"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {
  //   ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Home,
  ArrowLeft,
} from "lucide-react";
import type { FeatureDetail } from "@/lib/feature-data";
import { AspectRatio } from "./ui/aspect-ratio";

const TAG_STYLES: Record<string, string> = {
  Enterprise: "bg-indigo-100 text-indigo-800 border border-indigo-400",
  Design: "bg-fuchsia-100 text-fuchsia-800 border border-fuchsia-400",
  Engineering: "bg-teal-100 text-teal-800 border border-teal-400",
  Growth: "bg-orange-100 text-orange-800 border border-orange-400",
  Productivity: "bg-lime-100 text-lime-800 border border-lime-400",
};

// ── Photo Slider ──────────────────────────────────────────────
function PhotoSlider({ photos, name }: { photos: string[]; name: string }) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + photos.length) % photos.length),
    [photos.length],
  );

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % photos.length),
    [photos.length],
  );

  // Don't render anything if photos array is invalid or empty
  if (!photos || !Array.isArray(photos) || photos.length === 0) {
    return null;
  }

  // Also ensure the current photo exists
  if (!photos[current]) {
    return null;
  }

  return (
    <div className="border-2 border-[#1a1a1a] shadow-[4px_4px_0px_0px_#1a1a1a] overflow-hidden">
      {/* Slider header */}
      <div className="bg-[#1a1a1a] px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#ff5f57]" />
          <div className="w-2 h-2 bg-[#febc2e]" />
          <div className="w-2 h-2 bg-[#28c840]" />
        </div>
        <span
          className={cn(
            "text-[10px] uppercase tracking-[0.3em] text-[#f0f0e8]/50 font-bold",
            inter.className,
          )}>
          Gallery — {String(current + 1).padStart(2, "0")} /{" "}
          {String(photos.length).padStart(2, "0")}
        </span>
      </div>

      {/* Image area with AspectRatio - using your image dimensions 1600x838 */}
      <AspectRatio ratio={1600 / 838} className="bg-[#f0f0e8]">
        <div className="relative w-full h-full">
          <Image
            src={photos[current]}
            alt={`${name} screenshot ${current + 1}`}
            fill
            className="object-contain"
            priority={current === 0}
          />

          {photos.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#f0f0e8] border-2 border-[#1a1a1a] flex items-center justify-center shadow-[2px_2px_0px_0px_#1a1a1a] hover:-translate-y-[calc(50%+2px)] hover:translate-x-0.5 hover:shadow-[1px_1px_0px_0px_#1a1a1a] transition-all duration-150 z-10"
                aria-label="Previous">
                <ChevronLeft size={16} className="text-new-dark" />
              </button>

              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#f0f0e8] border-2 border-[#1a1a1a] flex items-center justify-center shadow-[2px_2px_0px_0px_#1a1a1a] hover:-translate-y-[calc(50%+2px)] hover:-translate-x-0.5 hover:shadow-[1px_1px_0px_0px_#1a1a1a] transition-all duration-150 z-10"
                aria-label="Next">
                <ChevronRight size={16} className="text-new-dark" />
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={cn(
                      "w-2 h-2 border border-[#1a1a1a] transition-all duration-150",
                      i === current
                        ? "bg-new-accent"
                        : "bg-[#f0f0e8]/70 hover:bg-[#f0f0e8]",
                    )}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </AspectRatio>
    </div>
  );
}
// ── Sidebar Nav ───────────────────────────────────────────────
function SidebarNav({
  features,
  activeSlug,
}: {
  features: FeatureDetail[];
  activeSlug: string;
}) {
  return (
    <div className="border-2 border-[#1a1a1a] shadow-[4px_4px_0px_0px_#1a1a1a] overflow-hidden">
      {/* Nav header */}
      <div className="bg-[#1a1a1a] px-5 py-4">
        <p
          className={cn(
            "text-[10px] uppercase tracking-[0.3em] text-[#f0f0e8]/40 font-bold",
            inter.className,
          )}>
          All Services
        </p>
      </div>

      {/* Nav items */}
      <div className="divide-y-2 divide-[#1a1a1a]/10">
        {features.map((f, i) => {
          const Icon = f.icon;
          const isActive = f.slug === activeSlug;

          return (
            <Link
              key={f.slug}
              href={`/features/${f.slug}`}
              className={cn(
                "flex items-center gap-3 px-5 py-4 transition-all duration-150 group",
                isActive ? "bg-[#1a1a1a]" : "bg-[#f0f0e8] hover:bg-white",
              )}>
              {/* Index */}
              <span
                className={cn(
                  "text-[10px] font-black tabular-nums shrink-0 w-5",
                  isActive ? "text-new-accent" : "text-[#1a1a1a]/20",
                )}>
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div
                className={cn(
                  "w-7 h-7 flex items-center justify-center shrink-0 border-2 transition-colors duration-150",
                  isActive
                    ? "bg-new-accent border-new-accent"
                    : "bg-white border-[#1a1a1a]/20 group-hover:border-[#1a1a1a]",
                )}>
                <Icon
                  size={13}
                  className={isActive ? "text-new-dark" : "text-new-dark"}
                />
              </div>

              {/* Label */}
              <span
                className={cn(
                  "text-xs font-black uppercase tracking-tight leading-tight flex-1",
                  inter.className,
                  isActive
                    ? "text-[#f0f0e8]"
                    : "text-new-dark group-hover:text-new-dark",
                )}>
                {f.name}
              </span>

              {/* Active indicator */}
              {isActive && (
                <div className="w-1.5 h-1.5 bg-new-accent shrink-0" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// ── Main Layout ───────────────────────────────────────────────
interface FeatureDetailLayoutProps {
  feature: FeatureDetail;
  allFeatures: FeatureDetail[];
}

export default function FeatureDetailLayout({
  feature,
  allFeatures,
}: FeatureDetailLayoutProps) {
  const Icon = feature.icon;

  const currentIndex = allFeatures.findIndex((f) => f.slug === feature.slug);
  const prevFeature = currentIndex > 0 ? allFeatures[currentIndex - 1] : null;
  const nextFeature =
    currentIndex < allFeatures.length - 1
      ? allFeatures[currentIndex + 1]
      : null;

  return (
    <div className={cn("min-h-screen bg-[#f0f0e8]", inter.className)}>
      {/* Subtle grid */}
      <div
        className="fixed inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-new-neutral hover:text-new-dark transition-colors">
            <Home size={12} />
            Home
          </Link>
          <span className="text-[#1a1a1a]/20 font-black">/</span>
          <Link
            href="/#features"
            className="text-[11px] font-bold uppercase tracking-widest text-new-neutral hover:text-new-dark transition-colors">
            Services
          </Link>
          <span className="text-[#1a1a1a]/20 font-black">/</span>
          <span className="text-[11px] font-black uppercase tracking-widest text-new-dark">
            {feature.name}
          </span>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* ── RIGHT COLUMN — Sidebar ── */}
          <div className="lg:col-span-4 space-y-5">
            {/* All services nav */}
            <SidebarNav features={allFeatures} activeSlug={feature.slug} />

            {/* CTA card */}
            {/* <div className="bg-[#1a1a1a] border-2 border-[#1a1a1a] shadow-[4px_4px_0px_0px_#1a1a1a] overflow-hidden">
              <div className="p-6 space-y-4">
                <p
                  className={cn(
                    "text-[10px] uppercase tracking-[0.3em] text-new-accent font-bold",
                    inter.className,
                  )}>
                  Interested?
                </p>
                <p
                  className={cn(
                    "text-[#f0f0e8] font-black text-lg uppercase tracking-tight leading-tight",
                    inter.className,
                  )}>
                  Let&apos;s talk about your project.
                </p>
                <p className="text-[#f0f0e8]/50 text-sm font-medium leading-relaxed">
                  Get a free consultation and tailored proposal within 24 hours.
                </p>
                <Link
                  href="/#contact"
                  className={cn(
                    "flex items-center justify-center gap-2 w-full py-3 bg-new-accent text-new-dark text-xs font-black uppercase tracking-widest border-2 border-[#f0f0e8]/20 shadow-[3px_3px_0px_0px_rgba(240,240,232,0.15)] hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[1px_1px_0px_0px_rgba(240,240,232,0.15)] transition-all duration-150",
                    inter.className,
                  )}>
                  Get a Free Quote
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div> */}

            {/* Back to home */}
            <Link
              href="/#features"
              className={cn(
                "flex items-center justify-center gap-2 w-full py-3 bg-[#f0f0e8] text-new-dark text-xs font-black uppercase tracking-widest border-2 border-[#1a1a1a] shadow-[3px_3px_0px_0px_#1a1a1a] hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[1px_1px_0px_0px_#1a1a1a] transition-all duration-150",
                inter.className,
              )}>
              <ArrowLeft size={13} />
              Back to All Services
            </Link>
          </div>

          {/* ── LEFT COLUMN — Content ── */}
          <div className="lg:col-span-8 space-y-6">
            {/* Hero card */}
            <div className="bg-white border-2 border-[#1a1a1a] shadow-[6px_6px_0px_0px_#1a1a1a] overflow-hidden">
              {/* Card header bar */}
              <div className="bg-[#1a1a1a] px-6 py-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-new-accent flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-new-dark" />
                  </div>
                  <div>
                    <p
                      className={cn(
                        "text-[9px] uppercase tracking-[0.3em] text-[#f0f0e8]/40 font-bold mb-0.5",
                        inter.className,
                      )}>
                      Service
                    </p>
                    <h1
                      className={cn(
                        "text-[#f0f0e8] font-black text-lg uppercase tracking-tight leading-tight",
                        inter.className,
                      )}>
                      {feature.name}
                    </h1>
                  </div>
                </div>
                <span
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-widest px-3 py-1.5",
                    TAG_STYLES[feature.tag],
                  )}>
                  {feature.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Tagline */}
                <p
                  className={cn(
                    "text-2xl sm:text-3xl font-black text-new-dark uppercase tracking-tight leading-tight border-b-2 border-[#1a1a1a] pb-5",
                    inter.className,
                  )}>
                  {feature.tagline}
                </p>

                {/* Long description */}
                <p className="text-new-neutral text-base leading-relaxed font-medium">
                  {feature.longDescription}
                </p>

                {/* Highlights grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {feature.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="bg-[#f0f0e8] border-2 border-[#1a1a1a] p-4 shadow-[2px_2px_0px_0px_#1a1a1a]">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-black text-new-accent tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1 h-px bg-[#1a1a1a]/10" />
                      </div>
                      <h4
                        className={cn(
                          "text-new-dark font-black text-sm uppercase tracking-tight mb-1",
                          inter.className,
                        )}>
                        {h.title}
                      </h4>
                      <p className="text-new-neutral text-xs leading-relaxed font-medium">
                        {h.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Photo slider */}
            <PhotoSlider photos={feature.photos} name={feature.name} />

            {/* Prev / Next navigation */}
            <div className="grid grid-cols-2 gap-4">
              {prevFeature ? (
                <Link
                  href={`/features/${prevFeature.slug}`}
                  className="flex items-center gap-3 p-4 bg-white border-2 border-[#1a1a1a] shadow-[3px_3px_0px_0px_#1a1a1a] hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[1px_1px_0px_0px_#1a1a1a] transition-all duration-150 group">
                  <ArrowLeft
                    size={14}
                    className="text-new-neutral group-hover:text-new-dark transition-colors shrink-0"
                  />
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "text-[9px] uppercase tracking-[0.25em] text-new-neutral font-bold mb-0.5",
                        inter.className,
                      )}>
                      Previous
                    </p>
                    <p
                      className={cn(
                        "text-xs font-black text-new-dark uppercase tracking-tight truncate",
                        inter.className,
                      )}>
                      {prevFeature.name}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextFeature ? (
                <Link
                  href={`/features/${nextFeature.slug}`}
                  className="flex items-center justify-end gap-3 p-4 bg-white border-2 border-[#1a1a1a] shadow-[3px_3px_0px_0px_#1a1a1a] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[1px_1px_0px_0px_#1a1a1a] transition-all duration-150 group text-right">
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "text-[9px] uppercase tracking-[0.25em] text-new-neutral font-bold mb-0.5",
                        inter.className,
                      )}>
                      Next
                    </p>
                    <p
                      className={cn(
                        "text-xs font-black text-new-dark uppercase tracking-tight truncate",
                        inter.className,
                      )}>
                      {nextFeature.name}
                    </p>
                  </div>
                  <ChevronRight
                    size={14}
                    className="text-new-neutral group-hover:text-new-dark transition-colors shrink-0"
                  />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
