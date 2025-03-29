import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image, StyleSheet, Platform } from "react-native";

const EndOfPost = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>The end of post.</ThemedText>
    </ThemedView>
  );
};

export default EndOfPost;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 40,
    backgroundColor: Platform.select({
      ios: "rgba(0,0,0,0.1)",
      default: "rgba(255,255,255,0.1)",
    }),
  },
});
