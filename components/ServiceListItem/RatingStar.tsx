import numeral from "numeral";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Star2Icon from "@/icons/Star2";

interface RatingStarsProps {
  rating: number;
}

const RatingStar = ({ rating }: RatingStarsProps) => {
  if (rating === 0) {
    return null;
  }

  return (
    <ThemedView style={styles.container}>
      <Star2Icon color="#f77b23" size={13} />
      <ThemedText style={styles.ratingText}>
        {numeral(rating).format("0.0")}
      </ThemedText>
    </ThemedView>
  );
};

export default RatingStar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fcefe6",
    width: 50,
    borderRadius: 5,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 12,
    color: "#eb4034",
  },
});
