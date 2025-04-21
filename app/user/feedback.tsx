import { TextInput } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import SendFeedback from "@/components/feedback/SendFeedback";
import MainLayout from "@/components/ui/MainLayout";
import PageHeading from "@/components/ui/PageHeading";
import inputStyles from "@/styles/input-styles";

const Feedback = () => {
  return (
    <MainLayout>
      <ThemedView style={{ flex: 1 }}>
        <PageHeading
          title="Tell us what you think"
          subtitle="We would love to hear your thoughts!"
        />
        <TextInput
          style={{ ...inputStyles.inputField, height: 300 }}
          autoFocus
          multiline
        />
      </ThemedView>
      <SendFeedback />
    </MainLayout>
  );
};

export default Feedback;
