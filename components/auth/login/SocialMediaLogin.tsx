import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import FacebookLogo from "@/icons/FacebookLogo";
import GoogleColorLogo from "@/icons/GoogleColorLogo";

const SocialMediaLogin = () => {
  return (
    <ThemedView style={styles.socialMedialContainer}>
      <ThemedView style={styles.socialMediaActionButtons}>
        <GoogleColorLogo />
        <FacebookLogo />
      </ThemedView>
    </ThemedView>
  );
};

export default SocialMediaLogin;

const styles = StyleSheet.create({
  socialMedialContainer: {
    alignItems: "center",
  },
  socialMediaActionButtons: { flexDirection: "row", gap: 25 },
});
