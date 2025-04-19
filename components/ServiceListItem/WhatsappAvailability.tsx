// whatsapp-logo.png

import { StyleSheet, Image } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { isValidSingaporeMobileNumber } from "@/utils/helper";

interface WhatsappAvailabilityProps {
  nationalPhoneNumber?: string;
}

const WhatsappAvailability = ({
  nationalPhoneNumber,
}: WhatsappAvailabilityProps) => {
  if (
    nationalPhoneNumber === undefined ||
    !isValidSingaporeMobileNumber(nationalPhoneNumber)
  ) {
    return null;
  }

  return (
    <ThemedView style={styles.container}>
      <Image
        source={require("@/assets/images/whatsapp-logo.png")}
        style={styles.whatsappLogo}
      />
    </ThemedView>
  );
};

export default WhatsappAvailability;

const styles = StyleSheet.create({
  whatsappLogo: {
    width: 15,
    height: 15,
  },
  container: {
    backgroundColor: "#e4f7e9",
    borderRadius: 2,
    alignItems: "center",
    paddingHorizontal: 4,
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
    flexDirection: "row",
  },
});
