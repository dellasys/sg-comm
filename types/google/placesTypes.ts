export interface RegularOpeningHours {
  nextCloseTime: string;
  nextOpenTime: string;
  openNow: boolean;
  periods: Partial<OpeningHoursPeriods>[];
  weekdayDescriptions: string[];
}

export interface OpeningHoursPeriods {
  close: {
    day: number;
    hour: number;
    minute: number;
    truncated: boolean;
  };
  open: {
    day: number;
    hour: number;
    minute: number;
    truncated: boolean;
  };
}

export interface CurrentOpeningHours {
  openNow: boolean;
  periods: Partial<OpeningHoursPeriods>[];
  nextCloseTime: string;
  weekdayDescriptions: string[];
}

export interface AddressDescriptor {
  area: {
    containment: string;
    displayName: {
      text: string;
      languageCode: string;
    };
    name: string;
    placeId: string;
  }[];
  landmarks: Partial<GoogleBusinessLandmark>[];
}

export interface GoogleBusinessLandmark {
  displayName: Partial<GoogleBusinessDisplayName>;
  name: string;
  placeId: string;
  spatialRelationship: string;
  straightLineDistanceMeters: number;
  travelDistanceMeters: number;
  types: string[];
}

export interface AccessibilityOptionItems {
  wheelchairAccessibleEntrance: boolean;
  wheelchairAccessibleParking: boolean;
  wheelchairAccessibleRestroom: boolean;
}

export interface GoogleMapsLink {
  directionsUri: string;
  placeUri: string;
  writeAReviewUri: string;
  reviewsUri: string;
  photosUri: string;
}

interface GoogleBusinessPaymentOptions {
  acceptsCashOnly: boolean;
  acceptsCreditCards: boolean;
  acceptsDebitCards: boolean;
  acceptsNfc: boolean;
}

interface GoogleBusinessLocation {
  latitude: number;
  longitude: number;
}

interface AuthorAttributionItem {
  displayName: string;
  uri: string;
  photoUri: string;
}

export interface GoogleBusinessPhotoItem {
  name: string;
  widthPx: number;
  heightPx: number;
  authorAttributions: Partial<AuthorAttributionItem>[];
  flagContentUri: string;
  googleMapsUri: string;
}

interface GoogleBusinessDisplayName {
  text: string;
  languageCode: string;
}

interface GoogleBusinessReviewItemText {
  text: string;
  languageCode: string;
}

interface GoogleBusinessReviewItem {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text: Partial<GoogleBusinessReviewItemText>;
  authorAttribution: Partial<AuthorAttributionItem>;
  publishTime: string;
  flagContentUri: string;
  googleMapsUri: string;
}

interface GoogleBusinessParkingOption {
  freeParkingLot: boolean;
  paidParkingLot: boolean;
  freeStreetParking: boolean;
  paidStreetParking: boolean;
  freeGarageParking: boolean;
  paidGarageParking: boolean;
}

interface GooglePlaceApiItems {
  id: string;
  name: string;
  types: string[];
  displayName: Partial<GoogleBusinessDisplayName>;
  formattedAddress: string;
  priceLevel: number;
  nationalPhoneNumber: string;
  internationalPhoneNumber: string;
  rating: number;
  businessStatus: string;
  googleMapsUri: string;
  websiteUri: string;
  regularOpeningHours: Partial<RegularOpeningHours>;
  regularSecondaryOpeningHours: Partial<RegularOpeningHours>[];
  userRatingCount: number;
  currentOpeningHours: Partial<CurrentOpeningHours>;
  currentSecondaryOpeningHours?: Partial<CurrentOpeningHours>;
  shortFormattedAddress: string;
  iconBackgroundColor: string;
  iconMaskBaseUri: string;
  reviews: Partial<GoogleBusinessReviewItem>[];
  photos: Partial<GoogleBusinessPhotoItem>[];
  restroom: boolean;
  parkingOptions: Partial<GoogleBusinessParkingOption>[];
  develivery: boolean;
  paymentOptions: Partial<GoogleBusinessPaymentOptions>;
  location: Partial<GoogleBusinessLocation>;
  addressDescriptor: Partial<AddressDescriptor>;
  accessibilityOptions: Partial<AccessibilityOptionItems>;
  googleMapsLinks: Partial<GoogleMapsLink>;
}

export type GooglePlaceApiResponse = Partial<GooglePlaceApiItems>;
