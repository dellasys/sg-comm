import { Redirect } from "expo-router";
import { StyleSheet } from "react-native";

import HorizontalDivider from "@/components/HorizontalDivider";
import { ThemedView } from "@/components/ThemedView";
import EmailTextInput from "@/components/auth/login/EmailTextInput";
import ForgotPasswordLink from "@/components/auth/login/ForgotPasswordLink";
import LoginButton from "@/components/auth/login/LoginButton";
import PasswordTextInput from "@/components/auth/login/PasswordTextInput";
import SignUpLink from "@/components/auth/login/SignUpLink";
import SocialMediaLogin from "@/components/auth/login/SocialMediaLogin";
import WelcomeText from "@/components/auth/login/WelcomeText";
import useIsLoggedIn from "@/hooks/useIsLoggedIn";

const AuthLogin = () => {
  const { data: isLoggedIn, isFetching } = useIsLoggedIn();

  if (isLoggedIn && !isFetching) {
    return <Redirect href="/profile" />;
  }

  return (
    <ThemedView style={styles.container}>
      <WelcomeText />
      <EmailTextInput />
      <PasswordTextInput />
      <LoginButton />
      <ForgotPasswordLink />
      <HorizontalDivider text="Or login with " />
      <SocialMediaLogin />
      <SignUpLink />
    </ThemedView>
  );
};

export default AuthLogin;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "10%",
    flex: 1,
  },
});
