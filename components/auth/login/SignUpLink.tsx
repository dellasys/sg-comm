import { Link } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const SignUpLink = () => {
  return (
    <ThemedView style={styles.signUpContainer}>
      <ThemedText style={styles.dontHaveAccountText}>
        Don't have an account?{" "}
        <Link href="/profile/signup">
          <ThemedText style={styles.signUpText}>Sign up</ThemedText>
        </Link>
      </ThemedText>
    </ThemedView>
  );
};

export default SignUpLink;

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
