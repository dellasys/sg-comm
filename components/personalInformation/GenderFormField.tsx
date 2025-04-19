import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { usePersonalInformation } from "@/state/personalInformation/usePersonalInformation";

const data = [
  { label: "Female", value: "female" },
  { label: "Male", value: "male" },
  { label: "Non Binary", value: "non-binary" },
  { label: "Genderqueer", value: "genderqueer" },
  { label: "Prefer not to say", value: "prefer-not-to-say" },
];

const renderDropdownItem = (item) => {
  return (
    <ThemedView style={styles.dropdownItem}>
      <ThemedText style={styles.dropdownItemText}>{item.label}</ThemedText>
    </ThemedView>
  );
};

const GenderFormField = () => {
  const { personalInformation, updatePersonalInformation } =
    usePersonalInformation();
  const { gender } = personalInformation ?? {};
  console.log({ gender });
  const onChangeText = ({ value }: { value: string }) => {
    updatePersonalInformation("gender", value);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.label}>Gender</ThemedText>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select option"
        searchPlaceholder="Search..."
        value={gender}
        onChange={onChangeText}
        renderItem={renderDropdownItem}
      />
    </ThemedView>
  );
};

export default GenderFormField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    paddingVertical: 3,
  },
  dropdown: {
    height: 40,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 15,
  },
  selectedTextStyle: {
    fontSize: 15,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 15,
  },
  dropdownItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  dropdownItemText: {
    fontSize: 15,
  },
});
