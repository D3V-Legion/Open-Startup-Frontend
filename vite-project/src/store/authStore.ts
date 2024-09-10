
import { AuthState } from '@/models/models';
import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create<AuthState>()(
    persist(
      (set) => ({
        token: null,
        setToken: (token: string) => set({ token }),
        clearToken: () => set({ token: null }),
      }),
      {
        name: 'access_token', 
        getStorage: () => localStorage,
      }
    )
  );