import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import CreatePassDescription from "@/components/auth/createNewPass/CreatePassDescription";
import NewConfirmPasswordTextInput from "@/components/auth/createNewPass/NewConfirmPasswordTextInput";
import NewPasswordTextInput from "@/components/auth/createNewPass/NewPasswordTextInput";
import ResetPasswordButton from "@/components/auth/createNewPass/ResetPasswordButton";

const CreateNewPassword = () => {
  return (
    <ThemedView style={styles.container}>
      <CreatePassDescription />
      <ThemedView style={{ padding: 10 }} />
      <NewPasswordTextInput />
      <NewConfirmPasswordTextInput />
      <ResetPasswordButton />
    </ThemedView>
  );
};

export default CreateNewPassword;

const styles = StyleSheet.create({
  container: {
    padding: "10%",
    flex: 1,
  },
});
