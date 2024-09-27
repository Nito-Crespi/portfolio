import create from "zustand";

interface AppState {
  isSpanish: boolean;
  setSpanish: (newState: boolean) => void;
}

const useLanguage = create<AppState>((set) => ({
  isSpanish: false,
  setSpanish: (newState: boolean) => set({ isSpanish: newState }),
}));

export default useLanguage;
