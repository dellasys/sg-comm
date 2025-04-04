import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as Linking from "expo-linking";
import { Stack, Tabs, useLocalSearchParams } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import "react-native-reanimated";
import { Platform, TouchableOpacity, StyleSheet } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  isValidSingaporeMobileNumber,
  removeSpacesFromString,
} from "@/utils/helper";

export default function ServiceLayout() {
  const colorScheme = useColorScheme();

  return (
    // <ThemedText>12312</ThemedText>
    // <Stack>
    //   <Stack.Screen
    //     name="index"
    //     options={{
    //       title: "sdsds",
    //       headerStyle: { backgroundColor: "#f4511e" },
    //       headerTintColor: "#fff",
    //       headerTitle: "Homeless33",
    //     }}
    //   />
    //   <Stack.Screen name="+not-found" />
    // </Stack>

    // <Tabs screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar }}>
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       href: null,
    //       headerTitle: "Home",
    //     }}
    //   />
    // </Tabs>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="index" />
    </Tabs>
  );
}

function CustomTabBar({ state, descriptors, navigation }: any) {
  const { nationalPhoneNumber } = useLocalSearchParams();
  const phoneNumber = removeSpacesFromString(nationalPhoneNumber as string);

  const isValidMobileNumber = isValidSingaporeMobileNumber(phoneNumber);

  if (!isValidMobileNumber) {
    return null;
  }

  return (
    <ThemedView style={styles.tabBarContainer}>
      {/* WhatsApp Button */}
      <TouchableOpacity
        style={styles.whatsappButton}
        onPress={() => Linking.openURL(`https://wa.me/65${phoneNumber}`)}
      >
        <ThemedText style={styles.whatsappText}>Chat on WhatsApp</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    height: 100,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    padding: 10,
    backgroundColor: "#fff",
    // borderWidth: 3,
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  whatsappButton: {
    // position: "absolute",
    // bottom: 20, // Above the tab bar
    // right: 20,
    // alignSelf: "center",
    backgroundColor: "#25D366",
    paddingVertical: 15,
    // paddingHorizontal: 30,
    borderRadius: 15,
    width: "80%",
    alignItems: "center",
  },
  whatsappText: {
    color: "white",
    fontWeight: "bold",
  },
  tabBar: {
    display: "none", // Hide default tab bar
  },
});
