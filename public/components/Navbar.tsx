"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: "Home", href: "/", isActive: false },
    { label: "About", href: "/about", isActive: false },
    { label: "Portfolio", href: "/portfolio", isActive: false },
    // { label: "Pricing", href: "#pricing", isActive: false },
    { label: "Contact", href: "/contact", isActive: false },
  ];

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-default mb-5">
      <div className="/max-w-screen-xl lg:px-20 flex flex-wrap items-center justify-between mx-auto p-4">
        
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
           <img src="/logo.png?v=new" alt="Logo" width={100} height={20}  className="h-14 w-14"/>
          </span>
        </Link>


        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">
            {isMenuOpen ? "Close main menu" : "Open main menu"}
          </span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round" // Fixed: camelCase for React
              strokeWidth={2} // Fixed: camelCase for React
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M5 7h14M5 12h14M5 17h14"}
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <div 
          className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} 
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`block py-2 px-3 rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 ${
                    item.isActive 
                      ? 'text-white bg-brand md:bg-transparent md:text-fg-brand' 
                      : 'text-heading'
                  }`}
                  aria-current={item.isActive ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;