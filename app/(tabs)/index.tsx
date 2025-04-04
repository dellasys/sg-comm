import { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  RefreshControl,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

import { useGetServiceCategories } from "@/api/useGetServiceCategories";
import Deals from "@/components/Deals";
import ServiceCategories from "@/components/ServiceCategories";
import { useDealsWall } from "@/state/useDealsWall";

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

export default function HomeScreen() {
  const scrollViewRef = useRef(null);
  const { appendDeals } = useDealsWall();
  const { refetch, isFetching } = useGetServiceCategories();

  // Handle scroll to bottom
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
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
      appendDeals(FAKE_LIST);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={200}
        onContentSizeChange={(_contentWidth, contentHeight) => {
          console.log("Content height changed:", contentHeight);
        }}
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={refetch}
            title="Loading..."
          />
        }
      >
        <ServiceCategories />
        <Deals />
        {/* Add more components here as needed */}
      </ScrollView>
    </SafeAreaView>
  );
}
