import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import PostItem from "@/components/PostItem";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import PostRow from "@/components/PostRow";
import EndOfPost from "@/components/PostRow/EndOfPost";
import { useGetPosts } from "@/api/posts/useGetPosts";
import PlumbingIcon from "@/icons/services/Plumbing";
import PipeIcon from "@/icons/services/Pipe";
import Plumbing2Icon from "@/icons/services/Plumbing2";
import MoverIcon from "@/icons/services/Mover";
import ServiceMenuItem from "@/components/service/ServiceMenuItem";
import CarRentalIcon from "@/icons/services/CarRental";
import HospitalIcon from "@/icons/services/Hospital";
import DumbBellIcon from "@/icons/services/DumbBell";
import HaircutIcon from "@/icons/services/Haircut";
import GroceriesIcon from "@/icons/services/Groceries";
import DrillIcon from "@/icons/services/Drill";
import MedicineIcon from "@/icons/services/Medicine";
import AirConditionerIcon from "@/icons/services/AirConditioner";
import DogIcon from "@/icons/services/Dog";

const ICON_SIZE = 45;
const screenWidth = Dimensions.get("window").width;
const MIN_ITEM_HEIGHT = 100;
const MAX_ITEM_HEIGHT = 200;

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

const SERVICES_LIST = [
  {
    icon: <PipeIcon size={ICON_SIZE} />,
    label: "Plumbing",
  },
  {
    icon: <MoverIcon size={ICON_SIZE} />,
    label: "Mover",
  },
  {
    icon: <CarRentalIcon size={ICON_SIZE} />,
    label: "Car Rental",
  },
  {
    icon: <DrillIcon size={ICON_SIZE} />,
    label: "Renovation",
  },
  {
    icon: <MedicineIcon size={ICON_SIZE} />,
    label: "Clinics",
  },
  {
    icon: <DumbBellIcon size={ICON_SIZE} />,
    label: "GYM",
  },
  {
    icon: <HaircutIcon size={ICON_SIZE} />,
    label: "Saloon",
  },
  {
    icon: <GroceriesIcon size={ICON_SIZE} />,
    label: "Supermarket",
  },
  {
    icon: <AirConditionerIcon size={ICON_SIZE} />,
    label: "Maintenance",
  },
  {
    icon: <DogIcon size={ICON_SIZE} />,
    label: "Pet",
  },
];

const MasonryInfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const scrollViewRef = useRef(null);

  // Simulate API call to fetch more items
  const fetchMoreItems = async () => {
    setIsLoading(true);

    try {
      setItems((prevItems) => [...prevItems, ...FAKE_LIST]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching more items:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Initial data load
  useEffect(() => {
    fetchMoreItems();
  }, []);

  // Handle scroll to bottom
  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset || {};
    const contentSize = event.nativeEvent.contentSize || {};
    const layoutMeasurement = event.nativeEvent.layoutMeasurement || {};

    const y = contentOffset.y || 0;
    const height = layoutMeasurement.height || 0;
    const contentHeight = contentSize.height || 0;
    const scrollThreshold = 50; // Pixels from bottom to trigger load

    // Check if user has scrolled to bottom
    if (y + height >= contentHeight - scrollThreshold && !isLoading) {
      console.log("Reached bottom, fetching more items...");
      fetchMoreItems();
    }
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      onScroll={handleScroll}
      scrollEventThrottle={200}
      onContentSizeChange={(contentWidth, contentHeight) => {
        console.log("Content height changed:", contentHeight);
      }}
    >
      <ThemedView style={styles.container}>
        {SERVICES_LIST.map((service, index) => (
          <ServiceMenuItem key={index} {...service} />
        ))}
      </ThemedView>

      <View style={styles.masonryContainer}>
        {/* Column 1 */}
        <View style={styles.column}>
          {items
            .filter((_, index) => index % 2 === 0)
            .map((item) => (
              <PostItem key={item.id} {...item} />
            ))}
        </View>

        {/* Column 2 */}
        <View style={styles.column}>
          {items
            .filter((_, index) => index % 2 === 1)
            .map((item) => (
              <PostItem key={`yy${item.id}`} {...item} />
            ))}
        </View>
      </View>

      {isLoading && <Text style={styles.loading}>Loading more items...</Text>}
    </ScrollView>
  );
};

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

export default MasonryInfiniteScroll;
