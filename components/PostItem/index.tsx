import { useState } from "react";
import { Image, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const PostItem = ({ title, content, imageUrl }) => {
  const [parentWidth, setParentWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(200); // 初始高度
  // const fixedWidth = 205; // 固定宽度
  console.log({ parentWidth });
  const handleParentLayout = ({ nativeEvent }) => {
    setParentWidth(nativeEvent.layout.width);
  };

  const handleImageLoad = ({ nativeEvent }) => {
    const { width, height } = nativeEvent.source;

    const aspectRatio = width / height;
    const newHeight = parentWidth / aspectRatio;
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

export default PostItem;

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
