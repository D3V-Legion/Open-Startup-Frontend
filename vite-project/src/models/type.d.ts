import React from "react";

export interface Paths  {
  path:string;
  element:() => Promise<{ default: React.ComponentType<> }>;
}

export interface NavbarProps {
  isLoggedIn: boolean;
}

export interface ServiceResponse {
  data?: unknown; 
  error?: string; 
};

export interface LoginResponse {
  token?: string; 
  error?: string; 
};

export interface SessionContextProps {
  token: string | null;
  isAuthenticated: boolean;
}

