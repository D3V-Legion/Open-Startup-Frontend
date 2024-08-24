import create from 'zustand'

export const useStore = create((set)=>({
 // Estado inicial de la store, esto se cambiara a estados en base a la interfaz de cada entidad.
 user: null,
 token: null,

 // Funciones para actualizar el estado
 login: (user:string, token:string) => set({ user, token }),
 logout: () => set({ user: null, token: null }),
}));