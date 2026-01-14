'use client';

import { useEffect, useState } from 'react';

interface KonamiCodeProps {
  onActivate: () => void;
}

export function KonamiCode({ onActivate }: KonamiCodeProps) {
  const [keys, setKeys] = useState<string[]>([]);
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newKeys = [...keys, e.key].slice(-10);
      setKeys(newKeys);

      // Check if the last 10 keys match the Konami code
      if (newKeys.join('') === konamiCode.join('')) {
        onActivate();
        setKeys([]); // Reset after activation
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keys, onActivate]);

  return null; // This component doesn't render anything
}

export function useKonamiCode() {
  const [isActivated, setIsActivated] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Check localStorage for previous activation
    const activated = localStorage.getItem('konamiActivated') === 'true';
    setIsActivated(activated);
  }, []);

  const activate = () => {
    setIsActivated(true);
    setShowMessage(true);
    localStorage.setItem('konamiActivated', 'true');

    // Hide message after 3 seconds
    setTimeout(() => setShowMessage(false), 3000);
  };

  return { isActivated, showMessage, activate };
}
