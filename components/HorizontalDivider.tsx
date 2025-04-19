import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

interface HorizontalDividerProps {
  text?: string;
  thickness?: number;
  color?: string;
}

const HorizontalDivider = ({
  text,
  thickness = 10,
  color = "#919191",
}: HorizontalDividerProps) => {
  return (
    <ThemedView style={styles.dividerContainer}>
      <ThemedView
        style={{
          borderBottomColor: color,
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginTop: thickness / 2,
          marginBottom: thickness,
        }}
      />
      {text && <ThemedText style={styles.orText}>{text}</ThemedText>}
    </ThemedView>
  );
};

export default HorizontalDivider;

const styles = StyleSheet.create({
  dividerContainer: {
    position: "relative",
    height: 40,
    justifyContent: "center",
    marginVertical: 20,
  },
  orText: {
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
});
