import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { StyleSheet, TouchableOpacity } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import FacebookLogo from "@/icons/FacebookLogo";
import GoogleColorLogo from "@/icons/GoogleColorLogo";
import supabase from "@/utils/supabase";

const SocialMediaLogin = () => {
  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    iosClientId: process.env.EXPO_PUBLIC_GOOGLE_SIGNIN_IOS_CLIENT_ID,
  });

  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      if (userInfo?.data?.idToken) {
        const { data, error } = await supabase.auth.signInWithIdToken({
          provider: "google",
          token: userInfo.data.idToken,
        });
        console.log(error, data);
      } else {
        throw new Error("no ID token present!");
      }
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <ThemedView style={styles.socialMedialContainer}>
      <ThemedView style={styles.socialMediaActionButtons}>
        <TouchableOpacity onPress={handleGoogleLogin}>
          <GoogleColorLogo />
        </TouchableOpacity>
        <FacebookLogo />
      </ThemedView>
    </ThemedView>
  );
};

export default SocialMediaLogin;

const styles = StyleSheet.create({
  socialMedialContainer: {
    alignItems: "center",
  },
  socialMediaActionButtons: { flexDirection: "row", gap: 25 },
});
