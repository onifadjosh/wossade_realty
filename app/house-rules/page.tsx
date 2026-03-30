import Navbar from "@/public/components/Navbar";
import Footer from "@/public/components/Footer";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "House Rules & Guest Policies",
  description:
    "WOSSADE Realty house rules, check-in and check-out times, payment and booking terms, and visitor policy for guests.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-emerald-900 mb-4">{title}</h2>
      <div className="text-gray-700 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function HouseRulesPage() {
  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-screen bg-gray-50">
        <div className="bg-emerald-900 text-white py-16 md:py-20 px-4 md:px-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            House Rules &amp; Guest Policies
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto">
            Please read before you book or stay with WOSSADE Realty. These
            guidelines help keep every guest comfortable and safe.
          </p>
        </div>

        <article className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
            <Section title="House rules">
              <ul className="list-disc pl-5 space-y-2">
                <li>No smoking.</li>
                <li>No parties on the compound.</li>
                <li>No excessive noise; please respect neighbours and other guests.</li>
                <li>
                  <strong>Check-in:</strong> 2:00 p.m.
                </li>
                <li>
                  <strong>Check-out:</strong> 12:00 noon.
                </li>
              </ul>
            </Section>

            <Section title="Identification &amp; age">
              <p>
                A valid means of identification is required. The primary guest
                must be <strong>21 years of age or older</strong>.
              </p>
            </Section>

            <Section title="Caution deposit">
              <p>
                A caution (security) deposit may apply. The amount depends on the
                apartment rate and will be communicated when you book.
              </p>
            </Section>

            <Section title="Payment &amp; booking">
              <p>
                Full payment is usually required to confirm bookings, especially
                for short stays. A part payment (for example 40–50%) may be
                accepted in some cases; any balance must be paid before or at
                check-in.
              </p>
              <p>
                Early check-in or late check-out may be possible by arrangement
                and often attracts additional fees.
              </p>
            </Section>

            <Section title="Visitors">
              <p>
                Unauthorized guests or overnight visitors are generally not
                allowed. Breach of this policy may result in eviction.
              </p>
            </Section>

            <p className="text-sm text-gray-500 border-t border-gray-100 pt-8 mt-8">
              Questions?{" "}
              <Link
                href="/contact"
                className="text-emerald-700 font-medium hover:text-emerald-800 underline underline-offset-2"
              >
                Contact us
              </Link>
              .
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}
