import { StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useCreateEmailInput } from "@/state/createAccount/useCreateEmailInput";
import { useCreatePasswordInput } from "@/state/createAccount/useCreatePasswordInput";
import { useCreateUserNameInput } from "@/state/createAccount/useCreateUserNameInput";
import supabase from "@/utils/supabase";

const SignUpButton = () => {
  const { email } = useCreateEmailInput();
  const { password } = useCreatePasswordInput();
  const { name } = useCreateUserNameInput();

  const handleSignUp = async () => {
    const response = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          user_role: "user",
          name,
        },
      },
    });
    const { user, error } = response;
    console.log(7483, response);
    if (error) {
      console.error("Sign up error:", error.message);
    }
    if (user) {
      console.log("User signed up:", user);
    }
  };

  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.sendInstructionsButton}
        onPress={handleSignUp}
      >
        <ThemedText style={styles.sendInstructionsButtonText}>
          Sign Up
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default SignUpButton;

const styles = StyleSheet.create({
  sendInstructionsButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  sendInstructionsButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
