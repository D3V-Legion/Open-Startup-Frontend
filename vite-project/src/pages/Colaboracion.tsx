import CardColaboracion from "@/components/global/CardColaboracion";
import { Button } from "@/components/ui/button";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const Colaboracion = () => {
  return (
    <main className="mx-8 ">
      <div className="botones-header my-6 flex gap-6 w-100 justify-center">
        <Button className="bg-[#56B889] text-white hover:bg-[#00A26B]">
          Calendario
        </Button>
        <Button variant={"outline"}>Documentos</Button>
        <Button variant={"outline"}>Equipos</Button>
      </div>

      <div className="centro flex gap-4">
        <div className="side w-[40vw] bg-accent h-[80vh] rounded-lg flex flex-col gap-4 p-6">
          <div className="primera-parte">
            <div className="encabezado">
              <h3>Periodo</h3>
              <div className="cajas my-4 flex flex-col gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Año
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Mes
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Semana
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Dia
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Personalizado
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="segunda-parte">
            <div className="encabezado">
              <h3>Actividades</h3>
              <div className="cajas my-4 flex flex-col gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Todo
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Proyecto
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Asignado a mi
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Se vence pronto
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Pausado
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="tercera-parte">
            <div className="encabezado">
              <h3>Asignado a mi</h3>
            </div>
          </div>
        </div>

        <div className="parte-central flex gap-4 relative p-4 bg-accent rounded-lg">
          <CardColaboracion />
          <CardColaboracion />
          <CardColaboracion />
        </div>
      </div>
    </main>
  );
};

export default Colaboracion;
