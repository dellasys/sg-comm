import { StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";

interface PageActionButtonProps {
  onPress: () => void;
  label: string;
  disabled?: boolean;
}

const PageActionButton = ({
  onPress,
  label,
  disabled = false,
}: PageActionButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.saveButton}
      onPress={onPress}
      disabled={disabled}
    >
      <ThemedText style={styles.saveText}>{label}</ThemedText>
    </TouchableOpacity>
  );
};

export default PageActionButton;

const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  saveText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
