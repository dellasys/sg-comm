import { StyleSheet, Image } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useCreateEmailInput } from "@/state/createAccount/useCreateEmailInput";

const SampleFunctionalComponent = () => {
  const { email } = useCreateEmailInput();

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/confirm-email.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </ThemedView>
      <ThemedView style={styles.descriptionContainer}>
        <ThemedText style={styles.title}>Confirm your email address</ThemedText>
        <ThemedText style={styles.description}>
          We sent a confirmation email to :
        </ThemedText>
        <ThemedText style={styles.emailText}>dellasys@gmail.com</ThemedText>
        <ThemedText style={styles.description}>
          Check your email and click on the confirmation link to continue.
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default SampleFunctionalComponent;

const styles = StyleSheet.create({
  container: {
    padding: "10%",
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  image: {
    maxWidth: 160,
  },
  descriptionContainer: {
    alignItems: "center",
  },
  description: {
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 2,
    textAlign: "center",
    paddingVertical: 20,
  },
  emailText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
