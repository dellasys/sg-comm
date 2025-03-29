import { SafeAreaView } from "react-native";

import MasonryLayout from "@/components/TestMasonry";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <MasonryLayout />
    </SafeAreaView>
  );
}
