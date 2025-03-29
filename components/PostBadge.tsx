import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const PostBadge = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.label}>24h</ThemedText>
    </ThemedView>
  );
};

export default PostBadge;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e8f6ff",
    borderRadius: 2,
    paddingHorizontal: 4,
  },
  label: {
    color: "#2181c2",
    fontSize: 12,
  },
});
