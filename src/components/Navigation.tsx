'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { features } from '@/lib/features';

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/research', label: 'Research', icon: '🔬' },
    ...(features.blog ? [{ href: '/blog', label: 'Blog', icon: '📝' }] : []),
    ...(features.projects ? [{ href: '/projects', label: 'Projects', icon: '💾' }] : []),
  ];

  return (
    <nav className="nav-bar sticky top-0 z-50 py-4 mb-12">
      <div className="container-y2k">
        <div className="flex flex-wrap gap-3 items-center justify-center sm:justify-start pb-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-button ${isActive ? 'nav-button-active' : ''}`}
              >
                <span className="text-base">{link.icon}</span>
                <span>{link.label}</span>
                {isActive && (
                  <span className="nav-indicator blink">
                    ▼ YOU ARE HERE
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
