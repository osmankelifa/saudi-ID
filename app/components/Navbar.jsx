"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false); // Closes the menu when Link link is clicked
  };

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
          className="md:hidden text-gray-700 z-50 focus:outline-none"
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
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 text-gray-700 absolute top-20 left-0 right-0 md:static md:backdrop-blur-0 backdrop-blur-xl md:bg-transparent z-20 md:z-auto`}
        >
          <ul className="flex flex-col text-xl md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-gray-700">
            <li>
              <Link
                href="/"
                className="relative uppercase text-lg font-cabin w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-cente"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                onClick={closeMenu}
                className="relative uppercase text-lg font-cabin w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-cente"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                onClick={closeMenu}
                className="relative uppercase text-lg font-cabin w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-cente"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#news"
                onClick={closeMenu}
                className="relative uppercase text-lg font-cabin w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-cente"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={closeMenu}
                className="relative uppercase text-lg font-cabin w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-cente"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
