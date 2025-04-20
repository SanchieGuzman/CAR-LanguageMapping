import { create } from "zustand";

export const useMunicipalityProvinceStore = create((set) => ({
  CARData: null,
  selectedLevel: "Municipality Level",
  setSelectedLevel: (level) => set({ selectedLevel: level }),
  fetchPlaceDataById: async (placeId, level) => {
    let endpoint = "";
    if (level === "Municipality Level") {
      endpoint = "http://localhost:3001/municipality";
    } else if (level === "Provincial Level") {
      endpoint = " http://localhost:3001/province";
    }
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          [level === "Municipality Level" ? "municipality_id" : "province_id"]:
            placeId,
        }),
      });

      //   const data = await response.json();
      //   console.log(data);

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }

      const text = await response.text();
      if (!text) throw new Error("Empty response from server");

      const data = JSON.parse(text);
      console.log(data);

      set({ CARData: data });
    } catch (error) {
      console.error("Error fetching municipality data:", error);
    }
  },
}));
