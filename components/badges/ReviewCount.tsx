import { StyleSheet, Image } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

interface MoreThanThousandReviewsProps {
  numOfReviews?: number;
}

function roundReviewCount(reviewCount: number) {
  if (reviewCount <= 0) return 0;

  const magnitude = Math.pow(10, Math.floor(Math.log10(reviewCount)));
  const rounded = Math.floor(reviewCount / magnitude) * magnitude;

  return rounded;
}

const ReviewCount = ({ numOfReviews }: MoreThanThousandReviewsProps) => {
  if (!numOfReviews) {
    return null;
  }

  if (numOfReviews < 10) {
    return null;
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.logoWrapper}>
        <Image
          source={require("@/assets/images/google-icon.png")}
          style={styles.googleLogo}
        />
      </ThemedView>
      <ThemedText style={styles.label}>
        {" "}
        {roundReviewCount(numOfReviews)}
      </ThemedText>
      <ThemedText style={styles.plusSign}>+</ThemedText>
      {/* <ThemedText style={styles.label}> Reviews</ThemedText> */}
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
  googleLogo: {
    width: 12,
    height: 12,
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
