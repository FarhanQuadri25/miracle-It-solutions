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
  subtitle: "Custom software. Scalable web apps. Results that matter.",
  cta: {
    primary: "Get Started",
    secondary: "View Our Work",
  },
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen overflow-hidden relative">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative min-h-screen">
        <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center py-24 sm:py-32">
          {/* Main heading */}
          <div className="mb-8">
            <h1
              className={cn(
                "text-[clamp(3.2rem,10vw,8rem)] text-new-dark italic leading-[0.88] tracking-tight block",
                playfair.className,
              )}>
              {heroContent.title.line1}
            </h1>

            <div className="flex items-end justify-center gap-2 sm:gap-4 flex-wrap mt-2 sm:mt-3">
              <h1
                className={cn(
                  "text-[clamp(2.2rem,7vw,5.5rem)] font-black text-new-dark tracking-tighter leading-tight",
                  inter.className,
                )}>
                {heroContent.title.line2}
              </h1>
              <h1
                className={cn(
                  "text-[clamp(2.2rem,7vw,5.5rem)] font-black tracking-tighter leading-tight",
                  inter.className,
                )}>
                <span className="bg-new-accent border-2 border-[#1a1a1a] shadow-[6px_6px_0px_0px_#1a1a1a] px-2 sm:px-3 inline-block leading-tight">
                  {heroContent.title.line3}
                </span>
              </h1>
            </div>
          </div>

          {/* Subtitle — redesigned */}
          <div className="mb-10 sm:mb-12 flex flex-col items-center gap-0">
            {/* Top rule */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 sm:w-16 h-[2px] bg-[#1a1a1a]/15" />
              <div className="w-2 h-2 bg-new-accent border-2 border-[#1a1a1a] rotate-45 shrink-0" />
              <div className="w-12 sm:w-16 h-[2px] bg-[#1a1a1a]/15" />
            </div>

            {/* Subtitle stamp */}
            <div className="border-2 border-[#1a1a1a] bg-[#f0f0e8] shadow-[4px_4px_0px_0px_#1a1a1a] px-6 py-3">
              <p
                className={cn(
                  "text-new-dark font-black text-sm sm:text-base uppercase tracking-[0.2em]",
                  inter.className,
                )}>
                {heroContent.subtitle}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-14 sm:mb-16">
            <Link
              href="/#contact"
              className={cn(
                "inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-new-accent text-new-dark text-sm font-black border-2 border-[#1a1a1a] shadow-[4px_5px_0px_0px_#1a1a1a] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_#1a1a1a] transition-all duration-200 ease-out uppercase tracking-widest",
                inter.className,
              )}>
              {heroContent.cta.primary}
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/#features"
              className={cn(
                "inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-[#f0f0e8] text-new-dark text-sm font-black border-2 border-[#1a1a1a] shadow-[4px_5px_0px_0px_#1a1a1a] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_#1a1a1a] transition-all duration-200 ease-out uppercase tracking-widest",
                inter.className,
              )}>
              {heroContent.cta.secondary}
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-[#1a1a1a] flex justify-center pt-1.5 sm:pt-2">
              <div className="w-1 h-2 bg-new-dark animate-bounce" />
            </div>
            <span
              className={cn(
                "text-[10px] uppercase tracking-[0.25em] text-new-neutral/70 font-semibold",
                inter.className,
              )}>
              Scroll
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
