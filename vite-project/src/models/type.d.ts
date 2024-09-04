import React from "react";

export interface Paths  {
  path:string;
  element:() => Promise<{ default: React.ComponentType<> }>;
}

export interface NavbarProps {
  isLoggedIn: boolean;
}
