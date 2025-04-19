import { create } from "zustand";

interface LoginEmailInputState {
  email: string;
  setLoginEmailInput: (password: string) => void;
}

export const useLoginEmailInput = create<LoginEmailInputState>()((set) => ({
  email: "",
  setLoginEmailInput: (email: string) => {
    set(() => ({ email }));
  },
}));
