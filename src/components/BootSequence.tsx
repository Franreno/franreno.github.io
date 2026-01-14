'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function BootSequence() {
  const [isLoading, setIsLoading] = useState(true);
  const [step, setStep] = useState(0);
  const pathname = usePathname();

  // Get page name from pathname
  const getPageName = () => {
    if (pathname === '/') return 'HOME';
    if (pathname === '/projects') return 'PROJECTS';
    if (pathname === '/research') return 'RESEARCH';
    if (pathname === '/blog') return 'BLOG';
    return 'PAGE';
  };

  useEffect(() => {
    // Check if user has visited before in this session
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    // Boot sequence steps
    const steps = [
      { delay: 500, action: () => setStep(1) },   // Show SYSTEM.BOOT
      { delay: 1200, action: () => setStep(2) },  // Show LOADING page
      { delay: 2000, action: () => {              // Finish and mark as visited
        setIsLoading(false);
        sessionStorage.setItem('hasVisited', 'true');
      }}
    ];

    // Execute boot sequence
    const timeouts = steps.map(({ delay, action }) =>
      setTimeout(action, delay)
    );

    // Cleanup timeouts on unmount
    return () => timeouts.forEach(clearTimeout);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#0a0a0a',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem'
      }}
    >
      {step >= 1 && (
        <div
          className="terminal-text"
          style={{
            fontSize: '1.25rem',
            animation: 'fadeIn 0.3s ease-in'
          }}
        >
          {'> SYSTEM.BOOT [OK]'}
        </div>
      )}
      {step >= 2 && (
        <div
          className="terminal-text"
          style={{
            fontSize: '1.25rem',
            animation: 'fadeIn 0.3s ease-in'
          }}
        >
          {`> LOADING_${getPageName()}.EXE`}
          <span className="blink">...</span>
        </div>
      )}
      {step >= 2 && (
        <div
          style={{
            width: '300px',
            height: '4px',
            background: '#1a1a1a',
            border: '2px solid #333',
            marginTop: '2rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              background: 'linear-gradient(90deg, #a855f7 0%, #00ff41 50%, #00ffff 100%)',
              animation: 'loading 0.8s ease-in-out',
              boxShadow: '0 0 10px rgba(168, 85, 247, 0.6)'
            }}
          />
        </div>
      )}
      {step >= 2 && (
        <div
          className="terminal-text"
          style={{
            fontSize: '0.875rem',
            marginTop: '1rem',
            opacity: 0.6,
            animation: 'fadeIn 0.5s ease-in 1.5s both'
          }}
        >
          {'> Initializing Y2K interface...'}
        </div>
      )}
    </div>
  );
}
