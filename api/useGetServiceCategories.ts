import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { objectToCamel, ObjectToCamel } from "ts-case-convert";

import { type Tables } from "@/types/database.types";
import supabase from "@/utils/supabase";

export const GET_SERVICE_CATEGORIES = "GET_SERVICE_CATEGORIES";

export const useGetServiceCategories = (): UseQueryResult<
  ObjectToCamel<Tables<"service_categories">[]>
> => {
  return useQuery({
    queryKey: [GET_SERVICE_CATEGORIES],
    queryFn: async () => {
      const { data: serviceCategories } = await supabase
        .from("service_categories")
        .select("*");

      if (serviceCategories !== null) {
        return objectToCamel(serviceCategories);
      }

      return [];
    },
  });
};
