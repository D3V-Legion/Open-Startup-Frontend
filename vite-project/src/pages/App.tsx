import { Button } from "@/components/ui/button";
import cohete from "/cohete1.png";
import IlustracionW from "../../public/ilustracion-home-w.png";
import IlustracionB from "/ilustracion-home-b.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


import "../App.css";
import { Skeleton } from "@/components/ui/skeleton";
import { faqItems } from "@/data/home";

const App: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-start justify-start">
      <section className=" flex flex-col-reverse lg:flex-row items-center lg:space-x-10 space-y-8 lg:space-y-0 w-full min-h-[85vh] justify-center  ">
        <div className="lg:w-1.5/2 text-center lg:text-left">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-6xl">
            <span className="text-primary text-right">El futuro </span> <br />{" "}
            de los emprendedores comienza aquí.
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            provident?
          </p>

          <div className="mt-6 flex flex-row justify-center lg:justify-start items-center space-x-4">
            <Button className="bg-primary hover:bg-primary-foreground text-white font-semibold py-2 px-6  shadow-md">
              Iniciar
            </Button>
            <Button className="bg-secondary hover:bg-secondary-foreground text-white font-semibold py-2 px-6 shadow-md">
              ¿Por qué nosotros?
            </Button>
            <Button
              variant="outline"
              className="border border-gray-300 font-semibold py-2 px-6 shadow-md"
            >
              Planes
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={cohete}
            className="logo react w-80 h-80 sm:w-96 sm:h-96 object-contain animate-bounce-slow"
            alt="React logo"
          />
        </div>
      </section>
      <section
        className="relative py-12 lg:py-20 bg-foreground min-h-[85vh]"
        style={{
          backgroundColor: "hsl(var(--foreground))",
          color: "hsl(var(--background))",
          transition: "background-color 0.5s ease, color 0.5s ease", // Transición suave
          marginLeft: "-9.1vw", // Ajustar para expandir más allá del contenedor
          marginRight: "-9.1vw", // Expande hacia los lados
          paddingLeft: "9.2vw", // Restablece el padding
          paddingRight: "9.2vw", // Restablece el padding
        }}
      >
        <div className="container mx-auto px-4 text-center">
          {/* Título */}
          <h2 className="text-4xl font-extrabold text-white dark:text-black mb-6 text-left">
            Sección con Colores Invertidos
          </h2>

          {/* Descripción */}
          <p className="text-lg text-gray-200 dark:text-gray-900 mb-12 text-left">
            Esta es una sección especial que invierte los colores según el tema
            activo. Si el modo oscuro está activo, el fondo es blanco y el texto
            es negro, y viceversa.
          </p>

          {/* Tarjetas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg shadow-md text-left">
              <h3 className="text-2xl font-bold text-foreground">Tarjeta 1</h3>
              <p className="text-gray-300 dark:text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt consequatur neque iusto quam.
              </p>
              <Skeleton className="h-[180px] w-fullrounded-xl mt-3" />
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md text-left">
              <h3 className="text-2xl font-bold text-foreground">Tarjeta 2</h3>
              <p className="text-gray-300 dark:text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt consequatur neque iusto quam.
              </p>
              <Skeleton className="h-[180px] w-fullrounded-xl mt-3" />
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md text-left">
              <h3 className="text-2xl font-bold text-foreground">Tarjeta 3</h3>
              <p className="text-gray-300 dark:text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt consequatur neque iusto quam.
              </p>
              <Skeleton className="h-[180px] w-fullrounded-xl mt-3" />
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-[85vh] relative py-12 lg:py-20 ">
        <h2 className="text-4xl font-extrabold mb-12 text-left ">
          Lorem ipsum dolor adipisicing elit yes papu.
        </h2>
        <div className="flex flex-col lg:flex-row lg:space-x-8 items-start justify-between">
          <div className="textos lg:w-1/2 space-y-8">
            <div className="superior">
              <h4 className="text-left flex gap-6 align-middle" style={{fontSize:'1.3rem'}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#FF7547"
                  d="m12 16l4-4l-1.4-1.4l-1.6 1.6V8h-2v4.2l-1.6-1.6L8 12zm0 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                />
              </svg>
                Lorem ipsum, dolor sit amet!
              </h4>
              <p className="text-left mt-3 ml-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum labore inventore eaque veritatis praesentium modi quisquam tempora blanditiis itaque natus?</p>
            </div>
            <div className="lista">
              <ul className="flex flex-col gap-6">
                <li className="flex align-middle gap-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#FF7547"
                      d="m12.2 13l-.9.9q-.275.275-.275.7t.275.7t.7.275t.7-.275l2.6-2.6q.3-.3.3-.7t-.3-.7l-2.6-2.6q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l.9.9H9q-.425 0-.712.288T8 12t.288.713T9 13zm-.2 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                    />
                  </svg>
                  <p style={{fontSize:'1.3rem'}}>Lorem ipsum dolor sit amet.</p>
                </li>
                <li className="flex align-middle gap-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#FF7547"
                      d="m12.2 13l-.9.9q-.275.275-.275.7t.275.7t.7.275t.7-.275l2.6-2.6q.3-.3.3-.7t-.3-.7l-2.6-2.6q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l.9.9H9q-.425 0-.712.288T8 12t.288.713T9 13zm-.2 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                    />
                  </svg>
                  <p style={{fontSize:'1.3rem'}}>Lorem ipsum dolor sit amet.</p>
                </li>
                <li className="flex align-middle gap-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#FF7547"
                      d="m12.2 13l-.9.9q-.275.275-.275.7t.275.7t.7.275t.7-.275l2.6-2.6q.3-.3.3-.7t-.3-.7l-2.6-2.6q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l.9.9H9q-.425 0-.712.288T8 12t.288.713T9 13zm-.2 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                    />
                  </svg>
                  <p style={{fontSize:'1.3rem'}}>Lorem ipsum dolor sit amet.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="ilustracion lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <img
              src={IlustracionW}
              alt="Ilustración Claro"
              className="w-full max-w-lg h-auto object-contain hidden dark:block"
            />
            <img
              src={IlustracionB}
              alt="Ilustración Oscuro"
              className="w-full max-w-lg h-auto object-contain block dark:hidden"
            />
          </div>
        </div>
      </section>
      <section className="min-h-[85vh] relative py-12 lg:py-20">
  <div className="container px-4 md:px-6 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10">
    
    {/* Columna izquierda */}
    <div className="flex flex-col justify-center space-y-4 lg:space-y-6 text-start">
      <h4 className="text-sm font-semibold uppercase tracking-wide text-primary">
        FAQS
      </h4>
      <h2 className="text-4xl lg:text-4xl font-extrabold tracking-tight text-secondary">
        Frequently Asked Questions
      </h2>
      <p className="text-base font-medium text-gray-700">
        ¿Tienes más preguntas? Escríbenos a:{" "}
        <p className="text-lg font-semibold mt-4">
          openstartup@gmail.com
        </p>
      </p>
    </div>

    {/* Columna derecha: Preguntas frecuentes */}
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium text-lg">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-left">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
</section>

    </main>
  );
};

export default App;
