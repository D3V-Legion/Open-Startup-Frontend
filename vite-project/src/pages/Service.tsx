import { ArrowRight, Briefcase, LineChart, MessageCircle, Star, Users } from "lucide-react"
import ilustracion from "/service.png"


const Service = () => {
  return (
    <div className="bg-background min-h-screen">
      <header className=" py-12 text-center">
      <div className="flex justify-center align-middle">
          <img
            src={ilustracion}
            className="about react w-80 h-80 sm:w-96 sm:h-96 object-contain animate-bounce-slow"
            alt="React logo"
          />
        </div>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Servicios para <span className="text-primary">Startups</span> </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Impulsamos el crecimiento de tu startup con soluciones integrales y personalizadas
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 space-y-24">
        <section className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<LineChart className="w-12 h-12" />}
            title="Planes de Negociación"
            description="Desarrollamos estrategias de negociación efectivas para ayudarte a cerrar acuerdos favorables y establecer relaciones comerciales sólidas."
          />
          <ServiceCard
            icon={<Briefcase className="w-12 h-12" />}
            title="Gestión de Emprendimiento"
            description="Te guiamos en cada etapa de tu emprendimiento, desde la conceptualización hasta la expansión, con herramientas y asesoramiento experto."
          />
          <ServiceCard
            icon={<MessageCircle className="w-12 h-12" />}
            title="Comunicación y Colaboración"
            description="Facilitamos la comunicación interna y externa de tu startup, mejorando la colaboración entre equipos y con stakeholders."
          />
        </section>

        <section className="bg-muted rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Casos de Éxito</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <SuccessStory
              name="TechInnovate"
              description="Aumentó su valoración en un 300% en 6 meses con nuestros planes de negociación."
              imageUrl="/placeholder.svg?height=100&width=100"
            />
            <SuccessStory
              name="EcoStartup"
              description="Expandió a 3 nuevos mercados utilizando nuestra gestión de emprendimiento."
              imageUrl="/placeholder.svg?height=100&width=100"
            />
            <SuccessStory
              name="HealthTech Solutions"
              description="Mejoró la eficiencia interna en un 50% con nuestras herramientas de comunicación."
              imageUrl="/placeholder.svg?height=100&width=100"
            />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Únete a Nuestra Comunidad</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Conecta con otros emprendedores, accede a recursos exclusivos y participa en eventos de networking.
          </p>
          <a
            href="#"
            className="text-white inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Únete Ahora <Users className="ml-2 h-5 w-5" />
          </a>
        </section>
      </main>
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
      <div className="mb-4 text-primary">{icon}</div>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="mb-6">{description}</p>
      <a
        href="#"
        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
      >
        Saber más <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  )
}

function SuccessStory({ name, description, imageUrl }) {
  return (
    <div className="flex items-center space-x-4 bg-card p-4 rounded-lg shadow">
      <img src={imageUrl} alt={name} width={100} height={100} className="rounded-full" />
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex text-yellow-400 mt-2">
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
        </div>
      </div>
    </div>
  )
}

export default Service