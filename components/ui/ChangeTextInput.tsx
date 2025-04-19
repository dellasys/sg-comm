import { Link, Href } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

interface ChangeTextInputProps {
  label?: string;
  path: Href;
  value?: string;
}

const ChangeTextInput = ({
  label = "",
  value = "",
  path,
}: ChangeTextInputProps) => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.label}>{label}</ThemedText>
      <ThemedView style={styles.valueContainer}>
        <ThemedText>{value}</ThemedText>
        <Link href={path}>
          <ThemedText style={styles.changeText}>Change</ThemedText>
        </Link>
      </ThemedView>
    </ThemedView>
  );
};

export default ChangeTextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    paddingVertical: 3,
  },
  valueContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  changeText: {
    color: "#007AFF",
    fontSize: 14,
    fontWeight: "600",
    paddingVertical: 3,
  },
});
