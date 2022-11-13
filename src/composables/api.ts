import type { FullScoreMap } from "~/types/index";
import { supabase } from "~/plugins/supabase";

interface User {
  id: number;
  name: string;
  job_title: string;
  score_map: FullScoreMap;
}

export const useApi = () => {
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

  return {
    getUserById,
  };
};
