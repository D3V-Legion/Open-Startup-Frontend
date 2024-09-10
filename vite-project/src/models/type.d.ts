import React from "react";

export interface Paths  {
  path:string;
  element:() => Promise<{ default: React.ComponentType<> }>;
}

export interface NavbarProps {
  isLoggedIn: boolean;
}

export interface ServiceResponse {
  data?: unknown; // tipo de datos que esperas en caso de éxito
  error?: string; // Aquí se espera el mensaje de error
};