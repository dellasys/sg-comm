import { StyleSheet, Image } from "react-native";

import ProfileInitial from "@/components/ProfileInitial";
import { ThemedView } from "@/components/ThemedView";

interface BusinessLogoProps {
  logoUrl?: string;
  isOpen?: boolean;
  businessName?: string;
}

const BusinessLogo = ({ logoUrl, isOpen, businessName }: BusinessLogoProps) => {
  if (logoUrl === undefined) {
    return <ProfileInitial name={businessName} />;
  }

  return (
    <ThemedView>
      <Image
        source={{
          uri: logoUrl,
        }}
        style={{
          ...styles.merchantLogo,
          opacity: !isOpen ? 0.6 : 1,
        }}
      />
    </ThemedView>
  );
};

export default BusinessLogo;

const styles = StyleSheet.create({
  merchantLogo: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
});
