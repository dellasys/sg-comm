import { StyleSheet, TextInput } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { useCreateEmailInput } from "@/state/createAccount/useCreateEmailInput";
import inputStyles from "@/styles/input-styles";

const EmailTextInput = () => {
  const { setCreateEmailInput } = useCreateEmailInput();

  return (
    <ThemedView
      style={{ ...styles.nameTextInputBox, ...inputStyles.inputField }}
    >
      <TextInput placeholder="Email" onChangeText={setCreateEmailInput} />
    </ThemedView>
  );
};

export default EmailTextInput;

const styles = StyleSheet.create({
  nameTextInputBox: {},
});
