"use client";


import { useState } from "react";
import { Button } from "./ui/Button";

import { motion, AnimatePresence } from "framer-motion";

type EncounterState = {
  id: string;
  realm: string;
  threat: string;
  severity: number;
};

export function EncounterPanel() {
  const [encounter, setEncounter] = useState<EncounterState | null>(null);
  const [loading, setLoading] = useState(false);

  async function startEncounter() {
    setLoading(true);
    try {
      const res = await fetch("/api/encounter/start", { method: "POST" });
      const data = (await res.json()) as EncounterState;
      setEncounter(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="roko-border rounded-xl bg-black/40 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Encounter Engine
        </div>
        <Button
          variant="primary"
          onClick={startEncounter}
          disabled={loading}
          className="text-[0.7rem]"
        >
          {loading ? "Spawning…" : "Start Encounter"}
        </Button>
      </div>
      <AnimatePresence mode="wait">
        {encounter ? (
          <motion.div
            key={encounter.id}
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="text-xs text-slate-300 space-y-1"
          >
            <div>
              <span className="text-slate-500">id:</span> {encounter.id}
            </div>
            <div>
              <span className="text-slate-500">realm:</span>{" "}
              {encounter.realm}
            </div>
            <div>
              <span className="text-slate-500">threat:</span>{" "}
              {encounter.threat}
            </div>
            <div>
              <span className="text-slate-500">severity:</span>{" "}
              {encounter.severity}/5
            </div>
          </motion.div>
        ) : (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[0.7rem] text-slate-500"
          >
            No active encounter. Initiate to test the kernel’s response
            surface.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
