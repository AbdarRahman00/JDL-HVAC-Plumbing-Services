"use client";

import Link from "next/link";
import { Phone, MapPin, Mail, Clock, ShieldCheck, ArrowRight, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const hvacLinks = [
    { name: "AC Repair", href: "/services/ac-repair" },
    { name: "AC Installation", href: "/services/ac-installation" },
    { name: "AC Maintenance", href: "/services/ac-maintenance" },
    { name: "Furnace Repair", href: "/services/furnace-repair" },
    { name: "Furnace Installation", href: "/services/furnace-installation" },
    { name: "Heat Pump Services", href: "/services/heat-pump-repair" },
  ];

  const plumbingLinks = [
    { name: "Plumbing Repair", href: "/services/plumbing-repair" },
    { name: "Drain Cleaning", href: "/services/drain-cleaning" },
    { name: "Water Heater Repair", href: "/services/water-heater-repair" },
    { name: "Water Heater Installation", href: "/services/water-heater-installation" },
    { name: "Tankless Water Heaters", href: "/services/tankless-water-heaters" },
    { name: "Leak Detection", href: "/services/leak-detection" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "Financing Plans", href: "/financing" },
    { name: "Customer Reviews", href: "/reviews" },
    { name: "Expert Blog", href: "/blog" },
    { name: "Contact JDL", href: "/contact" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900 relative overflow-hidden">
      
      {/* Subtle top light overlay */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

      <div className="custom-container">
        
        {/* Top Segment: Brand & Address Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-900">
          
          {/* Company Brief */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-secondary to-accent text-white font-black text-xl shadow-md">
                J
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white leading-none">
                  JDL <span className="text-secondary">HVAC</span> & PLUMBING
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent leading-none mt-1">
                  laurel, md + dmv region
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Your reliable local HVAC and plumbing experts. We deliver same-day diagnostics, honest pricing, and NATE-certified expertise to homeowners across Maryland, Virginia, and Washington D.C.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.facebook.com/JDLHVACSERVICES/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-secondary flex items-center justify-center transition-all group"
                aria-label="Facebook Profile"
              >
                <svg className="h-4.5 w-4.5 fill-slate-400 group-hover:fill-white group-hover:scale-105 transition-colors" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <div className="flex items-center space-x-1.5 text-xs text-green-500 font-extrabold bg-green-500/5 border border-green-500/10 px-3 py-1 rounded-full">
                <ShieldCheck className="h-4 w-4 fill-green-500 stroke-slate-950" />
                <span>Licensed, Bonded & Insured</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4 text-sm">
            <h4 className="text-white font-extrabold uppercase text-xs tracking-wider border-l-2 border-accent pl-2.5">
              Contact & Dispatch Info
            </h4>
            
            <div className="space-y-3 font-semibold text-slate-350">
              <a
                href="tel:8445354822"
                className="flex items-start space-x-3 group hover:text-white transition-colors"
              >
                <Phone className="h-4.5 w-4.5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-slate-500">
                    24/7 Immediate Response
                  </span>
                  <span className="text-base font-black text-white group-hover:text-secondary-light">
                    (844) 535-4822
                  </span>
                </div>
              </a>

              <div className="flex items-start space-x-3">
                <MapPin className="h-4.5 w-4.5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-slate-500">
                    Laurel Office Address
                  </span>
                  <span className="block leading-relaxed">
                    14300 Cherry Lane Ct Ste 116,<br />
                    Laurel, MD 20707, USA
                  </span>
                </div>
              </div>

              <a
                href="mailto:service@jdlhvacservices.com"
                className="flex items-start space-x-3 group hover:text-white transition-colors"
              >
                <Mail className="h-4.5 w-4.5 text-slate-500 flex-shrink-0 mt-0.5 group-hover:text-white" />
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-slate-500">
                    Email Inquiries
                  </span>
                  <span>dispatch@jdlhvacservices.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="lg:col-span-4 space-y-4 text-sm">
            <h4 className="text-white font-extrabold uppercase text-xs tracking-wider border-l-2 border-secondary pl-2.5">
              Local Operating Hours
            </h4>
            
            <div className="space-y-2.5 font-semibold text-slate-350">
              <div className="flex items-center justify-between border-b border-slate-900 pb-1.5">
                <span className="flex items-center space-x-2 text-slate-400">
                  <Clock className="h-4 w-4" />
                  <span>Monday - Friday</span>
                </span>
                <span className="text-white">7:00 AM - 7:00 PM</span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-900 pb-1.5">
                <span className="flex items-center space-x-2 text-slate-400">
                  <Clock className="h-4 w-4" />
                  <span>Saturday - Sunday</span>
                </span>
                <span className="text-white">8:00 AM - 4:00 PM</span>
              </div>

              <div className="bg-accent/10 border border-accent/15 p-3 rounded-xl flex items-center justify-between text-xs">
                <span className="font-black text-accent uppercase tracking-wider animate-pulse flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span>Emergency Service</span>
                </span>
                <span className="text-white font-black">Available 24/7</span>
              </div>
            </div>
          </div>

        </div>

        {/* Middle Segment: Sitemap & Maps Embed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 py-12 border-b border-slate-900">
          
          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4 text-sm">
            <h4 className="text-white font-extrabold uppercase text-xs tracking-wider">
              Useful Navigation
            </h4>
            <ul className="space-y-2 font-semibold">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3.5 w-3.5 mr-1.5 text-slate-650 group-hover:text-secondary group-hover:translate-x-0.5 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HVAC links */}
          <div className="lg:col-span-3 space-y-4 text-sm">
            <h4 className="text-white font-extrabold uppercase text-xs tracking-wider">
              Heating & Cooling
            </h4>
            <ul className="space-y-2 font-semibold">
              {hvacLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3.5 w-3.5 mr-1.5 text-slate-650 group-hover:text-secondary group-hover:translate-x-0.5 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Plumbing Links */}
          <div className="lg:col-span-3 space-y-4 text-sm">
            <h4 className="text-white font-extrabold uppercase text-xs tracking-wider">
              Plumbing Solutions
            </h4>
            <ul className="space-y-2 font-semibold">
              {plumbingLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3.5 w-3.5 mr-1.5 text-slate-650 group-hover:text-secondary group-hover:translate-x-0.5 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Live Google Map embed */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-extrabold uppercase text-xs tracking-wider">
              Primary DMV Service Area
            </h4>
            <div className="w-full h-40 rounded-2xl overflow-hidden border border-slate-900 shadow-md">
              <iframe
                title="JDL HVAC Cherry Lane Laurel Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.8361099651584!2d-76.84365772346985!3d39.098495034606275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7defa16e78af1%3A0x6335ab672cf3eb1b!2s14300%20Cherry%20Lane%20Ct%20%23116%2C%20Laurel%2C%20MD%2020707!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        {/* Bottom Segment: Copyright & Policies */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4 text-xs text-slate-500 font-semibold">
          <div>
            © {currentYear} JDL HVAC & Plumbing Services. All rights reserved. 
            <span className="hidden md:inline"> | Centrally located in Laurel, Maryland.</span>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/privacy-policy" className="hover:text-slate-350 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-slate-350 transition-colors">
              Terms & Conditions
            </Link>
          </div>

          <div className="flex items-center space-x-1 text-[10px] text-slate-650">
            <span>Crafted with</span>
            <Heart className="h-3 w-3 text-red-650 fill-red-650/40" />
            <span>for Maryland Homeowners</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
