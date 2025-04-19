import { create } from "zustand";

interface ResetNewPassInputState {
  newPassword: string;
  setNewPassword: (password: string) => void;
}

export const useResetNewPassInput = create<ResetNewPassInputState>()((set) => ({
  newPassword: "",
  setNewPassword: (newPassword: string) => {
    set(() => ({ newPassword }));
  },
}));
