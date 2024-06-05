"use client";

import { useState } from "react";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Productos", path: "/products" },
  { name: "Información", path: "/about" },
  { name: "Contacto", path: "/contact" },
];

const navLinksClasses =
  "text-lg font-semibold cursor-pointer ml-2 mr-2 hover:text-rose-300";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-rose-900 text-rose-50 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <p className={`text-3xl font-bold ml-4 ${greatVibes.className}`}>
            Aleabreau
          </p>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-rose-50 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-4 mx-auto">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} passHref>
              <span className={navLinksClasses}>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} passHref>
              <span className={navLinksClasses}>{link.name}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
