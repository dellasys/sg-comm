import { StyleSheet } from "react-native";

import { useGetServiceCategories } from "@/api/useGetServiceCategories";
import { ThemedView } from "@/components/ThemedView";
import ServiceCategoryMenuItem from "@/components/service/ServiceCategoryMenuItem";

const ServiceCategories = () => {
  const { data: serviceCategories = [] } = useGetServiceCategories();

  return (
    <ThemedView style={styles.container}>
      {serviceCategories.map((service, index) => (
        <ServiceCategoryMenuItem key={index} {...service} />
      ))}
    </ThemedView>
  );
};

export default ServiceCategories;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "space-around",
  },
});
