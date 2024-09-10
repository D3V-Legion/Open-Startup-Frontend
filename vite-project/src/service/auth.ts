import { ServiceResponse } from "@/models/type";
import apiManager from "./apiManager";
import { User } from "@/models/models";
import axios from "axios";


// Servicio para registrar un nuevo usuario.
export const register =async(userData:User): Promise<ServiceResponse> => {
    try {
        const response = await apiManager.post("auth/register",userData);
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
