import { NextResponse } from "next/server";
import { getKernelHealth } from "@/lib/roko/kernel";

export async function GET() {
  const health = getKernelHealth();
  const logLine = `[${health.timestamp}] status=${health.status} latency=${health.latencyMs} load=${health.load}`;
  return NextResponse.json({ log: logLine });
}
