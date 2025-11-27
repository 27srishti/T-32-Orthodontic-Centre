import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">
              T32<span className="text-blue-600">Dental</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#doctors"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Doctors
            </a>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-600/20">
              <Phone size={18} />
              Book Appointment
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium"
            >
              Services
            </a>
            <a
              href="#doctors"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md font-medium"
            >
              Doctors
            </a>
            <button className="w-full mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <Phone size={18} />
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
