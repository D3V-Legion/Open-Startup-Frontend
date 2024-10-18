import { z } from 'zod';

// Esquema de validación para formulario de register con zod
export const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  lastname: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

//Esquema de validacion para formulario de login con zod
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

// Derivar tipos desde el esquema de zod
export type LoginSchema = z.infer<typeof loginSchema>;
export type UserSchema = z.infer<typeof userSchema>;