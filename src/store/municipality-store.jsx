import { create } from 'zustand';

export const useMunicipalityStore = create((set) => ({
    municipalityData: '',
    fetchMunicipalityDataById: (municipalityId) => {
        //sql
        set({municipalityData: municipalityId})
    },
}));