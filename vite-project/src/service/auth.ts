import { LoginResponse, ServiceResponse } from "@/models/type";
import apiManager from "./apiManager";
import axios from "axios";
import { useAuthStore } from "@/store/authStore";


// Servicio para registrar un nuevo usuario.
export const registerAuth =async(email:string,firstname:string,lastname:string,password:string): Promise<ServiceResponse> => {
    try {
        const response = await apiManager.post("/register",{email,firstname,lastname,password});
        return {data: response.data};
    } catch (error:unknown) {
        // Devolver una acción indicando fallo
        if (axios.isAxiosError(error)) {
            return { error: error.response?.data?.message || "Error desconocido" };
          } else {
            return { error: "Error inesperado" };
          }
    }
}

// Servicio para iniciar sesion.
export const login = async (email:string, password:string): Promise<LoginResponse> => {
    const setToken = useAuthStore.getState().setToken;

    try {
        const response = await apiManager.post("/login", { email, password });
    
    const token = response.data.token;
    setToken(token); // Guardar el token en el estado global y localStorage

    return { token };
    } catch (error:unknown) {
        if (axios.isAxiosError(error)) {
            return { error: error.response?.data?.message || "Error iniciando sesión" };
          } else {
            return { error: "Error inesperado" };
          }
    }
}