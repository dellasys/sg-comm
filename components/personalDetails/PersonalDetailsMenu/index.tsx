import { Link } from "expo-router";
import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import AnonymousProfile from "@/components/personalDetails/PersonalDetailsMenu/AnonymousProfile";
import AuthorizedProfile from "@/components/personalDetails/PersonalDetailsMenu/AuthorizedProfile";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";
import ChevronIcon from "@/icons/Chevron";

const PersonalDetailsMenu = () => {
  const { data: isLoggedIn, isFetching } = useIsLoggedIn();
  if (isFetching) {
    return null;
  }

  if (isLoggedIn) {
    return (
      <Link href="/user/personal-information">
        <ThemedView style={styles.personalDetails}>
          <AuthorizedProfile />
          <ThemedView style={styles.actionIcon}>
            <ChevronIcon />
          </ThemedView>
        </ThemedView>
      </Link>
    );
  }

  return (
    <Link href="/profile/login">
      <ThemedView style={styles.personalDetails}>
        <AnonymousProfile />
        <ThemedView style={styles.actionIcon}>
          <ChevronIcon />
        </ThemedView>
      </ThemedView>
    </Link>
  );
};

export default PersonalDetailsMenu;

const styles = StyleSheet.create({
  personalDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  username: {
    fontWeight: "bold",
  },

  actionIcon: {
    padding: 20,
  },
  menuText: {
    lineHeight: 20,
  },
});
