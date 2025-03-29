import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";

interface ServiceMenuItemProps {
  icon: React.ReactNode;
  label: string;
}

const ServiceMenuItem = ({ icon, label }: ServiceMenuItemProps) => {
  const router = useRouter();

  const handleMenuItemPress = () => {
    router.push(`/service?category=${label}`);
  };

  return (
    <TouchableOpacity onPress={handleMenuItemPress}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.iconWrapper}>{icon}</ThemedView>
        <ThemedText style={styles.label}>{label}</ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );
};

export default ServiceMenuItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapper: {
    padding: 8,
  },
  label: {
    fontSize: 13,
  },
});
