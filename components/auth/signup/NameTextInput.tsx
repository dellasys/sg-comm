import { StyleSheet, TextInput } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { useCreateUserNameInput } from "@/state/createAccount/useCreateUserNameInput";
import inputStyles from "@/styles/input-styles";

const NameTextInput = () => {
  const { setCreateUserNameInput } = useCreateUserNameInput();

  return (
    <ThemedView
      style={{ ...styles.nameTextInputBox, ...inputStyles.inputField }}
    >
      <TextInput placeholder="Name" onChangeText={setCreateUserNameInput} />
    </ThemedView>
  );
};

export default NameTextInput;

const styles = StyleSheet.create({
  nameTextInputBox: {},
});
