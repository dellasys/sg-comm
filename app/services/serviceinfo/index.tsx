import { useLocalSearchParams } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import {
  useGetPlaceDetails,
  GET_PLACE_DETAILS,
} from "@/api/google/placeDetails";
import HorizontalDivider from "@/components/HorizontalDivider";
import Operation24hours from "@/components/Operation24hours";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import RatingStars from "@/components/RatingStars";
import BusinessLocation from "@/components/ServiceListItem/BusinessLocation";
import BusinessPhotos from "@/components/ServiceListItem/BusinessPhotos";
import BusinessWebsite from "@/components/ServiceListItem/BusinessWebsite";
import OperatingHours from "@/components/ServiceListItem/OperatingHours";
import OperatingStatus from "@/components/ServiceListItem/OperatingStatus";
import OperatingStatusWithTime from "@/components/ServiceListItem/OperatingStatusWithTime";
import WheelchairFriendlyBadge from "@/components/ServiceListItem/WheelchairFriendlyBadge";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import CommonLoader from "@/components/loaders/CommonLoader";
import ServiceMapView from "@/components/serviceInfo/ServiceMapView";
import { is24Hours } from "@/utils/places";
import queryClient from "@/utils/queryClient";

export default function ServiceInfo() {
  const { placeId } = useLocalSearchParams();
  const { data, isLoading } = useGetPlaceDetails(placeId as string);

  const {
    displayName,
    location,
    regularOpeningHours,
    regularSecondaryOpeningHours,
    currentOpeningHours,
    addressDescriptor,
    formattedAddress,
    rating,
    googleMapsLinks,
    photos = [],
    websiteUri,
    accessibilityOptions,
  } = data ?? {};

  const { latitude, longitude } = location ?? {};
  const { directionsUri, reviewsUri, photosUri } = googleMapsLinks ?? {};
  const businessName = displayName?.text ?? "";

  const onRatingClick = async (e: GestureResponderEvent) => {
    e.stopPropagation();

    if (!reviewsUri) {
      return;
    }

    await WebBrowser.openBrowserAsync(reviewsUri, {
      showTitle: true,
      showInRecents: true,
      enableBarCollapsing: true,
    });
  };

  useEffect(() => {
    return () => {
      void queryClient.resetQueries({
        queryKey: [GET_PLACE_DETAILS],
        exact: true,
      });
    };
  }, []);

  if (isLoading) {
    return <CommonLoader />;
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <ServiceMapView
          latitude={latitude}
          longitude={longitude}
          displayName={businessName}
          directionsUri={directionsUri}
        />
      }
    >
      <ThemedView style={styles.container}>
        <ThemedText style={{ fontWeight: "bold" }}>{businessName}</ThemedText>

        <ThemedView
          style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
        >
          <RatingStars rating={rating} />
        </ThemedView>

        <ThemedView style={styles.businessStatus}>
          <OperatingStatus currentOpeningHours={currentOpeningHours} />
          {is24Hours(currentOpeningHours) && <Operation24hours />}
          <OperatingStatusWithTime regularOpeningHours={regularOpeningHours} />
          <WheelchairFriendlyBadge
            accessibilityOptions={accessibilityOptions}
          />
        </ThemedView>

        <HorizontalDivider />

        <BusinessLocation
          addressDescriptor={addressDescriptor}
          address={formattedAddress}
        />

        <BusinessWebsite websiteUri={websiteUri} />

        <HorizontalDivider />

        <ThemedView>
          <OperatingHours
            regularOpeningHours={regularOpeningHours}
            regularSecondaryOpeningHours={regularSecondaryOpeningHours}
          />
        </ThemedView>

        <HorizontalDivider />

        <ThemedView style={{ paddingVertical: 20 }}>
          <BusinessPhotos photos={photos} photosUri={photosUri} />
        </ThemedView>

        <TouchableOpacity onPress={onRatingClick}>
          <ThemedView style={styles.googleReviewCount}>
            <ThemedText style={styles.googleReviewCountText}>
              Read Google Reviews
            </ThemedText>
          </ThemedView>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  businessStatus: { flexDirection: "row", gap: 5 },
  googleReviewCount: {},
  googleReviewCountText: {
    color: "#1a509c",
    lineHeight: 15,
    fontSize: 12,
    textDecorationLine: "underline",
  },
});
