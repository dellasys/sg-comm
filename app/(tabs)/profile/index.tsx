import { StyleSheet, SafeAreaView, Alert } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import AppVersion from "@/components/personalDetails/AppVersion";
import ClickableSettingMenu from "@/components/personalDetails/ClickableSettingMenu";
import CommonSettingMenu from "@/components/personalDetails/CommonSettingMenu";
import PersonalDetailsMenu from "@/components/personalDetails/PersonalDetailsMenu";
import useUserInfo from "@/hooks/useUserInfo";
import GoogleLogoIcon from "@/icons/GoogleLogo";
import LogoutIcon from "@/icons/Logout";
import supabase from "@/utils/supabase";

export default function UserProfile() {
  useUserInfo();

  const onLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          // Handle logout logic here
          void supabase.auth.signOut();
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
        <PersonalDetailsMenu />
        <ThemedView style={styles.settingMenuSection}>
          {/* <CommonSettingMenu
            label="Dark Mode"
            screenPath="/profile/details"
            icon={
              <Image
                source={require("@/assets/images/darkMode.png")}
                style={{ width: "100%" }}
                resizeMode="contain"
              />
            }
            actionType="switch"
          /> */}
          {/* <CommonSettingMenu
            label="Settings"
            screenPath="/profile/settings"
            icon={<GoogleLogoIcon size={35} color="#fff" />}
          /> */}
          <CommonSettingMenu
            label="Feedback"
            screenPath="/profile/create-new-password"
            icon={<GoogleLogoIcon size={35} color="#fff" />}
          />
          <CommonSettingMenu
            label="Payment"
            screenPath="/profile/create-new-password"
            icon={<GoogleLogoIcon size={35} color="#fff" />}
          />
          <CommonSettingMenu
            label="Saved Services"
            screenPath="/profile/details"
            icon={<GoogleLogoIcon size={35} color="#fff" />}
          />
          <CommonSettingMenu
            label="Help Center"
            screenPath="/profile/signup"
            icon={<GoogleLogoIcon size={35} color="#fff" />}
          />
          <ClickableSettingMenu
            label="Logout"
            onClick={onLogout}
            icon={<LogoutIcon size={35} color="#fff" />}
          />
        </ThemedView>
        <AppVersion />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  settingMenuSection: {
    paddingVertical: 30,
  },
});
