import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Handshake, Briefcase, MessageCircle, Search, TrendingUp, CheckCircle, ChevronRight } from "lucide-react"


const Admin = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
    // Implement search functionality here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br bg-background p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
          <CardHeader className="bg-secondary text-white p-6 transition-colors duration-300 group-hover:bg-secondary-foreground">
            <div className="flex justify-between items-center mb-2">
              <CardTitle className="text-2xl font-semibold">Planes de negociación </CardTitle>
              <Handshake size={28} />
            </div>
            <CardDescription className="text-indigo-100">
            Desarrollar estrategias y ejecutar acuerdos ganadores
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-2 mb-4">
              <li className="flex items-center text-gray-700">
                <ChevronRight size={18} className="text-indigo-500 mr-2" />
                Create negotiation frameworks
              </li>
              <li className="flex items-center text-gray-700">
                <ChevronRight size={18} className="text-indigo-500 mr-2" />
                Analyze counterparty profiles
              </li>
              <li className="flex items-center text-gray-700">
                <ChevronRight size={18} className="text-indigo-500 mr-2" />
                Simulate negotiation scenarios
              </li>
            </ul>
            <div className="flex justify-between items-center">
              <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">5 active plans</Badge>
              <Button className="bg-secondary hover:bg-secondary-foreground text-white">
              Ver planes <ChevronRight size={16} className="ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
          <CardHeader className="bg-primary text-white p-6 transition-colors duration-300 group-hover:bg-primary-foreground">
            <div className="flex justify-between items-center mb-2">
              <CardTitle className="text-2xl font-semibold">Gestión del emprendimiento</CardTitle>
              <Briefcase size={28} />
            </div>
            <CardDescription className="text-emerald-100">
            Impulsar la innovación y el crecimiento empresarial
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-2 mb-4">
              <li className="flex items-center text-gray-700">
                <ChevronRight size={18} className="text-primary mr-2" />
                Track startup milestones
              </li>
              <li className="flex items-center text-gray-700">
                <ChevronRight size={18} className="text-primary mr-2" />
                Manage resource allocation
              </li>
              <li className="flex items-center text-gray-700">
                <ChevronRight size={18} className="text-primary mr-2" />
                Monitor market trends
              </li>
            </ul>
            <div className="flex justify-between items-center">
              <Badge className="bg-[#FFD1C1] text-primary hover:bg-emerald-200">3 active ventures</Badge>
              <Button className="bg-primary hover:bg-primary-foreground text-white">
              Gestionar emprendimientos <ChevronRight size={16} className="ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
          <CardHeader className="bg-[#56B889] text-white p-6 transition-colors duration-300 group-hover:bg-[#00A26B]">
            <div className="flex justify-between items-center mb-2">
              <CardTitle className="text-2xl font-semibold">Comunicación y colaboración</CardTitle>
              <MessageCircle size={28} />
            </div>
            <CardDescription className="text-rose-100">
            Mejorar la sinergia y la productividad del equipo
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-2 mb-4">
              <li className="flex items-center text-gray-700">
                <ChevronRight size={18} className="text-[#56B889] mr-2" />
                Schedule team meetings
              </li>
              <li className="flex items-center text-gray-700">
                <ChevronRight size={18} className="text-[#56B889] mr-2" />
                Manage project workflows
              </li>
              <li className="flex items-center text-gray-700">
                <ChevronRight size={18} className="text-[#56B889] mr-2" />
                Foster idea sharing
              </li>
            </ul>
            <div className="flex justify-between items-center">
              <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">7 active projects</Badge>
              <Button className="bg-[#56B889] hover:bg-[#00A26B] text-white ">
              Colabora ahora <ChevronRight size={16} className="ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Actividad reciente</CardTitle>
            <CardDescription>Tus últimas acciones y actualizaciones</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <CheckCircle size={18} className="text-green-500" />
                <div>
                  <p className="text-sm font-medium">Completed project milestone: Q3 Strategy Review</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <MessageCircle size={18} className="text-blue-500" />
                <div>
                  <p className="text-sm font-medium">Scheduled team meeting: Innovation Workshop</p>
                  <p className="text-xs text-gray-500">Yesterday at 4:30 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Handshake size={18} className="text-primary" />
                <div>
                  <p className="text-sm font-medium">Updated negotiation plan: Client XYZ Partnership</p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tu perfil</CardTitle>
            <CardDescription>Administra tu cuenta</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src="/placeholder-user.jpg" alt="Sarah Johnson" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-semibold">Sarah Johnson</h3>
            <p className="text-sm text-gray-500">Chief Strategy Officer</p>
            <Button variant="outline" className="mt-4">Edit Profile</Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <TrendingUp size={18} className="text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <Briefcase size={18} className="text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 pending approval</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Productivity</CardTitle>
            <TrendingUp size={18} className="text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">+5% from last week</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            type="search"
            placeholder="Search across all modules..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit" className='text-white'>
            <Search size={18} className="mr-2" />
            Search
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Admin