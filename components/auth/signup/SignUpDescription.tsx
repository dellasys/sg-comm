import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const SignUpDescription = () => {
  return (
    <ThemedView>
      <ThemedText style={styles.resetPassTitle}>Create Account</ThemedText>
      <ThemedText style={styles.instructionText}>
        Fill your information below or register with your social account.
      </ThemedText>
    </ThemedView>
  );
};

export default SignUpDescription;

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
