'use client';

import dynamic from 'next/dynamic';

// Dynamic import for Easter Eggs - rarely used, reduces initial bundle
const EasterEggs = dynamic(
  () => import('./EasterEggs').then((mod) => mod.EasterEggs),
  { ssr: false }
);

export function EasterEggsLoader() {
  return <EasterEggs />;
}
