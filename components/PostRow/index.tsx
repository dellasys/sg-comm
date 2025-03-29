import { Link } from "expo-router";
import { Image, StyleSheet } from "react-native";
import { ObjectToCamel } from "ts-case-convert";

import PostBadge from "@/components/PostBadge";
import RatingStars from "@/components/RatingStars";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { type Tables } from "@/types/database.types";
import { is24Hours } from "@/utils/time";

interface PostRowProps {
  postData: ObjectToCamel<Tables<"posts">>;
}

const PostRow = ({ postData }: PostRowProps) => {
  const { title, content, rating, thumbnail, location, operatingHours } =
    postData;
  console.log({ postData });

  return (
    <ThemedView>
      <Link href="/service">
        <ThemedView style={styles.postRowContainer}>
          <ThemedView style={styles.infoRow}>
            <ThemedView style={styles.merchantLogoWrapper}>
              <Image
                source={{
                  uri: thumbnail ?? "",
                }}
                style={styles.merchantLogo}
              />
              <ThemedView style={styles.openStatus}>
                <ThemedText style={styles.openStatusText}>CLOSED</ThemedText>
              </ThemedView>
            </ThemedView>
            <ThemedView style={styles.infoContainer}>
              <ThemedView style={styles.titleRow}>
                <ThemedText style={styles.merchantName}>{title}</ThemedText>
                <ThemedView style={styles.badges}>
                  {is24Hours(operatingHours) && <PostBadge />}
                </ThemedView>
              </ThemedView>
              <ThemedView style={styles.rating}>
                <RatingStars rating={rating ?? 0} />
              </ThemedView>
              <ThemedView>
                <ThemedText style={styles.locationText}>{location}</ThemedText>
              </ThemedView>
              <ThemedView>
                <ThemedText style={styles.content}>{content}</ThemedText>
              </ThemedView>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </Link>
    </ThemedView>
  );
};

export default PostRow;

const styles = StyleSheet.create({
  postRowContainer: {
    padding: 13,
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
    borderRadius: 5,
  },
  merchantLogoWrapper: {
    position: "relative",
    borderWidth: 1,
    height: 60,
  },
  merchantLogo: {
    width: 50,
    height: 50,
    marginRight: 5,
    borderRadius: 5,
    backgroundColor: "#f1f1f1",
    padding: 3,
    opacity: 0.5,
  },
  merchantName: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "BearSansUI-Medium",
  },
  infoRow: {
    flexDirection: "row",
    gap: 8,
  },
  rating: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  openStatus: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(200,200,200,0.8)",
    // padding: 2,
    borderRadius: 2,
    width: "100%",
  },
  openStatusText: {
    fontSize: 10,
    width: "100%",
    textAlign: "center",
  },
  locationText: {
    fontSize: 14,
    color: "#666",
  },
  infoContainer: {
    width: "100%",
    flexShrink: 1,
  },
  content: {
    fontSize: 14,
  },
  titleRow: {
    flexDirection: "row",
    width: "100%",
  },
  badges: {
    flexShrink: 1,
    width: "100%",
    alignItems: "flex-end",
  },
});
