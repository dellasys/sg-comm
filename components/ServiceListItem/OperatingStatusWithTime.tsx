import dayjs from "dayjs";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { RegularOpeningHours } from "@/types/google/placesTypes";
import { is24Hours } from "@/utils/places";

interface ClosesSoonProps {
  regularOpeningHours?: Partial<RegularOpeningHours>;
}

const OperatingStatusWithTime = ({ regularOpeningHours }: ClosesSoonProps) => {
  const { nextCloseTime, nextOpenTime } = regularOpeningHours ?? {};

  if (is24Hours(regularOpeningHours)) {
    return null;
  }

  if (nextCloseTime === undefined && nextOpenTime === undefined) {
    return null;
  }

  const closeTimeText = dayjs(nextCloseTime).format("h:mma");
  const closeTime = closeTimeText.replace(":00", "");

  const openTimeText = dayjs(nextOpenTime).format("h:mma");
  const openTime = openTimeText.replace(":00", "");

  const diffInHours = dayjs(nextCloseTime).diff(dayjs(), "hour");

  if (diffInHours > 1) {
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

export default OperatingStatusWithTime;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fffbe6",
    borderRadius: 2,
    paddingHorizontal: 4,
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
  },
  closingText: {
    color: "#d46a08",
    fontSize: 12,
    backgroundColor: "#fff1f0",
  },
});
