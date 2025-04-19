import dayjs from "dayjs";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

interface OpeningHoursProps {
  openingHours?: string[];
}

const OpeningHours = ({ openingHours = [] }: Partial<OpeningHoursProps>) => {
  return (
    <ThemedView>
      {openingHours?.map((description, dayIndex) => {
        const isToday = dayIndex + 1 === dayjs().day();
        const [day, openingHours] = description.split(": ");
        const highlightedTextStyle = isToday ? styles.highlightedText : {};

        return (
          <ThemedView key={dayIndex} style={{ flexDirection: "row", gap: 5 }}>
            <ThemedView style={styles.dayColumn}>
              <ThemedText
                style={{
                  ...styles.operatingHourText,
                  ...highlightedTextStyle,
                }}
              >
                {day}
              </ThemedText>
            </ThemedView>
            <ThemedText
              style={{
                ...styles.operatingHourText,
                ...highlightedTextStyle,
              }}
            >
              : {openingHours}
            </ThemedText>
          </ThemedView>
        );
      })}
    </ThemedView>
  );
};

export default OpeningHours;

const styles = StyleSheet.create({
  operatingHourText: {
    fontSize: 12,
    lineHeight: 17,
    color: "#808080",
  },
  dayColumn: {
    width: 70,
  },
  highlightedText: {
    color: "#60c435",
    fontWeight: "bold",
  },
});
