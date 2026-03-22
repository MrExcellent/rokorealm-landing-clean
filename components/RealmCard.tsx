"use client";

import { motion } from "framer-motion";
import type { Realm } from "@/lib/realms/realms";
import { Button } from "./ui/Button";

export function RealmCard({ realm }: { realm: Realm }) {
  const accent =
    realm.accent === "cyan"
      ? "from-cyan-500/20"
      : realm.accent === "violet"
      ? "from-violet-500/20"
      : "from-rose-500/20";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="roko-border rounded-xl bg-slate-950/60 p-4 flex flex-col gap-3 relative overflow-hidden"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} via-transparent to-transparent opacity-60`}
      />
      <div className="relative flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold">{realm.label}</h3>
          <p className="text-[0.7rem] text-slate-400 mt-1">
            {realm.description}
          </p>
        </div>
        <div className="text-right text-[0.7rem] text-slate-400">
          <div>danger: {realm.danger}/5</div>
          <div className="uppercase tracking-[0.2em] text-[0.55rem] mt-1 text-slate-500">
            {realm.id}
          </div>
        </div>
      </div>
      <div className="relative flex justify-end">
        <Button variant="ghost" className="text-[0.7rem]">
          Enter Realm
        </Button>
      </div>
    </motion.div>
  );
}
