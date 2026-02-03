"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";
  const useLightNav = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-20 top-0 left-0 right-0 transition-all duration-300 ease-out ${
        useLightNav
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-lg shadow-black/5"
          : "bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between py-3">
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/logo.png?v=new"
            alt="Wossade Realty"
            width={56}
            height={56}
            className="h-12 w-auto md:h-14 drop-shadow-sm"
          />
        </Link>

        <button
          type="button"
          className={`inline-flex items-center justify-center w-10 h-10 rounded-xl md:hidden transition-all duration-200 ${
            useLightNav
              ? "text-gray-600 hover:bg-gray-200/60"
              : "text-white hover:bg-white/20"
          }`}
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <div
          className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto md:bg-transparent md:backdrop-blur-none md:border-0 md:shadow-none md:rounded-none absolute md:relative left-0 right-0 top-full mt-0 md:mt-0 md:top-0 bg-white/95 md:bg-transparent backdrop-blur-xl border-t border-gray-200/60 md:border-0 shadow-xl md:shadow-none rounded-b-2xl md:rounded-none overflow-hidden`}
          id="navbar-default"
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-1 py-4 px-4 md:px-0 md:py-0 md:gap-0 md:space-x-1">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-2.5 px-4 rounded-xl font-medium transition-colors md:px-3 md:py-2 ${
                    useLightNav
                      ? "text-gray-700 hover:bg-gray-200/50 hover:text-gray-900 md:hover:bg-emerald-50 md:hover:text-emerald-800"
                      : "text-gray-800 md:text-white/95 hover:bg-gray-200/60 md:hover:bg-white/20 md:hover:text-white md:hover:bg-white/15"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="md:ml-2">
              <Link
                href="/contact"
                className={`block md:inline-flex mt-2 md:mt-0 px-5 py-2.5 rounded-xl font-semibold transition-all text-center ${
                  useLightNav
                    ? "bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-900/20"
                    : "bg-emerald-600 md:bg-white/90 text-white md:text-emerald-900 hover:bg-emerald-500 md:hover:bg-white shadow-md"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;