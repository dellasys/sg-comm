import { useState } from "react";
import { StyleSheet } from "react-native";
import PhoneInput from "react-native-phone-number-input";

import { ThemedView } from "@/components/ThemedView";
import MainLayout from "@/components/ui/MainLayout";
import PageActionButton from "@/components/ui/PageActionButton";
import PageHeading from "@/components/ui/PageHeading";
import supabase from "@/utils/supabase";

const ChangePhone = () => {
  const [newPhone, setNewPhone] = useState("");

  const onChangeText = (newPhone: string) => {
    setNewPhone(newPhone);
  };

  const handleSendOTP = async () => {
    const { error } = await supabase.auth.resend({
      type: "phone_change",
      phone: newPhone,
    });

    if (error) {
      console.error("Error sending OTP:", error);
      return;
    }
    console.log("OTP sent successfully to:", newPhone);
    // Handle success (e.g., show a success message or navigate to another screen)
  };

  return (
    <MainLayout>
      <PageHeading
        title="Change phone number"
        subtitle="An OTP will be sent to this number for verification purposes."
      />
      <ThemedView style={styles.container}>
        <PhoneInput
          defaultCode="SG"
          placeholder="Enter phone number"
          value={newPhone}
          onChangeText={onChangeText}
          textInputStyle={{ fontSize: 15 }}
          codeTextStyle={{ fontSize: 15 }}
        />
      </ThemedView>

      <PageActionButton onPress={handleSendOTP} label="Continue" />
    </MainLayout>
  );
};

export default ChangePhone;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flex: 1,
  },
  label: {
    fontWeight: "bold",
    paddingVertical: 3,
  },
});
