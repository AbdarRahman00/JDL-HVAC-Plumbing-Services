"use client";

import * as React from "react";
import Link from "next/link";
import { Flame, Wrench, ShieldCheck, Phone, ChevronRight, Sparkles, HelpCircle } from "lucide-react";
import { SERVICES } from "@/data/services";

export default function ServicesDirectory() {
  const hvacServices = SERVICES.filter((s) => s.category === "hvac");
  const plumbingServices = SERVICES.filter((s) => s.category === "plumbing");

  return (
    <div className="space-y-20 pb-20 pt-8">
      
      {/* 1. HERO BANNER */}
      <section className="custom-container">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/15 px-3 py-1 rounded-full border border-accent/20">
              Services Catalog
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-white">
              Professional, DMV-Wide HVAC & Plumbing
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              We provide NATE-certified air conditioning, energy-saving heating, complete water line repiping, emergency drain clearing, sewer main excavations, and water heater restorations. Select any service to explore detailed solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. HVAC SECTION */}
      <section className="custom-container space-y-8">
        <div className="flex items-center space-x-3 border-b border-slate-200 pb-4 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
            <Flame className="h-6 w-6 fill-secondary/20" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-primary">
              Heating & Air Conditioning
            </h2>
            <span className="text-xs text-mutedSlate font-semibold uppercase tracking-wider">
              10 Dedicated HVAC Sub-Services
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hvacServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group border border-slate-100 hover:border-secondary/40 rounded-2xl p-6 bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 hover:scale-[1.01]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">🔥</span>
                  {service.emergency && (
                    <span className="bg-accent/10 border border-accent/20 text-accent text-[9px] font-black uppercase px-2 py-0.5 rounded-md animate-pulse">
                      24/7 Priority
                    </span>
                  )}
                </div>
                
                <h3 className="font-extrabold text-primary group-hover:text-secondary text-base md:text-lg transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-mutedSlate text-xs md:text-sm leading-normal line-clamp-3">
                  {service.shortDesc}
                </p>
              </div>

              <div className="flex items-center space-x-1 text-xs font-bold text-secondary group-hover:text-secondary-dark pt-2 border-t border-slate-50">
                <span>View benefits & processes</span>
                <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. PLUMBING SECTION */}
      <section className="custom-container space-y-8">
        <div className="flex items-center space-x-3 border-b border-slate-200 pb-4 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <Wrench className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-primary">
              Licensed Plumbing Solutions
            </h2>
            <span className="text-xs text-mutedSlate font-semibold uppercase tracking-wider">
              8 Dedicated Plumbing Sub-Services
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plumbingServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group border border-slate-100 hover:border-accent/40 rounded-2xl p-6 bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 hover:scale-[1.01]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">💧</span>
                  {service.emergency && (
                    <span className="bg-accent/10 border border-accent/20 text-accent text-[9px] font-black uppercase px-2 py-0.5 rounded-md animate-pulse">
                      24/7 Priority
                    </span>
                  )}
                </div>
                
                <h3 className="font-extrabold text-primary group-hover:text-accent text-base md:text-lg transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-mutedSlate text-xs md:text-sm leading-normal line-clamp-3">
                  {service.shortDesc}
                </p>
              </div>

              <div className="flex items-center space-x-1 text-xs font-bold text-accent group-hover:text-accent-dark pt-2 border-t border-slate-50">
                <span>View benefits & processes</span>
                <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. EMERGENCY CALL STRIP */}
      <section className="bg-accent text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-5 [background-size:24px_24px]" />
        
        <div className="custom-container relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <span className="inline-flex bg-white/15 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
              🚨 24/7 Active Hotline
            </span>
            <h3 className="text-2xl md:text-3xl font-black mt-1 leading-none">
              Active AC Leak, Clog, or Burst Pipe?
            </h3>
            <p className="text-orange-55 text-sm md:text-base font-semibold">
              Don't wait. Talk to a NATE expert or master plumber immediately.
            </p>
          </div>

          <a
            href="tel:8445354822"
            className="flex items-center justify-center space-x-2 bg-white text-accent hover:bg-orange-50 font-black py-4 px-8 rounded-full text-base shadow-xl transition-transform hover:scale-[1.02] flex-shrink-0"
          >
            <Phone className="h-5 w-5 fill-accent stroke-none animate-bounce" />
            <span>Emergency Dispatch: (844) 535-4822</span>
          </a>
        </div>
      </section>

    </div>
  );
}
