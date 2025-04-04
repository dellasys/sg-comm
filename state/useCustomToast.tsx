import { create } from "zustand";

interface CustomToastState {
  toastMessage: string | undefined;
  setToastMessage: (message: string) => void;
  clearToastMessage: () => void;
}

export const useCustomToast = create<CustomToastState>()((set) => ({
  toastMessage: undefined,
  setToastMessage: (message: string) => {
    set(() => ({ toastMessage: message }));
  },
  clearToastMessage: () => {
    set(() => ({ toastMessage: undefined }));
  },
}));
