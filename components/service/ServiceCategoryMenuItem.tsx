import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ObjectToCamel } from "ts-case-convert";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Tables } from "@/types/database.types";
import IconMap from "@/utils/iconMap";

const ServiceCategoryMenuItem = ({
  icon,
  label,
  searchKey,
}: ObjectToCamel<Tables<"service_categories">>) => {
  const router = useRouter();
  const Icon = IconMap.get(icon) ?? IconMap.get("unknown");

  const handleMenuItemPress = () => {
    router.push(`/service?category=${searchKey}&label=${label}`);
  };

  return (
    <TouchableOpacity onPress={handleMenuItemPress}>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.iconWrapper}>
          {Icon && <Icon size={45} />}
        </ThemedView>
        <ThemedText style={styles.label}>{label}</ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );
};

export default ServiceCategoryMenuItem;

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
