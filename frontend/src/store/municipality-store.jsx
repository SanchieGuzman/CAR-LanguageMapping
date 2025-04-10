import { create } from "zustand";

export const useMunicipalityStore = create((set) => ({
  // municipalityData: '',
  // fetchMunicipalityDataById: (municipalityId) => {
  //     //sql
  //     set({municipalityData: municipalityId})
  // },

  municipalityData: null,
  fetchMunicipalityDataById: async (municipalityId) => {
    try {
      const response = await fetch("http://localhost:3001/municipality", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ municipality_id: municipalityId }),
      });

      const data = await response.json();
      set({ municipalityData: data });
    } catch (error) {
      console.error("Error fetching municipality data:", error);
    }
  },
}));
