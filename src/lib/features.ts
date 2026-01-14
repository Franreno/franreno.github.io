// Feature flags configuration
export const features = {
  blog: process.env.NEXT_PUBLIC_FEATURE_BLOG === 'true',
  projects: process.env.NEXT_PUBLIC_FEATURE_PROJECTS === 'true',
} as const;

export type FeatureFlags = typeof features;
