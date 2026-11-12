'use client';

import React, { useActionState } from 'react';
import { sendEmail } from '@/app/actions/send-email';

const initialState = {
    success: false,
    message: ''
}

const ContactUs = ({
  asPage = false,
  notice,
}: {
  asPage?: boolean;
  notice?: React.ReactNode;
}) => {
  const [state, formAction, isPending] = useActionState(sendEmail, initialState);
  const Title = asPage ? "h1" : "h2";

  return (
    <section id="contact" className={`scroll-mt-24 px-5 sm:px-8 bg-[#f4f0e8] ${asPage ? "pt-32 md:pt-40 pb-20 md:pb-28" : "py-20 md:py-28"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-800">
            Contact
          </p>
          <Title className="mt-3 text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#10241c]">
            Tell us about the site, or the stay.
          </Title>
          <p className="mt-4 text-lg text-[#10241c]/65">
            The office replies within a day. For a short-let, call or WhatsApp is faster.
          </p>
          {notice ? <div className="mt-4 text-sm text-[#10241c]/70 leading-relaxed">{notice}</div> : null}
        </div>

        <div className="flex flex-col lg:flex-row bg-white rounded-[1.75rem] overflow-hidden border border-[#10241c]/8">
          {/* Contact Info */}
          <div className="lg:w-[40%] bg-[#0c1f17] p-8 sm:p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight mb-4">Office</h3>
              <p className="mb-8 text-white/70 leading-relaxed">
                WOSSADE REALTY, close to the University of Ibadan second gate, behind First Bank, Ojoo.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-emerald-300">Phone</p>
                    <a href="tel:+2348131180078" className="block font-medium hover:text-emerald-200">
                      0813 118 0078
                    </a>
                    <a href="tel:+13467737627" className="block font-medium hover:text-emerald-200">
                      +1346 7737627
                    </a>
                    <a href="tel:+2348038608112" className="block font-medium hover:text-emerald-200">
                      0803 860 8112
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                   <div className="p-3 bg-white/10 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-emerald-300">Email</p>
                    <a href="mailto:wossaderealty@gmail.com" className="block font-medium hover:text-emerald-200">
                      wossaderealty@gmail.com
                    </a>
                    <a href="mailto:azeezidris59@gmail.com" className="block font-medium hover:text-emerald-200">
                      azeezidris59@gmail.com
                    </a>
                  </div>
                </div>

                 <div className="flex items-center gap-4">
                   <div className="p-3 bg-white/10 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-emerald-300">Address</p>
                    <p className="font-medium">Ojoo, Ibadan, Oyo State</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
               <a
                 href="https://instagram.com/wosaade_homes"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-sm font-medium text-emerald-200 hover:text-white"
               >
                 Instagram · @wosaade_homes
               </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-[60%] p-8 md:p-10">
            <form action={formAction} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-sm font-semibold text-gray-700">First Name</label>
                  <input name="firstName" type="text" id="firstName" placeholder="John" required className="px-4 py-3 bg-[#f4f0e8] border border-transparent rounded-xl focus:outline-none focus:border-emerald-700 focus:bg-white transition-all"/>
                </div>
                 <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-sm font-semibold text-gray-700">Last Name</label>
                  <input name="lastName" type="text" id="lastName" placeholder="Doe" required className="px-4 py-3 bg-[#f4f0e8] border border-transparent rounded-xl focus:outline-none focus:border-emerald-700 focus:bg-white transition-all"/>
                </div>
              </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input name="email" type="email" id="email" placeholder="john@example.com" required className="px-4 py-3 bg-[#f4f0e8] border border-transparent rounded-xl focus:outline-none focus:border-emerald-700 focus:bg-white transition-all"/>
                </div>
                 <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                  <input name="phone" type="tel" id="phone" placeholder="+234..." className="px-4 py-3 bg-[#f4f0e8] border border-transparent rounded-xl focus:outline-none focus:border-emerald-700 focus:bg-white transition-all"/>
                </div>
              </div>

               <div className="flex flex-col gap-2">
                   <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                   <textarea name="message" id="message" rows={4} placeholder="Tell us about your project..." required className="px-4 py-3 bg-[#f4f0e8] border border-transparent rounded-xl focus:outline-none focus:border-emerald-700 focus:bg-white transition-all resize-none"></textarea>
               </div>

                {state?.message && (
                    <div className={`p-4 rounded-lg ${state.success ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                        {state.message}
                    </div>
                )}

               <button type="submit" disabled={isPending} className="bg-[#0c1f17] text-white font-semibold py-4 rounded-full hover:bg-emerald-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center">
                  {isPending ? (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                  ) : (
                      "Send Message"
                  )}
               </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
