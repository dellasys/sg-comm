import * as Linking from "expo-linking";
import { Link, useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import numeral from "numeral";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";

import BusinessLocation from "./BusinessLocation";
import BusinessPhotos from "./BusinessPhotos";
import RatingCircle from "./RatingCircle";
import ReviewCount from "../badges/ReviewCount";

import PostBadge from "@/components/PostBadge";
import BusinessLogo from "@/components/PostRow/BusinessLogo";
import ClosesSoon from "@/components/PostRow/ClosesSoon";
import OperatingStatus from "@/components/PostRow/OperatingStatus";
import WhatsappAvailability from "@/components/PostRow/WhatsappAvailability";
import RatingStars from "@/components/RatingStars";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import GoogleLogoIcon from "@/icons/GoogleLogo";
import StarIcon from "@/icons/Star";
import { isBusinessOpen } from "@/utils/conditions";
import { is24Hours } from "@/utils/places";

interface PostRowProps {
  // postData: ObjectToCamel<Tables<"posts">>;
}

const openExternalLink = async (url) => {
  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.error("Don't know how to open this URL:", url);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const findBusinessLogo = (merchantName, photos) => {
  const businessPhoto = photos?.find(({ authorAttributions }) => {
    return authorAttributions?.[0]?.displayName === merchantName;
  });

  return businessPhoto?.authorAttributions?.[0]?.photoUri;
};

const PostRow = ({ ...postData }: unknown) => {
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
  } = postData ?? {};
  const isOpen = currentOpeningHours?.openNow === true;
  const { push } = useRouter();
  const businessName = displayName?.text ?? "";
  const businessLogo = findBusinessLogo(businessName, photos);

  const onRatingClick = async (e) => {
    e.stopPropagation();

    const result = await WebBrowser.openBrowserAsync(
      "https://www.google.com/maps/place//data=!4m4!3m3!1s0x31da1bd7feae0db9:0xc25464870e7b62e3!9m1!1b1",
      {
        showTitle: true,
        showInRecents: true,
        enableBarCollapsing: true,
      },
    );
    console.log(result);
  };

  const navigateToGoogleReview = () => {
    const url =
      "https://www.google.com/maps/place//data=!4m4!3m3!1s0x31da1bd7feae0db9:0xc25464870e7b62e3!9m1!1b1";
    // console.log("Google Review URL: ", url);
    // await Linking.openURL(url);
    void openExternalLink(url);
  };
  //
  return (
    <ThemedView
      style={{ ...styles.postRowContainer, opacity: isOpen ? 1 : 0.8 }}
    >
      <ThemedView style={styles.infoRow}>
        <ThemedView style={styles.merchantLogoWrapper}>
          {/* <ThemedView style={{ alignItems: "center" }}>
              <StarIcon color="#fc9d03" size={30} />
              <ThemedText style={styles.percentageText}>
                {numeral(rating).format("0.0")}
              </ThemedText>
            </ThemedView> */}
          <TouchableOpacity
            onPress={() => {
              push(
                `/service/serviceinfo?placeId=${id}&nationalPhoneNumber=${nationalPhoneNumber}`,
              );
            }}
          >
            <BusinessLogo
              logoUrl={businessLogo}
              isOpen={isOpen}
              businessName={businessName}
            />
          </TouchableOpacity>
          {!isOpen && (
            <ThemedView style={{ alignItems: "center" }}>
              <ThemedText
                style={{ fontSize: 12, color: "#f53646", fontWeight: "bold" }}
              >
                CLOSED
              </ThemedText>
            </ThemedView>
          )}

          {/* <TouchableOpacity onPress={onRatingClick}>
              <ThemedView style={styles.googleReviewCount}>
                <ThemedText style={styles.googleReviewCountText}>
                  {userRatingCount}+
                </ThemedText>
                <ThemedText style={styles.googleReviewCountText}>
                  Google
                </ThemedText>
                <ThemedText style={styles.googleReviewCountText}>
                  Reviews
                </ThemedText>
              </ThemedView>
            </TouchableOpacity> */}
        </ThemedView>
        <ThemedView style={styles.infoContainer}>
          <ThemedView style={styles.titleRow}>
            <ThemedText style={styles.merchantName} numberOfLines={1}>
              {businessName}
            </ThemedText>
            <ThemedView style={styles._24hour}>
              {isOpen && is24Hours(postData?.currentOpeningHours) && (
                <PostBadge />
              )}
              {/* {!isOpen && (
                  <OperatingStatus currentOpeningHours={currentOpeningHours} />
                )} */}
            </ThemedView>
          </ThemedView>

          <ThemedView style={{ flexDirection: "row", gap: 5, marginBottom: 5 }}>
            <ThemedView>
              <RatingStars rating={rating} />
            </ThemedView>
            <ThemedView style={styles.badges}>
              <ReviewCount numOfReviews={userRatingCount} />
            </ThemedView>
          </ThemedView>

          <ThemedView style={{ flexDirection: "row", gap: 5 }}>
            <ClosesSoon regularOpeningHours={regularOpeningHours} />
          </ThemedView>

          <ThemedView style={{ paddingTop: 5, flexDirection: "row" }}>
            <WhatsappAvailability currentOpeningHours={currentOpeningHours} />
          </ThemedView>

          <BusinessLocation
            addressDescriptor={addressDescriptor}
            address={postData?.formattedAddress}
          />

          <BusinessPhotos photos={photos} />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default PostRow;

const styles = StyleSheet.create({
  postRowContainer: {
    padding: 7,
    paddingBottom: 30,
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
    borderRadius: 5,
  },
  merchantLogoWrapper: {
    // position: "relative",
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
  rating: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  locationText: {
    fontSize: 12,
    color: "#666",
  },
  infoContainer: {
    width: "100%",
    flexShrink: 1,
    paddingLeft: 5,
  },
  content: {
    fontSize: 14,
  },
  titleRow: {
    flexDirection: "row",
  },
  badges: {
    flexDirection: "row",
    gap: 5,
    // flexShrink: 1,
    // width: "100%",
    // alignItems: "flex-end",
  },
  googleReviewCount: {
    alignItems: "center",
    justifyContent: "center",
  },
  googleReviewCountText: {
    fontSize: 11,
    color: "#1a509c",
    lineHeight: 15,
    textDecorationLine: "underline",
  },
  percentageText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#FF4D00",
  },
});
