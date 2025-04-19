import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const CreatePassDescription = () => {
  return (
    <ThemedView>
      <ThemedText style={styles.resetPassTitle}>Create new password</ThemedText>
      <ThemedText style={styles.descriptionText}>
        Your new password must be different from previous used passwords.
      </ThemedText>
    </ThemedView>
  );
};

export default CreatePassDescription;

const styles = StyleSheet.create({
  resetPassTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  descriptionText: {
    fontSize: 15,
    marginTop: 10,
    color: "#666",
  },
});
