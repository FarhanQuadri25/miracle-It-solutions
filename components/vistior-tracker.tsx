// components/visitor-tracker.tsx
"use client";

import { useVisitorCount } from "@/hooks/useVisitor";

export default function VisitorTracker() {
  useVisitorCount(); // 👈 runs on client

  return null; // no UI needed
}
