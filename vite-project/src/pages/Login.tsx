import React from 'react'
import { LoginSchema,loginSchema } from '@/validations/validationSchemas'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@radix-ui/react-label'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import SmallIcon from '/login1.png'
import { Link } from 'react-router-dom'
import { login } from '@/service/auth'
import { useNavigate } from 'react-router-dom'


const Login:React.FC= () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();

  const handleLogin = async(email:string,password:string) => {
    try {
      const response = await login(email,password);
      console.log(response)
      if(!response.error){
        navigate("/admin");
      }
    } catch (error:unknown) {
      console.log(error)
    }
  }

  const onSubmit = (data: LoginSchema) => {
    console.log('Form submitted:', data);
    // Aquí podrías manejar el envío de datos al backend para el login
    handleLogin(data.email,data.password);
  };
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4"> {/* Añadimos px-4 para margen en pantallas pequeñas */}
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between text-left">
          <div>
            <CardTitle>Login</CardTitle>
            <CardDescription>Access your account using your credentials.</CardDescription>
          </div>
          <img src={SmallIcon} alt="Small Icon" className="w-10 h-10" />
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="email" className="text-left">Email</Label>
            <Input 
              id="email" 
              {...register('email')}
              type="email" 
              required 
            />
            {errors.email && <p className="text-red-500 text-sm text-right">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="password" className="text-left">Password</Label>
            <Input 
              id="password" 
              {...register('password')}
              type="password" 
              required 
            />
            {errors.password && <p className="text-red-500 text-sm text-right">{errors.password.message}</p>} {/* Alineado a la derecha */}
          </div>
          <Button type="submit" className="w-full  text-white hover:bg-primary-foreground">Login</Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Don't have an account? <Link to='/register' className="text-primary hover:underline">Register</Link>
        </p>
      </CardFooter>
    </Card>
  </div>
  )
}

export default Login