"use client";

import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
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
    <div className="overflow-hidden border-2 border-[#1a1a1a] shadow-[4px_4px_0px_0px_#1a1a1a]">
      {/* Slider header */}
      <div className="flex items-center justify-between bg-[#1a1a1a] px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 bg-[#ff5f57]" />
          <div className="h-2 w-2 bg-[#febc2e]" />
          <div className="h-2 w-2 bg-[#28c840]" />
        </div>
        <span
          className={cn(
            "text-[10px] font-bold uppercase tracking-[0.3em] text-[#f0f0e8]/50",
            inter.className,
          )}
        >
          Gallery — {String(current + 1).padStart(2, "0")} /{" "}
          {String(photos.length).padStart(2, "0")}
        </span>
      </div>

      {/* Image area with AspectRatio - using your image dimensions 1600x838 */}
      <AspectRatio ratio={1600 / 838} className="bg-[#f0f0e8]">
        <div className="relative h-full w-full">
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
                className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center border-2 border-[#1a1a1a] bg-[#f0f0e8] shadow-[2px_2px_0px_0px_#1a1a1a] transition-all duration-150 hover:-translate-y-[calc(50%+2px)] hover:translate-x-0.5 hover:shadow-[1px_1px_0px_0px_#1a1a1a]"
                aria-label="Previous"
              >
                <ChevronLeft size={16} className="text-new-dark" />
              </button>

              <button
                onClick={next}
                className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center border-2 border-[#1a1a1a] bg-[#f0f0e8] shadow-[2px_2px_0px_0px_#1a1a1a] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-[calc(50%+2px)] hover:shadow-[1px_1px_0px_0px_#1a1a1a]"
                aria-label="Next"
              >
                <ChevronRight size={16} className="text-new-dark" />
              </button>

              <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={cn(
                      "h-2 w-2 border border-[#1a1a1a] transition-all duration-150",
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
  onSelect,
  className,
}: {
  features: FeatureDetail[];
  activeSlug: string;
  onSelect?: () => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden border-2 border-[#1a1a1a] shadow-[4px_4px_0px_0px_#1a1a1a]",
        className,
      )}
    >
      <div className="hidden bg-[#1a1a1a] px-5 py-4 sm:flex">
        <p
          className={cn(
            "text-[10px] font-bold uppercase tracking-[0.3em] text-[#f0f0e8]/40",
            inter.className,
          )}
        >
          All Services
        </p>
      </div>
      <div className="divide-y-2 divide-[#1a1a1a]/10">
        {features.map((f, i) => {
          const Icon = f.icon;
          const isActive = f.slug === activeSlug;
          return (
            <Link
              key={f.slug}
              href={`/features/${f.slug}`}
              onClick={onSelect}
              className={cn(
                "group flex items-center gap-3 px-5 py-4 transition-all duration-150",
                isActive ? "bg-[#1a1a1a]" : "bg-[#f0f0e8] hover:bg-white",
              )}
            >
              <span
                className={cn(
                  "w-5 shrink-0 text-[10px] font-black tabular-nums",
                  isActive ? "text-new-accent" : "text-[#1a1a1a]/20",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center border-2 transition-colors duration-150",
                  isActive
                    ? "border-new-accent bg-new-accent"
                    : "border-[#1a1a1a]/20 bg-white group-hover:border-[#1a1a1a]",
                )}
              >
                <Icon size={13} className="text-new-dark" />
              </div>
              <span
                className={cn(
                  "flex-1 text-xs font-black uppercase leading-tight tracking-tight",
                  inter.className,
                  isActive ? "text-[#f0f0e8]" : "text-new-dark",
                )}
              >
                {f.name}
              </span>
              {isActive && (
                <div className="h-1.5 w-1.5 shrink-0 bg-new-accent" />
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
        className="pointer-events-none fixed inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* ── MOBILE SERVICES DRAWER ── */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden",
          sidebarOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      />
      <div
        className={cn(
          "fixed left-0 top-0 z-50 flex h-full w-[85vw] max-w-[340px] flex-col border-r-2 border-[#1a1a1a] bg-[#f0f0e8] transition-transform duration-300 ease-in-out lg:hidden",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex shrink-0 items-center justify-between bg-[#1a1a1a] px-5 py-4">
          <p
            className={cn(
              "text-[10px] font-bold uppercase tracking-[0.3em] text-[#f0f0e8]/40",
              inter.className,
            )}
          >
            All Services
          </p>
          <button
            onClick={() => setSidebarOpen(false)}
            className="flex h-8 w-8 items-center justify-center border-2 border-[#f0f0e8]/20 transition-colors hover:border-new-accent"
          >
            <X size={14} className="text-[#f0f0e8]" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <SidebarNav
            features={allFeatures}
            activeSlug={feature.slug}
            onSelect={() => setSidebarOpen(false)}
          />
        </div>
        <div className="shrink-0 border-t-2 border-[#1a1a1a] p-4">
          <Link
            href="/#features"
            onClick={() => setSidebarOpen(false)}
            className={cn(
              "flex w-full items-center justify-center gap-2 border-2 border-[#1a1a1a] bg-[#f0f0e8] py-3 text-xs font-black uppercase tracking-widest text-new-dark shadow-[2px_2px_0px_0px_#1a1a1a]",
              inter.className,
            )}
          >
            <ArrowLeft size={13} />
            Back to Services
          </Link>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-16">
        {/* ── MOBILE TOP BAR ── */}
        <div className="mb-5 flex items-center justify-between lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center gap-2 border-2 border-[#1a1a1a] bg-[#1a1a1a] px-4 py-2.5 shadow-[2px_2px_0px_0px_#1a1a1a]"
          >
            <Menu size={14} className="text-[#f0f0e8]" />
            <span
              className={cn(
                "text-[10px] font-black uppercase tracking-widest text-[#f0f0e8]",
                inter.className,
              )}
            >
              All Services
            </span>
          </button>
          <Link
            href="/#features"
            className={cn(
              "flex items-center gap-1.5 border-2 border-[#1a1a1a] bg-[#f0f0e8] px-4 py-2.5 text-[10px] font-black uppercase tracking-widest text-new-dark shadow-[2px_2px_0px_0px_#1a1a1a]",
              inter.className,
            )}
          >
            <ArrowLeft size={12} />
            Back
          </Link>
        </div>

        {/* ── BREADCRUMB — desktop only ── */}
        <div className="mb-8 hidden items-center gap-2 lg:flex">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-new-neutral transition-colors hover:text-new-dark"
          >
            <Home size={12} />
            Home
          </Link>
          <span className="font-black text-[#1a1a1a]/20">/</span>
          <Link
            href="/#features"
            className="text-[11px] font-bold uppercase tracking-widest text-new-neutral transition-colors hover:text-new-dark"
          >
            Services
          </Link>
          <span className="font-black text-[#1a1a1a]/20">/</span>
          <span className="text-[11px] font-black uppercase tracking-widest text-new-dark">
            {feature.name}
          </span>
        </div>

        {/* ── TWO COLUMN LAYOUT ── */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-8">
          {/* ── LEFT COLUMN — Content (full width on mobile, 8 cols on desktop) ── */}
          <div className="space-y-5 lg:col-span-8">
            {/* Hero card */}
            <div className="overflow-hidden border-2 border-[#1a1a1a] bg-white shadow-[4px_4px_0px_0px_#1a1a1a] sm:shadow-[6px_6px_0px_0px_#1a1a1a]">
              {/* Card header bar */}
              <div className="flex items-center justify-between gap-3 bg-[#1a1a1a] px-4 py-4 sm:px-6 sm:py-5">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-new-accent sm:h-11 sm:w-11">
                    <Icon size={18} className="text-new-dark" />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "mb-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#f0f0e8]/40",
                        inter.className,
                      )}
                    >
                      Service
                    </p>
                    <h1
                      className={cn(
                        "truncate text-sm font-black uppercase leading-tight tracking-tight text-[#f0f0e8] sm:text-lg",
                        inter.className,
                      )}
                    >
                      {feature.name}
                    </h1>
                  </div>
                </div>
                <span
                  className={cn(
                    "shrink-0 px-2 py-1 text-[9px] font-bold uppercase tracking-widest sm:px-3 sm:py-1.5 sm:text-[10px]",
                    TAG_STYLES[feature.tag],
                  )}
                >
                  {feature.tag}
                </span>
              </div>

              {/* Body */}
              <div className="space-y-5 p-4 sm:space-y-6 sm:p-6 lg:p-8">
                {/* Tagline */}
                <p
                  className={cn(
                    "border-b-2 border-[#1a1a1a] pb-4 text-xl font-black uppercase leading-tight tracking-tight text-new-dark sm:pb-5 sm:text-2xl lg:text-3xl",
                    inter.className,
                  )}
                >
                  {feature.tagline}
                </p>

                {/* Long description */}
                <p className="text-sm font-medium leading-relaxed text-new-neutral sm:text-base">
                  {feature.longDescription}
                </p>

                {/* Highlights grid */}
                <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-2">
                  {feature.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="border-2 border-[#1a1a1a] bg-[#f0f0e8] p-4 shadow-[2px_2px_0px_0px_#1a1a1a]"
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-[10px] font-black tabular-nums text-new-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="h-px flex-1 bg-[#1a1a1a]/10" />
                      </div>
                      <h4
                        className={cn(
                          "mb-1 text-sm font-black uppercase tracking-tight text-new-dark",
                          inter.className,
                        )}
                      >
                        {h.title}
                      </h4>
                      <p className="text-xs font-medium leading-relaxed text-new-neutral">
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
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {prevFeature ? (
                <Link
                  href={`/features/${prevFeature.slug}`}
                  className="group flex items-center gap-2 border-2 border-[#1a1a1a] bg-white p-3 shadow-[2px_2px_0px_0px_#1a1a1a] transition-all duration-150 hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[1px_1px_0px_0px_#1a1a1a] sm:gap-3 sm:p-4 sm:shadow-[3px_3px_0px_0px_#1a1a1a]"
                >
                  <ArrowLeft
                    size={13}
                    className="shrink-0 text-new-neutral transition-colors group-hover:text-new-dark"
                  />
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "mb-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-new-neutral",
                        inter.className,
                      )}
                    >
                      Prev
                    </p>
                    <p
                      className={cn(
                        "truncate text-[10px] font-black uppercase tracking-tight text-new-dark sm:text-xs",
                        inter.className,
                      )}
                    >
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
                  className="group flex items-center justify-end gap-2 border-2 border-[#1a1a1a] bg-white p-3 text-right shadow-[2px_2px_0px_0px_#1a1a1a] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[1px_1px_0px_0px_#1a1a1a] sm:gap-3 sm:p-4 sm:shadow-[3px_3px_0px_0px_#1a1a1a]"
                >
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "mb-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-new-neutral",
                        inter.className,
                      )}
                    >
                      Next
                    </p>
                    <p
                      className={cn(
                        "truncate text-[10px] font-black uppercase tracking-tight text-new-dark sm:text-xs",
                        inter.className,
                      )}
                    >
                      {nextFeature.name}
                    </p>
                  </div>
                  <ChevronRight
                    size={13}
                    className="shrink-0 text-new-neutral transition-colors group-hover:text-new-dark"
                  />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>

          {/* ── RIGHT COLUMN — Sidebar (desktop only) ── */}
          <div className="hidden flex-col gap-5 lg:col-span-4 lg:flex">
            <SidebarNav features={allFeatures} activeSlug={feature.slug} />
            <Link
              href="/#features"
              className={cn(
                "flex w-full items-center justify-center gap-2 border-2 border-[#1a1a1a] bg-[#f0f0e8] py-3 text-xs font-black uppercase tracking-widest text-new-dark shadow-[3px_3px_0px_0px_#1a1a1a] transition-all duration-150 hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[1px_1px_0px_0px_#1a1a1a]",
                inter.className,
              )}
            >
              <ArrowLeft size={13} />
              Back to All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
