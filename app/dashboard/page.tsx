
"use client";

import { motion } from "framer-motion";
import { KernelHeartbeat } from "@/components/KernelHeartbeat";
import { KernelLogs } from "@/components/KernelLogs";
import { listRealms } from "@/lib/realms/realms";
import { EncounterPanel } from "@/components/EncounterPanel";

const realms = listRealms();

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <header className="flex items-center justify-between">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-400">
            Kernel Dashboard
          </p>
          <h1 className="text-xl font-semibold text-slate-50">
            Live Kernel Telemetry & Realm Overview
          </h1>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
        <div className="space-y-4">
          <KernelHeartbeat />
          <KernelLogs />
          <div className="roko-border rounded-xl bg-black/40 p-4 text-xs text-slate-300">
            <div className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400 mb-2">
              Realm Map
            </div>
            <ul className="space-y-1">
              {realms.map((r) => (
                <li
                  key={r.id}
                  className="flex items-center justify-between text-[0.75rem]"
                >
                  <span>{r.label}</span>
                  <span className="text-slate-500">
                    danger {r.danger}/5 • {r.id}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <EncounterPanel />
      </div>
    </motion.div>
  );
}
