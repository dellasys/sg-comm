import { StyleSheet, TextInput } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import inputStyles from "@/styles/input-styles";

interface CommonTextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const CommonTextInput = ({
  label = "",
  placeholder = "",
  value = "",
  onChangeText = () => {},
}: CommonTextInputProps) => {
  return (
    <ThemedView style={styles.container}>
      {label && <ThemedText style={styles.label}>{label}</ThemedText>}
      <ThemedView style={{ ...inputStyles.inputField }}>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
        />
      </ThemedView>
    </ThemedView>
  );
};

export default CommonTextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    paddingVertical: 3,
  },
});
