// remove all the spaces of string
export const removeSpacesFromString = (str: string) => {
  return str.replace(/\s+/g, "");
};

export const isValidSingaporeMobileNumber = (phoneNumber: string) => {
  // Singapore mobile numbers start with 8 or 9 and are 8 digits long
  // number starts with 65, remove it
  const validPhoneNumber = removeSpacesFromString(phoneNumber);
  const cleanedNumber = validPhoneNumber.replace(/^65/, "");
  const regex = /^(8|9)\d{7}$/;

  return regex.test(cleanedNumber);
};

interface PhotoSettingParams {
  maxWidthPx?: number;
  maxHeightPx?: number;
}

export const getGooglePhoto = (
  photoReference: string,
  photoSetting?: PhotoSettingParams,
) => {
  const { maxWidthPx } = photoSetting ?? {};
  const maxWidth = maxWidthPx ?? 100;
  // const maxHeight = maxHeightPx ?? 100;

  return `https://places.googleapis.com/v1/${photoReference}/media?key=AIzaSyAUEqYAxFmaKGjnvdJ-Hv0393LILEfvyQ8&maxWidthPx=${maxWidth}`;
};
