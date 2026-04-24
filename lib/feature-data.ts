import {
  School,
  Layout,
  Code2,
  Globe,
  Brush,
  Settings2,
  LucideIcon,
} from "lucide-react";

export interface FeatureDetail {
  slug: string;
  name: string;
  tag: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  highlights: { title: string; body: string }[];
  photos: string[]; // paths relative to /public
}

export const FEATURES: FeatureDetail[] = [
  {
    slug: "school-management",
    name: "School Management Software",
    tag: "Enterprise",
    tagline: "Everything your institution needs, in one place.",
    description:
      "A comprehensive platform to manage student records, attendance tracking, exam grading, staff scheduling, and fee collection — all from a single, intuitive dashboard.",
    longDescription:
      "Our school management platform is purpose-built for educational institutions of every size. From primary schools to universities, we handle the administrative complexity so staff can focus on what matters — education. Real-time dashboards give principals and administrators complete visibility, while teachers enjoy streamlined gradebooks and attendance tools.",
    icon: School,
    highlights: [
      {
        title: "Student Records",
        body: "Centralised, secure student profiles with full academic history.",
      },
      {
        title: "Attendance Tracking",
        body: "Real-time attendance with automated parent notifications.",
      },
      {
        title: "Fee Management",
        body: "Invoicing, payment tracking, and overdue alerts built in.",
      },
      {
        title: "Exam & Grading",
        body: "Customisable grading schemes with report card generation.",
      },
    ],
    photos: ["/photo_1.png"],
  },
  {
    slug: "landing-page-development",
    name: "Landing Page Development",
    tag: "Design",
    tagline: "Pages that convert visitors into customers.",
    description:
      "Conversion-focused landing pages built with strategic layouts, compelling copy structure, and performance-first code to turn visitors into paying customers.",
    longDescription:
      "Every landing page we build starts with strategy. We analyse your audience, map the conversion journey, and craft layouts that guide visitors toward action. Our pages are lightweight, mobile-first, and optimised for Core Web Vitals from day one — because speed is conversion.",
    icon: Layout,
    highlights: [
      {
        title: "Conversion Architecture",
        body: "Strategic layouts engineered around your funnel.",
      },
      {
        title: "Mobile-First",
        body: "Pixel-perfect across all screen sizes, always.",
      },
      {
        title: "Performance",
        body: "Sub-2s load times with optimised assets and code.",
      },
      {
        title: "A/B Ready",
        body: "Built to support split testing from the ground up.",
      },
    ],
    photos: [],
  },
  {
    slug: "full-stack-development",
    name: "Full-Stack Development",
    tag: "Engineering",
    tagline: "End-to-end engineering from pixel to database.",
    description:
      "Complete web application development across the entire stack — React & Next.js frontends, Node.js or Django backends, and cloud-ready database architecture.",
    longDescription:
      "We own the entire development lifecycle — from system architecture to deployment pipelines. Our full-stack team works in modern TypeScript across the board, ensuring type safety, consistency, and maintainability. Whether you need a SaaS product, an internal tool, or a customer-facing portal, we build it right the first time.",
    icon: Code2,
    highlights: [
      {
        title: "React & Next.js",
        body: "Modern frontend with SSR, RSC, and optimised rendering.",
      },
      {
        title: "Node / Django",
        body: "Robust, scalable backends suited to your team's needs.",
      },
      {
        title: "Cloud Architecture",
        body: "AWS, Vercel, or GCP — designed to scale under load.",
      },
      {
        title: "CI/CD Pipelines",
        body: "Automated testing and deployment from day one.",
      },
    ],
    photos: [],
  },
  {
    slug: "seo-performance",
    name: "SEO & Performance",
    tag: "Growth",
    tagline: "Rank higher. Load faster. Convert better.",
    description:
      "Technical SEO audits, Core Web Vitals optimization, structured data implementation, and page speed tuning to improve search rankings and reduce bounce rates.",
    longDescription:
      "Search performance is a compounding asset. We conduct deep technical audits, fix crawlability issues, implement structured data, and eliminate performance bottlenecks that hurt your rankings. Our work is transparent — you receive detailed reports and measurable before/after benchmarks for every engagement.",
    icon: Globe,
    highlights: [
      {
        title: "Technical Audits",
        body: "Comprehensive crawl analysis and issue remediation.",
      },
      {
        title: "Core Web Vitals",
        body: "LCP, CLS, and INP tuned to green across all pages.",
      },
      {
        title: "Structured Data",
        body: "Schema markup for rich results and enhanced visibility.",
      },
      {
        title: "Reporting",
        body: "Monthly SEO reports with keyword and ranking tracking.",
      },
    ],
    photos: [],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    tag: "Design",
    tagline: "Interfaces users remember and return to.",
    description:
      "Research-driven design systems, wireframes, and high-fidelity prototypes crafted to reduce friction, improve retention, and create experiences users genuinely enjoy.",
    longDescription:
      "Great design is invisible — it guides users effortlessly toward their goals. Our process starts with user research and journey mapping, moves through wireframes and interactive prototypes, and ends with a polished design system your developers can implement confidently. We design in Figma and hand off with developer-ready specs.",
    icon: Brush,
    highlights: [
      {
        title: "User Research",
        body: "Interviews, surveys, and journey mapping to ground every decision.",
      },
      {
        title: "Wireframing",
        body: "Low and high-fidelity flows validated before pixel work begins.",
      },
      {
        title: "Design Systems",
        body: "Scalable component libraries built in Figma.",
      },
      {
        title: "Handoff",
        body: "Developer-ready specs, assets, and documentation.",
      },
    ],
    photos: [],
  },
  {
    slug: "custom-web-applications",
    name: "Custom Web Applications",
    tag: "Engineering",
    tagline: "Software shaped precisely around your workflows.",
    description:
      "Fully bespoke web applications built around your exact workflows — from internal tools and client portals to SaaS platforms with third-party API integrations.",
    longDescription:
      "Off-the-shelf software forces your team to work around its limitations. We build the other way — starting from your workflows, your data, and your users. Every feature is intentional. Every integration is clean. And because we own the codebase end-to-end, you're never dependent on a vendor's roadmap.",
    icon: Settings2,
    highlights: [
      {
        title: "Workflow Mapping",
        body: "Deep discovery to map your processes before writing code.",
      },
      {
        title: "Integrations",
        body: "Stripe, Twilio, Google APIs, CRMs — we connect your stack.",
      },
      {
        title: "Client Portals",
        body: "Secure, branded portals for your customers or partners.",
      },
      {
        title: "Ongoing Support",
        body: "Retainer options for continuous improvement and maintenance.",
      },
    ],
    photos: [],
  },
];
