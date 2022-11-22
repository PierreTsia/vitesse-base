import type { FullScoreMap, ISkill } from "~/types";
import { supabase } from "~/plugins/supabase";

interface User {
  id: number;
  name: string;
  job_title: string;
  score_map: FullScoreMap;
}

export const useApi = () => {
  const getUserScoreMap = async (userId: number): Promise<any> => {
    const { data, error } = await supabase
      .from("users_score_maps")
      .select("*")
      .eq("user", userId);

    if (error) {
      throw error;
    }
    return data?.reduce((acc, row) => {
      acc[row.track] = row.score;
      return acc;
    }, {});
  };

  const getUserById = async (id: number) => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", id);

    if (data) {
      return data[0] as User;
    }
    if (error) {
      throw new Error(error.message);
    }
    return null;
  };

  const getSkillsTracks = async () => {
    const { data, error } = await supabase
      .from("skills")
      .select(
        "id, description, indicators, tracks(id, description, steps(description, score, examples))"
      );

    if (data) {
      return data as unknown as ISkill[];
    }
    if (error) {
      throw new Error(error.message);
    }
    return null;
  };

  return {
    getUserById,
    getSkillsTracks,
    getUserScoreMap,
  };
};
