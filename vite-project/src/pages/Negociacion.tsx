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
    { reto: "Tarjeta 1", descripcion: "Contenido de la tarjeta 1",tituloIcono:"",instrucciones:"" },
    { reto: "Tarjeta 2", descripcion: "Contenido de la tarjeta 2",tituloIcono:"",instrucciones:""  },
    { reto: "Tarjeta 3", descripcion: "Contenido de la tarjeta 3",tituloIcono:"",instrucciones:""  },
  ]

  return (
    <div className="min-h-screen bg-background px-8">
      <h1 className="text-3xl font-bold text-center py-4">Negociación</h1>
      
      {/* Menú deslizable con botones */}
      <div className="w-full mb-8 relative">
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
        <div className="py-2 text-center text-sm text-muted-foreground">
          Opción {current} de {count}
        </div>
      </div>

      {/* Tarjetas */}
      <div className="space-y-4 px-4">
        {cardItems.map((card, index) => (
          <Card key={index} className="w-full">
            <CardContent className="p-6 flex">
              <div className="primeraParte">
                <div className="icono">

                </div>
                <h3>{card.tituloIcono}</h3>
              </div>
              <div className="segundaParte">
                <h2 className="text-xl font-semibold mb-2">{card.reto}</h2>
              <p>{card.descripcion}</p>
              </div>
              <div className="">
                <h3>Instrucciones de la herramienta</h3>
                <p>{card.instrucciones}</p>
              </div>
              
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Negociacion