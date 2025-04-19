import dayjs from "dayjs";
import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { usePersonalInformation } from "@/state/personalInformation/usePersonalInformation";
import inputStyles from "@/styles/input-styles";

const BirthdateFormField = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const { personalInformation, updatePersonalInformation } =
    usePersonalInformation();
  const { dob = "" } = personalInformation ?? {};

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    updatePersonalInformation("dob", dayjs(date).format("YYYY-MM-DD"));
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.label}>Birth Date</ThemedText>

      <ThemedView
        style={{
          ...inputStyles.inputField,
        }}
      >
        <TextInput value={dob} editable={false} onPress={showDatePicker} />
      </ThemedView>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        date={new Date(dob)}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        pickerContainerStyleIOS={{
          alignItems: "center",
        }}
      />
    </ThemedView>
  );
};

export default BirthdateFormField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    paddingVertical: 3,
  },
});
