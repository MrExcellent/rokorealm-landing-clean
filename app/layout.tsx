
import "./globals.css";
import type { ReactNode } from "react";
import { HUDOverlay } from "@/components/HUDOverlay";

export const metadata = {
  title: "ROKO Sovereign Portal",
  description: "Kernel, Realms, and Encounters.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="roko-gradient min-h-screen text-roko-text">
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-slate-800/60 bg-black/40 backdrop-blur-sm">
            <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-cyan-400/20 border border-cyan-300/60 shadow-roko-glow" />
                <span className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-300">
                  ROKO // Sovereign Kernel
                </span>
              </div>
              <nav className="flex gap-4 text-xs text-slate-400">
                <a href="/" className="hover:text-cyan-300 transition-colors">
                  Portal
                </a>
                <a
                  href="/dashboard"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Dashboard
                </a>
              </nav>
            </div>
          </header>
          <main className="flex-1 mx-auto w-full max-w-6xl px-6 py-10">
            {children}
          </main>
          <footer className="border-t border-slate-800/60 bg-black/40 text-xs text-slate-500">
            <div className="mx-auto max-w-6xl px-6 py-3 flex justify-between">
              <span>ROKO Evolution Kernel Ω∞+</span>
              <span>Realm-safe build • Local dev</span>
            </div>
          </footer>
        </div>
        <HUDOverlay />
      </body>
    </html>
  );
}
