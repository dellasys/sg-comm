import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import ResetEmailTextInput from "@/components/auth/forgotpass/ResetEmailTextInput";
import ResetPassDescription from "@/components/auth/forgotpass/ResetPassDescription";
import SendInstructionButton from "@/components/auth/forgotpass/SendInstructionButton";

const AuthForgotPassword = () => {
  return (
    <ThemedView style={styles.container}>
      <ResetPassDescription />
      <ThemedView style={{ padding: 10 }} />
      <ResetEmailTextInput />
      <SendInstructionButton />
    </ThemedView>
  );
};

export default AuthForgotPassword;

const styles = StyleSheet.create({
  container: {
    padding: "10%",
    flex: 1,
  },
});
