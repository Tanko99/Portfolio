import { useState } from "react";
import ThemeToggle from "./Themetoggle";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className="bg-primary flex items-center justify-between px-6 py-4 text-accent font-poppins relative"
    >
    
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="My Logo" className="rounded-full w-20 h-20" />
        <ThemeToggle />
      </div>

      {/* Hamburger Icon (mobile only) */}
      <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </div>

      {/* Navigation Links */}
      <ul
        className={`absolute md:static left-0 top-20 w-full md:w-auto bg-black/80 md:bg-transparent flex flex-col md:flex-row items-center gap-4 md:gap-6 py-6 md:py-0 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible md:visible md:opacity-100"
        }`}
      >
        <li>
          <Link
            to="/"
            className="hover:bg-purple-500 rounded-lg font-bold text-lg px-4 py-2 bg-purple-800 w-[80%] md:w-auto text-center"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:bg-purple-500 rounded-lg font-bold text-lg px-4 py-2 bg-purple-800 w-[80%] md:w-auto text-center"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="hover:bg-purple-500 rounded-lg font-bold text-lg px-4 py-2 bg-purple-800 w-[80%] md:w-auto text-center"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className="hover:bg-purple-500 rounded-lg font-bold text-lg px-4 py-2 bg-purple-800 w-[80%] md:w-auto text-center"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:bg-purple-500 rounded-lg font-bold text-lg px-4 py-2 bg-purple-800 w-[80%] md:w-auto text-center"
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;