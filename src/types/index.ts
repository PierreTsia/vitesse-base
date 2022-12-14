import { type ViteSSGContext } from 'vite-ssg'
import type { SkillId } from "~/data/skills";
import type { TrackDescription, TrackId } from "~/data/tracks";


export type UserModule = (ctx: ViteSSGContext) => void

export interface ISkill {
  id: SkillId;
  tracks: ITrack[];
}



export interface ITrack {
  id: TrackId;
  description: TrackDescription;
  steps: ITrackLevel[];
}

export interface ITrackLevel {
  description: string;
  score: TrackScore;
  examples: string[];
}

export type Score = 0 | 1 | 2 | 3 | 4 | 5;
export type TrackScore = Exclude<Score, 0>;

export type TrackEvaluation = { [key in TrackId]: Score };

export type FullScoreMap = Record<TrackId, Score>;
