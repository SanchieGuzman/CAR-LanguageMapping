import { create } from "zustand";

// 0 - municipal level
// 1 - province level
export const useDataStore = create((set) => ({
  data: null,
  selectedLevel: 0,
  setSelectedLevel: (level) => set({ selectedLevel: level }),
  error: null,
  fetchPlaceDataById: async (placeId, level) => {
    try {
      const response = await fetch("http://localhost:3001/getPlaceData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          level: level,
          placeId: placeId
        }),
      });

      const text = await response.text();
      const data = JSON.parse(text);
      console.log(data);

      set({ data: data });
    } catch (error) {
      console.error("Error fetching data:", error);
      set({ error: error });
    }
  },
}));
