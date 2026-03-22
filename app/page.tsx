"use client";

import { motion } from "framer-motion";
import { KernelHeartbeat } from "@/components/KernelHeartbeat";
import { AvatarBadge } from "@/components/AvatarBadge";
import { listRealms } from "@/lib/realms/realms";
import { RealmCard } from "@/components/RealmCard";
import { Button } from "@/components/ui/Button";

const realms = listRealms();

export default function Portal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-slate-400">
            ROKO // Sovereign Portal
          </p>
              <h1 className="text-2xl md:text-3xl font-semibold text-slate-50">
                Welcome to the Sovereign Portal v2 — Pipeline Test
              </h1>
          <p className="text-sm text-slate-400 max-w-xl">
            This portal surfaces the live state of the Sovereign Evolution
            Kernel Ω∞+, its active realms, and the encounter engine that
            responds to your presence.
          </p>
          <div className="flex gap-3 items-center">
            <Button>Open Dashboard</Button>
            <AvatarBadge />
          </div>
        </div>
        <div className="w-full md:w-80">
          <KernelHeartbeat />
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-100">
            Available Realms
          </h2>
          <p className="text-[0.7rem] text-slate-500">
            Each realm exposes a different risk surface and narrative vector.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {realms.map((realm) => (
            <RealmCard key={realm.id} realm={realm} />
          ))}
        </div>
      </section>
    </motion.div>
  );
}
