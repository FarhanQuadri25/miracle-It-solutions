import { inter, playfair } from '@/lib/fonts';
import { cn } from '@/lib/utils';

const heroContent = {
    title: {
        line1: 'Welcome to,',
        line2: 'Miracle IT',
        line3: "Solutions"
    },
    subtitle: "A Complete solution to Customize Softwares, Web Applications And Websites.",
    users: {
        count: '50k+',
        images: [
            'https://i.pravatar.cc/100?img=1',
            'https://i.pravatar.cc/100?img=2',
            'https://i.pravatar.cc/100?img=3',
        ],
    },
};

const Hero = () => {
    return (
        <section id='home' className='min-h-screen border-y overflow-hidden relative'>
            <div className='max-w-7xl mx-auto border-x-2 border-new-dark/10 px-5 sm:px-8 py-5 relative min-h-screen'>

                {/* Centered content */}
                <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center py-24 sm:py-32">

                    {/* Eyebrow pill */}
                    {/* <div className="flex items-center gap-3 mb-8 sm:mb-10">
                        <div className="w-6 sm:w-10 h-px bg-new-dark/40" />
                        <span className={cn(
                            "text-[10px] sm:text-xs uppercase tracking-[0.35em] text-new-neutral font-semibold",
                            inter.className
                        )}>
                            Trusted IT Partner
                        </span>
                        <div className="w-6 sm:w-10 h-px bg-new-dark/40" />
                    </div> */}

                    {/* Main heading */}
                    <div className="mb-6 sm:mb-8">
                        <h1 className={cn(
                            "text-[clamp(3.2rem,10vw,8rem)] text-new-dark italic leading-[0.88] tracking-tight block",
                            playfair.className
                        )}>
                            {heroContent.title.line1}
                        </h1>

                        <div className="flex items-end justify-center gap-2 sm:gap-4 flex-wrap mt-2 sm:mt-3">
                            <h1 className={cn(
                                "text-[clamp(2.2rem,7vw,5.5rem)] font-bold text-new-dark tracking-tighter leading-tight",
                                inter.className
                            )}>
                                {heroContent.title.line2}
                            </h1>
                            <h1 className={cn(
                                "text-[clamp(2.2rem,7vw,5.5rem)] font-bold tracking-tighter leading-tight",
                                inter.className
                            )}>
                                <span className='bg-new-accent px-2 sm:px-3 inline-block leading-tight'>
                                    {heroContent.title.line3}
                                </span>
                            </h1>
                        </div>
                    </div>

                    {/* Centered divider */}
                    <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
                        <div className="w-12 sm:w-16 h-px bg-new-dark/30" />
                        <div className="w-1.5 h-1.5 bg-new-accent rotate-45 shrink-0" />
                        <div className="w-12 sm:w-16 h-px bg-new-dark/30" />
                    </div>

                    {/* Subtitle */}
                    <p className={cn(
                        "text-new-neutral text-base sm:text-lg max-w-xs sm:max-w-lg leading-relaxed mb-10 sm:mb-14",
                        inter.className
                    )}>
                        {heroContent.subtitle}
                    </p>


                    {/* Scroll indicator */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-5 sm:w-6 h-8 sm:h-10 rounded-full border-2 border-new-neutral/50 flex justify-center pt-1.5 sm:pt-2">
                            <div className="w-1 h-2 bg-new-neutral rounded-full animate-bounce" />
                        </div>
                        <span className={cn(
                            "text-[10px] uppercase tracking-[0.25em] text-new-neutral/70",
                            inter.className
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