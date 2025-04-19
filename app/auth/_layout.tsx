import { Stack } from "expo-router";

import { Colors } from "@/constants/Colors";

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="email-confirmation"
        options={{
          headerStyle: { backgroundColor: Colors.theme.main },
          headerShown: false,
        }}
      />
    </Stack>
  );
}
