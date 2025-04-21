import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { usePersonalInformation } from "@/state/personalInformation/usePersonalInformation";
import supabase from "@/utils/supabase";

const SendFeedback = () => {
  const { back } = useRouter();
  const { personalInformation } = usePersonalInformation();

  const handleSave = async () => {
    const { name, gender, dob } = personalInformation ?? {};
    // validation before save

    const { data, error } = await supabase.auth.updateUser({
      data: { name, dob, gender },
    });

    if (error) {
      console.error("Error updating user:", error);
      return;
    }

    back();
    console.log("User updated successfully:", data);
    // Handle success (e.g., show a success message or navigate to another screen)
  };

  return (
    <ThemedView>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <ThemedText style={styles.saveText}>SEND</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default SendFeedback;

const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  saveText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
