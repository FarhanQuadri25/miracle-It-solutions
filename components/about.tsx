"use client";

import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Wallet,
  TrendingUp,
  Shield,
  CreditCard,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Activity,
  FileText,
  Settings,
  BarChart2,
  Briefcase,
  Target,
  User,
} from "lucide-react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import SectionHeader from "./section-header";

const chartData = [
  { month: "Jan", seriesA: 65, seriesB: 40 },
  { month: "Feb", seriesA: 45, seriesB: 30 },
  { month: "Mar", seriesA: 80, seriesB: 50 },
  { month: "Apr", seriesA: 55, seriesB: 35 },
  { month: "May", seriesA: 70, seriesB: 45 },
  { month: "Jun", seriesA: 90, seriesB: 55 },
];

export default function About() {
  return (
    <div
      id="about"
      className={cn(
        "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24  border-new-dark/10 relative overflow-hidden",
        inter.className,
      )}>
      {/* Grid bg */}
      {/* <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      /> */}

      <div className="relative z-10">
        <SectionHeader
          tag="Platform Preview"
          header="Interfaces That"
          span="Actually Work"
          description="Clean, intuitive dashboards with powerful functionality — designed for the way your team works."
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Dashboard container — brutalist border */}
          <div className="bg-[#f0f0e8] border-2 border-[#1a1a1a] shadow-[8px_8px_0px_0px_#1a1a1a] overflow-hidden">
            {/* Title bar */}
            <div className="bg-[#1a1a1a] px-4 sm:px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-[#ff5f57] border border-[#ff5f57]/50" />
                <div className="w-2.5 h-2.5 bg-[#febc2e] border border-[#febc2e]/50" />
                <div className="w-2.5 h-2.5 bg-[#28c840] border border-[#28c840]/50" />
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-[#f0f0e8]/60 font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-emerald-400 animate-pulse" />
                Live
              </div>
            </div>

            {/* Dashboard body */}
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
                {/* Sidebar */}
                <div className="hidden lg:flex lg:col-span-3 flex-col gap-1">
                  <p
                    className={cn(
                      "text-[10px] uppercase tracking-[0.3em] text-new-neutral/40 font-bold px-2 mb-2",
                      inter.className,
                    )}>
                    Navigation
                  </p>
                  {[
                    { icon: BarChart3, label: "Overview", active: true },
                    { icon: Activity, label: "Activity" },
                    { icon: TrendingUp, label: "Analytics" },
                    { icon: Shield, label: "Security" },
                    { icon: Settings, label: "Settings" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 cursor-pointer transition-all duration-150 text-sm font-bold border-2 uppercase tracking-tight",
                        item.active
                          ? "bg-[#1a1a1a] text-[#f0f0e8] border-[#1a1a1a]"
                          : "text-new-neutral hover:text-new-dark hover:bg-white border-transparent hover:border-[#1a1a1a]",
                      )}>
                      <item.icon size={15} />
                      {item.label}
                    </div>
                  ))}

                  <div className="mt-auto pt-6">
                    <div className="border-2 border-[#1a1a1a] bg-white p-4 shadow-[2px_2px_0px_0px_#1a1a1a]">
                      <div className="flex items-center gap-2 mb-1">
                        <User size={18} className="text-new-accent" />
                        <span
                          className={cn(
                            "text-[11px] font-black text-new-dark uppercase tracking-tight",
                            inter.className,
                          )}>
                          User
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="lg:col-span-9 space-y-4 sm:space-y-5">
                  {/* Stats row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    {[
                      {
                        label: "Total Revenue",
                        value: "4.8K",
                        change: "+12.5%",
                        positive: true,
                        icon: Wallet,
                        accent: true,
                      },
                      {
                        label: "Transactions",
                        value: "384",
                        change: "-8.2%",
                        positive: false,
                        icon: CreditCard,
                        dark: true,
                      },
                      {
                        label: "Active Users",
                        value: "10.2K",
                        change: "+24.1%",
                        positive: true,
                        icon: TrendingUp,
                      },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className={cn(
                          "p-4 sm:p-5 border-2 border-[#1a1a1a] shadow-[3px_3px_0px_0px_#1a1a1a]",
                          stat.dark ? "bg-[#1a1a1a] text-white" : "bg-white",
                        )}>
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className={cn(
                              "w-9 h-9 flex items-center justify-center border-2",
                              stat.dark
                                ? "bg-white/10 border-white/20"
                                : stat.accent
                                  ? "bg-new-accent border-[#1a1a1a]"
                                  : "bg-[#f0f0e8] border-[#1a1a1a]",
                            )}>
                            <stat.icon
                              size={16}
                              className={
                                stat.dark ? "text-new-accent" : "text-new-dark"
                              }
                            />
                          </div>
                          <span
                            className={cn(
                              "text-[11px] font-bold flex items-center gap-0.5 px-2 py-0.5 border",
                              stat.positive
                                ? stat.dark
                                  ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/20"
                                  : "bg-emerald-50 text-emerald-700 border-emerald-200"
                                : stat.dark
                                  ? "bg-red-500/15 text-red-400 border-red-500/20"
                                  : "bg-red-50 text-red-600 border-red-200",
                            )}>
                            {stat.positive ? (
                              <ArrowUpRight size={11} />
                            ) : (
                              <ArrowDownRight size={11} />
                            )}
                            {stat.change}
                          </span>
                        </div>
                        <p
                          className={cn(
                            "text-[11px] font-bold uppercase tracking-widest mb-0.5",
                            stat.dark ? "text-white/40" : "text-new-neutral",
                          )}>
                          {stat.label}
                        </p>
                        <p
                          className={cn(
                            "text-xl sm:text-2xl font-black tracking-tight",
                            stat.dark ? "text-white" : "text-new-dark",
                          )}>
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="bg-white border-2 border-[#1a1a1a] p-4 sm:p-6 shadow-[3px_3px_0px_0px_#1a1a1a]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                      <div>
                        <h3
                          className={cn(
                            "text-new-dark font-black text-sm sm:text-base uppercase tracking-tight",
                            inter.className,
                          )}>
                          Performance Overview
                        </h3>
                        <p className="text-new-neutral text-xs mt-0.5 font-medium">
                          Last 6 months
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 bg-new-accent border border-[#1a1a1a]" />
                          <span className="text-new-neutral font-semibold uppercase tracking-wider text-[10px]">
                            Series A
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 bg-[#1a1a1a]" />
                          <span className="text-new-neutral font-semibold uppercase tracking-wider text-[10px]">
                            Series B
                          </span>
                        </div>
                      </div>
                    </div>
                    <ResponsiveContainer width="100%" height={180}>
                      <AreaChart
                        data={chartData}
                        margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="gA" x1="0" y1="0" x2="0" y2="1">
                            <stop
                              offset="5%"
                              stopColor="#E76F51"
                              stopOpacity={0.2}
                            />
                            <stop
                              offset="95%"
                              stopColor="#E76F51"
                              stopOpacity={0}
                            />
                          </linearGradient>
                          <linearGradient id="gB" x1="0" y1="0" x2="0" y2="1">
                            <stop
                              offset="5%"
                              stopColor="#1a1a1a"
                              stopOpacity={0.1}
                            />
                            <stop
                              offset="95%"
                              stopColor="#1a1a1a"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="#e8e8e8"
                          vertical={false}
                        />
                        <XAxis
                          dataKey="month"
                          tick={{
                            fill: "#9a9a9a",
                            fontSize: 11,
                            fontWeight: 600,
                          }}
                          tickLine={false}
                          axisLine={false}
                          dy={8}
                        />
                        <YAxis
                          tick={{ fill: "#9a9a9a", fontSize: 11 }}
                          tickLine={false}
                          axisLine={false}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#1a1a1a",
                            border: "2px solid #1a1a1a",
                            borderRadius: "0px",
                            fontSize: "12px",
                            color: "#f0f0e8",
                          }}
                          itemStyle={{ color: "#E76F51" }}
                        />
                        <Area
                          type="monotone"
                          dataKey="seriesA"
                          stroke="#E76F51"
                          strokeWidth={2}
                          fill="url(#gA)"
                          dot={false}
                        />
                        <Area
                          type="monotone"
                          dataKey="seriesB"
                          stroke="#1a1a1a"
                          strokeWidth={2}
                          fill="url(#gB)"
                          dot={false}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Bottom row */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Recent Items */}
                    <div className="bg-white border-2 border-[#1a1a1a] shadow-[3px_3px_0px_0px_#1a1a1a]">
                      <div className="flex items-center justify-between px-4 py-3 border-b-2 border-[#1a1a1a] bg-[#1a1a1a]">
                        <h4
                          className={cn(
                            "font-black text-sm uppercase tracking-widest text-[#f0f0e8]",
                            inter.className,
                          )}>
                          Recent Items
                        </h4>
                        <button
                          className={cn(
                            "text-[10px] font-bold text-[#f0f0e8]/50 hover:text-new-accent transition-colors uppercase tracking-widest",
                            inter.className,
                          )}>
                          View all
                        </button>
                      </div>
                      <div className="p-3 space-y-1">
                        {[
                          {
                            name: "Project",
                            category: "Engineering",
                            value: "1.2K",
                            icon: BarChart2,
                          },
                          {
                            name: "Client Brief",
                            category: "Design",
                            value: "5.0K",
                            icon: Briefcase,
                          },
                          {
                            name: "Q3 Target",
                            category: "Growth",
                            value: "159",
                            icon: Target,
                          },
                        ].map((tx, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-2.5 hover:bg-[#f0f0e8] border-2 border-transparent hover:border-[#1a1a1a] transition-all duration-150 group cursor-pointer">
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 bg-[#f0f0e8] border-2 border-[#1a1a1a] flex items-center justify-center group-hover:bg-new-accent transition-colors">
                                <tx.icon className="w-3.5 h-3.5 text-new-dark" />
                              </div>
                              <div>
                                <p
                                  className={cn(
                                    "text-xs font-black text-new-dark uppercase tracking-tight leading-tight",
                                    inter.className,
                                  )}>
                                  {tx.name}
                                </p>
                                <p className="text-[10px] text-new-neutral font-semibold">
                                  {tx.category}
                                </p>
                              </div>
                            </div>
                            <span
                              className={cn(
                                "text-xs font-black text-new-dark tabular-nums",
                                inter.className,
                              )}>
                              {tx.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-[#1a1a1a] border-2 border-[#1a1a1a] shadow-[3px_3px_0px_0px_#1a1a1a]">
                      <div className="flex items-center gap-2 px-4 py-3 border-b-2 border-white/10">
                        <Zap size={14} className="text-new-accent" />
                        <h4
                          className={cn(
                            "font-black text-sm uppercase tracking-widest text-[#f0f0e8]",
                            inter.className,
                          )}>
                          Quick Actions
                        </h4>
                      </div>
                      <div className="p-3 grid grid-cols-2 gap-2">
                        {[
                          { label: "Export Report", icon: ArrowUpRight },
                          { label: "View Docs", icon: FileText },
                          { label: "Analytics", icon: PieChart },
                          { label: "Overview", icon: BarChart3 },
                        ].map((action, i) => (
                          <button
                            key={i}
                            className="bg-white/5 hover:bg-new-accent border-2 border-white/10 hover:border-new-accent p-3 flex items-center gap-2.5 transition-all duration-150 group text-left">
                            <action.icon
                              size={13}
                              className="text-new-accent group-hover:text-new-dark transition-colors shrink-0"
                            />
                            <span
                              className={cn(
                                "text-[11px] font-bold text-white/70 group-hover:text-new-dark transition-colors leading-tight uppercase tracking-tight",
                                inter.className,
                              )}>
                              {action.label}
                            </span>
                          </button>
                        ))}
                      </div>
                      <div className="mx-3 mb-3 p-3 bg-new-accent/10 border-2 border-new-accent/20 flex items-center gap-2">
                        <Shield
                          size={12}
                          className="text-new-accent shrink-0"
                        />
                        <span
                          className={cn(
                            "text-[10px] text-new-accent font-bold uppercase tracking-widest",
                            inter.className,
                          )}>
                          End-to-end encrypted
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
