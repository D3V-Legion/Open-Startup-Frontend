import { NavbarProps } from "@/models/type";
import React from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toogle";
import { useLocation, useNavigate } from "react-router-dom";

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
    <nav className="flex justify-between items-center py-4">
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
              className={`hover:text-gray-700 ${
                location.pathname === "/" ? "text-blue-700" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className="mr-6">
            <Link
              to="/about"
              className={`hover:text-gray-700 ${
                location.pathname === "/about" ? "text-blue-700" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li className="mr-6">
            <Link
              to="/service"
              className={`hover:text-gray-700 ${
                location.pathname === "/service" ? "text-blue-700" : ""
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
            <button
              onClick={handleLoginClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Login
            </button>
            <button
              onClick={handleRegisterClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Register
            </button>
          </>
        )}
        </div>

        <ModeToggle />
      </div>
      <div className="md:hidden flex items-center">
      <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            // Toggle dropdown menu
            const dropdownMenu = document.getElementById('dropdown-menu');
            dropdownMenu.classList.toggle('hidden');
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
