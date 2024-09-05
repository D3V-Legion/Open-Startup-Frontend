import { NavbarProps } from "@/models/type";
import React from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toogle";
import { useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

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

  return (
    <nav className="flex justify-between items-center py-4 ">
      <div className="flex items-center">
        <Link to="/" className={`text-lg font-bold hover:text-gray-700 `}>
          Open Startup
        </Link>
      </div>
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
      <div className="flex items-center gap-3">
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
        <div className="hidden md:flex">
                  <ModeToggle />
        </div>
      </div>
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
     
    </nav>
  );
};

export default Navbar;
