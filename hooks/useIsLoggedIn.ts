import { useQuery, type UseQueryResult } from "@tanstack/react-query";

import supabase from "@/utils/supabase";

export const IS_USER_LOGGED_IN = "IS_USER_LOGGED_IN";

export const useIsLoggedIn = (): UseQueryResult<boolean> => {
  return useQuery({
    queryKey: [IS_USER_LOGGED_IN],
    queryFn: async (): Promise<boolean> => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      return !!session;
    },
  });
};
