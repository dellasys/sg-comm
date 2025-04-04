import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import GoogleLogoIcon from "@/icons/GoogleLogo";

interface MoreThanThousandReviewsProps {
  numOfReviews: number;
}

function roundReviewCount(reviewCount: number) {
  if (reviewCount <= 0) return 0;

  const magnitude = Math.pow(10, Math.floor(Math.log10(reviewCount)));
  const rounded = Math.floor(reviewCount / magnitude) * magnitude;

  return rounded;
}

const ReviewCount = ({ numOfReviews }: MoreThanThousandReviewsProps) => {
  if (numOfReviews < 10) {
    return null;
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.label}>
        {roundReviewCount(numOfReviews)}
      </ThemedText>
      <ThemedText style={styles.plusSign}>+</ThemedText>
      <ThemedView style={styles.logoWrapper}>
        <GoogleLogoIcon size={10} color="#2181c2" />
      </ThemedView>
      <ThemedText style={styles.label}>Reviews</ThemedText>
    </ThemedView>
  );
};

export default ReviewCount;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e8f6ff",
    borderRadius: 2,
    paddingHorizontal: 4,
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  label: {
    color: "#2181c2",
    fontSize: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  logoWrapper: {
    paddingLeft: 5,
    paddingRight: 2,
    backgroundColor: "transparent",
  },
  plusSign: {
    color: "#2181c2",
    fontSize: 12,
  },
});
