import { create } from "zustand";

interface CreateEmailInputState {
  email: string;
  setCreateEmailInput: (password: string) => void;
}

export const useCreateEmailInput = create<CreateEmailInputState>()((set) => ({
  email: "",
  setCreateEmailInput: (email: string) => {
    set(() => ({ email }));
  },
}));
