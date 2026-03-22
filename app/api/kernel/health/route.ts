import { NextResponse } from "next/server";
import { getKernelHealth } from "@/lib/roko/kernel";

export async function GET() {
  const health = getKernelHealth();
  return NextResponse.json(health);
}
