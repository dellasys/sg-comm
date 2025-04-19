import { StyleSheet } from "react-native";

import HorizontalDivider from "@/components/HorizontalDivider";
import { ThemedView } from "@/components/ThemedView";
import LogInLink from "@/components/auth/createNewPass/LogInLink";
import SocialMediaLogin from "@/components/auth/login/SocialMediaLogin";
import EmailTextInput from "@/components/auth/signup/EmailTextInput";
import NameTextInput from "@/components/auth/signup/NameTextInput";
import PasswordTextInput from "@/components/auth/signup/PasswordTextInput";
import SignUpButton from "@/components/auth/signup/SignUpButton";
import SignUpDescription from "@/components/auth/signup/SignUpDescription";

const AuthSignUp = () => {
  return (
    <ThemedView style={styles.container}>
      <SignUpDescription />
      <ThemedView style={{ padding: 10 }} />
      <NameTextInput />
      <ThemedView style={{ padding: 10 }} />
      <EmailTextInput />
      <ThemedView style={{ padding: 10 }} />
      <PasswordTextInput />
      <SignUpButton />
      <HorizontalDivider text="Or sign up with" />
      <SocialMediaLogin />
      <LogInLink />
    </ThemedView>
  );
};

export default AuthSignUp;

const styles = StyleSheet.create({
  container: {
    padding: "10%",
    flex: 1,
  },
});
