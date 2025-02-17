import React from "react";
import { NavLink } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('./hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div> {/* Dark Overlay */}
      
      <div className="text-center z-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase">
          Work With Professionals
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          Transform your body and mindset with personalized training, expert guidance, and tailored workouts for a healthier, stronger you
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <NavLink to="/About">  
            <button className="bg-lime-400 text-black px-6 py-3 rounded-full font-bold hover:bg-lime-500 transition">
              LEARN MORE →
            </button>
          </NavLink>
          <button className="bg-transparent border border-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-black transition">
            {/* Add content if needed */}
          </button>
        </div>
      </div>
    </div>
  );
};
