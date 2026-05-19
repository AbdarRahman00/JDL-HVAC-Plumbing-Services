"use client";

import * as React from "react";
import LeadForm from "@/components/LeadForm";
import { Phone, MapPin, Mail, Clock, ShieldCheck, HelpCircle } from "lucide-react";

export default function Contact() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="space-y-20 pb-20 pt-8">
      
      {/* 1. HERO HEADER */}
      <section className="custom-container">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/15 px-3 py-1 rounded-full border border-accent/20">
              Get In Touch
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-white">
              Contact JDL HVAC & Plumbing Services
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              We operate live dispatchers 24/7 to resolve HVAC leaks, cold furnaces, warm ACs, or pipe bursts. Reach out by calling directly or scheduling online.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM */}
      <section className="custom-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Contact credentials */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-6">
            <span className="text-xs font-black text-secondary uppercase tracking-widest bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/15">
              Laurel Operations Desk
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-primary tracking-tight mt-3">
              We Respond in Under 15 Minutes
            </h2>
            <p className="text-mutedSlate text-sm md:text-base leading-relaxed">
              Have a question about sizing, custom duct configurations, low interest financing, or Energy Star tax credits? Reach out to our local Laurel team.
            </p>
          </div>

          <div className="space-y-4 font-semibold text-slate-700">
            {/* Phone */}
            <a
              href="tel:8445354822"
              className="flex items-start space-x-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary group-hover:scale-105 transition-transform flex-shrink-0">
                <Phone className="h-5 w-5 fill-secondary/20" />
              </div>
              <div>
                <span className="block text-[10px] uppercase font-black tracking-wider text-slate-400">
                  24/7 Immediate Response Hotline
                </span>
                <span className="block text-lg font-black text-primary group-hover:text-secondary mt-0.5">
                  (844) 535-4822
                </span>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start space-x-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex-shrink-0">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent flex-shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-[10px] uppercase font-black tracking-wider text-slate-400">
                  Physical Headquarters Branch Suite
                </span>
                <span className="block text-sm md:text-base text-primary mt-0.5 leading-relaxed">
                  14300 Cherry Lane Ct Ste 116,<br />
                  Laurel, MD 20707, USA
                </span>
              </div>
            </div>

            {/* Email */}
            <a
              href="mailto:dispatch@jdlhvacservices.com"
              className="flex items-start space-x-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:scale-105 transition-transform flex-shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-[10px] uppercase font-black tracking-wider text-slate-400">
                  Administrative Inquiries
                </span>
                <span className="block text-sm md:text-base text-primary group-hover:text-secondary mt-0.5">
                  dispatch@jdlhvacservices.com
                </span>
              </div>
            </a>
          </div>

          {/* Operating Hours */}
          <div className="bg-slate-900 rounded-3xl p-6 text-white space-y-4">
            <h4 className="text-white font-extrabold text-sm md:text-base border-b border-slate-800 pb-2 mb-4 flex items-center space-x-2">
              <Clock className="h-4.5 w-4.5 text-accent animate-pulse" />
              <span>Standard Dispatching Operations</span>
            </h4>
            
            <div className="space-y-3 text-xs md:text-sm text-slate-400">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-white font-bold">7:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between border-t border-slate-850 pt-2">
                <span>Saturday - Sunday</span>
                <span className="text-white font-bold">8:00 AM - 4:00 PM</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center justify-between mt-4">
                <span className="text-accent font-black uppercase tracking-wider text-[11px] animate-pulse">
                  Emergency Line
                </span>
                <span className="text-white font-extrabold">24/7 Hotline Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Intake */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-slate-905 border border-slate-100 rounded-3xl shadow-lg p-1">
            {mounted ? (
              <LeadForm />
            ) : (
              <div className="min-h-[350px] flex flex-col items-center justify-center text-center space-y-3 py-6 bg-white rounded-3xl">
                <span className="text-xs font-bold text-slate-400">
                  Loading Interactive Scheduling Portal...
                </span>
              </div>
            )}
          </div>
        </div>

      </section>

      {/* 3. PHYSICAL MAP INTERACTION */}
      <section className="custom-container">
        <div className="w-full h-96 rounded-3xl overflow-hidden border border-slate-150 shadow-md">
          <iframe
            title="JDL Head Office Cherry Lane Laurel Location Map Detailed"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.8361099651584!2d-76.84365772346985!3d39.098495034606275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7defa16e78af1%3A0x6335ab672cf3eb1b!2s14300%20Cherry%20Lane%20Ct%20%23116%2C%20Laurel%2C%20MD%2020707!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </div>
  );
}
