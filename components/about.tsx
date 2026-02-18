'use client'

import { inter } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import {
    BarChart3,
    Wallet,
    TrendingUp,
    Shield,
    CreditCard,
    PieChart,
    ArrowUpRight,
    Zap,
    Activity,
    FileText,
    Settings
} from "lucide-react"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

// Chart data
const chartData = [
    { month: "Jan", seriesA: 65, seriesB: 40 },
    { month: "Feb", seriesA: 45, seriesB: 30 },
    { month: "Mar", seriesA: 80, seriesB: 50 },
    { month: "Apr", seriesA: 55, seriesB: 35 },
    { month: "May", seriesA: 70, seriesB: 45 },
    { month: "Jun", seriesA: 90, seriesB: 55 },
]

export default function About() {
    return (
        <div id="about" className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-screen border-x-2 relative overflow-hidden", inter.className)}>
            {/* Background Gradient Fade */}
            <div className="absolute inset-0 bg-linear-to-b from-new-light-color via-transparent to-new-light-color pointer-events-none" />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }} />

            <div className="relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <h1 className={cn('font-bold leading-tight tracking-tighter text-3xl sm:text-4xl lg:text-5xl text-new-dark mb-4', inter.className)}>
                        Beautiful Interfaces That Work
                    </h1>
                    <p className="text-new-neutral text-base sm:text-lg max-w-2xl mx-auto">
                        Clean, intuitive designs with powerful functionality built right in
                    </p>
                </div>

                {/* Dashboard UI */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Main Dashboard Container */}
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-[#e5e5e5] overflow-hidden">
                        {/* Dashboard Header */}
                        <div className="bg-[#fafafa] border-b border-[#e5e5e5] px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57]" />
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#febc2e]" />
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28c840]" />
                            </div>
                            <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-new-neutral">
                                <span className="flex items-center gap-1.5 sm:gap-2">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="hidden sm:inline">Live</span>
                                    <span className="sm:hidden">●</span>
                                </span>
                            </div>
                        </div>

                        {/* Dashboard Content */}
                        <div className="p-4 sm:p-6 lg:p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
                                {/* Sidebar - Hidden on mobile, shown on lg+ */}
                                <div className="hidden lg:block lg:col-span-3 space-y-2">
                                    {[
                                        { icon: BarChart3, label: 'Overview', active: true },
                                        { icon: Activity, label: 'Activity' },
                                        { icon: TrendingUp, label: 'Analytics' },
                                        { icon: Shield, label: 'Security' },
                                        { icon: Settings, label: 'Settings' },
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className={cn(
                                                "flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all",
                                                item.active
                                                    ? "bg-new-dark text-white shadow-lg"
                                                    : "hover:bg-new-light-color text-new-neutral"
                                            )}
                                        >
                                            <item.icon size={18} />
                                            <span className="text-sm font-medium">{item.label}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Main Content Area */}
                                <div className="lg:col-span-9 space-y-4 sm:space-y-6">
                                    {/* Stats Row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                        {[
                                            { label: 'Metric A', value: '4.8K', change: '+12.5%', icon: Wallet, color: 'bg-new-accent' },
                                            { label: 'Metric B', value: '384', change: '-8.2%', icon: CreditCard, color: 'bg-new-dark text-white' },
                                            { label: 'Metric C', value: '1.2K', change: '+24.1%', icon: TrendingUp, color: 'bg-new-light-color' },
                                        ].map((stat, i) => (
                                            <div key={i} className="bg-[#fafafa] rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#e5e5e5] hover:shadow-lg transition-shadow">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div className={cn("w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center", stat.color)}>
                                                        <stat.icon size={18} className="sm:w-5 sm:h-5" />
                                                    </div>
                                                    <span className={cn(
                                                        "text-xs font-semibold flex items-center gap-0.5 sm:gap-1",
                                                        stat.change.startsWith('+') ? "text-green-600" : "text-red-500"
                                                    )}>
                                                        {stat.change}
                                                        <ArrowUpRight size={12} className={cn("sm:w-3.5 sm:h-3.5", stat.change.startsWith('-') ? "rotate-90" : "")} />
                                                    </span>
                                                </div>
                                                <p className="text-new-neutral text-xs font-medium mb-1">{stat.label}</p>
                                                <p className="text-new-dark text-lg sm:text-xl font-bold">{stat.value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Chart Area with Recharts */}
                                    <div className="bg-[#fafafa] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#e5e5e5]">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
                                            <div>
                                                <h3 className="text-new-dark font-bold text-base sm:text-lg">Performance Overview</h3>
                                                <p className="text-new-neutral text-xs">Last 6 months</p>
                                            </div>
                                            <div className="flex items-center gap-2 sm:gap-3 text-xs">
                                                <div className="flex items-center gap-1.5">
                                                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-new-accent" />
                                                    <span className="text-new-neutral">Series A</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-new-dark" />
                                                    <span className="text-new-neutral">Series B</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Recharts Area Chart */}
                                        <ResponsiveContainer width="100%" height={200}>
                                            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                                <defs>
                                                    <linearGradient id="colorSeriesA" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="var(--color-new-accent)" stopOpacity={0.8} />
                                                        <stop offset="95%" stopColor="var(--color-new-accent)" stopOpacity={0.1} />
                                                    </linearGradient>
                                                    <linearGradient id="colorSeriesB" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="var(--color-new-dark)" stopOpacity={0.8} />
                                                        <stop offset="95%" stopColor="var(--color-new-dark)" stopOpacity={0.1} />
                                                    </linearGradient>
                                                </defs>
                                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" vertical={false} />
                                                <XAxis
                                                    dataKey="month"
                                                    tick={{ fill: 'var(--color-new-neutral)', fontSize: 12 }}
                                                    tickLine={false}
                                                    axisLine={false}
                                                    dy={10}
                                                />
                                                <YAxis
                                                    tick={{ fill: 'var(--color-new-neutral)', fontSize: 12 }}
                                                    tickLine={false}
                                                    axisLine={false}
                                                    dx={-10}
                                                />
                                                <Tooltip
                                                    contentStyle={{
                                                        backgroundColor: '#fff',
                                                        border: '1px solid #e5e5e5',
                                                        borderRadius: '12px',
                                                        fontSize: '12px',
                                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                                    }}
                                                    itemStyle={{ color: 'var(--color-new-dark)' }}
                                                />
                                                <Area
                                                    type="monotone"
                                                    dataKey="seriesA"
                                                    stroke="var(--color-new-accent)"
                                                    strokeWidth={2}
                                                    fillOpacity={1}
                                                    fill="url(#colorSeriesA)"
                                                />
                                                <Area
                                                    type="monotone"
                                                    dataKey="seriesB"
                                                    stroke="var(--color-new-dark)"
                                                    strokeWidth={2}
                                                    fillOpacity={1}
                                                    fill="url(#colorSeriesB)"
                                                />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>

                                    {/* Bottom Row */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        {/* Recent Activity */}
                                        <div className="bg-[#fafafa] rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#e5e5e5]">
                                            <div className="flex items-center justify-between mb-4">
                                                <h4 className="font-bold text-new-dark text-sm sm:text-base">Recent Items</h4>
                                                <button className="text-xs text-new-neutral hover:text-new-dark transition-colors">View all</button>
                                            </div>
                                            <div className="space-y-3">
                                                {[
                                                    { name: 'Item 1', category: 'Type A', value: '1.2K', icon: '📊' },
                                                    { name: 'Item 2', category: 'Type B', value: '5.0K', icon: '💼' },
                                                    { name: 'Item 3', category: 'Type C', value: '159', icon: '🎯' },
                                                ].map((tx, i) => (
                                                    <div key={i} className="flex items-center justify-between py-2">
                                                        <div className="flex items-center gap-2 sm:gap-3">
                                                            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center text-xs sm:text-sm shadow-sm">
                                                                {tx.icon}
                                                            </div>
                                                            <div>
                                                                <p className="text-xs sm:text-sm font-medium text-new-dark">{tx.name}</p>
                                                                <p className="text-[10px] sm:text-xs text-[#9a9a9a]">{tx.category}</p>
                                                            </div>
                                                        </div>
                                                        <span className="text-xs sm:text-sm font-semibold text-new-dark">
                                                            {tx.value}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Quick Actions */}
                                        <div className="bg-new-dark rounded-xl sm:rounded-2xl p-4 sm:p-5 text-white">
                                            <div className="flex items-center gap-2 mb-4">
                                                <Zap size={18} className="text-new-accent sm:w-5 sm:h-5" />
                                                <h4 className="font-bold text-sm sm:text-base">Quick Actions</h4>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2 sm:gap-3">
                                                {[
                                                    { label: 'Action A', icon: ArrowUpRight },
                                                    { label: 'Action B', icon: FileText },
                                                    { label: 'Action C', icon: PieChart },
                                                    { label: 'Action D', icon: BarChart3 },
                                                ].map((action, i) => (
                                                    <button
                                                        key={i}
                                                        className="bg-white/10 hover:bg-white/20 rounded-lg sm:rounded-xl p-3 sm:p-4 flex flex-col items-center gap-2 transition-colors"
                                                    >
                                                        <action.icon size={18} className="text-new-accent sm:w-5 sm:h-5" />
                                                        <span className="text-[10px] sm:text-xs font-medium">{action.label}</span>
                                                    </button>
                                                ))}
                                            </div>
                                            <div className="mt-3 sm:mt-4 p-2.5 sm:p-3 bg-new-accent/10 rounded-lg sm:rounded-xl border border-new-accent/20">
                                                <div className="flex items-center gap-2 text-[10px] sm:text-xs text-new-accent">
                                                    <Shield size={12} className="sm:w-3.5 sm:h-3.5" />
                                                    <span>Fully Secure & Encrypted</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Elements for Depth */}
                    {/* <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-new-accent rounded-full opacity-20 blur-2xl" />
                    <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-20 h-20 sm:w-32 sm:h-32 bg-new-dark rounded-full opacity-10 blur-3xl" /> */}
                </div>

                {/* Bottom Fade Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-linear-to-t from-new-light-color via-new-light-color/50 to-transparent pointer-events-none" />
            </div>
        </div>
    )
}