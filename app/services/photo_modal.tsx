import { StyleSheet } from "react-native";

import BusinessPhotoGallery from "@/components/ServiceListItem/BusinessPhotoGallery";
import { ThemedView } from "@/components/ThemedView";
import { useBusinessPhotos } from "@/state/useBusinessPhotos";

const BusinessPhotoGalleryModal = () => {
  const { businessPhotos = [] } = useBusinessPhotos();

  return (
    <ThemedView style={styles.container}>
      <BusinessPhotoGallery images={businessPhotos} />
    </ThemedView>
  );
};

export default BusinessPhotoGalleryModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
