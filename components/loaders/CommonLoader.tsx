import React from "react";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const CommonLoader = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Loading...</ThemedText>
    </ThemedView>
  );
};

export default CommonLoader;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
  },
});
