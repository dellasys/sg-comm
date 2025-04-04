import { create } from "zustand";

interface DealsWallState {
  deals: Record<string, any>[];
  appendDeals: (newDeals: Record<string, any>[]) => void;
}

export const useDealsWall = create<DealsWallState>()((set) => ({
  deals: [],
  appendDeals: (newDeals: Record<string, any>[]) => {
    set((state) => ({ deals: [...state.deals, ...newDeals] }));
  },
}));
