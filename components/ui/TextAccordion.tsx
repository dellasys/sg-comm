import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ChevronBottom from "@/icons/ChevronBottom";
import ChevronUp from "@/icons/ChevronUp";

interface TextAccordionProps {
  title: string;
  description: string;
}

const TextAccordion = ({ title, description }: TextAccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleRow}>
        <ThemedText style={styles.title}>{title}</ThemedText>
        <TouchableOpacity onPress={toggleAccordion}>
          {isExpanded ? <ChevronUp /> : <ChevronBottom />}
        </TouchableOpacity>
      </ThemedView>
      {isExpanded && (
        <ThemedView style={styles.descriptionContainer}>
          <ThemedText style={styles.description}>{description}</ThemedText>
        </ThemedView>
      )}
    </ThemedView>
  );
};

export default TextAccordion;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 5,
    paddingBottom: 10,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descriptionContainer: {
    padding: 5,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  description: {
    padding: 5,
    paddingHorizontal: 10,
    fontSize: 15,
  },
});
