import * as Clipboard from "expo-clipboard";
import { StyleSheet, TouchableOpacity } from "react-native";

import { AddressDescriptor, Landmark } from "@/api/google/placeSearch";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import BuildingIcon from "@/icons/Building";
import CopyClipboardIcon from "@/icons/CopyClipboard";
import LocationPinIcon from "@/icons/LocationPin";
import { useCustomToast } from "@/state/useCustomToast";

interface BusinessLocationProps {
  addressDescriptor: AddressDescriptor;
  address?: string;
}

const findWithinPremise = (landmarks: Landmark[]) => {
  return landmarks.find(({ spatialRelationship }) => {
    return spatialRelationship === "WITHIN";
  });
};

const ICON_COLUMN_WIDTH = 15;

const BusinessLocation = ({
  addressDescriptor,
  address,
}: BusinessLocationProps) => {
  const { landmarks = [] } = addressDescriptor ?? {};
  const withinPremise = findWithinPremise(landmarks);
  const { setToastMessage } = useCustomToast();

  const copyToClipboard = async () => {
    if (address !== undefined) {
      await Clipboard.setStringAsync(address);
      setToastMessage("Copied to clipboard");
    }
  };

  if (addressDescriptor === undefined || landmarks.length === 0) {
    return null;
  }

  return (
    <ThemedView style={{}}>
      {withinPremise !== undefined && (
        <ThemedView style={styles.container}>
          <ThemedView style={styles.iconColumn}>
            <BuildingIcon color="#A1A1A1" />
          </ThemedView>
          <ThemedText style={styles.locationText}>
            {withinPremise?.displayName?.text ?? ""}
          </ThemedText>
        </ThemedView>
      )}
      <TouchableOpacity onPress={copyToClipboard}>
        <ThemedView style={styles.container}>
          <ThemedView style={styles.iconColumn}>
            <LocationPinIcon />
          </ThemedView>
          <ThemedText style={styles.locationText}>
            {address}{" "}
            <ThemedView style={styles.iconWrapper}>
              <CopyClipboardIcon />
            </ThemedView>
          </ThemedText>
        </ThemedView>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default BusinessLocation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    paddingBottom: 10,
  },
  locationText: {
    fontSize: 12,
    lineHeight: 16,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  iconColumn: {
    width: ICON_COLUMN_WIDTH,
    height: "100%",
  },
  copyImage: {
    width: 15,
    height: 15,
  },
  iconWrapper: {
    height: 12,
  },
});
