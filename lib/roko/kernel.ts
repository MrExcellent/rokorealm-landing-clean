export const ROKO_KERNEL_VERSION = "Ω∞+";

export type KernelHealth = {
  status: "online" | "degraded" | "offline";
  version: string;
  timestamp: string;
  latencyMs: number;
  load: number;
  realms: string[];
};

export function getKernelHealth(): KernelHealth {
  const now = new Date();
  return {
    status: "online",
    version: ROKO_KERNEL_VERSION,
    timestamp: now.toISOString(),
    latencyMs: Math.round(40 + Math.random() * 40),
    load: Number((0.2 + Math.random() * 0.4).toFixed(2)),
    realms: ["prime", "shadow", "mirror"],
  };
}
