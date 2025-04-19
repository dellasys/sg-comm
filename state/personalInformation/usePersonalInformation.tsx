import dayjs from "dayjs";
import { create } from "zustand";

interface PersonalInformationFormFields {
  name: string;
  email: string;
  phone: string;
  gender: string;
  dob: string;
}

const INITIAL_PERSONAL_INFORMATION: PersonalInformationFormFields = {
  name: "",
  email: "",
  phone: "",
  gender: "",
  dob: dayjs().format("YYYY-MM-DD"),
};

interface PersonalInformationState {
  personalInformation: Partial<PersonalInformationFormFields>;
  setPersonalInformation: (
    personalInformation: Partial<PersonalInformationFormFields>,
  ) => void;
  updatePersonalInformation: (
    fieldKey: keyof PersonalInformationFormFields,
    value: string,
  ) => void;
}

export const usePersonalInformation = create<PersonalInformationState>()(
  (set) => ({
    personalInformation: INITIAL_PERSONAL_INFORMATION,
    setPersonalInformation: (personalInformation) => {
      set(() => ({ personalInformation }));
    },
    updatePersonalInformation: (fieldKey, value) => {
      set((state) => ({
        personalInformation: {
          ...state.personalInformation,
          [fieldKey]: value,
        },
      }));
    },
  }),
);
