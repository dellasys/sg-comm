import { StyleSheet, Image } from "react-native";

import ProfileInitial from "@/components/ProfileInitial";
import { ThemedView } from "@/components/ThemedView";

interface BusinessLogoProps {
  logoUrl?: string;
  businessName?: string;
}

const BusinessLogo = ({ logoUrl, businessName }: BusinessLogoProps) => {
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
