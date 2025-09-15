import { create } from 'zustand';

type UiState = {
  isOpenSidebar: boolean;
  setOpenSidebar: (open: boolean) => void;
  toggleSidebar: () => void;
};

export const useUiStore = create<UiState>((set) => ({
  isOpenSidebar: false,
  setOpenSidebar: (val) => set({ isOpenSidebar: val }),
  toggleSidebar: () => set((s) => ({ isOpenSidebar: !s.isOpenSidebar })),
}));
