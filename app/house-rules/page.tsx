import Navbar from "@/public/components/Navbar";
import Footer from "@/public/components/Footer";
import PageHeader from "@/public/components/PageHeader";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "House Rules & Guest Policies",
  description:
    "WOSSADE Realty house rules, check-in and check-out times, payment and booking terms, and visitor policy for guests.",
};

const rules = [
  {
    title: "On the compound",
    body: (
      <ul className="list-disc pl-5 space-y-2">
        <li>No smoking.</li>
        <li>No parties on the compound.</li>
        <li>No excessive noise. Please respect neighbours and other guests.</li>
      </ul>
    ),
  },
  {
    title: "Identification and age",
    body: (
      <p>
        A valid means of identification is required. The primary guest must be{" "}
        <strong className="font-semibold text-[#10241c]">21 or older</strong>.
      </p>
    ),
  },
  {
    title: "Caution deposit",
    body: (
      <p>
        A caution deposit may apply. The amount depends on the apartment rate
        and is confirmed when you book.
      </p>
    ),
  },
  {
    title: "Payment and booking",
    body: (
      <>
        <p>
          Full payment is usually required to confirm a booking, especially for
          short stays. A part payment, for example 40–50%, may be accepted in
          some cases. Any balance is due before or at check-in.
        </p>
        <p>
          Early check-in or late check-out can be arranged and often carries an
          extra fee.
        </p>
      </>
    ),
  },
  {
    title: "Visitors",
    body: (
      <p>
        Unauthorized guests and overnight visitors are not allowed. Breaking
        this rule can mean eviction.
      </p>
    ),
  },
];

export default function HouseRulesPage() {
  return (
    <main className="bg-[#f4f0e8]">
      <Navbar />
      <PageHeader eyebrow="Staying with us" title="House rules.">
        Read this before you book. The same terms apply to every short-let.
      </PageHeader>

      <article className="px-5 sm:px-8 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <dl className="grid sm:grid-cols-2 gap-4 mb-10">
            <div className="rounded-2xl bg-[#0c1f17] text-white p-6">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Check-in
              </dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight">
                2:00 p.m.
              </dd>
            </div>
            <div className="rounded-2xl bg-white border border-[#10241c]/8 p-6">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-800">
                Check-out
              </dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight text-[#10241c]">
                12:00 noon
              </dd>
            </div>
          </dl>

          <div className="border-b border-[#10241c]/10">
            {rules.map((rule, index) => (
              <section
                key={rule.title}
                className="grid md:grid-cols-12 gap-3 md:gap-8 py-8 border-t border-[#10241c]/10"
              >
                <p className="md:col-span-1 text-sm tabular-nums text-emerald-800 font-medium">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="md:col-span-4 text-2xl font-semibold tracking-tight text-[#10241c]">
                  {rule.title}
                </h2>
                <div className="md:col-span-7 text-[#10241c]/70 leading-relaxed space-y-3">
                  {rule.body}
                </div>
              </section>
            ))}
          </div>

          <p className="mt-10 text-sm text-[#10241c]/60">
            Questions?{" "}
            <Link
              href="/contact"
              className="font-medium text-emerald-800 underline underline-offset-4"
            >
              Contact the office
            </Link>
            .
          </p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
