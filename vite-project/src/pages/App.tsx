import { Button } from "@/components/ui/button";
import cohete from "/cohete1.png";

import "../App.css";

const App: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-start justify-start">
      <section className=" flex flex-col-reverse lg:flex-row items-center lg:space-x-10 space-y-8 lg:space-y-0 w-full min-h-[80vh] justify-center  ">
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
    </main>
  );
};

export default App;
