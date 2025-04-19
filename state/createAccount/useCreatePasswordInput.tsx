import { create } from "zustand";

interface CreatePasswordInputState {
  password: string;
  setCreatePasswordInput: (password: string) => void;
}

export const useCreatePasswordInput = create<CreatePasswordInputState>()(
  (set) => ({
    password: "",
    setCreatePasswordInput: (password: string) => {
      set(() => ({ password }));
    },
  }),
);
