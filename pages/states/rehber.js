import { create } from "zustand";

export const useDirectoryStore = create((set) => ({
  directorys: [],
  setDirectorys: (items) => set((state) => (state.directorys = items)),
}));
