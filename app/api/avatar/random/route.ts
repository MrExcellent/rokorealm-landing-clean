import { NextResponse } from "next/server";

const COLORS = [
  "#22d3ee",
  "#a855f7",
  "#f97373",
  "#facc15",
  "#4ade80",
  "#38bdf8",
];

const NAMES = ["ROKO", "OBSERVER", "WANDERER", "ANCHOR", "VECTOR", "TRACE"];

export async function GET() {
  const initials = "RK";
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const codename = NAMES[Math.floor(Math.random() * NAMES.length)];
  return NextResponse.json({ initials, color, codename });
}
