import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import SmallIcon from '/register1.png'
import { Link } from 'react-router-dom'
import { UserSchema,userSchema } from '@/validations/validationSchemas'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'


export default function Component() {

  const [step, setStep] = useState(1)

  // Configuración de react-hook-form con zod usando el esquema importado
  const { register, handleSubmit, formState: { errors }, trigger } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  }); 

  const onSubmit = (data: UserSchema) => {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', data)
  }

   // Manejo del botón "Next" para pasar al siguiente paso si la validación es correcta
   const handleNextStep = async () => {
    const isStepValid = await trigger(['name', 'lastName']);
    if (isStepValid) {
      setStep(2);
    }
  }


  const handlePreviousStep = () => {
    setStep(1)
  }


  return (
    <main className="min-h-[75vh] flex items-center justify-center">
         <Card className="w-full max-w-md mx-4">
      <CardHeader>
      <div className="flex items-center justify-between">
          <div className='text-left'>
            <CardTitle>Register</CardTitle>
            <CardDescription>Create a new account to get started.</CardDescription>
          </div>
          <img src={SmallIcon} alt="Small Icon" className="w-15 h-15" />
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {step === 1 && (
            <>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="name" className="text-left">Name</Label>
                <Input 
                  id="name" 
                  type="text" 
                  required 
                  {...register('name')}
                />
                {errors.name && <p className="text-red-500 text-sm text-left">{errors.name.message}</p>}
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="lastName" className="text-left">Last Name</Label>
                <Input 
                  id="lastName" 
                  type="text" 
                  required 
                  {...register('lastName')}
                />
                {errors.lastName && <p className="text-red-500 text-sm  text-left">{errors.lastName.message}</p>}
              </div>
              <Button type="button" className="w-full text-white hover:bg-primary-foreground" onClick={handleNextStep}>
                Next
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email" className="text-left">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  {...register('email')}
                />
                 {errors.email && <p className="text-red-500 text-sm  text-left">{errors.email.message}</p>}
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password" className="text-left">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  {...register('password')}
                />
                   {errors.password && <p className="text-red-500 text-sm  text-left">{errors.password.message}</p>}
              </div>
              <div className="flex justify-between gap-2 ">
                <Button type="button" className="w-1/3  text-white bg-secondary hover:bg-secondary-foreground" onClick={handlePreviousStep}>
                  Back
                </Button>
                <Button type="submit" className="w-2/3 text-white hover:bg-primary-foreground">
                  Register
                </Button>
              </div>
            </>
          )}
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Already have an account? <Link to="/login" className="text-primary hover:underline">Sign in</Link>
        </p>
      </CardFooter>
    </Card>
    </main>
  )
}