import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

import { useSearchPlaces, SEARCH_PLACES } from "@/api/google/placeSearch";
import PostRow from "@/components/PostRow";
import EndOfPost from "@/components/PostRow/EndOfPost";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import CommonLoader from "@/components/loaders/CommonLoader";
import { ServiceCategory } from "@/types";
import queryClient from "@/utils/queryClient";

export default function ServiceScreen() {
  const navigation = useNavigation();
  const { category, label } = useLocalSearchParams();

  const {
    data: searchResult,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useSearchPlaces(category as ServiceCategory);

  const { pages = [] } = searchResult ?? {};
  const serviceList = pages.flatMap((page) => page.places) ?? [];

  const handleScroll = async (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    if (!hasNextPage || isFetchingNextPage) {
      return;
    }

    const contentOffset = event.nativeEvent.contentOffset || {};
    const contentSize = event.nativeEvent.contentSize || {};
    const layoutMeasurement = event.nativeEvent.layoutMeasurement || {};
    const y = contentOffset.y || 0;
    const height = layoutMeasurement.height || 0;
    const contentHeight = contentSize.height || 0;
    const scrollThreshold = 50; // Pixels from bottom to trigger load

    // Check if user has scrolled to bottom
    if (y + height >= contentHeight - scrollThreshold) {
      console.log("Reached bottom, fetching more items...");
      void fetchNextPage();
    }
  };

  useEffect(() => {
    navigation.setOptions({ headerTitle: label });
  }, [label, navigation]);

  useEffect(() => {
    return () => {
      void queryClient.resetQueries({
        queryKey: [SEARCH_PLACES],
        exact: true,
      });
    };
  }, []);

  if (isLoading) {
    return <CommonLoader />;
  }

  return (
    <ScrollView onScroll={handleScroll} scrollEventThrottle={200}>
      <ThemedView style={styles.container}>
        {serviceList.map((place, index) => {
          // if (place?.displayName?.text.includes("Superpets")) {
          //   console.log(8839, { place });
          // }

          return <PostRow key={place.id} {...place} />;
        })}
        {isFetchingNextPage && (
          <ThemedView style={styles.fetchMoreContainer}>
            <ThemedText style={styles.fetchMoreText}>
              Fetching more...
            </ThemedText>
          </ThemedView>
        )}
        {!hasNextPage && <EndOfPost />}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f1f1f1",
    gap: 10,
  },
  banner: {
    width: "100%",
    height: "100%",
  },
  fetchMoreContainer: {
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "transparent",
  },
  fetchMoreText: {
    fontSize: 16,
    color: "#666",
  },
});
