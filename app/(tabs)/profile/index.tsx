import { StyleSheet, SafeAreaView, Alert } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import AppVersion from "@/components/personalDetails/AppVersion";
import ClickableSettingMenu from "@/components/personalDetails/ClickableSettingMenu";
import CommonSettingMenu from "@/components/personalDetails/CommonSettingMenu";
import PersonalDetailsMenu from "@/components/personalDetails/PersonalDetailsMenu";
import { useIsLoggedIn, IS_USER_LOGGED_IN } from "@/hooks/useIsLoggedIn";
import useUserInfo from "@/hooks/useUserInfo";
import BookmarkIcon from "@/icons/Bookmark";
import FeedbackIcon from "@/icons/Feedback";
import HelpIcon from "@/icons/Help";
import LogoutIcon from "@/icons/Logout";
import PaymentIcon from "@/icons/Payment";
import queryClient from "@/utils/queryClient";
import supabase from "@/utils/supabase";

export default function UserProfile() {
  useUserInfo();
  const { data: isLoggedIn } = useIsLoggedIn();

  const onLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: async () => {
          // Handle logout logic here
          await supabase.auth.signOut();
          void queryClient.invalidateQueries({ queryKey: [IS_USER_LOGGED_IN] });
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
            screenPath="/user/feedback"
            icon={<FeedbackIcon size={40} />}
          />
          <CommonSettingMenu
            label="Payment"
            screenPath="/profile/create-new-password"
            icon={<PaymentIcon size={35} />}
          />
          <CommonSettingMenu
            label="Saved Services"
            screenPath="/user/bookmarks"
            icon={<BookmarkIcon size={35} />}
          />
          <CommonSettingMenu
            label="Help Center"
            screenPath="/user/helpcenter"
            icon={<HelpIcon size={35} color="#fff" />}
          />
          {isLoggedIn && (
            <ClickableSettingMenu
              label="Logout"
              onClick={onLogout}
              icon={<LogoutIcon size={35} color="#fff" />}
            />
          )}
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
