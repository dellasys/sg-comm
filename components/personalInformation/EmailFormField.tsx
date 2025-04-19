import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import DisplayTextOnlyInput from "@/components/ui/DisplayTextOnlyInput";
import { usePersonalInformation } from "@/state/personalInformation/usePersonalInformation";

const EmailFormField = () => {
  const { personalInformation } = usePersonalInformation();
  const { email } = personalInformation ?? {};

  return (
    <ThemedView style={styles.container}>
      <DisplayTextOnlyInput label="Email" value={email} />
    </ThemedView>
  );
};

export default EmailFormField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});
