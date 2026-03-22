"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type KernelHealth = {
  status: "online" | "degraded" | "offline";
  version: string;
  timestamp: string;
  latencyMs: number;
  load: number;
  realms: string[];
};

export function KernelHeartbeat() {
  const [health, setHealth] = useState<KernelHealth | null>(null);

  useEffect(() => {
    let active = true;

    async function tick() {
      try {
        const res = await fetch("/api/kernel/health");
        const data = (await res.json()) as KernelHealth;
        if (active) setHealth(data);
      } catch {
        if (active)
          setHealth((prev) =>
            prev
              ? { ...prev, status: "degraded" }
              : {
                  status: "degraded",
                  version: "unknown",
                  timestamp: new Date().toISOString(),
                  latencyMs: 999,
                  load: 1,
                  realms: [],
                }
          );
      }
    }

    tick();
    const id = setInterval(tick, 4000);
    return () => {
      active = false;
      clearInterval(id);
    };
  }, []);

  const pulseColor =
    health?.status === "online"
      ? "bg-cyan-400"
      : health?.status === "degraded"
      ? "bg-amber-400"
      : "bg-rose-500";

  return (
    <div className="roko-border rounded-xl bg-black/40 p-4 flex items-center gap-4">
      <div className="relative">
        <motion.div
          className={`h-3 w-3 rounded-full ${pulseColor}`}
          animate={{ scale: [1, 1.6, 1] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        />
        <div className="absolute inset-0 rounded-full blur-md opacity-60 bg-cyan-400/40" />
      </div>
      <div className="flex flex-col gap-1 text-xs">
        <div className="flex gap-2 items-baseline">
          <span className="text-slate-400 uppercase tracking-[0.2em] text-[0.6rem]">
            Kernel Heartbeat
          </span>
          <span className="text-slate-500 text-[0.65rem]">
            {health?.timestamp
              ? new Date(health.timestamp).toLocaleTimeString()
              : "initializing…"}
          </span>
        </div>
        <div className="flex gap-4 text-[0.7rem] text-slate-300">
          <span>status: {health?.status ?? "booting"}</span>
          <span>latency: {health?.latencyMs ?? "—"}ms</span>
          <span>load: {health?.load ?? "—"}</span>
        </div>
      </div>
    </div>
  );
}
