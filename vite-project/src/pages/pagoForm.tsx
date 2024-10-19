import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import ilustracion from '../../public/iconopago.svg'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'

export default function EnhancedSubscriptionForm() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    // Simular proceso de pago
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto ">
      <div className='flex justify-between p-6'>
        <div className="">
            <CardTitle>Suscripción a Open Startup</CardTitle>
        <CardDescription>Accede a todas las funciones con nuestra suscripción mensual</CardDescription>
        </div>
        <img src={ilustracion} alt="ilustracion" className='w-20 h-20 cursor-pointer' />
      </div>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Información Personal</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="firstName">Nombre</Label>
                <Input id="firstName" placeholder="Juan" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="lastName">Apellido</Label>
                <Input id="lastName" placeholder="Pérez" required />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input id="email" type="email" placeholder="juan.perez@ejemplo.com" required />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Detalles de la Suscripción</h3>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="plan">Plan de Suscripción</Label>
              <Select>
                <SelectTrigger id="plan">
                  <SelectValue placeholder="Selecciona un plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Mensual - $9.99/mes</SelectItem>
                  <SelectItem value="annual">Anual - $99.99/año (2 meses gratis)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Información de Pago</h3>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="cardName">Nombre en la tarjeta</Label>
              <Input id="cardName" placeholder="Juan Pérez" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="cardNumber">Número de tarjeta</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="expMonth">Mes de expiración</Label>
                <Select>
                  <SelectTrigger id="expMonth">
                    <SelectValue placeholder="Mes" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                      <SelectItem key={month} value={month.toString().padStart(2, '0')}>
                        {month.toString().padStart(2, '0')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="expYear">Año de expiración</Label>
                <Select>
                  <SelectTrigger id="expYear">
                    <SelectValue placeholder="Año" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" required />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm">
              Acepto los términos y condiciones y la política de privacidad
            </Label>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full text-white" onClick={handleSubmit} disabled={loading}>
          {loading ? (
            <>
              {/*<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />*/}
              Procesando
            </>
          ) : (
            'Confirmar Suscripción'
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}