import { create } from "zustand";

interface BusinessPhotosState {
  businessPhotos: string[] | undefined;
  setBusinessPhotos: (photos: string[]) => void;
  resetBusinessPhotos: () => void;
}

export const useBusinessPhotos = create<BusinessPhotosState>()((set) => ({
  businessPhotos: [],
  setBusinessPhotos: (businessPhotos: string[]) => {
    set(() => ({ businessPhotos }));
  },
  resetBusinessPhotos: () => {
    set(() => ({ businessPhotos: undefined }));
  },
}));
