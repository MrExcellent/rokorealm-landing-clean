"use client";

import { useEffect, useState } from "react";

export function KernelLogs() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let active = true;

    async function tick() {
      try {
        const res = await fetch("/api/kernel/logs");
        const data = (await res.json()) as { log: string };
        if (!active) return;
        setLines((prev) => [data.log, ...prev].slice(0, 6));
      } catch {
        /* ignore */
      }
    }

    tick();
    const id = setInterval(tick, 5000);
    return () => {
      active = false;
      clearInterval(id);
    };
  }, []);

  return (
    <div className="roko-border rounded-xl bg-black/60 p-3 text-[0.7rem] text-slate-300">
      <div className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500 mb-1">
        Kernel Logs
      </div>
      <div className="space-y-0.5 max-h-32 overflow-hidden">
        {lines.map((l, i) => (
          <div key={i} className="font-mono text-[0.65rem] text-slate-400">
            {l}
          </div>
        ))}
        {lines.length === 0 && (
          <div className="text-slate-500">Awaiting first log line…</div>
        )}
      </div>
    </div>
  );
}
