import OpeningHours from "@/components/ServiceListItem/OperatingHours/OpeningHours";
import OpeningHoursTabView from "@/components/ServiceListItem/OperatingHours/OpeningHoursTabView";
import { RegularOpeningHours } from "@/types/google/placesTypes";

interface OpeningHoursProps {
  regularOpeningHours: Partial<RegularOpeningHours>;
  regularSecondaryOpeningHours: Partial<RegularOpeningHours>[];
}

const OperatingHours = ({
  regularOpeningHours,
  regularSecondaryOpeningHours,
}: Partial<OpeningHoursProps>) => {
  const { weekdayDescriptions } = regularOpeningHours ?? {};
  const openinghours = regularSecondaryOpeningHours ?? [];

  if (openinghours?.length > 0) {
    return <OpeningHoursTabView openinghours={openinghours} />;
  }

  return <OpeningHours openingHours={weekdayDescriptions} />;
};

export default OperatingHours;
