import { create } from "zustand";

interface CreateUserNameInputState {
  name: string;
  setCreateUserNameInput: (password: string) => void;
}

export const useCreateUserNameInput = create<CreateUserNameInputState>()(
  (set) => ({
    name: "",
    setCreateUserNameInput: (name: string) => {
      set(() => ({ name }));
    },
  }),
);
