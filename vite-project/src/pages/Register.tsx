import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import SmallIcon from '../../public/register1.png'


export default function Component() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  })

  const [step, setStep] = useState(1)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
  }

  const handleNextStep = () => {
    setStep(2)
  }

  const handlePreviousStep = () => {
    setStep(1)
  }


  return (
    <Card className="w-full max-w-md mx-auto">
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
        <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
            <>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="name" className="text-left">Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="lastName" className="text-left">Last Name</Label>
                <Input 
                  id="lastName" 
                  name="lastName" 
                  type="text" 
                  required 
                  value={formData.lastName}
                  onChange={handleChange}
                />
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
                  name="email" 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password" className="text-left">Password</Label>
                <Input 
                  id="password" 
                  name="password" 
                  type="password" 
                  required 
                  value={formData.password}
                  onChange={handleChange}
                />
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
          Already have an account? <a href="#" className="text-primary hover:underline">Sign in</a>
        </p>
      </CardFooter>
    </Card>
  )
}