'use client';

import { useState, useEffect } from 'react';
import { KonamiCode } from './KonamiCode';
import { MatrixRain } from './MatrixRain';

export function EasterEggs() {
  const [matrixActive, setMatrixActive] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleKonamiActivate = () => {
    setMatrixActive(true);
    setShowMessage(true);
    localStorage.setItem('konamiActivated', 'true');

    // Hide message after 3 seconds
    setTimeout(() => setShowMessage(false), 3000);
  };

  const handleCloseMatrix = () => {
    setMatrixActive(false);
  };

  if (!mounted) return null;

  return (
    <>
      <KonamiCode onActivate={handleKonamiActivate} />
      <MatrixRain isActive={matrixActive} onClose={handleCloseMatrix} />

      {/* Activation Message */}
      {showMessage && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10000,
            padding: '20px 40px',
            background: 'rgba(0, 0, 0, 0.95)',
            border: '3px solid #00ff41',
            boxShadow: '0 0 30px rgba(0, 255, 65, 0.8), inset 0 0 20px rgba(0, 255, 65, 0.2)',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <p
            style={{
              color: '#00ff41',
              fontFamily: 'monospace',
              fontSize: '24px',
              fontWeight: 'bold',
              textShadow: '0 0 10px rgba(0, 255, 65, 0.8)',
              margin: 0,
              textAlign: 'center'
            }}
          >
            ★ CHEAT CODE ACTIVATED ★
          </p>
          <p
            style={{
              color: '#a855f7',
              fontFamily: 'monospace',
              fontSize: '14px',
              marginTop: '10px',
              marginBottom: 0,
              textAlign: 'center'
            }}
          >
            Welcome to the Matrix...
          </p>
        </div>
      )}
    </>
  );
}
