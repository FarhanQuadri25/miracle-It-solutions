import { inter } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import {
    School,
    Layout,
    Code,
    Globe,
    Brush,
    Settings,
    ArrowUpRight,
    LucideIcon
} from "lucide-react"

interface Feature {
    name: string
    description: string
    icon: LucideIcon
}

const NEW_FEATURES: Feature[] = [
    {
        name: "School Management Software",
        description:
            "Streamline attendance, grading, and administration with our efficient school software solutions.",
        icon: School,
    },
    {
        name: "Landing Page Development",
        description:
            "We create high-converting, responsive landing pages tailored to your business needs.",
        icon: Layout,
    },
    {
        name: "Full-Stack Development",
        description:
            "End-to-end development for web applications, from frontend to backend and databases.",
        icon: Code,
    },
    {
        name: "SEO & Performance Optimization",
        description:
            "We optimize your websites for speed, SEO, and scalability for better search engine rankings.",
        icon: Globe,
    },
    {
        name: "UI/UX Design",
        description:
            "Create visually appealing, user-friendly interfaces with a focus on experience and accessibility.",
        icon: Brush,
    },
    {
        name: "Custom Web Applications",
        description:
            "Develop tailored web applications to meet unique business requirements with modern technologies.",
        icon: Settings,
    },
]

// Individual Feature Card Component
function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
    const Icon = feature.icon

    return (
        <div
            className={cn(
                "group relative bg-[#fafafa] rounded-2xl p-6 border border-[#e5e5e5] hover:border-new-dark transition-all duration-300",
                "hover:shadow-xl hover:shadow-new-dark/5 hover:-translate-y-1",
                "overflow-hidden",
                inter.className
            )}
        >
            {/* Background Gradient on Hover */}
            <div className="absolute inset-0 bg-linear-to-br from-new-accent/0 via-transparent to-new-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-new-light-color rounded-full -translate-x-16 -translate-y-16 group-hover:bg-new-accent transition-colors duration-300" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Icon Container */}
                <div className="mb-4 relative">
                    <div className="w-12 h-12 bg-new-dark rounded-xl flex items-center justify-center group-hover:bg-new-accent transition-colors duration-300">
                        <Icon
                            size={24}
                            className="text-white group-hover:text-new-dark transition-colors duration-300"
                        />
                    </div>
                </div>

                {/* Text Content */}
                <h3 className="text-new-dark font-bold text-lg mb-2 group-hover:text-new-dark transition-colors">
                    {feature.name}
                </h3>
                <p className="text-new-neutral text-sm leading-relaxed mb-4">
                    {feature.description}
                </p>

            </div>

            {/* Bottom Line Accent */}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-new-accent group-hover:w-full transition-all duration-500" />
        </div>
    )
}

// Main Features Section Component
export function FeaturesSection() {
    return (
        <section id="features" className="py-20 px-8 max-w-7xl mx-auto border-x-2">
            {/* Section Header */}
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 bg-new-accent text-new-dark text-xs font-bold rounded-full mb-4">
                    OUR SERVICES
                </span>
                <h2 className={cn("text-4xl md:text-5xl font-bold text-new-dark tracking-tighter leading-tight mb-1", inter.className)}>
                    What We Do Best
                </h2>
                <p className={cn("text-new-neutral text-lg max-w-3xl mx-auto font-medium tracking-tighter leading-tight", inter.className)}>
                    Comprehensive digital solutions tailored to elevate your business and streamline operations
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {NEW_FEATURES.map((feature, index) => (
                    <FeatureCard key={feature.name} feature={feature} index={index} />
                ))}
            </div>
        </section>
    )
}

// Alternative: Compact Card Version (FeatureCardCompact)
export function FeatureCardCompact({ feature, index }: { feature: Feature; index: number }) {
    const Icon = feature.icon

    return (
        <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#e5e5e5]">
            <div className="shrink-0 w-10 h-10 bg-new-light-color group-hover:bg-new-accent rounded-lg flex items-center justify-center transition-colors">
                <Icon size={20} className="text-new-neutral group-hover:text-new-dark" />
            </div>
            <div>
                <h4 className="font-semibold text-new-dark mb-1">{feature.name}</h4>
                <p className="text-sm text-new-neutral line-clamp-2">{feature.description}</p>
            </div>
        </div>
    )
}

// Alternative: Horizontal Card Version (FeatureCardHorizontal)
export function FeatureCardHorizontal({ feature }: { feature: Feature }) {
    const Icon = feature.icon

    return (
        <div className="group relative flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-2xl border border-[#e5e5e5] hover:border-new-accent transition-all duration-300">
            <div className="shrink-0 w-16 h-16 bg-new-dark rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon size={28} className="text-new-accent" />
            </div>
            <div className="flex-1">
                <h3 className="text-xl font-bold text-new-dark mb-2">{feature.name}</h3>
                <p className="text-new-neutral leading-relaxed">{feature.description}</p>
            </div>
            <div className="shrink-0 self-center">
                <div className="w-10 h-10 rounded-full border border-[#e5e5e5] flex items-center justify-center group-hover:bg-new-accent group-hover:border-new-accent transition-all">
                    <ArrowUpRight size={18} className="text-new-neutral group-hover:text-new-dark" />
                </div>
            </div>
        </div>
    )
}

// Default export for the main grid layout
export default FeaturesSection