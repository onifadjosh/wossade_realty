import Navbar from "@/public/components/Navbar";
import Footer from "@/public/components/Footer";
import ContactUs from "@/public/components/ContactUs";
import React from "react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-screen bg-gray-50">
        <div className="bg-emerald-900 text-white py-20 px-4 md:px-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            We are here to answer any questions you may have about our experiences.
          </p>
        </div>
        
        {/* We pass a prop or reuse component. Since ContactUs has its own padding/title, 
            we can render it directly. It might be redundant to have headers, but it separates the sections. 
            Actually, let's just render it. The component has a white background card. 
        */}
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
