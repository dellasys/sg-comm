import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import OpeningHours from "@/components/ServiceListItem/OperatingHours/OpeningHours";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

interface OpeningHoursTabViewProps {
  openinghours: any[];
}

const OpeningHoursTabView = ({ openinghours }: OpeningHoursTabViewProps) => {
  const [tabIndex, setTabIndex] = useState(0);
  const openingHourInfo = openinghours[tabIndex];
  const { weekdayDescriptions } = openingHourInfo ?? {};

  return (
    <ThemedView>
      <ThemedView style={styles.tabs}>
        {openinghours.map(({ secondaryHoursType }, index) => {
          const tabStyle = tabIndex === index ? styles.activeTab : {};

          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setTabIndex(index);
              }}
            >
              <ThemedView style={{ ...styles.tab, ...tabStyle }}>
                <ThemedText style={styles.tabLabel}>
                  {secondaryHoursType}
                </ThemedText>
              </ThemedView>
            </TouchableOpacity>
          );
        })}
      </ThemedView>

      <ThemedView>
        <OpeningHours openingHours={weekdayDescriptions} />
      </ThemedView>
    </ThemedView>
  );
};

export default OpeningHoursTabView;

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    gap: 5,
    paddingBottom: 10,
  },
  tab: {
    paddingHorizontal: 10,
  },
  tabLabel: {
    fontSize: 12,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: "#60c435",
  },
});
