import NoResult from "@/components/ServiceListItem/NoResult";
import { ThemedView } from "@/components/ThemedView";
import MainLayout from "@/components/ui/MainLayout";

const Bookmarks = () => {
  return (
    <MainLayout>
      <ThemedView style={{ flex: 1 }}>
        <NoResult title="No bookmarked services" />
      </ThemedView>
    </MainLayout>
  );
};

export default Bookmarks;
