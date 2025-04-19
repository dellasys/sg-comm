import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

import BusinessLocation from "./BusinessLocation";
import BusinessPhotos from "./BusinessPhotos";
import ReviewCount from "../badges/ReviewCount";

import Operation24hours from "@/components/Operation24hours";
import BusinessLogo from "@/components/ServiceListItem/BusinessLogo";
import OperatingStatusWithTime from "@/components/ServiceListItem/OperatingStatusWithTime";
import RatingStar from "@/components/ServiceListItem/RatingStar";
import WhatsappAvailability from "@/components/ServiceListItem/WhatsappAvailability";
import WheelchairFriendlyBadge from "@/components/ServiceListItem/WheelchairFriendlyBadge";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  GooglePlaceApiResponse,
  GoogleBusinessPhotoItem,
} from "@/types/google/placesTypes";
import { is24Hours } from "@/utils/places";

interface ServiceListItemProps {
  itemData: GooglePlaceApiResponse;
}

const findBusinessLogo = (
  merchantName: string,
  photos: Partial<GoogleBusinessPhotoItem>[] = [],
) => {
  const businessPhoto = photos?.find(({ authorAttributions }) => {
    return authorAttributions?.[0]?.displayName === merchantName;
  });

  return businessPhoto?.authorAttributions?.[0]?.photoUri;
};

const ServiceListItem = ({ itemData }: ServiceListItemProps) => {
  const {
    displayName,
    userRatingCount,
    id,
    nationalPhoneNumber,
    rating = 0,
    addressDescriptor,
    regularOpeningHours,
    currentOpeningHours,
    photos,
    accessibilityOptions,
    formattedAddress,
  } = itemData ?? {};

  const isOpen = currentOpeningHours?.openNow === true;
  const { push } = useRouter();
  const businessName = displayName?.text ?? "";
  const businessLogo = findBusinessLogo(businessName, photos);

  const navigateToDetailsPage = () => {
    push(
      `/services/serviceinfo?placeId=${id}&nationalPhoneNumber=${nationalPhoneNumber}`,
    );
  };

  return (
    <ThemedView style={styles.postRowContainer}>
      <ThemedView style={styles.infoRow}>
        <ThemedView>
          <TouchableOpacity onPress={navigateToDetailsPage}>
            <BusinessLogo logoUrl={businessLogo} businessName={businessName} />
          </TouchableOpacity>
          {!isOpen && (
            <ThemedView style={{ alignItems: "center" }}>
              <ThemedText
                style={{ fontSize: 12, color: "#f72a1b", fontWeight: 600 }}
              >
                CLOSED
              </ThemedText>
            </ThemedView>
          )}
        </ThemedView>

        <ThemedView style={styles.infoContainer}>
          <TouchableOpacity onPress={navigateToDetailsPage}>
            <ThemedView style={styles.titleRow}>
              <ThemedText style={styles.merchantName} numberOfLines={1}>
                {businessName}
              </ThemedText>
              <ThemedView style={styles._24hour}>
                {isOpen && is24Hours(currentOpeningHours) && (
                  <Operation24hours />
                )}
              </ThemedView>
            </ThemedView>
          </TouchableOpacity>

          <ThemedView style={{ flexDirection: "row", gap: 5, marginBottom: 5 }}>
            <ThemedView>
              <RatingStar rating={rating} />
            </ThemedView>
            <ThemedView style={styles.badges}>
              <ReviewCount numOfReviews={userRatingCount} />
            </ThemedView>
            <WheelchairFriendlyBadge
              accessibilityOptions={accessibilityOptions}
            />
            <WhatsappAvailability nationalPhoneNumber={nationalPhoneNumber} />
          </ThemedView>

          <ThemedView style={{ flexDirection: "row", gap: 5 }}>
            <OperatingStatusWithTime
              regularOpeningHours={regularOpeningHours}
            />
          </ThemedView>

          <BusinessLocation
            addressDescriptor={addressDescriptor}
            address={formattedAddress}
          />

          <BusinessPhotos photos={photos} />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default ServiceListItem;

const styles = StyleSheet.create({
  postRowContainer: {
    padding: 7,
    paddingBottom: 30,
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
    borderRadius: 5,
  },
  merchantLogo: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  merchantName: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "BearSansUI-Medium",
    flex: 1,
  },
  _24hour: {
    alignItems: "flex-end",
  },
  infoRow: {
    flexDirection: "row",
    gap: 8,
  },
  infoContainer: {
    width: "100%",
    flexShrink: 1,
    paddingLeft: 5,
  },
  titleRow: {
    flexDirection: "row",
  },
  badges: {
    flexDirection: "row",
    gap: 5,
  },
});
