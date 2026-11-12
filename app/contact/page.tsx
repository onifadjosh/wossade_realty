import Navbar from "@/public/components/Navbar";
import Footer from "@/public/components/Footer";
import ContactUs from "@/public/components/ContactUs";
import Link from "next/link";
import React from "react";

export default function ContactPage() {
  return (
    <main className="bg-[#f4f0e8]">
      <Navbar />
      <ContactUs
        asPage
        notice={
          <>
            Booking a stay? Check-in is 2:00 p.m. and check-out is 12:00 noon.
            Payment, visitors, and the rest of the terms are on the{" "}
            <Link
              href="/house-rules"
              className="font-medium text-emerald-800 underline underline-offset-4"
            >
              house rules
            </Link>{" "}
            page.
          </>
        }
      />
      <Footer />
    </main>
  );
}
