import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import NewConfirmPasswordTextInput from "@/components/auth/createNewPass/NewConfirmPasswordTextInput";
import NewPasswordTextInput from "@/components/auth/createNewPass/NewPasswordTextInput";
import ResetPasswordButton from "@/components/auth/createNewPass/ResetPasswordButton";
import PageHeading from "@/components/ui/PageHeading";

const CreateNewPassword = () => {
  return (
    <ThemedView style={styles.container}>
      <PageHeading
        title="Create new password"
        subtitle="Your new password must be different from previous used passwords."
      />
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
