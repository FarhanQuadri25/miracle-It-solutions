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
        "relative mx-auto max-w-7xl overflow-hidden border-new-dark/10 px-4 py-24 sm:px-6 lg:px-8",
        inter.className,
      )}
    >
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

        <div className="relative mx-auto max-w-6xl">
          {/* Dashboard container — brutalist border */}
          <div className="overflow-hidden border-2 border-[#1a1a1a] bg-[#f0f0e8] shadow-[8px_8px_0px_0px_#1a1a1a]">
            {/* Title bar */}
            <div className="flex items-center justify-between bg-[#1a1a1a] px-4 py-3 sm:px-6">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 border border-[#ff5f57]/50 bg-[#ff5f57]" />
                <div className="h-2.5 w-2.5 border border-[#febc2e]/50 bg-[#febc2e]" />
                <div className="h-2.5 w-2.5 border border-[#28c840]/50 bg-[#28c840]" />
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#f0f0e8]/60">
                <span className="h-1.5 w-1.5 animate-pulse bg-emerald-400" />
                Live
              </div>
            </div>

            {/* Dashboard body */}
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-12">
                {/* Sidebar */}
                <div className="hidden flex-col gap-1 lg:col-span-3 lg:flex">
                  <p
                    className={cn(
                      "mb-2 px-2 text-[10px] font-bold uppercase tracking-[0.3em] text-new-neutral/40",
                      inter.className,
                    )}
                  >
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
                        "flex cursor-pointer items-center gap-3 border-2 px-3 py-2.5 text-sm font-bold uppercase tracking-tight transition-all duration-150",
                        item.active
                          ? "border-[#1a1a1a] bg-[#1a1a1a] text-[#f0f0e8]"
                          : "border-transparent text-new-neutral hover:border-[#1a1a1a] hover:bg-white hover:text-new-dark",
                      )}
                    >
                      <item.icon size={15} />
                      {item.label}
                    </div>
                  ))}

                  <div className="mt-auto pt-6">
                    <div className="border-2 border-[#1a1a1a] bg-white p-4 shadow-[2px_2px_0px_0px_#1a1a1a]">
                      <div className="mb-1 flex items-center gap-2">
                        <User size={18} className="text-new-accent" />
                        <span
                          className={cn(
                            "text-[11px] font-black uppercase tracking-tight text-new-dark",
                            inter.className,
                          )}
                        >
                          User
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="space-y-4 sm:space-y-5 lg:col-span-9">
                  {/* Stats row */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
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
                          "border-2 border-[#1a1a1a] p-4 shadow-[3px_3px_0px_0px_#1a1a1a] sm:p-5",
                          stat.dark ? "bg-[#1a1a1a] text-white" : "bg-white",
                        )}
                      >
                        <div className="mb-4 flex items-start justify-between">
                          <div
                            className={cn(
                              "flex h-9 w-9 items-center justify-center border-2",
                              stat.dark
                                ? "border-white/20 bg-white/10"
                                : stat.accent
                                  ? "border-[#1a1a1a] bg-new-accent"
                                  : "border-[#1a1a1a] bg-[#f0f0e8]",
                            )}
                          >
                            <stat.icon
                              size={16}
                              className={
                                stat.dark ? "text-new-accent" : "text-new-dark"
                              }
                            />
                          </div>
                          <span
                            className={cn(
                              "flex items-center gap-0.5 border px-2 py-0.5 text-[11px] font-bold",
                              stat.positive
                                ? stat.dark
                                  ? "border-emerald-500/20 bg-emerald-500/15 text-emerald-400"
                                  : "border-emerald-200 bg-emerald-50 text-emerald-700"
                                : stat.dark
                                  ? "border-red-500/20 bg-red-500/15 text-red-400"
                                  : "border-red-200 bg-red-50 text-red-600",
                            )}
                          >
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
                            "mb-0.5 text-[11px] font-bold uppercase tracking-widest",
                            stat.dark ? "text-white/40" : "text-new-neutral",
                          )}
                        >
                          {stat.label}
                        </p>
                        <p
                          className={cn(
                            "text-xl font-black tracking-tight sm:text-2xl",
                            stat.dark ? "text-white" : "text-new-dark",
                          )}
                        >
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="border-2 border-[#1a1a1a] bg-white p-4 shadow-[3px_3px_0px_0px_#1a1a1a] sm:p-6">
                    <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                      <div>
                        <h3
                          className={cn(
                            "text-sm font-black uppercase tracking-tight text-new-dark sm:text-base",
                            inter.className,
                          )}
                        >
                          Performance Overview
                        </h3>
                        <p className="mt-0.5 text-xs font-medium text-new-neutral">
                          Last 6 months
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 border border-[#1a1a1a] bg-new-accent" />
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-new-neutral">
                            Series A
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 bg-[#1a1a1a]" />
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-new-neutral">
                            Series B
                          </span>
                        </div>
                      </div>
                    </div>
                    <ResponsiveContainer width="100%" height={180}>
                      <AreaChart
                        data={chartData}
                        margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
                      >
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
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {/* Recent Items */}
                    <div className="border-2 border-[#1a1a1a] bg-white shadow-[3px_3px_0px_0px_#1a1a1a]">
                      <div className="flex items-center justify-between border-b-2 border-[#1a1a1a] bg-[#1a1a1a] px-4 py-3">
                        <h4
                          className={cn(
                            "text-sm font-black uppercase tracking-widest text-[#f0f0e8]",
                            inter.className,
                          )}
                        >
                          Recent Items
                        </h4>
                        <button
                          className={cn(
                            "text-[10px] font-bold uppercase tracking-widest text-[#f0f0e8]/50 transition-colors hover:text-new-accent",
                            inter.className,
                          )}
                        >
                          View all
                        </button>
                      </div>
                      <div className="space-y-1 p-3">
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
                            className="group flex cursor-pointer items-center justify-between border-2 border-transparent p-2.5 transition-all duration-150 hover:border-[#1a1a1a] hover:bg-[#f0f0e8]"
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="flex h-8 w-8 items-center justify-center border-2 border-[#1a1a1a] bg-[#f0f0e8] transition-colors group-hover:bg-new-accent">
                                <tx.icon className="h-3.5 w-3.5 text-new-dark" />
                              </div>
                              <div>
                                <p
                                  className={cn(
                                    "text-xs font-black uppercase leading-tight tracking-tight text-new-dark",
                                    inter.className,
                                  )}
                                >
                                  {tx.name}
                                </p>
                                <p className="text-[10px] font-semibold text-new-neutral">
                                  {tx.category}
                                </p>
                              </div>
                            </div>
                            <span
                              className={cn(
                                "text-xs font-black tabular-nums text-new-dark",
                                inter.className,
                              )}
                            >
                              {tx.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="border-2 border-[#1a1a1a] bg-[#1a1a1a] shadow-[3px_3px_0px_0px_#1a1a1a]">
                      <div className="flex items-center gap-2 border-b-2 border-white/10 px-4 py-3">
                        <Zap size={14} className="text-new-accent" />
                        <h4
                          className={cn(
                            "text-sm font-black uppercase tracking-widest text-[#f0f0e8]",
                            inter.className,
                          )}
                        >
                          Quick Actions
                        </h4>
                      </div>
                      <div className="grid grid-cols-2 gap-2 p-3">
                        {[
                          { label: "Export Report", icon: ArrowUpRight },
                          { label: "View Docs", icon: FileText },
                          { label: "Analytics", icon: PieChart },
                          { label: "Overview", icon: BarChart3 },
                        ].map((action, i) => (
                          <button
                            key={i}
                            className="group flex items-center gap-2.5 border-2 border-white/10 bg-white/5 p-3 text-left transition-all duration-150 hover:border-new-accent hover:bg-new-accent"
                          >
                            <action.icon
                              size={13}
                              className="shrink-0 text-new-accent transition-colors group-hover:text-new-dark"
                            />
                            <span
                              className={cn(
                                "text-[11px] font-bold uppercase leading-tight tracking-tight text-white/70 transition-colors group-hover:text-new-dark",
                                inter.className,
                              )}
                            >
                              {action.label}
                            </span>
                          </button>
                        ))}
                      </div>
                      <div className="mx-3 mb-3 flex items-center gap-2 border-2 border-new-accent/20 bg-new-accent/10 p-3">
                        <Shield
                          size={12}
                          className="shrink-0 text-new-accent"
                        />
                        <span
                          className={cn(
                            "text-[10px] font-bold uppercase tracking-widest text-new-accent",
                            inter.className,
                          )}
                        >
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
