import { create } from 'zustand';
import { ModeStoreType } from '@/apps/web/store/store.type';
import { persist } from 'zustand/middleware';

// * =========================
// * 웹사이트 다크모드 설정 스토어
// * =========================
export const useModeStore = create<ModeStoreType>()(
  persist(
    (set) => ({
      darkMode: false,
      setMode: () => {
        set((state) => ({ darkMode: !state.darkMode }));
      },
    }),
    {
      name: 'dark-mode',
    },
  ),
);
