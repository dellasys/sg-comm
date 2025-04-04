import UnknownIcon from "@/icons/Unknown";
import AirConditionerIcon from "@/icons/services/AirConditioner";
import CarRentalIcon from "@/icons/services/CarRental";
import DogIcon from "@/icons/services/Dog";
import DrillIcon from "@/icons/services/Drill";
import DumbBellIcon from "@/icons/services/DumbBell";
import GroceriesIcon from "@/icons/services/Groceries";
import HaircutIcon from "@/icons/services/Haircut";
import MedicineIcon from "@/icons/services/Medicine";
import MoverIcon from "@/icons/services/Mover";
import PlumbingIcon from "@/icons/services/Plumbing";

const ICON_MAP = new Map([
  ["pipe", PlumbingIcon],
  ["mover", MoverIcon],
  ["car_rental", CarRentalIcon],
  ["medicine", MedicineIcon],
  ["dumbbell", DumbBellIcon],
  ["haircut", HaircutIcon],
  ["groceries", GroceriesIcon],
  ["air_conditioner", AirConditionerIcon],
  ["pet", DogIcon],
  ["drill", DrillIcon],
  ["unknown", UnknownIcon],
]);

export default ICON_MAP;
