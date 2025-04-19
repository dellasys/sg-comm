import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import ChangeTextInput from "@/components/ui/ChangeTextInput";
import { usePersonalInformation } from "@/state/personalInformation/usePersonalInformation";

const MobileFormField = () => {
  const { personalInformation } = usePersonalInformation();
  const { phone } = personalInformation ?? {};

  return (
    <ThemedView style={styles.container}>
      <ChangeTextInput
        label="Mobile Number"
        value={phone}
        path="/user/change-phone"
      />
    </ThemedView>
  );
};

export default MobileFormField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});
