import { inter, playfair } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const heroContent = {
  title: {
    line1: "Welcome to,",
    line2: "Miracle IT",
    line3: "Solutions",
  },
  subtitle: "A Complete Solution to customize softwares",
  cta: {
    primary: "Get Started",
    secondary: "View Our Work",
  },
};

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Subtle grid background */}
      {/* <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      /> */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center py-24 text-center sm:py-32">
          {/* Main heading */}
          <div className="mb-8">
            <h1
              className={cn(
                "block text-[clamp(3.2rem,10vw,8rem)] italic leading-[0.90] tracking-tight text-new-dark",
                playfair.className,
              )}
            >
              {heroContent.title.line1}
            </h1>

            <div className="mt-2 flex flex-wrap items-end justify-center gap-2 sm:mt-3 sm:gap-4">
              <h1
                className={cn(
                  "text-[clamp(2.2rem,7vw,5.5rem)] font-black leading-tight tracking-tighter text-new-dark",
                  inter.className,
                )}
              >
                {heroContent.title.line2}
              </h1>
              <h1
                className={cn(
                  "text-[clamp(2.2rem,7vw,5.5rem)] font-black leading-tight tracking-tighter",
                  inter.className,
                )}
              >
                <span className="inline-block border-2 border-[#1a1a1a] bg-new-accent px-2 leading-tight shadow-[6px_6px_0px_0px_#1a1a1a] sm:px-3">
                  {heroContent.title.line3}
                </span>
              </h1>
            </div>
          </div>

          {/* Subtitle — redesigned */}
          <div className="mb-10 flex flex-col items-center gap-0 sm:mb-12">
            {/* Top rule */}
            {/* <div className="flex items-center gap-3 mb-5">
              <div className="w-12 sm:w-16 h-[2px] bg-[#1a1a1a]/15" />
              <div className="w-2 h-2 bg-new-accent border-2 border-[#1a1a1a] rotate-45 shrink-0" />
              <div className="w-12 sm:w-16 h-[2px] bg-[#1a1a1a]/15" />
            </div> */}

            {/* Subtitle stamp */}
            <div className="border-2 border-[#1a1a1a] bg-[#f0f0e8] px-6 py-3 shadow-[4px_4px_0px_0px_#1a1a1a]">
              <p
                className={cn(
                  "text-sm font-black uppercase tracking-[0.2em] text-new-dark sm:text-base",
                  inter.className,
                )}
              >
                {heroContent.subtitle}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mb-14 flex flex-col items-center gap-3 sm:mb-16 sm:flex-row sm:gap-4">
            <Link
              href="/#contact"
              className={cn(
                "inline-flex items-center gap-2 border-2 border-[#1a1a1a] bg-new-accent px-6 py-3 text-sm font-black uppercase tracking-widest text-new-dark shadow-[4px_5px_0px_0px_#1a1a1a] transition-all duration-200 ease-out hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_#1a1a1a] sm:px-8",
                inter.className,
              )}
            >
              {heroContent.cta.primary}
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/#features"
              className={cn(
                "inline-flex items-center gap-2 border-2 border-[#1a1a1a] bg-[#f0f0e8] px-6 py-3 text-sm font-black uppercase tracking-widest text-new-dark shadow-[4px_5px_0px_0px_#1a1a1a] transition-all duration-200 ease-out hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_#1a1a1a] sm:px-8",
                inter.className,
              )}
            >
              {heroContent.cta.secondary}
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-8 w-5 justify-center border-2 border-[#1a1a1a] pt-1.5 sm:h-10 sm:w-6 sm:pt-2">
              <div className="h-2 w-1 animate-bounce bg-new-dark" />
            </div>
            <span
              className={cn(
                "text-[10px] font-semibold uppercase tracking-[0.25em] text-new-neutral/70",
                inter.className,
              )}
            >
              Scroll
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
