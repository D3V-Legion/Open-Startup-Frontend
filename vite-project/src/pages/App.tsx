import { Button } from "@/components/ui/button";
import cohete from "/cohete1.png";

import "../App.css";

const App: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-start justify-start">
      <section className=" flex flex-col-reverse lg:flex-row items-center lg:space-x-10 space-y-8 lg:space-y-0 w-full min-h-[85vh] justify-center  ">
        <div className="lg:w-1.5/2 text-center lg:text-left">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-6xl">
            <span className="text-primary text-right">El futuro </span> <br/> de los
            emprendedores comienza aquí.
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, provident?
          </p>

          <div className="mt-6 flex flex-row justify-center lg:justify-start items-center space-x-4">
            <Button className="bg-primary hover:bg-primary-foreground text-white font-semibold py-2 px-6  shadow-md">
              Iniciar
            </Button>
            <Button className="bg-secondary hover:bg-secondary-foreground text-white font-semibold py-2 px-6 shadow-md">
              ¿Por qué nosotros?
            </Button>
            <Button variant="outline" className="border border-gray-300 font-semibold py-2 px-6 shadow-md">
              Planes
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img src={cohete} className="logo react w-80 h-80 sm:w-96 sm:h-96 object-contain animate-bounce-slow" alt="React logo" />
        </div>
      </section>
      <section className="py-12 lg:py-20 bg-foreground min-h-[85vh]">
      <div className="container mx-auto px-4 text-center">
        {/* Título */}
        <h2 className="text-3xl font-extrabold text-white dark:text-black mb-6">
          Sección con Colores Invertidos
        </h2>

        {/* Descripción */}
        <p className="text-lg text-gray-200 dark:text-gray-900 mb-12">
          Esta es una sección especial que invierte los colores según el tema activo. Si el modo oscuro está activo, el fondo es blanco y el texto es negro, y viceversa.
        </p>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-background p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold ">Tarjeta 1</h3>
            <p className="text-gray-300 dark:text-gray-700">Descripción de la tarjeta 1</p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold ">Tarjeta 2</h3>
            <p className="text-gray-300 dark:text-gray-700">Descripción de la tarjeta 2</p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold ">Tarjeta 3</h3>
            <p className="text-gray-300 dark:text-gray-700">Descripción de la tarjeta 3</p>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
};

export default App;
