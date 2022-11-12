import type { TrackId } from "~/data/tracks";

export type SkillId = typeof skillIds[number];
export const skillIds = [
  "building",
  "executing",
  "supporting",
  "strengthening",
] as const;

export const tracksBySkillId: Record<SkillId, TrackId[]> = {
  building: [
    "mobile",
    "front-end",
    "back-end",
    "dev-ops",
    "data engineer",
    "quality",
    "security engineer",
  ],
  executing: ["project management", "communication", "craft", "initiative"],
  supporting: [
    "career development",
    "org design",
    "well-being",
    "accomplishment",
  ],
  strengthening: ["mentorship", "evangelism", "recruiting", "community"],
};
