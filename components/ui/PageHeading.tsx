import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

interface PageHeadingProps {
  title?: string;
  subtitle?: string;
}

const PageHeading = ({ title, subtitle }: PageHeadingProps) => {
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText style={styles.titleText}>{title}</ThemedText>
      <ThemedText style={styles.subtitleText}>{subtitle}</ThemedText>
    </ThemedView>
  );
};

export default PageHeading;

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    paddingVertical: 10,
    paddingBottom: 15,
  },
  titleText: {
    fontSize: 23,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  subtitleText: {
    fontSize: 13,
    color: "#666",
  },
});
