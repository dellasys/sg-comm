import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import CommonTextInput from "@/components/ui/CommonTextInput";
import { usePersonalInformation } from "@/state/personalInformation/usePersonalInformation";

const NameFormField = () => {
  const { updatePersonalInformation, personalInformation } =
    usePersonalInformation();
  const { name } = personalInformation ?? {};
  console.log(7343, personalInformation);
  const onChangeText = (value: string) => {
    updatePersonalInformation("name", value);
  };

  return (
    <ThemedView style={styles.container}>
      <CommonTextInput label="Name" onChangeText={onChangeText} value={name} />
    </ThemedView>
  );
};

export default NameFormField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});
