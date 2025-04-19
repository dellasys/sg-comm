import { StyleSheet, TextInput } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useResetNewConfirmPassInput } from "@/state/createNewPass/useResetNewConfirmPassInput.tsx";
import inputStyles from "@/styles/input-styles";

const NewConfirmPasswordTextInput = () => {
  const { setNewConfirmPassword } = useResetNewConfirmPassInput();

  return (
    <ThemedView style={{ marginVertical: 10 }}>
      <ThemedView
        style={{
          ...styles.newConfirmPasswordInputBox,
          ...inputStyles.inputField,
        }}
      >
        <TextInput
          placeholder="Confirm New Password"
          onChangeText={setNewConfirmPassword}
          secureTextEntry
        />
      </ThemedView>
      <ThemedText style={styles.hintText}>
        Both passwords must match.
      </ThemedText>
    </ThemedView>
  );
};

export default NewConfirmPasswordTextInput;

const styles = StyleSheet.create({
  newConfirmPasswordInputBox: {},
  hintText: {
    lineHeight: 20,
    fontSize: 12,
    color: "#666",
  },
});
