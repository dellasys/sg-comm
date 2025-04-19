import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import HidePasswordIcon from "@/icons/HidePassword";
import ShowPasswordIcon from "@/icons/ShowPassword";
import { useResetNewPassInput } from "@/state/createNewPass/useResetNewPassInput";
import inputStyles from "@/styles/input-styles";

const NewPasswordTextInput = () => {
  const { setNewPassword } = useResetNewPassInput();
  const [hidePassword, setHidePassword] = useState(true);

  const toggleShowPassword = () => {
    setHidePassword((prev) => !prev);
  };

  return (
    <ThemedView style={{ marginVertical: 10 }}>
      <ThemedView
        style={{
          ...styles.newPasswordInputBox,
          ...inputStyles.inputField,
        }}
      >
        <TextInput
          placeholder="New Password"
          style={{ flex: 1 }}
          onChangeText={setNewPassword}
          autoComplete="new-password"
          secureTextEntry={hidePassword}
        />
        <TouchableOpacity onPress={toggleShowPassword}>
          {hidePassword ? <ShowPasswordIcon size={20} /> : <HidePasswordIcon />}
        </TouchableOpacity>
      </ThemedView>
      <ThemedText style={styles.hintText}>
        Must be at least 8 characters.
      </ThemedText>
    </ThemedView>
  );
};

export default NewPasswordTextInput;

const styles = StyleSheet.create({
  newPasswordInputBox: {
    flexDirection: "row",
  },
  hintText: {
    lineHeight: 20,
    fontSize: 12,
    color: "#666",
  },
});
