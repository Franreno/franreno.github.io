'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

{/*
🚧 UNDER CONSTRUCTION 🚧

This is a parody page celebrating the classic
"Under Construction" pages of the 90s/2000s web.

Nothing is actually under construction - it's just
a fun Easter egg for nostalgic visitors!
*/}

export default function ConstructionPage() {
  const [counter, setCounter] = useState(0);
  const [lastUpdated] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() - Math.floor(Math.random() * 365));
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  });

  // Fake visitor counter that increases
  useEffect(() => {
    const stored = localStorage.getItem('constructionVisits');
    const visits = stored ? parseInt(stored) + 1 : Math.floor(Math.random() * 9000 + 1000);
    localStorage.setItem('constructionVisits', visits.toString());
    setCounter(visits);
  }, []);

  return (
    <div className="space-y-8 text-center">
      {/* Classic Under Construction Banner */}
      <div
        className="py-8 -mx-4 md:-mx-8"
        style={{
          background: 'repeating-linear-gradient(45deg, #ffcc00, #ffcc00 20px, #000 20px, #000 40px)',
        }}
      >
        <div
          className="inline-block px-8 py-4"
          style={{
            background: '#ffcc00',
            border: '4px solid #000',
          }}
        >
          <h1
            className="text-4xl md:text-5xl font-bold"
            style={{
              color: '#000',
              textShadow: '2px 2px 0 #ff0000',
              fontFamily: 'Impact, sans-serif',
            }}
          >
            🚧 UNDER CONSTRUCTION 🚧
          </h1>
        </div>
      </div>

      {/* Construction Worker GIF Section */}
      <div className="flex justify-center items-center gap-4 py-4">
        <img
          src="/retro-icons/construction.svg"
          alt="Construction"
          className="w-16 h-16"
          style={{ animation: 'float 2s ease-in-out infinite' }}
        />
        <div className="text-6xl" style={{ animation: 'float 2s ease-in-out infinite 0.5s' }}>
          👷
        </div>
        <img
          src="/retro-icons/construction.svg"
          alt="Construction"
          className="w-16 h-16"
          style={{ animation: 'float 2s ease-in-out infinite 1s' }}
        />
      </div>

      {/* Main Content Box */}
      <div
        className="y2k-box max-w-2xl mx-auto"
        style={{
          background: 'linear-gradient(180deg, #ffffcc 0%, #ffff99 100%)',
          borderColor: '#ff6600',
          color: '#000',
        }}
      >
        <h2
          className="text-2xl font-bold mb-4"
          style={{
            color: '#ff0000',
            fontFamily: 'Comic Sans MS, cursive, sans-serif',
          }}
        >
          PARDON OUR DUST!
        </h2>

        <p className="mb-4" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
          This section of my website is currently being renovated to bring you
          an even MORE AWESOME experience!
        </p>

        <div
          className="p-4 mb-4 mx-auto"
          style={{
            background: '#fff',
            border: '3px dashed #ff0000',
            maxWidth: '300px',
          }}
        >
          <p className="font-bold mb-2" style={{ color: '#0000ff' }}>
            COMING SOON:
          </p>
          <ul className="text-left text-sm space-y-1" style={{ fontFamily: 'Times New Roman, serif' }}>
            <li>✨ More flashy animations</li>
            <li>🎵 Background MIDI music</li>
            <li>📟 Guestbook</li>
            <li>🌈 Marquee text</li>
            <li>💫 More GIFs</li>
          </ul>
        </div>

        <p className="text-sm" style={{ color: '#666' }}>
          Last updated: {lastUpdated}
        </p>
      </div>

      {/* Hit Counter */}
      <div className="flex justify-center">
        <div
          className="inline-block px-4 py-2"
          style={{
            background: '#000',
            border: '2px solid #333',
          }}
        >
          <p className="text-xs mb-1" style={{ color: '#888' }}>
            Visitors to this page:
          </p>
          <div
            className="font-mono text-2xl font-bold tracking-widest"
            style={{
              background: '#001100',
              padding: '8px 16px',
              border: '2px inset #333',
              color: '#00ff00',
              fontFamily: 'Courier New, monospace',
            }}
          >
            {counter.toString().padStart(6, '0')}
          </div>
        </div>
      </div>

      {/* Classic Web Elements - CSS Animated Marquee */}
      <div className="py-4 overflow-hidden">
        <div
          className="text-lg font-bold whitespace-nowrap"
          style={{
            color: '#ff00ff',
            animation: 'marquee 15s linear infinite',
          }}
        >
          ★★★ THANKS FOR YOUR PATIENCE! CHECK BACK SOON FOR UPDATES! ★★★ THIS PAGE BEST VIEWED WITH NETSCAPE NAVIGATOR 4.0 ★★★ THANKS FOR YOUR PATIENCE! CHECK BACK SOON FOR UPDATES! ★★★
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-4 justify-center flex-wrap py-4">
        <Link
          href="/"
          className="px-6 py-3 font-bold"
          style={{
            background: 'linear-gradient(180deg, #c0c0c0 0%, #808080 50%, #c0c0c0 100%)',
            border: '3px outset #c0c0c0',
            color: '#000',
            fontFamily: 'Tahoma, sans-serif',
          }}
        >
          ← BACK TO HOME
        </Link>
        <Link
          href="/terminal"
          className="px-6 py-3 font-bold"
          style={{
            background: 'linear-gradient(180deg, #c0c0c0 0%, #808080 50%, #c0c0c0 100%)',
            border: '3px outset #c0c0c0',
            color: '#000',
            fontFamily: 'Tahoma, sans-serif',
          }}
        >
          TRY THE TERMINAL →
        </Link>
      </div>

      {/* Webring Section */}
      <div
        className="py-6 mt-8 mx-auto max-w-md"
        style={{
          background: '#1a1a1a',
          border: '2px solid #444',
        }}
      >
        <p className="text-sm mb-3" style={{ color: '#888' }}>
          This site is part of the
        </p>
        <p
          className="text-lg font-bold mb-3"
          style={{
            color: '#00ffff',
            fontFamily: 'Comic Sans MS, cursive, sans-serif',
          }}
        >
          🌐 Y2K Nostalgia Webring 🌐
        </p>
        <div className="flex justify-center gap-4 text-sm">
          <span className="text-gray-500 cursor-not-allowed">← Prev</span>
          <span className="text-accent-bright">Random</span>
          <span className="text-gray-500 cursor-not-allowed">Next →</span>
        </div>
      </div>

      {/* Email Link */}
      <p className="text-sm py-4" style={{ color: '#888' }}>
        Questions? Comments? Email the{' '}
        <a
          href="mailto:work@franreno.com"
          className="underline"
          style={{ color: '#00ffff' }}
        >
          webmaster
        </a>
        !
      </p>
    </div>
  );
}
