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
  const starCount = -1;

  if (rating === 0) {
    return null;
  }

  return (
    <ThemedView style={styles.container}>
      <Star2Icon color="#f77b23" size={13} />
      <ThemedText style={styles.ratingText}>{rating}</ThemedText>
    </ThemedView>
  );

  // return (
  //   <ThemedView style={styles.container}>
  //     {wholeStars > 0 &&
  //       Array.from({ length: wholeStars }).map((_, starIndex) => {
  //         starCount++;
  //         return (
  //           <ThemedView style={styles.starIcon} key={`start-${starIndex}`}>
  //             <Star2Icon color={RATING_STAR_COLOR[starCount]} size={15} />
  //           </ThemedView>
  //         );
  //       })}

  //     {halfStar > 0 && (
  //       <ThemedView style={styles.starIcon}>
  //         <HalfStarIcon color={RATING_STAR_COLOR[starCount]} size={15} />
  //       </ThemedView>
  //     )}

  //     {emptyStars > 0 &&
  //       Array.from({ length: emptyStars }).map((_, starIndex) => {
  //         return (
  //           <ThemedView style={styles.starIcon} key={`empty-${starIndex}`}>
  //             <Star2Icon color="#e3e2e1" size={15} />
  //           </ThemedView>
  //         );
  //       })}
  //     <ThemedText style={styles.ratingText}>{rating}</ThemedText>
  //   </ThemedView>
  // );
};

export default RatingStars;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fcefe6",
    width: 50,
    // paddingHorizontal: 3,
    borderRadius: 5,
  },
  ratingText: {
    marginLeft: 5,
    // fontWeight: 800,
    fontSize: 12,
    color: "#eb4034",
  },
  starIcon: {
    paddingRight: 3,
  },
});
