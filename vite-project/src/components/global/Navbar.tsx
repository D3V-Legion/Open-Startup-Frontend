import { NavbarProps } from "@/models/type";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toogle";
import { useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Bell, MenuIcon, X } from "lucide-react";
import Logo from '../../../public/logo.png'
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import profile from "/profile.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"


const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  //Constante que usare para saber en que ruta estoy
  const location = useLocation();

  //Constante para poder navegar entre rutas.
  const navigate = useNavigate();

  //Funcion para navegar hasta el login.
  const handleLoginClick = () => {
    navigate("/login");
  };

  //Funcion para navegar hasta el register.
  const handleRegisterClick = () => {
    navigate("/register");
  };

  const isAdminPage = location.pathname.includes('/admin');
  const isAdminPageNegocicacion = location.pathname.includes('/admin/negociacion');
  const isAdminPageGestion = location.pathname.includes('/admin/gestion');
  const isAdminPageColaboracion = location.pathname.includes('/admin/colaboracion');

  const [notifications, setNotifications] = useState([
    { id: 1, message: "Nueva actualización disponible", time: "Hace 5 minutos" },
    { id: 2, message: "Tienes un nuevo mensaje", time: "Hace 10 minutos" },
    { id: 3, message: "Recordatorio: Reunión a las 3 PM", time: "Hace 1 hora" },
  ])

  const clearNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  return (
    <nav className={`flex justify-between items-center py-4 ${isAdminPage ? 'px-8 border-b-2' : ''}`}>
      <div className="flex items-center">
        <Link to={isAdminPage ? "/admin" : "/"} className={`flex items-center space-x-2 text-lg font-bold ${!isAdminPage ? "text-secondary":""} gap-2 `}>
        <img className="w-9 h-9" src={Logo} alt="Logotipo" />
          {isAdminPageNegocicacion ? 'Planes de Negociacion':isAdminPageGestion ? 'Gestion de emprendimiento': isAdminPageColaboracion ? 'Comunicacion y Colaboracion':'Open Startup'}
        </Link>
      </div>
      {
        !isAdminPage && (
          <div className="hidden md:flex items-center">
        <ul className="flex items-center">
          <li className="mr-6">
            <Link
              to="/"
              className={`hover:text-gray-700 font-semibold ${
                location.pathname === "/" ? "text-primary hover:text-primary-foreground" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className="mr-6">
            <Link
              to="/about"
              className={`hover:text-gray-700 font-semibold ${
                location.pathname === "/about" ? "text-primary hover:text-primary-foreground" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li className="mr-6">
            <Link
              to="/service"
              className={`hover:text-gray-700 font-semibold ${
                location.pathname === "/service" ? "text-primary hover:text-primary-foreground font-semibold" : ""
              }`}
            >
              Service
            </Link>
          </li>
        </ul>
      </div>
        )
      }
      <div className="flex items-center gap-3">
      {
        !isAdminPage ? (
   <div className="hidden md:flex">
          {isLoggedIn ? (
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Admin Panel
            </button>
          ) : (
            <>
              <Button
                onClick={handleLoginClick}
                className="bg-primary hover:bg-primary-foreground text-white font-semibold py-2 px-4 rounded mr-3"
              >
                Login
              </Button>
              <Button
                variant='outline'
                onClick={handleRegisterClick}
                className=" font-semibold py-2 px-4 rounded"
              >
                Register
              </Button>
            </>
          )}
        </div>
        ):
        (
          <div className="flex items-center gap-3">
             <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {notifications.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 px-2 py-1" variant="destructive">
                      {notifications.length}
                    </Badge>
                  )}
                  <span className="sr-only">Notificaciones</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Notificaciones</h3>
                  <Button variant="ghost" size="sm" onClick={() => setNotifications([])}>
                    Limpiar todo
                  </Button>
                </div>
                <ScrollArea className="h-[300px]">
                  {notifications.length === 0 ? (
                    <p className="text-center text-muted-foreground py-4">No hay notificaciones</p>
                  ) : (
                    notifications.map((notification) => (
                      <div key={notification.id} className="mb-4 last:mb-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm">{notification.message}</p>
                            <p className="text-xs text-muted-foreground">{notification.time}</p>
                          </div>
                          <Button variant="ghost" size="icon" onClick={() => clearNotification(notification.id)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </ScrollArea>
              </PopoverContent>
            </Popover>
                  <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={profile} alt="@johndoe" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Sarah Johnson</p>
                    <p className="text-xs leading-none text-muted-foreground">Sara.doe@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Configuración</DropdownMenuItem>
                <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )
      }
     
        <div className="hidden md:flex">
                  <ModeToggle />
        </div>
      </div>
      {
        !isAdminPage && (
            <div className="gap-2 flex md:hidden">
      <ModeToggle />
 <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="md:hidden">
          <div className="grid gap-4 p-4">
            <Link
              to="/"
              className={`rounded-md px-4 py-2 text-accent-foreground transition-colors hover:bg-accent/90 ${location.pathname === "/" ?  "bg-accent": ""}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`rounded-md px-4 py-2 transition-colors hover:bg-muted ${location.pathname === "/about" ?  "bg-accent": ""}`}
            >
              About
            </Link>
            <Link
              to="/service"
              className={`rounded-md px-4 py-2 transition-colors hover:bg-muted ${location.pathname === "/service" ?  "bg-accent": ""}`}
            >
              Services
            </Link>
            {isLoggedIn ? (
              <Button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Admin Panel
              </Button>
            ) : (
              <>
                <Button
                  onClick={handleLoginClick}
                  className="bg-primary hover:bg-primary-foreground text-white font-semibold py-2 px-4 rounded "
                >
                  Login
                </Button>
                <Button
                variant='outline'
                  onClick={handleRegisterClick}
                  className=" font-semibold py-2 px-4 rounded"
                >
                  Register
                </Button>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
      </div>
        )
      } 
    </nav>
  );
};

export default Navbar;
