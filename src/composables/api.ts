import { users } from "~/data/users.json";
import type { FullScoreMap } from "~/types/index";

interface User {
  id: number;
  name: string;
  job_title: string;
  score_map: FullScoreMap;
}

export const useApi = () => {
  const getUserById = async (id: number) => {
    return (users as User[]).find((user) => user.id === id) || null;
  };

  return {
    getUserById,
  };
};
