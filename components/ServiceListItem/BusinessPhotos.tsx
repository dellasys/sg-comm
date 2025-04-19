import { useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import {
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useBusinessPhotos } from "@/state/useBusinessPhotos";
import { GoogleBusinessPhotoItem } from "@/types/google/placesTypes";
import { getGooglePhoto } from "@/utils/helper";

interface BusinessPhotosProps {
  photos?: Partial<GoogleBusinessPhotoItem>[];
  photosUri?: string;
}

const BusinessPhotos = ({ photos = [], photosUri }: BusinessPhotosProps) => {
  const hasPhotosUri = photosUri !== undefined;
  const { setBusinessPhotos } = useBusinessPhotos();
  const { push } = useRouter();

  const onSeeMorePhotos = async (e: GestureResponderEvent) => {
    e.stopPropagation();

    if (!hasPhotosUri) {
      return;
    }

    await WebBrowser.openBrowserAsync(photosUri, {
      showTitle: true,
      showInRecents: true,
      enableBarCollapsing: true,
    });
  };

  const viewBusinessPhotos = (imageIndex: number) => {
    const imageList = photos.map(({ name }) => {
      const imageUrl =
        name === undefined ? "" : getGooglePhoto(name, { maxWidthPx: 500 });
      return imageUrl;
    });

    setBusinessPhotos(imageList);
    push(`/services/photo_modal?imageIndex=${imageIndex}`);
  };

  if (photos === undefined) {
    return null;
  }

  return (
    <ThemedView>
      <ScrollView
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {photos.map(({ name }, imageIndex) => {
          const imageUrl = name === undefined ? "" : getGooglePhoto(name);
          return (
            <ThemedView key={name}>
              <TouchableOpacity
                onPress={() => {
                  viewBusinessPhotos(imageIndex);
                }}
              >
                <Image
                  source={{
                    uri: imageUrl,
                  }}
                  style={styles.image}
                />
              </TouchableOpacity>
            </ThemedView>
          );
        })}
        {hasPhotosUri && (
          <ThemedView>
            <TouchableOpacity onPress={onSeeMorePhotos}>
              <ThemedText>See more</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        )}
      </ScrollView>
    </ThemedView>
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
