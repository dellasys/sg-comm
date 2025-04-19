import { StyleSheet, TextInput } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { useLoginEmailInput } from "@/state/login/useLoginEmailInput";
import inputStyles from "@/styles/input-styles";

const EmailTextInput = () => {
  const { setLoginEmailInput } = useLoginEmailInput();

  return (
    <ThemedView style={{ ...styles.emailInputBox, ...inputStyles.inputField }}>
      <TextInput placeholder="Email" onChangeText={setLoginEmailInput} />
    </ThemedView>
  );
};

export default EmailTextInput;

const styles = StyleSheet.create({
  emailInputBox: {
    marginBottom: 20,
  },
});
