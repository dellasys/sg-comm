import { StyleSheet, TextInput } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import inputStyles from "@/styles/input-styles";

const ResetEmailTextInput = () => {
  return (
    <ThemedView
      style={{ ...styles.forgotPasswordInputBox, ...inputStyles.inputField }}
    >
      <TextInput placeholder="Email" />
    </ThemedView>
  );
};

export default ResetEmailTextInput;

const styles = StyleSheet.create({
  forgotPasswordInputBox: {},
});
