import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"

const Negociacion = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [desplegado,setDesplegado] = React.useState(false)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const menuItems = [
    "Opción 1",
    "Opción 2",
    "Opción 3",
    "Opción 4",
    "Opción 5",
    "Opción 6",
    "Opción 7",
  ]

  const cardItems = [
    { reto: "Tarjeta 1", descripcion: "Contenido de la tarjeta 1",tituloIcono:"",instrucciones:"",resultados:"" },
    { reto: "Tarjeta 2", descripcion: "Contenido de la tarjeta 2",tituloIcono:"",instrucciones:"",resultados:""  },
    { reto: "Tarjeta 3", descripcion: "Contenido de la tarjeta 3",tituloIcono:"",instrucciones:"",resultados:""  },
  ]

  return (
    <div className="min-h-screen bg-background px-8">
      
      
      {/* Menú deslizable con botones */}
      <div className="w-full mb-8 relative mt-8">
        <div className="flex items-center">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 z-10 h-[72px]"
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Carousel
            setApi={setApi}
            className="w-full px-[76px]"
          >
            <CarouselContent>
              {menuItems.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-[72px]">
                      <CardContent className="flex items-center justify-center p-2 h-full">
                        <span className="text-lg font-medium">{item}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 z-10 h-[72px]"
            onClick={() => api?.scrollNext()}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Tarjetas */}
      <div className="space-y-4 px-4">
        {cardItems.map((card, index) => (
          <Card key={index} className="w-full">
            <CardContent className="p-6 flex gap-4">
              <div className="primeraParte w-60 bg-secondary relative p-8 h-100 rounded-lg">
                <div className="icono flex-col justify-center align-middle">
<h3 className="text-xl font-semibold mb-2">{card.reto}</h3>
                </div>
                <h3>{card.tituloIcono}</h3>
              </div>
              <div className="segundaParte">
              </div>
              <div className="segunda-parte">
                <h3 style={{fontSize:'18px',fontWeight:500}}>Reto:</h3>
                <p>¿Te has puesto a pensar en cómo los factores externos  afectan a tu idea de startup?</p>
                <h3 style={{fontSize:'18px',fontWeight:500}}>Descripcion</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga sunt est dolorum. Suscipit eos vel voluptate, non deserunt natus aspernatur!</p>
                <h3 style={{fontSize:'18px',fontWeight:500}}>Instrucciones de la herramienta</h3>
                <p>Empieza por analizar tu entorno inmediato y además,  pregúntate qué está sucediendo en el mundo. Puedes  apoyarte en internet, entidades nacionales e internacionales  y noticieros confiables. Vos y tu equipo deben reunir  información verídica de lo siguiente: <br />

1.  En lo político-legal: documentos legales referentes al área  de interés. <br />

2. En lo económico: tema macroeconómico, políticas  tributarias y clima de negocios.  <br />

3.  En lo sociocultural: elementos de la demografía de tu  entorno y el estilo de vida de las personas.  <br />

4. En lo tecnológico: conectividad, acceso a tecnología  hardware y software, soluciones disponibles en el  mercado.</p>
                <div className="resultados">
              <h3 style={{fontSize:'18px',fontWeight:500}}>Resultados esperados</h3>
              <p> 1.  Contar con datos objetivos para tomar consciencia del  entorno e identificar los riesgos y las oportunidades ante  la propuesta de startup.  <br />

2. Proponer las acciones para mitigar el riesgo y para  aprovechar las oportunidades. <br />

3. Tomar las decisiones referente a la idea de la startup en  relación a PEST.</p>
              </div>
              <button className="text-secondary my-4">Mostrar mas...</button>
              <div className="botones flex gap-4">
                <Button className="bg-foreground text-background hover:bg-foreground">Cancel</Button>
                <Button className="bg-secondary text-white hover:bg-secondary-foreground">Iniciar</Button>
              </div>
              </div>  
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Negociacion