import { inter } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import {
    Github,
    Twitter,
    Linkedin,
    Instagram,
    Zap
} from "lucide-react"

const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
]

export function Footer() {
    return (
        <footer className={cn("bg-new-dark text-white tracking-tighter leading-tight", inter.className)}>
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-new-accent rounded-xl flex items-center justify-center">
                                <Zap size={20} className="text-new-dark" />
                            </div>
                            <span className="text-xl font-bold">Miracle It Solutions</span>
                        </div>



                        {/* Contact Info */}
                        {/* <div className="space-y-3">
                            <a href="mailto:hello@Miracle IT Solutions.com" className="flex items-center gap-3 text-[#9a9a9a] hover:text-new-accent transition-colors group">
                                <Mail size={18} />
                                <span>hello@Miracle IT Solutions.com</span>
                                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <a href="tel:+1234567890" className="flex items-center gap-3 text-[#9a9a9a] hover:text-new-accent transition-colors group">
                                <Phone size={18} />
                                <span>+1 (234) 567-890</span>
                                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <div className="flex items-center gap-3 text-[#9a9a9a]">
                                <MapPin size={18} />
                                <span>San Francisco, CA</span>
                            </div>
                        </div> */}

                        {/* Social Links */}
                        {/* <div className="flex items-center gap-3 pt-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 bg-white/5 hover:bg-new-accent rounded-xl flex items-center justify-center transition-all duration-300 group"
                                    aria-label={social.name}
                                >
                                    <social.icon size={18} className="text-[#9a9a9a] group-hover:text-new-dark transition-colors" />
                                </a>
                            ))}
                        </div> */}
                    </div>


                </div>
            </div>

            {/* Newsletter Section
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold text-white mb-1">Stay in the loop</h4>
              <p className="text-[#9a9a9a] text-sm">Get the latest updates and news delivered to your inbox.</p>
            </div>
            <form className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-[#9a9a9a] focus:outline-none focus:border-new-accent transition-colors w-full md:w-64"
              />
              <button className="px-6 py-3 bg-new-accent text-new-dark font-semibold rounded-xl hover:bg-[#e0ff33] transition-colors flex items-center gap-2 whitespace-nowrap">
                Subscribe
                <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div> */}

            {/* Bottom Bar */}
            {/* <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#9a9a9a]">
            <p>© {new Date().getFullYear()} Miracle IT Solutions. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-new-accent transition-colors">Privacy</a>
              <a href="#" className="hover:text-new-accent transition-colors">Terms</a>
              <a href="#" className="hover:text-new-accent transition-colors">Cookies</a>
              <a href="#" className="hover:text-new-accent transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div> */}
        </footer>
    )
}



export default Footer

// Alternative: Minimal Footer Version
export function MinimalFooter() {
    return (
        <footer className="bg-new-light-color border-t border-[#e5e5e5]">
            <div className="max-w-7xl mx-auto px-8 py-12">
                <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 bg-new-dark rounded-xl flex items-center justify-center">
                        <Zap size={24} className="text-new-accent" />
                    </div>
                    <p className="text-new-neutral max-w-md">
                        Building the future of financial management.
                        One transaction at a time.
                    </p>
                    <div className="flex items-center gap-6 mt-2">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                className="w-10 h-10 bg-white border border-[#e5e5e5] rounded-full flex items-center justify-center hover:bg-new-dark hover:border-new-dark hover:text-white transition-all group"
                            >
                                <social.icon size={18} className="text-new-neutral group-hover:text-white" />
                            </a>
                        ))}
                    </div>
                    <p className="text-[#9a9a9a] text-sm mt-4">
                        © {new Date().getFullYear()} Miracle IT Solutions. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

