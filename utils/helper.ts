// remove all the spaces of string
export const removeSpacesFromString = (str: string) => {
  return str.replace(/\s+/g, "");
};

export const isValidSingaporeMobileNumber = (phoneNumber: string) => {
  // Singapore mobile numbers start with 8 or 9 and are 8 digits long
  // number starts with 65, remove it
  const cleanedNumber = phoneNumber.replace(/^65/, "");
  const regex = /^(8|9)\d{7}$/;
  return regex.test(cleanedNumber);
};

export const getGooglePhoto = (photoReference: string) => {
  return `https://places.googleapis.com/v1/${photoReference}/media?key=AIzaSyAUEqYAxFmaKGjnvdJ-Hv0393LILEfvyQ8&maxWidthPx=100`;
};
