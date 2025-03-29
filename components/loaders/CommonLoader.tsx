import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const CommonLoader = () => {
  return (
    <ThemedView>
      <ThemedText>Loading...</ThemedText>
    </ThemedView>
  );
};

export default CommonLoader;
