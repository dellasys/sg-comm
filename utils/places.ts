import { CurrentOpeningHours } from "@/api/google/placeSearch";

export const is24Hours = (currentOpeningHours?: CurrentOpeningHours) => {
  const { nextCloseTime, openNow } = currentOpeningHours ?? {};

  return openNow && nextCloseTime === undefined;
};
