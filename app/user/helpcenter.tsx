import { ThemedView } from "@/components/ThemedView";
import MainLayout from "@/components/ui/MainLayout";
import PageHeading from "@/components/ui/PageHeading";
import TextAccordion from "@/components/ui/TextAccordion";

const HelpCenter = () => {
  return (
    <MainLayout>
      <ThemedView style={{ flex: 1 }}>
        <PageHeading title="Help Center" subtitle="How can we help you?" />
        <TextAccordion
          title="Account"
          description="n the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan"
        />
        <TextAccordion
          title="Payment"
          description="ble English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search"
        />
        <TextAccordion
          title="Settings"
          description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College"
        />
        <TextAccordion
          title="Referral"
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"
        />
      </ThemedView>
    </MainLayout>
  );
};

export default HelpCenter;
