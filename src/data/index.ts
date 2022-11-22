import { trackLevels } from "~/data/levels/index";
import { skillIds, tracksBySkillId } from "~/data/skills";
import { trackDescriptions } from "~/data/tracks";

import type { ISkill, TrackScore } from "~/types/index";

export const skills: ISkill[] = skillIds.map((skillId) => ({
  id: skillId,
  tracks: tracksBySkillId[skillId].map((trackId) => ({
    id: trackId,
    description: trackDescriptions[trackId],
    steps: trackLevels[trackId].map(([description, examples], i) => ({
      description,
      examples,
      score: (i + 1) as TrackScore,
    })),
  })),
}));
