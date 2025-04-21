import "react-native-url-polyfill/auto";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { Dimensions, TextInput, TouchableOpacity, Button } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ToastMessage from "@/components/ToastMessage";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import { Header } from "@react-navigation/elements";

import queryClient from "@/utils/queryClient";
// Prevent the splash screen from auto-hiding before asset loading is complete.
void SplashScreen.preventAutoHideAsync();

const screenWidth = Dimensions.get("window").width;

export default function RootLayout() {
  const { push, back } = useRouter();
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const search = () => {
    push(`/services?category=${searchKeyWord}&label=${searchKeyWord}`);
  };

  const onEnterSearchKeyword = (keyword: string) => {
    setSearchKeyWord(keyword);
  };

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerStyle: { backgroundColor: Colors.theme.main },
              headerTitle: "",
              headerShown: false,
              // header: (props) => {
              //   return (
              //     <Header
              //       {...props}
              //       title="Homeless"
              //       headerTitleStyle={{
              //         fontSize: 20,
              //         fontWeight: "bold",
              //         color: "#fff",
              //       }}
              //       headerTintColor="#fff"
              //       headerTitle={() => (
              //         <ThemedView
              //           style={{
              //             borderRadius: 20,
              //             width: screenWidth - 50,
              //             marginBottom: 10,
              //           }}
              //         >
              //           <ThemedView
              //             style={{
              //               flexDirection: "row",
              //               alignItems: "center",
              //               borderWidth: 1,
              //               borderColor: "#fff",
              //               borderRadius: 20,
              //             }}
              //           >
              //             <TextInput
              //               placeholder="E.g. Plumber"
              //               style={{ flex: 1, padding: 10 }}
              //               onChangeText={onEnterSearchKeyword}
              //               onSubmitEditing={() => {
              //                 search();
              //               }}
              //             />
              //             <TouchableOpacity
              //               style={{ padding: 10, marginRight: 5 }}
              //               onPress={search}
              //             >
              //               <ThemedText style={{ color: "#007AFF" }}>
              //                 Search
              //               </ThemedText>
              //             </TouchableOpacity>
              //           </ThemedView>
              //         </ThemedView>
              //       )}
              //       headerStyle={{
              //         backgroundColor: "#f4511e",
              //         height: 130,
              //       }}
              //     />
              //   );
              // },
            }}
          />
          <Stack.Screen name="services" />
          <Stack.Screen
            name="services/serviceinfo"
            options={{ headerTitle: "" }}
          />
          <Stack.Screen
            name="services/photo_modal"
            options={{
              headerTitle: "",
              presentation: "transparentModal",
              headerRight: () => <Button title="Close" onPress={back} />,
            }}
          />

          <Stack.Screen
            name="user"
            options={{
              headerStyle: { backgroundColor: Colors.theme.main },
              headerTitle: "",
            }}
          />

          <Stack.Screen name="auth" />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
        <ToastMessage />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
