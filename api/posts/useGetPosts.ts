import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { objectToCamel, ObjectToCamel } from "ts-case-convert";

import { type Tables } from "@/types/database.types";
import supabase from "@/utils/supabase";

export const GET_POSTS = "GET_POSTS";

export const useGetPosts = (): UseQueryResult<
  ObjectToCamel<Tables<"posts">[]>
> => {
  return useQuery({
    queryKey: [GET_POSTS],
    queryFn: async () => {
      const { data: posts } = await supabase.from("posts").select("*");

      if (posts !== null) {
        return objectToCamel(posts);
      }

      return [];
    },
    refetchOnWindowFocus: false,
    enabled: false,
  });
};
