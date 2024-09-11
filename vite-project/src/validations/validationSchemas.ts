import { z } from 'zod';

// Esquema de validación con zod
export const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

// Derivar tipos desde el esquema de zod
export type UserSchema = z.infer<typeof userSchema>;