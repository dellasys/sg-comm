import { StyleSheet } from "react-native";
import { Svg, Circle } from "react-native-svg";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import StarIcon from "@/icons/Star2";

interface RatingCircleProps {
  size?: number;
  strokeWidth?: number;
  rating: number;
}

const RatingCircle = ({
  size = 70,
  strokeWidth = 8,
  rating,
}: RatingCircleProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const percentage = (rating / 5.3) * 100; // Convert rating to percentage
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  return (
    <ThemedView style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#FF6A0D"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
      <ThemedView style={styles.textContainer}>
        <StarIcon color="#FF6A0D" size={15} />
        <ThemedText style={styles.percentageText}>{rating}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default RatingCircle;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  percentageText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fc9d03",
  },
});
