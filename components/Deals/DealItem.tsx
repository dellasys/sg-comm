import { useState } from "react";
import {
  Image,
  ImageLoadEventData,
  LayoutChangeEvent,
  NativeSyntheticEvent,
  StyleSheet,
} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

interface DealItemProps {
  title: string;
  content: string;
  imageUrl: string;
}

const DealItem = ({ title, content, imageUrl }: DealItemProps) => {
  const [dealItemWidth, setDealItemWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(200); // 初始高度

  const handleParentLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    setDealItemWidth(nativeEvent.layout.width);
  };

  const handleImageLoad = ({
    nativeEvent,
  }: NativeSyntheticEvent<ImageLoadEventData>) => {
    const { width, height } = nativeEvent.source;
    const aspectRatio = width / height;
    const newHeight = dealItemWidth / aspectRatio;

    setImageHeight(newHeight);
  };

  return (
    <ThemedView style={styles.postContainer}>
      <ThemedView style={styles.bannerWrapper} onLayout={handleParentLayout}>
        <Image
          source={{
            uri: imageUrl,
          }}
          resizeMode="cover"
          style={{ height: imageHeight, ...styles.banner }}
          onLoad={handleImageLoad}
        />
      </ThemedView>
      <ThemedView style={styles.postContent}>
        <ThemedText>{title}</ThemedText>
        <ThemedText>{content}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default DealItem;

const styles = StyleSheet.create({
  postContainer: {
    borderRadius: 4,
    margin: 5,
    overflow: "hidden",
  },
  bannerWrapper: {
    minHeight: 200,
    maxHeight: 550,
  },
  banner: {
    width: "100%",
    minHeight: 200,
    marginRight: 10,
  },
  postContent: {
    padding: 10,
  },
});
