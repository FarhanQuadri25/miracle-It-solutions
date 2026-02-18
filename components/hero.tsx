import { inter, playfair } from '@/lib/fonts';
import { cn } from '@/lib/utils';

// Hero Content Data
const heroContent = {
    title: {
        line1: 'Welcome to,',
        line2: 'Miracle IT',
        line3: "Solutions"
    },
    subtitle: "A Complete solution to Customize Softwares, Web Applications And Webistes.",
    users: {
        count: '50k+',
        images: [
            'https://i.pravatar.cc/100?img=1',
            'https://i.pravatar.cc/100?img=2',
            'https://i.pravatar.cc/100?img=3',
        ],
    },
};

// App Transaction Data
const appTransactions = [
    { name: 'Costa Coffee', date: 'Wed 2 March', amount: '11.40 €', icon: '☕' },
    { name: 'Grover', date: 'Wed 2 February', amount: '29.00 €', icon: '📦' },
    { name: 'Figma Team', date: 'Local transfer', amount: '90.45 €', icon: '🎨' },
    { name: 'Dropbox', date: 'Team license', amount: '11.90 €', icon: '📁' },
    { name: 'Uber', date: 'Taxi ride', amount: '13.81 €', icon: '🚗' },
    { name: 'Costa Coffee', date: 'Expense pending', amount: '8.00 €', icon: '☕' },
];

const Hero = () => {
    return (
        <section id='home' className='border-y'>
            <div className='max-w-7xl mx-auto border-x-2 px-8 py-5'>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h1 className={cn("text-6xl md:text-7xl text-new-dark italic", playfair.className)}>
                                {heroContent.title.line1}
                            </h1>
                            <h1 className={cn("text-5xl md:text-6xl font-bold text-new-dark tracking-tighter leading-tight", inter.className)}>
                                {heroContent.title.line2} <span className='bg-new-accent'>{heroContent.title.line3}</span>
                            </h1>
                        </div>

                        <p className={cn("text-new-neutral text-lg max-w-md leading-relaxed", inter.className)}>
                            {heroContent.subtitle}
                        </p>

                        {/* <div className={cn("flex items-center gap-4", inter.className)}>
                            <button className="bg-[#2d2d2d] text-gray-300 px-6 py-3.5 rounded-full text-base font-medium flex items-center gap-2 hover:bg-new-dark transition-colors shadow-2xl">
                                Get the app
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                            <button className="bg-[#e5e5e5] text-new-dark px-6 py-3.5 rounded-full text-base font-medium hover:bg-[#d4d4d4] transition-colors">
                                View Demo
                            </button>
                        </div> */}
{/* 
                        <div className={cn("flex items-center gap-3", inter.className)}>
                            <div className="flex -space-x-2">
                                {heroContent.users.images.map((img, index) => (
                                    <div
                                        key={index}
                                        className="w-10 h-10 rounded-full bg-[#2d2d2d] border-2 border-new-light-color overflow-hidden"
                                    >
                                        <img src={img} alt={`User ${index + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <a href="#" className="text-new-dark text-sm font-medium flex items-center gap-1 hover:text-new-neutral transition-colors">
                                Join the {heroContent.users.count} Users
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div> */}
                    </div>

                    {/* Right Content - Tilted Phone */}
                    <div className='relative flex justify-center items-center h-[800px] bg-[#3333] rounded-2xl'>
                        <div className='relative' style={{ perspective: '1500px' }}>

                            {/* <div
                                className='relative'
                            >

                                <div className='relative w-72 h-[580px] bg-new-dark rounded-[3rem] p-2 shadow-2xl'>
                                    <div className='w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative'>
                             
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-new-dark rounded-b-2xl z-10"></div>

                         
                                        <div className="p-6 pt-10">
                                            <div className="flex items-center justify-between mb-6">
                                                <span className="text-xs text-new-neutral">9:41</span>
                                                <div className="flex gap-1">
                                                    <div className="w-4 h-4 bg-new-dark rounded-sm"></div>
                                                    <div className="w-4 h-4 bg-new-dark rounded-sm"></div>
                                                </div>
                                            </div>

                                            <h3 className="text-lg font-bold text-new-dark mb-4">Miracle IT Solutions</h3>

                                            <div className="space-y-3">
                                                {appTransactions.map((item, i) => (
                                                    <div key={i} className="flex items-center justify-between py-2 border-b border-[#f0f0f0]">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-8 h-8 bg-new-light-color rounded-full flex items-center justify-center text-sm">
                                                                {item.icon}
                                                            </div>
                                                            <div>
                                                                <p className="text-sm font-medium text-new-dark">{item.name}</p>
                                                                <p className="text-xs text-new-neutral">{item.date}</p>
                                                            </div>
                                                        </div>
                                                        <span className="text-sm font-medium text-new-dark">{item.amount}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                             
                                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-[#f0f0f0] flex items-center justify-around px-6">
                                            <div className="w-6 h-6 bg-new-dark rounded-full"></div>
                                            <div className="w-6 h-6 bg-[#d4d4d4] rounded-full"></div>
                                            <div className="w-6 h-6 bg-[#d4d4d4] rounded-full"></div>
                                            <div className="w-6 h-6 bg-[#d4d4d4] rounded-full"></div>
                                        </div>
                                    </div>
                                </div>

                             
                                <div
                                    className="absolute -top-4 -right-8 bg-new-accent text-new-dark px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg"
                                    style={{
                                        transform: 'rotate(12deg) translateZ(30px)',
                                    }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                    </svg>
                                    See New Offers
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;