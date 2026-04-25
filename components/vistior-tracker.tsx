"use client";

import { useVisitorCount } from "@/hooks/useVisitor";

export default function VisitorTracker() {
  useVisitorCount();

  return null;
}
