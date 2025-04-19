import { ReactNode } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

interface ClickableSettingMenuProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

const ClickableSettingMenu = ({
  icon,
  label,
  onClick,
}: ClickableSettingMenuProps) => {
  const onButtonClick = () => {
    onClick && onClick();
  };

  return (
    <TouchableOpacity onPress={onButtonClick}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.menuContainer}>
          <ThemedView style={styles.logoWrapper}>{icon}</ThemedView>
          <ThemedView style={styles.menuWrapper}>
            <ThemedText style={{ ...styles.username, ...styles.menuText }}>
              {label}
            </ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.actionIcon} />
      </ThemedView>
    </TouchableOpacity>
  );
};

export default ClickableSettingMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
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
});
