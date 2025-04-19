import * as WebBrowser from "expo-web-browser";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import WebsiteIcon from "@/icons/Website";
import { ICON_COLUMN_WIDTH } from "@/utils/constants";

interface BusinessWebsiteProps {
  websiteUri?: string;
}

const BusinessWebsite = ({ websiteUri }: BusinessWebsiteProps) => {
  if (!websiteUri) {
    return null;
  }

  const onWebsiteUriClick = async (e: GestureResponderEvent) => {
    e.stopPropagation();

    await WebBrowser.openBrowserAsync(websiteUri, {
      showTitle: true,
      showInRecents: true,
      enableBarCollapsing: true,
    });
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.iconColumn}>
        <WebsiteIcon />
      </ThemedView>
      <TouchableOpacity onPress={onWebsiteUriClick}>
        <ThemedText style={styles.websiteText} numberOfLines={1}>
          {websiteUri}
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default BusinessWebsite;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
    paddingBottom: 10,
  },
  websiteText: {
    fontSize: 12,
    color: "#007AFF",
    lineHeight: 16,
  },
  iconColumn: {
    width: ICON_COLUMN_WIDTH,
    height: "100%",
  },
});
