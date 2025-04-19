import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

interface ChangeTextInputProps {
  label?: string;
  value?: string;
}

const DisplayTextOnlyInput = ({
  label = "",
  value = "",
}: ChangeTextInputProps) => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.label}>{label}</ThemedText>
      <ThemedView style={styles.valueContainer}>
        <ThemedText>{value}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default DisplayTextOnlyInput;

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
  },
  changeText: {
    color: "#007AFF",
    fontSize: 14,
    fontWeight: "600",
    paddingVertical: 3,
  },
});
