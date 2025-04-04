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
    <ThemedView>
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
    width: 20,
    height: 20,
  },
});
