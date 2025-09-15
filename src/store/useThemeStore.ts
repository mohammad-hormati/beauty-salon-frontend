import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type Mode = 'light' | 'dark';

interface ThemeState {
  mode: Mode;
  setMode: (m: Mode) => void;
  toggle: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: 'light',
      setMode: (mode: Mode) => set({ mode }),
      toggle: () => set((s) => ({ mode: s.mode === 'dark' ? 'light' : 'dark' })),
    }),
    {
      name: 'app-theme',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
