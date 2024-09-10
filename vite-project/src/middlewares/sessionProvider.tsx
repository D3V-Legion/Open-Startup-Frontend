import { useAuthStore } from "@/store/authStore";
import { createContext, useContext, ReactNode } from "react";
import { SessionContextProps } from "@/models/type";

const SessionContext = createContext<SessionContextProps | undefined>(
  undefined
);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const token = useAuthStore((state) => state.token);
  const isAuthenticated = !!token; // Verifica si hay un token

  return (
    <SessionContext.Provider value={{ token, isAuthenticated }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession debe usarse dentro de SessionProvider");
  }
  return context;
};
