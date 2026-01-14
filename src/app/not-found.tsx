import Link from 'next/link';

{/*
    ___  ___  _  _
   / _ \/ _ \| || |
  | | | | | | || |_
  | |_| | |_|__   _|
   \___/ \___/  |_|

  ╭─────────────────────────────────────╮
  │  You found the 404 Easter egg!      │
  │                                     │
  │  While you're here, try entering    │
  │  the Konami code on the main site:  │
  │  ↑ ↑ ↓ ↓ ← → ← → B A               │
  │                                     │
  │  Or visit /terminal for a surprise! │
  │                                     │
  │  - Francisco                        │
  ╰─────────────────────────────────────╯
*/}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
      {/* Main Error Box */}
      <div
        className="y2k-box text-center max-w-2xl"
        style={{
          background: 'linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)',
          borderWidth: '3px',
        }}
      >
        {/* Window Title Bar */}
        <div
          className="mb-6 -mx-6 -mt-6 px-6 py-3 flex items-center justify-between"
          style={{
            background: 'linear-gradient(180deg, #7c3aed 0%, #6d28d9 100%)',
            borderBottom: '3px solid #333',
          }}
        >
          <span className="font-mono text-sm font-bold text-white">
            ERROR_404.exe
          </span>
          <div className="flex gap-2">
            <span
              className="w-4 h-4 rounded-sm"
              style={{ background: '#00ff41', border: '1px solid #000' }}
            />
            <span
              className="w-4 h-4 rounded-sm"
              style={{ background: '#00ffff', border: '1px solid #000' }}
            />
            <span
              className="w-4 h-4 rounded-sm"
              style={{ background: '#ff0040', border: '1px solid #000' }}
            />
          </div>
        </div>

        {/* Error Icon */}
        <div className="text-8xl mb-4 glitch" style={{ color: '#a855f7' }}>
          ⚠️
        </div>

        {/* Error Code */}
        <h1 className="text-7xl font-bold mb-4 chrome-text glow-pulse">
          404
        </h1>

        {/* Error Message */}
        <h2 className="text-2xl font-bold mb-4 terminal-text">
          {'> PAGE_NOT_FOUND.exe'}
        </h2>

        <div
          className="p-4 mb-6 font-mono text-sm text-left"
          style={{
            background: '#0a0a0a',
            border: '2px solid #333',
            color: '#b0b0b0',
          }}
        >
          <p className="text-red-500 mb-2">
            {'[ERROR] SYSTEM: Page not found in database'}
          </p>
          <p className="text-yellow-500 mb-2">
            {'[WARN] ROUTER: Invalid path detected'}
          </p>
          <p className="terminal-text">
            {'[INFO] SYSTEM: Redirecting to safe location...'}
          </p>
        </div>

        <p className="text-base mb-6" style={{ color: '#b0b0b0' }}>
          Oops! Looks like you've ventured into the digital void.
          <br />
          This page doesn't exist in the database... yet.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/" className="y2k-button">
            🏠 Return Home
          </Link>
          <Link href="/projects" className="y2k-button">
            💾 View Projects
          </Link>
        </div>
      </div>

      {/* Blinking Status */}
      <div className="text-center">
        <p className="text-sm terminal-text blink">
          {'> STATUS: [AWAITING_INPUT]'}
        </p>
      </div>

      {/* Fun ASCII Art */}
      <div
        className="font-mono text-xs text-center"
        style={{ color: '#666', lineHeight: '1.2' }}
      >
        <pre>
{`    _____   _____   _  _
   |  _  | |  _  | | || |
   | |_| | | |_| | | || |_
   |___  | |___  | |__   _|
       | |     | |    | |
       |_|     |_|    |_|  `}
        </pre>
      </div>
    </div>
  );
}
