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
    <nav
      className="sticky top-0 z-50 py-4 mb-12"
      style={{
        background: 'linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)',
        borderBottom: '3px solid #333333',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
      }}
    >
      <div className="container-y2k">
        <div className="flex flex-wrap gap-3 items-center justify-center sm:justify-start" style={{ paddingBottom: '1rem' }}>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="nav-tab"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.25rem',
                  fontFamily: 'var(--font-geist-mono), monospace',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  border: isActive ? '2px solid #a855f7' : '2px solid #333333',
                  background: isActive
                    ? 'linear-gradient(180deg, #7c3aed 0%, #6d28d9 100%)'
                    : 'linear-gradient(180deg, #262626 0%, #1a1a1a 100%)',
                  color: isActive ? 'white' : '#b0b0b0',
                  boxShadow: isActive
                    ? 'inset 2px 2px 4px rgba(0, 0, 0, 0.5), 0 0 12px rgba(168, 85, 247, 0.6)'
                    : '3px 3px 0 rgba(0, 0, 0, 0.3), -1px -1px 0 rgba(255, 255, 255, 0.05)',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#00ffff';
                    e.currentTarget.style.color = '#00ffff';
                    e.currentTarget.style.textShadow = '0 0 10px rgba(0, 255, 255, 0.6)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#333333';
                    e.currentTarget.style.color = '#b0b0b0';
                    e.currentTarget.style.textShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                <span style={{ fontSize: '1rem' }}>{link.icon}</span>
                <span>{link.label}</span>
                {isActive && (
                  <span
                    className="blink"
                    style={{
                      position: 'absolute',
                      bottom: '-22px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontSize: '0.65rem',
                      color: '#00ff41',
                      fontWeight: 700,
                      textShadow: '0 0 8px rgba(0, 255, 65, 0.8)',
                      whiteSpace: 'nowrap',
                      letterSpacing: '0.05em'
                    }}
                  >
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
