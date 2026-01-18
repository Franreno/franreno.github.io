import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { EasterEggsLoader } from "@/components/EasterEggsLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Francisco Nogueira - Y2K Edition",
  description: "Data Engineer & ML Researcher // Made with ♥ in the 2020s, styled like the 2000s",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <EasterEggsLoader />
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1 container-y2k py-8">
            {children}
          </main>
          <footer className="border-t-4 border-accent py-8 text-center relative overflow-hidden" style={{
            background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)',
            boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.4)'
          }}>
            <img
              src="/retro-icons/star.svg"
              alt=""
              aria-hidden="true"
              className="absolute top-4 left-8 w-4 h-4 opacity-30"
              style={{ animation: 'float 4s ease-in-out infinite' }}
            />
            <img
              src="/retro-icons/star.svg"
              alt=""
              aria-hidden="true"
              className="absolute top-8 right-12 w-4 h-4 opacity-30"
              style={{ animation: 'float 4s ease-in-out infinite 2s' }}
            />
            <img
              src="/retro-icons/star.svg"
              alt=""
              aria-hidden="true"
              className="absolute bottom-4 left-20 w-4 h-4 opacity-30"
              style={{ animation: 'float 4s ease-in-out infinite 1s' }}
            />
            <img
              src="/retro-icons/star.svg"
              alt=""
              aria-hidden="true"
              className="absolute bottom-8 right-8 w-4 h-4 opacity-30"
              style={{ animation: 'float 4s ease-in-out infinite 3s' }}
            />
            <div className="container-y2k relative z-10">
              <p className="text-sm mb-4" style={{ color: '#b0b0b0' }}>
                Made with <span className="neon-glow">♥</span> in the 2020s, styled like the 2000s
              </p>
              <div className="flex flex-wrap gap-3 justify-center items-center">
                <span className="retro-badge">
                  VISITOR #{Math.floor(Math.random() * 900000 + 100000).toString().padStart(6, '0')}
                </span>
                <a
                  href="/pgp.asc"
                  className="retro-badge"
                  style={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  title="Fingerprint: C70D 9E49 24F7 E3E7 076B C06E C2C4 14A0 03A4 EDA0"
                  download
                >
                  🔐 PGP KEY
                </a>
              </div>
              <p className="text-xs mt-4" style={{ color: '#555', fontFamily: 'monospace' }}>
                ↑↑↓↓←→←→BA 🎮
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
