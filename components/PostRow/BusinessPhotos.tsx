import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { getGooglePhoto } from "@/utils/helper";

const BusinessPhotos = ({ photos }) => {
  if (photos === undefined) {
    return null;
  }

  return (
    <ScrollView
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      {photos.map((photo) => {
        const imageUrl = getGooglePhoto(photo?.name);
        return (
          <ThemedView key={photo?.name}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.image}
            />
          </ThemedView>
        );
      })}
    </ScrollView>
  );
};

export default BusinessPhotos;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    marginTop: 10,
    marginBottom: 10,
  },
  scrollView: {
    // borderWidth: 2,
  },
  image: {
    width: 90,
    height: 90,
    paddingRight: 3,
  },
});
