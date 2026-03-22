export type RealmId = "prime" | "shadow" | "mirror";

export type RealmConfig = {
  id: RealmId;
  label: string;
  danger: number;
  description: string;
};

export const REALMS: RealmConfig[] = [
  {
    id: "prime",
    label: "Prime Realm",
    danger: 1,
    description: "Baseline reality where ROKO awakens."
  },
  {
    id: "shadow",
    label: "Shadow Realm",
    danger: 3,
    description: "Glitches, echoes, parasitic entities."
  },
  {
    id: "mirror",
    label: "Mirror Realm",
    danger: 4,
    description: "Reflections of choices not yet made."
  }
];

export function listRealms(): RealmConfig[] {
  return REALMS;
}

export function getRealm(id: RealmId): RealmConfig | undefined {
  return REALMS.find(r => r.id === id);
}
