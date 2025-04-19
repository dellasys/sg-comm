import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const WelcomeText = () => {
  return (
    <ThemedView style={styles.welcomeTitle}>
      <ThemedText style={styles.welcomeText}>Welcome!</ThemedText>
      <ThemedText style={styles.signInContinueText}>
        Sign in to continue
      </ThemedText>
    </ThemedView>
  );
};

export default WelcomeText;

const styles = StyleSheet.create({
  welcomeTitle: {
    height: "30%",
    justifyContent: "center",
    padding: 10,
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: "bold",
    lineHeight: 40,
  },
  signInContinueText: {
    fontSize: 16,
    color: "#666",
    letterSpacing: 1.5,
  },
});
