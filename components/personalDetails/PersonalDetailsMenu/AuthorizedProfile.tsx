import { StyleSheet, Image } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const AuthorizedProfile = () => {
  return (
    <ThemedView style={{ flexDirection: "row", flex: 1 }}>
      <ThemedView style={styles.logoWrapper}>
        <Image
          source={require("@/assets/images/animals.png")}
          style={styles.logo}
        />
      </ThemedView>
      <ThemedView
        style={{
          paddingHorizontal: 10,
          justifyContent: "center",
          flex: 1,
        }}
      >
        <ThemedText style={styles.menuText}>Yin Sheng</ThemedText>
        <ThemedText style={styles.editProfileText}>
          Edit personal details
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default AuthorizedProfile;

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
  logo: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  menuText: {
    fontWeight: "bold",
    lineHeight: 20,
  },
  editProfileText: {
    fontSize: 12,
    color: "#A9A9A9",
  },
});
