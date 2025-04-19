import * as Application from "expo-application";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const AppVersion = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.versionText}>
        app ver. {Application.nativeApplicationVersion}
      </ThemedText>
      <ThemedText style={styles.versionText}>
        build ver. {Application.nativeBuildVersion}
      </ThemedText>
    </ThemedView>
  );
};

export default AppVersion;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  versionText: {
    color: "#ada9a8",
    fontSize: 14,
  },
});
