// store.ts
import create from "zustand";

interface Item {
  name: string;
}

interface Store {
  items: Item[];
  setItems: (items: Item[]) => void;
}

export const useStore = create<Store>((set) => ({
  items: [],
  setItems: (items) => set({ items }),
}));
