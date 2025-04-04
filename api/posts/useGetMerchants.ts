import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { objectToCamel, ObjectToCamel } from "ts-case-convert";

import { type Tables } from "@/types/database.types";
import supabase from "@/utils/supabase";

export const GET_POSTS = "GET_POSTS";

export const useGetMerchants = (): UseQueryResult<
  ObjectToCamel<Tables<"merchants">[]>
> => {
  return useQuery({
    queryKey: [GET_POSTS],
    queryFn: async () => {
      const { data: posts } = await supabase.from("merchants").select("*");

      if (posts !== null) {
        return objectToCamel(posts);
      }

      return [];
    },
    refetchOnWindowFocus: false,
    enabled: false,
  });
};
