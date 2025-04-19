import { StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const ResetPasswordButton = () => {
  return (
    <ThemedView>
      <TouchableOpacity style={styles.sendInstructionsButton}>
        <ThemedText style={styles.sendInstructionsButtonText}>
          Reset Password
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default ResetPasswordButton;

const styles = StyleSheet.create({
  sendInstructionsButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  sendInstructionsButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
