import { ThemedView } from "@/components/ThemedView";
import BirthdateFormField from "@/components/personalInformation/BirthdateFormField";
import EmailFormField from "@/components/personalInformation/EmailFormField";
import GenderFormField from "@/components/personalInformation/GenderFormField";
import MobileFormField from "@/components/personalInformation/MobileFormField";
import NameFormField from "@/components/personalInformation/NameFormField";
import SavePersonalInformation from "@/components/personalInformation/SavePersonalInformation";
import MainLayout from "@/components/ui/MainLayout";

const PersonalInformation = () => {
  return (
    <MainLayout>
      <ThemedView style={{ flex: 1 }}>
        <NameFormField />
        <EmailFormField />
        <MobileFormField />
        <GenderFormField />
        <BirthdateFormField />
      </ThemedView>
      <SavePersonalInformation />
    </MainLayout>
  );
};

export default PersonalInformation;
