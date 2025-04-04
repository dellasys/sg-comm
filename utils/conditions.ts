import { BusinessStatus } from "@/types";

export const isBusinessOpen = (status: string) =>
  status === BusinessStatus.OPERATIONAL;
