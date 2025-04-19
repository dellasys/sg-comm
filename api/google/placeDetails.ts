// ChIJOY0B-gsZ2jERiLoc28xkHN8
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { objectToCamel, ObjectToCamel } from "ts-case-convert";

import { GooglePlaceApiResponse } from "@/types/google/placesTypes";

const getPlaceDetails = async (placeId: string) => {
  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": "AIzaSyAUEqYAxFmaKGjnvdJ-Hv0393LILEfvyQ8",
          "X-Goog-FieldMask": "*",
          // "id,displayName,location,formattedAddress,priceLevel,nationalPhoneNumber,internationalPhoneNumber,rating,googleMapsUri,websiteUri,regularOpeningHours,userRatingCount,currentOpeningHours,shortFormattedAddress,reviews,photos,restroom,parkingOptions,accessibilityOptions",
        },
      },
    );

    const data = await response.json();

    return data;
  } catch {
    throw new Error("Failed to fetch places");
  }
};

export const GET_PLACE_DETAILS = "GET_PLACE_DETAILS";

export const useGetPlaceDetails = (
  placeId: string,
): UseQueryResult<ObjectToCamel<GooglePlaceApiResponse>> => {
  return useQuery({
    queryKey: [GET_PLACE_DETAILS],
    queryFn: async () => {
      const data = await getPlaceDetails(placeId);

      if (data !== null) {
        return objectToCamel(data);
      }

      return [];
    },
  });
};
