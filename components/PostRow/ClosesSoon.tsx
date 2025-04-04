import dayjs from "dayjs";
import { StyleSheet } from "react-native";

import { RegularSecondaryOpeningHours } from "@/api/google/placeSearch";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

interface ClosesSoonProps {
  regularOpeningHours: RegularSecondaryOpeningHours;
}

const ClosesSoon = ({ regularOpeningHours }: ClosesSoonProps) => {
  const { nextCloseTime, nextOpenTime } = regularOpeningHours ?? {};

  //   if (nextCloseTime === undefined) {
  //     return null;
  //   }

  const closeTimeText = dayjs(nextCloseTime).format("h:mma");
  const closeTime = closeTimeText.replace(":00", "");

  const openTimeText = dayjs(nextOpenTime).format("h:mma");
  const openTime = openTimeText.replace(":00", "");

  const diffInHours = dayjs(nextCloseTime).diff(dayjs(), "hour");

  if (diffInHours > 2) {
    return null;
  }

  if (nextOpenTime !== undefined) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText style={styles.closingText}>Opens at {openTime}</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.closingText}>
        Closing soon {closeTime}
      </ThemedText>
    </ThemedView>
  );
};

export default ClosesSoon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff1f0",
    borderRadius: 2,
    paddingHorizontal: 4,
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
  },
  closingText: {
    color: "#ff4d4f",
    fontSize: 12,
    backgroundColor: "#fff1f0",
  },
});
