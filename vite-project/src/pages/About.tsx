import { ArrowRight, CheckCircle, Users } from "lucide-react"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b">
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're a team of passionate individuals dedicated to creating innovative solutions for tomorrow's challenges.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-6">
              We're a diverse group of thinkers, creators, and problem-solvers. Our team brings together expertise from various fields, united by a common goal: to make a positive impact through technology and innovation.
            </p>
            <ul className="space-y-2">
              {["Innovative", "Collaborative", "Passionate", "Diverse"].map((trait) => (
                <li key={trait} className="flex items-center text-gray-700">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  {trait}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full transform -rotate-6"></div>
            <div className="relative bg-muted shadow-lg rounded-lg p-6">
              <Users size={48} className="text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Team</h3>
              <p className="text-gray-600">
                A collective of 50+ experts from diverse backgrounds, working together to drive innovation and create meaningful solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <svg className="w-full h-auto" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#BFDBFE" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,45,78.3C32.4,86,16.2,88,-0.4,88.7C-17,89.4,-34,88.8,-47.1,81.2C-60.2,73.6,-69.4,59,-76.4,43.9C-83.3,28.8,-88,14.4,-88.2,-0.1C-88.4,-14.6,-84,-29.2,-76.3,-41.7C-68.6,-54.2,-57.6,-64.6,-44.7,-72.1C-31.8,-79.6,-15.9,-84.2,-0.2,-83.8C15.5,-83.5,30.9,-78.3,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold mb-4">What We Do</h2>
            <p className="text-gray-600 mb-6">
              We specialize in developing cutting-edge solutions that address complex challenges across various industries. Our work spans from software development to AI-driven innovations, always with a focus on creating sustainable and impactful outcomes.
            </p>
            <ul className="space-y-4">
              {[
                "Develop innovative software solutions",
                "Create AI-powered applications",
                "Design user-centric experiences",
                "Provide expert consulting services"
              ].map((service, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={20} />
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