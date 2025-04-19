import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import HidePasswordIcon from "@/icons/HidePassword";
import ShowPasswordIcon from "@/icons/ShowPassword";
import { useLoginPasswordInput } from "@/state/login/useLoginPasswordInput";
import inputStyles from "@/styles/input-styles";

const PasswordTextInput = () => {
  const { setLoginPasswordInput } = useLoginPasswordInput();
  const [hidePassword, setHidePassword] = useState(true);

  const toggleShowPassword = () => {
    setHidePassword((prev) => !prev);
  };

  return (
    <ThemedView
      style={{
        ...styles.passwordInputBox,
        ...inputStyles.inputField,
      }}
    >
      <TextInput
        placeholder="Password"
        style={{ flex: 1 }}
        onChangeText={setLoginPasswordInput}
        autoComplete="new-password"
        secureTextEntry={hidePassword}
      />
      <TouchableOpacity onPress={toggleShowPassword}>
        {hidePassword ? <ShowPasswordIcon size={20} /> : <HidePasswordIcon />}
      </TouchableOpacity>
    </ThemedView>
  );
};

export default PasswordTextInput;

const styles = StyleSheet.create({
  passwordInputBox: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});
