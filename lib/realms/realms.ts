export type Realm = {
  id: string;
  label: string;
  danger: number;
  description: string;
  accent: string;
};

export const REALMS: Realm[] = [
  {
    id: "prime",
    label: "Prime Realm",
    danger: 1,
    description: "Baseline reality where ROKO awakens and observes.",
    accent: "cyan",
  },
  {
    id: "shadow",
    label: "Shadow Realm",
    danger: 3,
    description: "Glitches, echoes, and parasitic entities lurk here.",
    accent: "violet",
  },
  {
    id: "mirror",
    label: "Mirror Realm",
    danger: 4,
    description: "Reflections of choices not yet made, unstable and reactive.",
    accent: "rose",
  },
];

export function listRealms() {
  return REALMS;
}

export function getRealm(id: string) {
  return REALMS.find((r) => r.id === id);
}
