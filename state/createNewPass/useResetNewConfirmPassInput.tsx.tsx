import { create } from "zustand";

interface ResetNewConfirmPassInputState {
  newConfirmPassword: string;
  setNewConfirmPassword: (newConfirmPassword: string) => void;
}

export const useResetNewConfirmPassInput =
  create<ResetNewConfirmPassInputState>()((set) => ({
    newConfirmPassword: "",
    setNewConfirmPassword: (newConfirmPassword: string) => {
      set(() => ({ newConfirmPassword }));
    },
  }));
