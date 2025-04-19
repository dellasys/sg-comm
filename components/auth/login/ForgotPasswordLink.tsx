import { Link } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const ForgotPasswordLink = () => {
  return (
    <Link href="/profile/forgot-password">
      <ThemedView style={styles.forgotPasswordContainer}>
        <ThemedText style={styles.forgotPasswordText}>
          Forgot Password ?
        </ThemedText>
      </ThemedView>
    </Link>
  );
};

export default ForgotPasswordLink;

const styles = StyleSheet.create({
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  forgotPasswordText: {
    color: "#007BFF",
    paddingVertical: 10,
    fontSize: 13,
  },
});
