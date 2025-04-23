import { create } from "zustand";
import municipality_data from '/data/municipality_data.json';
import province_data from '/data/province_data.json';

// 0 - municipal level
// 1 - province level
export const useDataStore = create((set) => ({
  data: null,
  selectedLevel: 0,
  setSelectedLevel: (level) => set({ selectedLevel: level }),
  error: null,
  fetchPlaceDataById: async (placeId, level) => {
    if(level === 0){
      set({ data: municipality_data[placeId-1] });
    }else{
      set({ data: province_data[placeId-1] });
    }
  },

  resetStore: () => set({
    data: null,
    error: null,
  }),
}));
