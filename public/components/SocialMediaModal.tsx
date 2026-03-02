"use client";

import { useState, useEffect } from "react";
import { X, Instagram, Phone, Mail } from "lucide-react";

export default function SocialMediaModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500); // Show after 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg overflow-hidden bg-white rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Banner Area */}
        <div className="h-32 bg-gradient-to-r from-emerald-600 to-teal-800 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white tracking-tight">Connect With Us</h2>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-white/80 hover:text-white rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <p className="text-gray-600 text-center mb-8">
            Stay updated with our latest projects and offers. We are available on various platforms for bookings and inquiries.
          </p>

          <div className="space-y-6">
            {/* Booking - WhatsApp/Call */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">For Booking (WhatsApp/Call)</h3>
                <p className="text-gray-600 font-medium">+234 803 860 8112, 07082935516</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <div className="text-gray-600 text-sm md:text-base font-medium space-y-1">
                  <p>follykool@yahoo.com</p>
                  <p>olaideakande3@yahoo.com</p>
                  <p>yemkal@yahoo.com</p>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Instagram</h3>
                <p className="text-gray-600 font-medium">@wosaade_homes</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/20"
            >
              Continue to Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
