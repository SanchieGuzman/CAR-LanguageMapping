import { create } from "zustand";

const initialState = {
  data: null,
  error: null,
};

// 0 - municipal level
// 1 - province level
export const useDataStore = create((set) => ({
  initialState,
  data: null,
  selectedLevel: 0,
  setSelectedLevel: (level) => set({ selectedLevel: level }),
  error: null,
  fetchPlaceDataById: async (placeId, level) => {
    try {
      const response = await fetch("http://localhost:3001/getPlaceData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          level: level,
          placeId: placeId,
        }),
      });

      const text = await response.text();
      const data = JSON.parse(text);
      set({ data: data });
    } catch (error) {
      console.error("Error fetching data:", error);
      set({ error: error });
    }
  },

  resetStore: () => set(initialState),
}));
