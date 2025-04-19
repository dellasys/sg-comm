import { Session } from "@supabase/supabase-js";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { objectToCamel } from "ts-case-convert";

import { usePersonalInformation } from "@/state/personalInformation/usePersonalInformation";
import supabase from "@/utils/supabase";

const USER_INFO = "USER_INFO";

const useUserInfo = (): UseQueryResult<Session | null> => {
  const { setPersonalInformation } = usePersonalInformation();

  return useQuery({
    queryKey: [USER_INFO],
    queryFn: async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        return null;
      }

      const { user } = objectToCamel(session) ?? {};

      if (user) {
        const { userMetadata, phone } = user ?? {};
        const { name, email, dob, gender } = userMetadata ?? {};

        setPersonalInformation({
          name,
          email,
          phone,
          dob,
          gender,
        });
      }

      return session;
    },
  });
};

export default useUserInfo;
