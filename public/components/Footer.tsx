"use client"
import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Column 1: Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-6 tracking-tight">
            WOSSADE REALTY
          </h2>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            Building the future with precision, passion, and excellence. Your trusted partner in construction and infrastructure development.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-emerald-400">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/#services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-white transition-colors">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

            {/* Column 3: Services */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-emerald-400">
            Our Services
          </h3>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li><Link href="/#services" className="hover:text-white transition-colors">General Construction</Link></li>
            <li><Link href="/#services" className="hover:text-white transition-colors">Infrastructure Development</Link></li>
            <li><Link href="/#services" className="hover:text-white transition-colors">Project Management</Link></li>
            <li><Link href="/#services" className="hover:text-white transition-colors">Renovation & Remodeling</Link></li>
            <li><Link href="/#services" className="hover:text-white transition-colors">Interior Design</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-emerald-400">
            Newsletter
          </h3>
          <p className="text-gray-400 mb-4 text-sm">Subscribe for the latest updates and projects.</p>
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="bg-neutral-800 border border-neutral-700 text-white px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button type="submit" className="bg-emerald-700 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-emerald-600 transition-colors text-sm">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
        <p>&copy; {currentYear} Wossade Realty. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
