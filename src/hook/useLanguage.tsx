import create from 'zustand';

// Define el tipo de estado y acciones
interface AppState {
  isSpanish: boolean;
  setSpanish: (newState: boolean) => void;
}

// Crea el useLanguage con Zustand
const useLanguage = create<AppState>((set) => ({
  isSpanish: false,
  setSpanish: (newState: boolean) => set({ isSpanish: newState }),
}));

export default useLanguage;