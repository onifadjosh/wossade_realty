import React from 'react';
import Image from 'next/image';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-20 pb-10">
        <div className="px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                   WOSSADE REALTY
                </h2>
                <p className="text-gray-400 mb-6">
                    Building the future with precision, passion, and excellence. Your trusted partner in construction and infrastructure development.
                </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
                <h3 className="text-lg font-bold mb-6 text-emerald-500">Quick Links</h3>
                <ul className="flex flex-col gap-3 text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
            </div>

            {/* Column 3: Services */}
             <div>
                <h3 className="text-lg font-bold mb-6 text-emerald-500">Our Services</h3>
                <ul className="flex flex-col gap-3 text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">General Construction</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Infrastructure Development</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Project Management</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Renovation & Remodeling</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Interior Design</a></li>
                </ul>
            </div>

             {/* Column 4: Newsletter */}
            <div>
                <h3 className="text-lg font-bold mb-6 text-emerald-500">Newsletter</h3>
                <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and projects.</p>
                <form className="flex flex-col gap-3">
                    <input type="email" placeholder="Your Email address" className="bg-gray-900 border border-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:border-emerald-500"/>
                    <button className="bg-emerald-900 text-white px-4 py-2 rounded font-semibold hover:bg-emerald-800 transition-colors">Subscribe</button>
                </form>
            </div>
        </div>

        <div className="px-4 md:px-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
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
