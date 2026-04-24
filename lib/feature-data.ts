import {
  School,
  Layout,
  Code2,
  Globe,
  Brush,
  Settings2,
  LucideIcon,
  Pill,
  Package,
  BookOpen,
  Users,
  UtensilsCrossed,
  FileSpreadsheet,
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
  photos: string[];
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
    photos: ["/school.jpeg"],
  },
  {
    slug: "pharmacy-application",
    name: "Pharmacy Application",
    tag: "Enterprise",
    tagline: "End-to-end pharmacy operations, fully digitalised.",
    description:
      "A complete pharmacy management system covering drug inventory, prescription processing, billing, and regulatory compliance — built for modern dispensaries.",
    longDescription:
      "Our pharmacy application handles every touchpoint of a modern dispensary's operations. From prescription intake and drug dispensing to expiry tracking and supplier management, every workflow is streamlined into a single, intuitive interface. Built with strict compliance frameworks in mind, the system maintains full audit trails, automates reorder alerts, and generates the regulatory reports your team needs — without the manual overhead.",
    icon: Pill,
    highlights: [
      {
        title: "Prescription Management",
        body: "Digital prescription intake, validation, and dispensing records with full patient history.",
      },
      {
        title: "Drug Inventory",
        body: "Real-time stock levels, expiry date alerts, and automated reorder triggers.",
      },
      {
        title: "Billing & Invoicing",
        body: "Fast POS-style billing with insurance claim support and receipt generation.",
      },
      {
        title: "Compliance & Audit",
        body: "Full dispensing logs and regulatory reports ready for inspection at any time.",
      },
    ],
    photos: [],
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

  {
    slug: "inventory-control",
    name: "Inventory Control",
    tag: "Enterprise",
    tagline: "Total visibility over every item, every movement.",
    description:
      "A robust inventory management platform that tracks stock in real time, manages suppliers, and eliminates costly overstock and stockout scenarios.",
    longDescription:
      "Inventory mistakes cost money. Our platform gives you granular, real-time visibility into every SKU across every warehouse or location. Automated reorder points prevent stockouts, while overstock alerts keep your working capital healthy. The system integrates with your existing procurement and sales workflows, so inventory data is always accurate — not a snapshot from last week.",
    icon: Package,
    highlights: [
      {
        title: "Real-Time Stock Tracking",
        body: "Live inventory levels across multiple warehouses and locations.",
      },
      {
        title: "Automated Reordering",
        body: "Set reorder thresholds and let the system raise purchase orders automatically.",
      },
      {
        title: "Supplier Management",
        body: "Centralised supplier profiles, lead times, and purchase history in one place.",
      },
      {
        title: "Stock Movement Logs",
        body: "Complete audit trail of every inbound, outbound, and adjustment transaction.",
      },
    ],
    photos: [],
  },
  {
    slug: "financial-accounting",
    name: "Financial Accounting",
    tag: "Enterprise",
    tagline: "Accurate books. Clear insights. Zero guesswork.",
    description:
      "A full-featured accounting system covering ledgers, accounts payable and receivable, bank reconciliation, tax reporting, and real-time financial dashboards.",
    longDescription:
      "From day-to-day bookkeeping to month-end close, our financial accounting module handles the full accounting cycle. Double-entry ledgers, automated journal entries, and bank reconciliation tools keep your books clean and current. Management dashboards surface P&L, cash flow, and balance sheet data in real time — giving decision-makers the financial clarity they need, exactly when they need it.",
    icon: BookOpen,
    highlights: [
      {
        title: "General Ledger",
        body: "Double-entry bookkeeping with automated journal entries and period close.",
      },
      {
        title: "Accounts Payable & Receivable",
        body: "Invoice tracking, payment scheduling, and aging reports for full cash flow control.",
      },
      {
        title: "Bank Reconciliation",
        body: "Automated transaction matching to keep your books aligned with bank statements.",
      },
      {
        title: "Tax & Compliance Reporting",
        body: "GST, VAT, and income tax reports generated instantly with audit-ready exports.",
      },
    ],
    photos: ["/Accounts.jpeg"],
  },
  {
    slug: "payroll-management",
    name: "Payroll Management",
    tag: "Enterprise",
    tagline: "On-time, accurate payroll — every single cycle.",
    description:
      "An automated payroll system that handles salary calculations, tax deductions, statutory contributions, payslip generation, and compliance filings without manual effort.",
    longDescription:
      "Payroll errors damage trust and invite compliance risk. Our payroll management system automates the entire cycle — from attendance-linked salary calculation to statutory deduction handling (PF, ESI, TDS) and payslip distribution. Configurable pay structures support varied employee types including full-time, part-time, and contract staff. Year-end filings and Form 16 generation are built in, so your HR team closes every cycle with confidence.",
    icon: Users,
    highlights: [
      {
        title: "Automated Salary Calculation",
        body: "Attendance-integrated payroll with support for variable pay, bonuses, and deductions.",
      },
      {
        title: "Statutory Compliance",
        body: "Automated PF, ESI, TDS calculations with filing-ready summaries.",
      },
      {
        title: "Payslip Generation",
        body: "Professional, branded payslips delivered digitally to every employee.",
      },
      {
        title: "Year-End Filings",
        body: "Form 16, annual returns, and tax summaries generated without manual data entry.",
      },
    ],
    photos: [],
  },
  {
    slug: "restaurant-management",
    name: "Restaurant Management",
    tag: "Enterprise",
    tagline: "From order to kitchen to table — seamlessly.",
    description:
      "A complete restaurant operations platform covering table management, KOT routing, billing, inventory, and sales analytics built for dine-in, takeaway, and delivery.",
    longDescription:
      "Running a restaurant means managing dozens of moving parts simultaneously. Our platform unifies front-of-house and back-of-house operations — digital menus, table mapping, kitchen order tickets, and real-time billing — into one system your staff can learn in an hour. Inventory consumption tracks automatically against orders, wastage reports flag inefficiencies, and end-of-day sales summaries give owners the numbers that matter.",
    icon: UtensilsCrossed,
    highlights: [
      {
        title: "Table & Order Management",
        body: "Digital floor maps, order taking, and KOT routing to kitchen displays.",
      },
      {
        title: "Multi-Mode Billing",
        body: "Dine-in, takeaway, and delivery billing with split-pay and discount support.",
      },
      {
        title: "Kitchen Display System",
        body: "Real-time order queues on kitchen screens to eliminate ticket errors.",
      },
      {
        title: "Inventory & Wastage",
        body: "Auto-consumption tracking against recipes with wastage and variance reporting.",
      },
    ],
    photos: [],
  },
  {
    slug: "excel-integration",
    name: "Excel Integration",
    tag: "Productivity",
    tagline: "Your data in. Your reports out. Instantly.",
    description:
      "Seamless two-way Excel integration allowing bulk data import and formatted report export across all modules — so your existing spreadsheet workflows keep working.",
    longDescription:
      "Switching software shouldn't mean abandoning the spreadsheets your team already relies on. Our Excel integration layer provides validated bulk import for master data, transactions, and opening balances — with clear error feedback when data doesn't match expectations. On the export side, every report, ledger, and summary in the system can be pushed to a formatted Excel file in one click, ready for further analysis or sharing without reformatting.",
    icon: FileSpreadsheet,
    highlights: [
      {
        title: "Bulk Data Import",
        body: "Upload masters, transactions, and opening balances via structured Excel templates.",
      },
      {
        title: "Validation & Error Feedback",
        body: "Row-level validation catches mismatches before they enter the system.",
      },
      {
        title: "One-Click Report Export",
        body: "Every report exports to formatted Excel instantly — no copy-pasting required.",
      },
      {
        title: "Template Library",
        body: "Pre-built import templates for every module so your team hits the ground running.",
      },
    ],
    photos: [],
  },
];
