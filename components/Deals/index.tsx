import { useState, useEffect, useCallback } from "react";
import { Text, StyleSheet, Dimensions } from "react-native";

import DealItem from "@/components/Deals/DealItem";
import { ThemedView } from "@/components/ThemedView";
import { useDealsWall } from "@/state/useDealsWall";

const screenWidth = Dimensions.get("window").width;

const FAKE_LIST = [
  {
    id: 1,
    title: "Post 1",
    content: "description",
    imageUrl:
      "https://i.pinimg.com/736x/a4/c7/61/a4c7619c1a6db06609d2e73af193d3dc.jpg",
  },
  {
    id: 2,
    title: "Post 2",
    content: "description",
    imageUrl:
      "https://aimarketingengineers.com/wp-content/uploads/2024/01/Is-Google-Shopping-Ads-Worth-It_image-2-1024x1024.png",
  },
  {
    id: 3,
    title: "Post 3",
    content: "description",
    imageUrl:
      "https://i.pinimg.com/736x/a1/8b/75/a18b75d8554594ca7d15bcaf31fab2e2.jpg",
  },
  {
    id: 4,
    title: "Post 4",
    content: "description description description description",
    imageUrl:
      "https://i.pinimg.com/236x/45/61/db/4561dba8e203ffd92e1b9d95472e9318.jpg",
  },
  {
    id: 5,
    title: "Post 5",
    content: "description description description description",
    imageUrl:
      "https://i.pinimg.com/736x/30/17/d8/3017d868bf528f1dc14478977373ab97.jpg",
  },
  {
    id: 6,
    title: "Post 6",
    content: "description description description description",
    imageUrl:
      "https://i.pinimg.com/736x/2f/49/3c/2f493c3d682053ba6271dc4979752b81.jpg",
  },
  {
    id: 7,
    title: "Post 7",
    content: "description description description description",
    imageUrl:
      "https://i.pinimg.com/736x/d1/dd/80/d1dd8012ea7ed6d9f3b258825a05c0b1.jpg",
  },
  {
    id: 8,
    title: "Post 8",
    content: "description description description description",
    imageUrl:
      "https://i.pinimg.com/736x/5b/0f/45/5b0f45b37f061d7b580e4cd4942820ae.jpg",
  },
];

const Deals = () => {
  const { deals, appendDeals } = useDealsWall();
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoreItems = useCallback(async () => {
    setIsLoading(true);

    try {
      appendDeals(FAKE_LIST);
    } catch (error) {
      console.error("Error fetching more items:", error);
    } finally {
      setIsLoading(false);
    }
  }, [appendDeals]);

  // Initial data load
  useEffect(() => {
    void fetchMoreItems();
  }, [fetchMoreItems]);

  return (
    <ThemedView>
      <ThemedView style={styles.masonryContainer}>
        {/* Column 1 */}
        <ThemedView style={styles.column}>
          {deals
            .filter((_, index) => index % 2 === 0)
            .map((item) => (
              <DealItem key={item.id} {...item} />
            ))}
        </ThemedView>

        {/* Column 2 */}
        <ThemedView style={styles.column}>
          {deals
            .filter((_, index) => index % 2 === 1)
            .map((item) => (
              <DealItem key={`yy${item.id}`} {...item} />
            ))}
        </ThemedView>
      </ThemedView>

      {isLoading && <Text style={styles.loading}>Loading more items...</Text>}
    </ThemedView>
  );
};

export default Deals;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "space-around",
  },
  masonryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  column: {
    width: screenWidth > 360 ? "50%" : "100%",
  },
  item: {
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  loading: {
    textAlign: "center",
    padding: 20,
    color: "#666",
  },
});
