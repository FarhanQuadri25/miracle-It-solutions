"use client";

import { FEATURES } from "@/lib/feature-data";
import FeatureDetailLayout from "./feature-detail-layout";
import {
  School,
  Layout,
  Code2,
  Globe,
  Brush,
  Settings2,
  Pill,
  Package,
  BookOpen,
  Users,
  UtensilsCrossed,
  FileSpreadsheet,
  LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  "school-management": School,
  "landing-page-development": Layout,
  "full-stack-development": Code2,
  "seo-performance": Globe,
  "ui-ux-design": Brush,
  "custom-web-applications": Settings2,
  "pharmacy-application": Pill,
  "inventory-control": Package,
  "financial-accounting": BookOpen,
  "payroll-management": Users,
  "restaurant-management": UtensilsCrossed,
  "excel-integration": FileSpreadsheet,
};

interface FeatureDetailClientProps {
  featureId: number;
  allFeaturesIds: number[];
}

export default function FeatureDetailClient({
  featureId,
  allFeaturesIds,
}: FeatureDetailClientProps) {
  const feature = FEATURES[featureId];
  const allFeatures = allFeaturesIds.map((id) => FEATURES[id]);

  const featureWithIcon = {
    ...feature,
    icon: ICON_MAP[feature.slug],
  };

  const allFeaturesWithIcons = allFeatures.map((f) => ({
    ...f,
    icon: ICON_MAP[f.slug],
  }));

  return (
    <FeatureDetailLayout
      feature={featureWithIcon}
      allFeatures={allFeaturesWithIcons}
      key={feature.slug}
    />
  );
}