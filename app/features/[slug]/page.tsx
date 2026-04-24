import { notFound } from "next/navigation";
import { FEATURES } from "@/lib/feature-data";
import FeatureDetailClient from "@/components/feature-detail-client";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return FEATURES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const feature = FEATURES.find((f) => f.slug === slug);
  if (!feature) return {};
  return { title: `${feature.name} — Miracle IT Solutions` };
}

export default async function FeaturePage({ params }: PageProps) {
  const { slug } = await params;
  const featureIndex = FEATURES.findIndex((f) => f.slug === slug);
  const feature = FEATURES[featureIndex];

  if (!feature) notFound();

  // Pass only serializable data (no component references)
  return (
    <FeatureDetailClient
      featureId={featureIndex}
      allFeaturesIds={FEATURES.map((_, idx) => idx)}
    />
  );
}
