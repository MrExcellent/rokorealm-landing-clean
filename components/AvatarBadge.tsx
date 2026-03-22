"use client";

import { useEffect, useState } from "react";


type Avatar = {
  initials: string;
  color: string;
  codename: string;
};

export function AvatarBadge() {
  const [avatar, setAvatar] = useState<Avatar | null>(null);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/avatar/random");
      const data = (await res.json()) as Avatar;
      setAvatar(data);
    }
    load();
  }, []);

  const bg = avatar?.color ?? "#22d3ee";

  return (
    <div className="flex items-center gap-2 text-xs text-slate-300">
      <div
        className="h-7 w-7 rounded-full flex items-center justify-center text-[0.7rem] font-semibold border border-slate-900 shadow-roko-glow"
        style={{ background: bg }}
      >
        {avatar?.initials ?? "RK"}
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-slate-400 text-[0.7rem]">Active Operator</span>
        <span className="text-[0.7rem] text-slate-200">
          {avatar?.codename ?? "INITIALIZING"}
        </span>
      </div>
    </div>
  );
}
