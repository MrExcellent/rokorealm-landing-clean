"use client";

import { usePathname } from "next/navigation";

export function HUDOverlay() {
  const pathname = usePathname();
  const section =
    pathname === "/"
      ? "PORTAL"
      : pathname.startsWith("/dashboard")
      ? "DASHBOARD"
      : "REALM";

  return (
    <div className="fixed bottom-4 right-4 z-40 text-[0.65rem] px-3 py-1.5 rounded-full bg-black/70 border border-slate-700/80 text-slate-300 backdrop-blur-md">
      <span className="uppercase tracking-[0.25em] text-slate-500 mr-2">
        HUD
      </span>
      <span className="text-slate-200">{section}</span>
    </div>
  );
}
