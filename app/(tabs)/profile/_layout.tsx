import { Stack } from "expo-router";

import { Colors } from "@/constants/Colors";

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerStyle: { backgroundColor: Colors.theme.main },
          headerTitle: "Profiles",
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerStyle: { backgroundColor: Colors.theme.main },
          headerTitle: "Login",
        }}
      />
      <Stack.Screen
        name="forgot-password"
        options={{
          headerStyle: { backgroundColor: Colors.theme.main },
          headerTitle: "Forgot Password",
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerStyle: { backgroundColor: Colors.theme.main },
          headerTitle: "Sign Up",
        }}
      />
    </Stack>
  );
}
