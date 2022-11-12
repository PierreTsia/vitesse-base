import { describe, expect, it } from "vitest";
import { skills } from "~/data";
import { skillIds } from "~/data/skills";

describe("skills", () => {
  it("should works", () => {
    expect(skills).toBeDefined();
    expect(skills.length).toBe(skillIds.length);
  });

  it("should have id property containing a valid skill id", () => {
    skills.forEach((skill) => {
      expect(skill.id).toBeDefined();
      expect(skillIds).toContain(skill.id);
    });
  });

  it("each skill should have tracks", () => {
    skills.forEach((skill) => {
      expect(skill.tracks).toBeDefined();
    });
  });

  it("each track should have id, description, and ladder", () => {
    skills.forEach((skill) => {
      skill.tracks.forEach((track) => {
        expect(track.id).toBeDefined();
        expect(track.description).toBeDefined();
        expect(track.description).not.toBe("");
        expect(track.ladder).toBeDefined();
      });
    });
  });

  it("each track should have a ladder with 5 levels", () => {
    skills.forEach((skill) => {
      skill.tracks.forEach((track) => {
        expect(track.ladder.length).toBe(5);
        expect(track.ladder.map((level) => level.score)).toEqual([1, 2, 3, 4, 5]);
      });
    });
  });

  it('each scale of track ladder must have at least 3 examples', () => {
    skills.forEach((skill) => {
      skill.tracks.forEach((track) => {
        track.ladder.forEach((level) => {
          expect(level.examples.length).toBeGreaterThanOrEqual(3);
        });
      });
    });
  })
});
