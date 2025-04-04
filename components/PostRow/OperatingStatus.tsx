import { StyleSheet } from "react-native";

import { CurrentOpeningHours } from "@/api/google/placeSearch";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

interface OperatingStatusProps {
  currentOpeningHours: CurrentOpeningHours;
}

const OPEN_STATUS_COLOR = "#60c435";
const CLOSED_STATUS_COLOR = "#ff4d4f";

const OPEN_STATUS_BG_COLOR = "#eefce8";
const CLOSED_STATUS_BG_COLOR = "#fff1f0";

const OperatingStatus = ({ currentOpeningHours }: OperatingStatusProps) => {
  const { openNow } = currentOpeningHours ?? {};

  const openStatus = openNow ? "OPEN" : "CLOSED";
  const statusTextColor = openNow ? OPEN_STATUS_COLOR : CLOSED_STATUS_COLOR;
  const statusBgColor = openNow ? OPEN_STATUS_BG_COLOR : CLOSED_STATUS_BG_COLOR;

  return (
    <ThemedView style={{ ...styles.container, backgroundColor: statusBgColor }}>
      <ThemedText style={{ ...styles.statusText, color: statusTextColor }}>
        {openStatus}
      </ThemedText>
    </ThemedView>
  );
};

export default OperatingStatus;

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    paddingHorizontal: 4,
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
    alignItems: "center",
  },
  statusText: {
    fontSize: 11,
  },
});
