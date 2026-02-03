'use client';

import React, { useActionState } from 'react';
import { sendEmail } from '@/app/actions/send-email';

const initialState = {
    success: false,
    message: ''
}

const ContactUs = () => {
  const [state, formAction, isPending] = useActionState(sendEmail, initialState);

  return (
    <section id="contact" className="py-20 md:py-24 px-4 md:px-8 bg-gray-50/80">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-900 mb-4 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Have a project in mind? Let&apos;s build something great together.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Contact Info */}
          <div className="lg:w-[40%] bg-emerald-900 p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-8 text-emerald-100">
                Fill up the form and our team will get back to you within 24 hours.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-800 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-emerald-300">Phone</p>
                    <p className="font-medium">+2349069663640 </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                   <div className="p-3 bg-emerald-800 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-emerald-300">Email</p>
                    <p className="font-medium">wossaderealty@gmail.com</p>
                  </div>
                </div>

                 <div className="flex items-center gap-4">
                   <div className="p-3 bg-emerald-800 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-emerald-300">Address</p>
                    <p className="font-medium">WOSSADE REALTY, Close to University of Ibadan second gate  behind First bank ojo  Ibadan Oyo State</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
               <div className="flex gap-4">
                  {/* Social Icons Placeholder */}
                  <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-emerald-700 cursor-pointer">
                    <span className="font-bold">fb</span>
                  </div>
                   <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-emerald-700 cursor-pointer">
                    <span className="font-bold">in</span>
                  </div>
                   <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-emerald-700 cursor-pointer">
                    <span className="font-bold">x</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-[60%] p-8 md:p-10">
            <form action={formAction} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-sm font-semibold text-gray-700">First Name</label>
                  <input name="firstName" type="text" id="firstName" placeholder="John" required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"/>
                </div>
                 <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-sm font-semibold text-gray-700">Last Name</label>
                  <input name="lastName" type="text" id="lastName" placeholder="Doe" required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"/>
                </div>
              </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input name="email" type="email" id="email" placeholder="john@example.com" required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"/>
                </div>
                 <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                  <input name="phone" type="tel" id="phone" placeholder="+234..." className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"/>
                </div>
              </div>

               <div className="flex flex-col gap-2">
                   <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                   <textarea name="message" id="message" rows={4} placeholder="Tell us about your project..." required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500 focus:bg-white transition-all resize-none"></textarea>
               </div>

                {state?.message && (
                    <div className={`p-4 rounded-lg ${state.success ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                        {state.message}
                    </div>
                )}

               <button type="submit" disabled={isPending} className="bg-emerald-900 text-white font-bold py-4 rounded-lg hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center">
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
