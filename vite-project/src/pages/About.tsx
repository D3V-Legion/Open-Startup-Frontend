import { ArrowRight, CheckCircle, Users } from "lucide-react"
import ilustracion from "../../public/about.png"
import ilustracion2 from "../../public/ilustracionAbout.svg"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b">
      <main className="container mx-auto px-4 py-2">
        <section className="text-center mb-16">
        <div className="flex justify-center align-middle">
          <img
            src={ilustracion}
            className="about react w-80 h-80 sm:w-96 sm:h-96 object-contain animate-bounce-slow"
            alt="React logo"
          />
        </div>
          <h1 className="text-4xl font-bold mb-4">Sobre  <span className="text-primary">Nosotros</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Somos un equipo de personas apasionadas dedicadas a crear soluciones innovadoras para los desafíos del mañana.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center mb-24 pt-10">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Quienes somos</h2>
            <p className="text-gray-600 mb-6">
            Somos un equipo diverso de expertos, unidos para generar impacto positivo mediante tecnología e innovación.
            </p>
            <ul className="space-y-2">
              {["Innovative", "Collaborative", "Passionate", "Diverse"].map((trait) => (
                <li key={trait} className="flex items-center text-gray-700">
                  <CheckCircle className="text-secondary mr-2" size={20} />
                  {trait}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full transform -rotate-6"></div>
            <div className="relative bg-muted shadow-lg rounded-lg p-6">
              <Users size={48} className="text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nuestro team</h3>
              <p className="text-gray-600">
               Más de 10 desarrolladores de diversos orígenes que trabajan juntos para impulsar la innovación y crear soluciones significativas.
              </p>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center my-10">
  <div className="order-2 md:order-1 flex justify-center">
    <img
      className="w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto"
      src={ilustracion2}
      alt="What we do illustration"
    />
  </div>
  <div className="order-1 md:order-2">
    <h2 className="text-3xl font-semibold mb-4">Qué hacemos</h2>
    <p className="text-gray-600 mb-6">
    Nos especializamos en desarrollar software de vanguardia para ayudar a empresas en crecimiento, creando soluciones sostenibles e innovadoras.
    </p>
    <ul className="space-y-4">
      {[
        "Develop innovative software solutions",
        "Create AI-powered applications",
        "Design user-centric experiences",
        "Provide expert consulting services",
      ].map((service, index) => (
        <li key={index} className="flex items-start">
          <ArrowRight className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
          <span>{service}</span>
        </li>
      ))}
    </ul>
  </div>
</section>
      </main>
    </div>
  )
}