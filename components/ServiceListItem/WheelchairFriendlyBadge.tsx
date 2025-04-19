import { StyleSheet, Image } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { AccessibilityOptionItems } from "@/types/google/placesTypes";

interface WheelchairFriendlyBadgeProps {
  accessibilityOptions?: Partial<AccessibilityOptionItems>;
}

const WheelchairFriendlyBadge = ({
  accessibilityOptions,
}: WheelchairFriendlyBadgeProps) => {
  if (!accessibilityOptions) {
    return null;
  }

  const { wheelchairAccessibleEntrance, wheelchairAccessibleParking } =
    accessibilityOptions ?? {};

  const wheelChairFriendly =
    wheelchairAccessibleEntrance === true ||
    wheelchairAccessibleParking === true;

  return (
    <ThemedView style={styles.container}>
      {wheelChairFriendly && (
        <ThemedView style={styles.badgeWrapper}>
          <Image
            source={require("@/assets/images/wheelchair.png")}
            style={styles.wheelchairLogo}
            alt="Wheelchair Friendly"
            accessibilityLabel="Wheelchair Friendly"
          />
        </ThemedView>
      )}
    </ThemedView>
  );
};

export default WheelchairFriendlyBadge;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
  },
  badgeWrapper: {
    backgroundColor: "#f0f0f5",
    borderRadius: 2,
    alignItems: "center",
    paddingHorizontal: 4,
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
    flexDirection: "row",
  },
  wheelchairLogo: {
    width: 15,
    height: 15,
  },
});
