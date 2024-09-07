"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent bg-gradient-to-t from-green-300 to-white    z-50 shadow-md">
      <div className="container  mx-auto px-4 py-8 flex justify-end   items-center">
        <Image
          src="/logo/logo1.png"
          alt="Logo"
          width={450}
          height={300}
          className="absolute -top-18 left-0"
        />

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
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

        <div
          className={`md:flex md:items-center ${isOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col text-xl md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-gray-700">
            <li>
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#news" className="hover:text-blue-500">
                News
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
