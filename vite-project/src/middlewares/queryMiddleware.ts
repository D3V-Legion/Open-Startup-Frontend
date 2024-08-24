import { useStore } from "../store/Store";

export const queryMiddleware = async (ctx, next) => {
    const { queryKey, queryFn } = ctx;
    const store = useStore();
  
    try {
      const data = await queryFn();
      store.update((state) => ({ ...state, [queryKey]: data }));
      return data;
    } catch (error) {
      store.update((state) => ({ ...state, [queryKey]: null }));
      throw error;
    }
  };