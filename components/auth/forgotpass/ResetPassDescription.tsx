import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const ResetPassDescription = () => {
  return (
    <ThemedView>
      <ThemedText style={styles.resetPassTitle}>Reset Password</ThemedText>
      <ThemedText style={styles.instructionText}>
        Enter the email associated with your account and we'll send an email
        with instruction to reset your password.
      </ThemedText>
    </ThemedView>
  );
};

export default ResetPassDescription;

const styles = StyleSheet.create({
  resetPassTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  instructionText: {
    fontSize: 15,
    marginTop: 10,
    color: "#666",
  },
});
