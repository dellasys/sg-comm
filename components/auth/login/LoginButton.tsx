import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, Alert } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IS_USER_LOGGED_IN } from "@/hooks/useIsLoggedIn";
import { useLoginEmailInput } from "@/state/login/useLoginEmailInput";
import { useLoginPasswordInput } from "@/state/login/useLoginPasswordInput";
import queryClient from "@/utils/queryClient";
import supabase from "@/utils/supabase";

const LoginButton = () => {
  const { back } = useRouter();
  const { email } = useLoginEmailInput();
  const { password } = useLoginPasswordInput();

  const handleLogin = async () => {
    const response = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    const { data, error } = response;
    const { user } = data ?? {};

    if (error?.code === "email_not_confirmed") {
      Alert.alert(
        "Login Error",
        "Your email is not confirmed. Please check your inbox.",
      );
    }
    if (user) {
      back();
      void queryClient.invalidateQueries({ queryKey: [IS_USER_LOGGED_IN] });
    }
  };

  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <ThemedText style={styles.loginBtnText}>LOGIN</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  loginBtn: {
    backgroundColor: "#007BFF",
    paddingHorizontal: 35,
    paddingVertical: 7,
    borderRadius: 5,
    alignItems: "center",
  },
  loginBtnText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
