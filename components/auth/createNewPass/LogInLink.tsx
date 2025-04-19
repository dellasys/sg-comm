import { Link } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const LogInLink = () => {
  return (
    <ThemedView style={styles.signUpContainer}>
      <ThemedText style={styles.dontHaveAccountText}>
        Already have an account?{" "}
        <Link href="/profile/login">
          <ThemedText style={styles.signUpText}>Sign in</ThemedText>
        </Link>
      </ThemedText>
    </ThemedView>
  );
};

export default LogInLink;

const styles = StyleSheet.create({
  signUpContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  dontHaveAccountText: {
    fontSize: 13,
  },
  signUpText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#007BFF",
  },
});
