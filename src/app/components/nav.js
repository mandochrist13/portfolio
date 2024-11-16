"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="h-[80px]  flex items-center justify-center relative z-10">
      <div className="w-full flex items-center justify-around mx-auto">
        <a href="/" className="flex justify-center items-center">
          <Image
            src="/assets/logo.jpg"
            alt="logo mando"
            className="object-cover rounded-lg h-auto w-[60px]"
            width={1080}
            height={600}
          />
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex items-center space-x-8">
            <li>
              <a href="/" className="text-cyan-950 hover:text-cyan-600">Accueil</a>
            </li>
            <li>
              <a href="#section1" className="text-cyan-950 hover:text-cyan-600">Réalisations</a>
            </li>
            <li className=" bg-gradient-to-r from-teal-400 to-cyan-500 rounded p-2">
              <a href="#section2" className="text-cyan-950 hover:text-white">Me contacter</a>
            </li>
          </ul>
        </div>

        {/* Mobile Overlay Navigation */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-20 flex items-center justify-center">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              &times;
            </button>
            <ul className="font-medium flex flex-col items-center space-y-8 text-white">
              <li>
                <a
                  href="/"
                  className="text-white text-lg hover:text-[#bbf3ff]"
                  onClick={toggleMenu}
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#section1"
                  className="text-white text-lg hover:text-[#bbf3ff]"
                  onClick={toggleMenu}
                >
                  Réalisations
                </a>
              </li>
              <li>
                <a
                  href="#section2"
                  className="text-white text-lg hover:text-[#bbf3ff] border-2 border-white rounded p-2"
                  onClick={toggleMenu}
                >
                  Me contacter
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
