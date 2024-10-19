import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const CardGestion = () => {
    return (
      <div className="flex flex-col gap-6 justify-center min-h-screen "> {/* Fondo y altura mínima */}
        <Card className="w-full h-full "> {/* Ajusta el ancho máximo según sea necesario */}
          <div className="flex justify-between items-center m-6">
            <h3 className="text-lg font-semibold">Flujo de caja y balance financiero</h3>
            <svg
              className="mr-2 h-8 w-8" // Ajusta el tamaño del icono
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -2 24 24"
            >
              <path
                fill="#FFF"
                d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-13a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1m0 10a1 1 0 1 1 0-2a1 1 0 0 1 0 2"
              />
            </svg>
          </div>
          <CardContent>
            <div className="cajas-texto p-4 rounded-md" style={{border:'1px solid #FF7547'}}>
              <form action="" className="flex flex-col gap-4 md:flex-row md:gap-6">
                <div className="text-field flex-1">
                  <Label htmlFor="ingresos" className="text-left">
                    Ingresos
                  </Label>
                  <Input id="ingresos" type="text" required className="w-full" />
                </div>
                <div className="text-field flex-1">
                  <Label htmlFor="gastos" className="text-left">
                    Gastos
                  </Label>
                  <Input id="gastos" type="text" required className="w-full" />
                </div>
                <div className="text-field flex-1">
                  <Label htmlFor="fecha" className="text-left">
                    Fecha
                  </Label>
                  <Input id="fecha" type="date" required className="w-full" />
                </div>
                <div className="botones mt-4 flex flex-col md:flex-row gap-4 justify-end">
              <Button className="text-white bg-primary hover:bg-primary-foreground">Mostrar</Button>
              <Button variant={"outline"} >Agregar</Button>
            </div>
              </form>
            </div>
           
            <div className="ingresos p-4 rounded-md mt-4 flex justify-between" style={{border:'1px solid #FF7547 '}}>
                <div className="datos">
                    <p>ingresos totales: <span >185,000.00 C$</span></p>
                </div>
                <div className="datos">
                    <p>Gastos operativos: <span>70,000.00 C$</span></p>
                </div>
                <div className="datos">
                    <p>Periodo: 1/05/2024 - 30/06/2024</p>
                </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full h-full "> {/* Ajusta el ancho máximo según sea necesario */}
          <div className="flex justify-between items-center m-6">
            <h3 className="text-lg font-semibold">Flujo de caja y balance financiero</h3>
            <svg
              className="mr-2 h-8 w-8" // Ajusta el tamaño del icono
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -2 24 24"
            >
              <path
                fill="#FFF"
                d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-13a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1m0 10a1 1 0 1 1 0-2a1 1 0 0 1 0 2"
              />
            </svg>
          </div>
          <CardContent>
            <div className="cajas-texto p-4 rounded-md" style={{border:'1px solid #FF7547'}}>
              <form action="" className="flex flex-col gap-4 md:flex-row md:gap-6">
                <div className="text-field flex-1">
                  <Label htmlFor="ingresos" className="text-left">
                    Ingresos
                  </Label>
                  <Input id="ingresos" type="text" required className="w-full" />
                </div>
                <div className="text-field flex-1">
                  <Label htmlFor="gastos" className="text-left">
                    Gastos
                  </Label>
                  <Input id="gastos" type="text" required className="w-full" />
                </div>
                <div className="text-field flex-1">
                  <Label htmlFor="fecha" className="text-left">
                    Fecha
                  </Label>
                  <Input id="fecha" type="date" required className="w-full" />
                </div>
                <div className="botones mt-4 flex flex-col md:flex-row gap-4 justify-end">
              <Button className="text-white bg-primary hover:bg-primary-foreground">Mostrar</Button>
              <Button variant={"outline"} >Agregar</Button>
            </div>
              </form>
            </div>
           
            <div className="ingresos p-4 rounded-md mt-4 flex justify-between" style={{border:'1px solid #FF7547 '}}>
                <div className="datos">
                    <p>ingresos totales: <span >185,000.00 C$</span></p>
                </div>
                <div className="datos">
                    <p>Gastos operativos: <span>70,000.00 C$</span></p>
                </div>
                <div className="datos">
                    <p>Periodo: 1/05/2024 - 30/06/2024</p>
                </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full h-full "> {/* Ajusta el ancho máximo según sea necesario */}
          <div className="flex justify-between items-center m-6">
            <h3 className="text-lg font-semibold">Flujo de caja y balance financiero</h3>
            <svg
              className="mr-2 h-8 w-8" // Ajusta el tamaño del icono
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -2 24 24"
            >
              <path
                fill="#FFF"
                d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-13a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1m0 10a1 1 0 1 1 0-2a1 1 0 0 1 0 2"
              />
            </svg>
          </div>
          <CardContent>
            <div className="cajas-texto p-4 rounded-md" style={{border:'1px solid #FF7547'}}>
              <form action="" className="flex flex-col gap-4 md:flex-row md:gap-6">
                <div className="text-field flex-1">
                  <Label htmlFor="ingresos" className="text-left">
                    Ingresos
                  </Label>
                  <Input id="ingresos" type="text" required className="w-full" />
                </div>
                <div className="text-field flex-1">
                  <Label htmlFor="gastos" className="text-left">
                    Gastos
                  </Label>
                  <Input id="gastos" type="text" required className="w-full" />
                </div>
                <div className="text-field flex-1">
                  <Label htmlFor="fecha" className="text-left">
                    Fecha
                  </Label>
                  <Input id="fecha" type="date" required className="w-full" />
                </div>
                <div className="botones mt-4 flex flex-col md:flex-row gap-4 justify-end">
              <Button className="text-white bg-primary hover:bg-primary-foreground">Mostrar</Button>
              <Button variant={"outline"} >Agregar</Button>
            </div>
              </form>
            </div>
           
            <div className="ingresos p-4 rounded-md mt-4 flex justify-between" style={{border:'1px solid #FF7547 '}}>
                <div className="datos">
                    <p>ingresos totales: <span >185,000.00 C$</span></p>
                </div>
                <div className="datos">
                    <p>Gastos operativos: <span>70,000.00 C$</span></p>
                </div>
                <div className="datos">
                    <p>Periodo: 1/05/2024 - 30/06/2024</p>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

export default CardGestion;
