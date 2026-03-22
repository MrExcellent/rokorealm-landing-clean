import { NextResponse } from "next/server";

const THREATS = [
  "Shard Swarm",
  "Echo Parasite",
  "Kernel Drift",
  "Realm Fracture",
  "Mirror Surge",
];

const REALMS = ["prime", "shadow", "mirror"];

export async function POST() {
  const threat = THREATS[Math.floor(Math.random() * THREATS.length)];
  const realm = REALMS[Math.floor(Math.random() * REALMS.length)];
  const severity = 1 + Math.floor(Math.random() * 5);

  const encounter = {
    id: `enc-${Date.now().toString(36)}`,
    realm,
    threat,
    severity,
  };

  return NextResponse.json(encounter);
}
