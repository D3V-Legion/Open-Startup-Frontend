
export interface User{
    id:number;
    email:string;
    name:string;
    lastName:string;
    password:string;
    createdAt:Date;
    updatedAt:Date;
}

export interface AuthState {
    token: string | null;
    setToken: (token: string) => void;
    clearToken: () => void;
}