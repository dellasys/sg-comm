import { CurrentOpeningHours } from "@/types/google/placesTypes";

export const is24Hours = (
  currentOpeningHours?: Partial<CurrentOpeningHours>,
) => {
  if (!currentOpeningHours) {
    return false;
  }

  const { nextCloseTime, openNow } = currentOpeningHours ?? {};

  return openNow && nextCloseTime === undefined;
};
