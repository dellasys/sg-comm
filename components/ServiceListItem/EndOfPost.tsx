import { Image, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const EndOfPost = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.label}>The End of The Result</ThemedText>
      <Image
        source={require("@/assets/images/empty_icon.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </ThemedView>
  );
};

export default EndOfPost;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    marginBottom: 40,
    // backgroundColor: Platform.select({
    //   ios: "rgba(0,0,0,0.1)",
    //   default: "rgba(255,255,255,0.1)",
    // }),
    alignItems: "center",
    backgroundColor: "transparent",
  },
  label: {
    fontSize: 14,
    color: "#666",
  },
  image: {
    width: 80,
    height: 80,
  },
});
