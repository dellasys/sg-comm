import { StyleSheet, SafeAreaView } from "react-native";

import { ThemedView } from "@/components/ThemedView";

const MainLayout = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={styles.container}>{children}</ThemedView>
    </SafeAreaView>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});
