import { Href, useRouter } from "expo-router";
import { ReactNode, useState } from "react";
import { StyleSheet, TouchableOpacity, Switch } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ChevronIcon from "@/icons/Chevron";

interface PersonalDetailsMenuProps {
  icon: ReactNode;
  label: string;
  screenPath: Href;
  actionType?: "switch" | "navigate";
}

const PersonalDetailsMenu = ({
  icon,
  label,
  screenPath,
  actionType = "navigate",
}: PersonalDetailsMenuProps) => {
  const { push } = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const navigateToScreen = () => {
    push(screenPath);
  };

  return (
    <TouchableOpacity
      onPress={navigateToScreen}
      disabled={actionType === "switch"}
    >
      <ThemedView style={styles.container}>
        <ThemedView style={styles.menuContainer}>
          <ThemedView style={styles.logoWrapper}>{icon}</ThemedView>
          <ThemedView style={styles.menuWrapper}>
            <ThemedText style={{ ...styles.username, ...styles.menuText }}>
              {label}
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.actionIcon}>
          {actionType === "switch" ? (
            <Switch
              style={styles.switch}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          ) : (
            <ChevronIcon size={20} />
          )}
        </ThemedView>
      </ThemedView>
    </TouchableOpacity>
  );
};

export default PersonalDetailsMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  username: {
    fontWeight: "bold",
  },
  logoWrapper: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  actionIcon: {
    padding: 20,
  },
  menuContainer: { flexDirection: "row", flex: 1 },
  menuWrapper: {
    paddingHorizontal: 10,
    justifyContent: "center",
    flex: 1,
  },
  menuText: {
    lineHeight: 20,
  },
  switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
});
