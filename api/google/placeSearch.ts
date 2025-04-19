import { useInfiniteQuery } from "@tanstack/react-query";

import { GooglePlaceApiResponse } from "@/types/google/placesTypes";

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
