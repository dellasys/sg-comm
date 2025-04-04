import { useInfiniteQuery } from "@tanstack/react-query";

const searchPlaces = async (
  query: string,
  nextPageToken = "",
): Promise<SearchPlacesResponse> => {
  try {
    const response = await fetch(
      "https://places.googleapis.com/v1/places:searchText",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": "AIzaSyAUEqYAxFmaKGjnvdJ-Hv0393LILEfvyQ8",
          "X-Goog-FieldMask": "*",
          // "places.id,places.businessStatus,places.accessibilityOptions,places.location,places.pureServiceAreaBusiness,places.types,nextPageToken,places.displayName,places.formattedAddress,places.priceLevel,places.nationalPhoneNumber,places.internationalPhoneNumber,places.rating,places.googleMapsUri,places.websiteUri,places.regularOpeningHours,places.userRatingCount,places.currentOpeningHours,places.shortFormattedAddress,places.reviews,places.photos,places.restroom,places.parkingOptions,places.accessibilityOptions",
        },
        body: JSON.stringify({ textQuery: query, pageToken: nextPageToken }),
      },
    );

    const data = await response.json();

    return data;
  } catch {
    throw new Error("Failed to fetch places");
  }
};

export interface CurrentOpeningHoursPeriods {
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
  periods: CurrentOpeningHoursPeriods[];
  nextCloseTime: string;
}

export interface RegularSecondaryOpeningHours {
  nextCloseTime: string;
  nextOpenTime: string;
  openNow: boolean;
  periods: {
    close: {
      day: number;
      hour: number;
      minute: number;
    };
    open: {
      day: number;
      hour: number;
      minute: number;
    };
  }[];
}

export interface Landmark {
  displayName: {
    text: string;
    languageCode: string;
  };
  name: string;
  placeId: string;
  spatialRelationship: string;
  straightLineDistanceMeters: number;
  travelDistanceMeters: number;
  types: string[];
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
  landmarks: Landmark[];
}

export interface GooglePlaceApiResponse {
  id: string;
  name: string;
  types: string[];
  displayName: {
    text: string;
    languageCode: string;
  };
  formattedAddress: string;
  priceLevel: number;
  nationalPhoneNumber: string;
  internationalPhoneNumber: string;
  rating: number;
  businessStatus: string;
  googleMapsUri: string;
  websiteUri: string;
  regularOpeningHours: string;
  userRatingCount: number;
  currentOpeningHours?: CurrentOpeningHours;
  shortFormattedAddress: string;
  iconBackgroundColor: string;
  iconMaskBaseUri: string;
  reviews: Record<string, unknown>;
  photos: Record<string, unknown>;
  restroom: boolean;
  parkingOptions: Record<string, unknown>;
  develivery: boolean;
  regularSecondaryOpeningHours: RegularSecondaryOpeningHours[];
  paymentOptions: {
    acceptsCashOnly: boolean;
    acceptsCreditCards: boolean;
    acceptsDebitCards: boolean;
    acceptsNfc: boolean;
  };
  location: {
    latitude: number;
    longitude: number;
  };
  addressDescriptor: AddressDescriptor;
  accessibilityOptions: {
    wheelchairAccessibleEntrance: boolean;
    wheelchairAccessibleParking: boolean;
    wheelchairAccessibleRestroom: boolean;
  };
}

interface SearchPlacesResponse {
  nextPageToken?: string;
  places: GooglePlaceApiResponse[];
}

export const SEARCH_PLACES = "SEARCH_PLACES";

export const useSearchPlaces = (query: string) =>
  useInfiniteQuery<SearchPlacesResponse>({
    queryKey: [SEARCH_PLACES],
    queryFn: async ({ pageParam = "" }) => {
      try {
        const data = await searchPlaces(
          `${query} in Singapore`,
          pageParam as string,
        );

        return data;
      } catch (error) {
        console.error("Error fetching places:", error);
        return {
          pageParam: undefined,
          places: [],
        };
      }
    },
    getNextPageParam: (lastPage) => {
      return lastPage.nextPageToken;
    },
    initialPageParam: undefined,
  });
