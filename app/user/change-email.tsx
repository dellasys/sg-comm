import { useState } from "react";

import { ThemedView } from "@/components/ThemedView";
import CommonTextInput from "@/components/ui/CommonTextInput";
import MainLayout from "@/components/ui/MainLayout";
import PageActionButton from "@/components/ui/PageActionButton";
import PageHeading from "@/components/ui/PageHeading";
import supabase from "@/utils/supabase";

const ChangeEmail = () => {
  const [newEmail, setNewEmail] = useState("");

  const onChangeText = (newEmail: string) => {
    setNewEmail(newEmail);
  };

  const handleSendOTP = async () => {
    const { error } = await supabase.auth.resend({
      type: "email_change",
      email: newEmail,
    });

    if (error) {
      console.error("Error sending OTP:", error);
      return;
    }
    console.log("OTP sent successfully to:", newEmail);
    // Handle success (e.g., show a success message or navigate to another screen)
  };

  return (
    <MainLayout>
      <PageHeading
        title="Update Email"
        subtitle="An OTP will be sent to this email for verification purposes."
      />
      <ThemedView style={{ flex: 1 }}>
        <CommonTextInput
          onChangeText={onChangeText}
          value={newEmail}
          placeholder="example@email.com"
        />
      </ThemedView>

      <PageActionButton onPress={handleSendOTP} label="Continue" />
    </MainLayout>
  );
};

export default ChangeEmail;
