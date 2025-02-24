import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./navbar.css"

export const Navbar =useMemo( () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <header>
      <nav className="absolute top-0 left-0 w-full p-5 flex justify-between items-center bg-black bg-opacity-50 backdrop-blur-md text-white z-50">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">GYMTEAM</div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-lg">
          <NavLink to="/" className="hover:text-lime-400 transition">Home</NavLink>
          <NavLink to="/About" className="hover:text-lime-400 transition">About</NavLink>
          <NavLink to="/Coaches" className="hover:text-lime-400 transition">Coaches</NavLink>
          <NavLink to="/Contact" className="hover:text-lime-400 transition">Contact</NavLink>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl md:hidden cursor-pointer hover:text-lime-400 transition" // Increased size here
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center gap-4 p-6 text-lg 
        transition-all duration-500 ease-in-out transform ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 delay-150 pointer-events-none"
        }`}
        >
          <NavLink to="/" className="hover:text-lime-400 transition" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/About" className="hover:text-lime-400 transition" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/Coaches" className="hover:text-lime-400 transition" onClick={() => setIsOpen(false)}>Coaches</NavLink>
          <NavLink to="/Contact" className="hover:text-lime-400 transition" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      </nav>
    </header>
    </>
  );
});
