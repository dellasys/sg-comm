import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const SampleFunctionalComponent = () => {
  return (
    <ThemedView>
      <ThemedText>Sample Text</ThemedText>
    </ThemedView>
  );
};

export default SampleFunctionalComponent;

const styles = StyleSheet.create({});
