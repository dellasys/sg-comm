import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, SafeAreaView, Dimensions } from "react-native";
import Gallery from "react-native-awesome-gallery";

interface BusinessPhotoGalleryProps {
  images: string[];
}

const BusinessPhotoGallery = ({ images = [] }: BusinessPhotoGalleryProps) => {
  const { imageIndex } = useLocalSearchParams();
  const { width, height } = Dimensions.get("window");
  const { back } = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Gallery
        initialIndex={Number(imageIndex) ?? 0}
        data={images}
        style={styles.gallery}
        containerDimensions={{
          width: width - 10,
          height: height / 1.2,
        }}
        onSwipeToClose={back}
        loop
      />
    </SafeAreaView>
  );
};

export default BusinessPhotoGallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  gallery: {},
});
