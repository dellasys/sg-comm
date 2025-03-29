import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import HalfStarIcon from "@/icons/HalfStar";
import Star2Icon from "@/icons/Star2";

interface RatingStarsProps {
  rating: number;
}

const RATING_STAR_COLOR = [
  "#FC7F25",
  "#FF731B",
  "#FF6A0D",
  "#FF5F00",
  "#FF4D00",
];

const RatingStars = ({ rating }: RatingStarsProps) => {
  const isDecimal = rating % 1 !== 0;
  const wholeStars = Math.floor(rating);
  const halfStar = isDecimal ? 1 : 0;
  const emptyStars = 5 - wholeStars - halfStar;
  let starCount = -1;

  return (
    <ThemedView style={styles.container}>
      {wholeStars > 0 &&
        Array.from({ length: wholeStars }).map((_, starIndex) => {
          starCount++;
          return (
            <ThemedView style={styles.starIcon} key={`start-${starIndex}`}>
              <Star2Icon color={RATING_STAR_COLOR[starCount]} />
            </ThemedView>
          );
        })}

      {halfStar > 0 && (
        <ThemedView style={styles.starIcon}>
          <HalfStarIcon color={RATING_STAR_COLOR[starCount]} />
        </ThemedView>
      )}

      {emptyStars > 0 &&
        Array.from({ length: emptyStars }).map((_, starIndex) => {
          return (
            <ThemedView style={styles.starIcon} key={`empty-${starIndex}`}>
              <Star2Icon color="#e3e2e1" />
            </ThemedView>
          );
        })}
      <ThemedText style={styles.ratingText}>{rating}</ThemedText>
    </ThemedView>
  );
};

export default RatingStars;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ratingText: {
    marginLeft: 5,
    fontWeight: 800,
    color: "#eb4034",
  },
  starIcon: {
    paddingRight: 3,
  },
});
