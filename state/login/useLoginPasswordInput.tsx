import { create } from "zustand";

interface LoginPasswordInputState {
  password: string;
  setLoginPasswordInput: (password: string) => void;
}

export const useLoginPasswordInput = create<LoginPasswordInputState>()(
  (set) => ({
    password: "",
    setLoginPasswordInput: (password: string) => {
      set(() => ({ password }));
    },
  }),
);
