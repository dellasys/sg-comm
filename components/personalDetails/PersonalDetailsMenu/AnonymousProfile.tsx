import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import AnonymousUserIcon from "@/icons/AnonymousUser";

const AnonymousProfile = () => {
  return (
    <ThemedView style={{ flexDirection: "row", flex: 1 }}>
      <ThemedView style={styles.logoWrapper}>
        <AnonymousUserIcon size={83} />
      </ThemedView>
      <ThemedView
        style={{
          paddingHorizontal: 10,
          justifyContent: "center",
          flex: 1,
        }}
      >
        <ThemedText style={styles.menuText}>Login / Signup</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default AnonymousProfile;

const styles = StyleSheet.create({
  logoWrapper: {
    width: 80,
    height: 80,
    borderRadius: 50,
    overflow: "hidden",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",

    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  menuText: {
    fontWeight: "bold",
    lineHeight: 20,
  },
});
