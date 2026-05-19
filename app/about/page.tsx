"use client";

import * as React from "react";
import Link from "next/link";
import { ShieldCheck, Award, Heart, Users, Star, Clock, Phone, Calendar } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import LeadForm from "@/components/LeadForm";

export default function About() {
  const [modalOpen, setModalOpen] = React.useState(false);

  const values = [
    {
      icon: Heart,
      title: "Community & Family First",
      desc: "We are local neighbors. We treat your family, your pets, and your property with the same care and respect we would show our own parents.",
      color: "text-red-500 bg-red-50 border-red-100",
    },
    {
      icon: ShieldCheck,
      title: "100% Upfront Honesty",
      desc: "We charge flat-rate diagnostic fees and explain all repair options and exact prices before we turn a wrench. No hidden surprises or upsells.",
      color: "text-blue-500 bg-blue-50 border-blue-100",
    },
    {
      icon: Award,
      title: "Master-Tier Competence",
      desc: "Our trade teams are NATE-certified mechanical technicians and licensed master plumbers who undergo background screening and regular field training.",
      color: "text-amber-500 bg-amber-50 border-amber-100",
    },
    {
      icon: Clock,
      title: "Elite Speed & Reliability",
      desc: "A broken AC or sewer backup cannot wait. We maintain live-agent dispatching and route fully stocked trucks to restore comfort immediately.",
      color: "text-orange-500 bg-orange-50 border-orange-100",
    },
  ];

  return (
    <div className="space-y-20 pb-20 pt-8">
      
      {/* 1. HERO HEADER */}
      <section className="custom-container">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/15 px-3 py-1 rounded-full border border-accent/20">
              The Crew Behind JDL
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-white">
              Dedicated to Elite Local Service & Honest Craftsmanship
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Learn how a dedicated group of DMV tradesmen built Laurel's premier family-focused HVAC and plumbing company.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE STORY */}
      <section className="custom-container grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Story copy */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-black text-secondary uppercase tracking-widest bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/15">
            How We Started
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-primary tracking-tight mt-3">
            Built to Resolve the Trade Industry's Greatest Flaw
          </h2>
          <p className="text-mutedSlate text-sm md:text-base leading-relaxed">
            For years, the home services industry has been slowly overtaken by large national corporate conglomerates. Driven by numbers, quotas, and aggressive upselling, they turned a customer service emergency into high-pressure sales calls.
          </p>
          <p className="text-mutedSlate text-sm md:text-base leading-relaxed">
            At JDL HVAC & Plumbing Services, we set out to build a different kind of company. We wanted a business rooted strictly in the DMV community. A company where live-agent dispatch is guaranteed, pricing is transparent, NATE-certified expertise is absolute, and NATE technicians focus 100% on fixing the problem rather than selling you parts you don't need.
          </p>
          <p className="text-mutedSlate text-sm md:text-base leading-relaxed font-bold text-primary">
            Today, centrally based on Cherry Lane Ct in Laurel, Maryland, we dispatch dozens of fully equipped trucks daily across Maryland, Virginia, and D.C., keeping families comfortable and sewer lines flowing freely.
          </p>
        </div>

        {/* Stats Column */}
        <div className="lg:col-span-5 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-lg flex flex-col justify-between space-y-6">
          <h3 className="text-lg md:text-xl font-extrabold text-primary border-b border-slate-100 pb-3">
            Laurel Operational Milestones
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-50 pb-2">
              <span className="text-slate-500 font-bold text-sm">Main Office Location</span>
              <span className="text-primary font-black text-sm">Laurel, Maryland</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-50 pb-2">
              <span className="text-slate-500 font-bold text-sm">Google Review Rating</span>
              <span className="text-primary font-black text-sm">4.8 / 5.0 Stars</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-50 pb-2">
              <span className="text-slate-500 font-bold text-sm">NATE-Certified Team</span>
              <span className="text-primary font-black text-sm">Yes, 100%</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-50 pb-2">
              <span className="text-slate-500 font-bold text-sm">Licensed Master Plumber</span>
              <span className="text-primary font-black text-sm">Licensed #20875</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 font-bold text-sm">Emergency Dispatch Status</span>
              <span className="text-accent font-black text-sm animate-pulse">24/7 Available</span>
            </div>
          </div>

          <a
            href="tel:8445354822"
            className="w-full flex items-center justify-center space-x-2 bg-accent hover:bg-accent-dark text-white font-black py-3 px-4 rounded-xl text-center shadow-md transition-colors"
          >
            <Phone className="h-4.5 w-4.5 fill-white stroke-none animate-bounce" />
            <span>Call Live Operator Now</span>
          </a>
        </div>

      </section>

      {/* 3. CORE VALUES */}
      <section className="bg-white border-y border-slate-200/50 py-20">
        <div className="custom-container">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-black text-accent uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full border border-accent/15">
              JDL Crew Standards
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary tracking-tight mt-3">
              The Principles That Guide Our Dispatches
            </h2>
            <p className="text-mutedSlate text-sm md:text-base leading-relaxed">
              Every technician representing JDL at your front door is bound by a strict code of ethical, high-quality local trade standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-100/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:bg-white transition-all flex items-start space-x-4"
              >
                <div className={`p-3 rounded-xl flex items-center justify-center border flex-shrink-0 ${v.color}`}>
                  <v.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-primary text-base md:text-lg mb-1">
                    {v.title}
                  </h4>
                  <p className="text-mutedSlate text-xs md:text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRUST BADGES / CERTIFICATIONS */}
      <section className="custom-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Certification badges card */}
        <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl space-y-6">
          <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-secondary/10 blur-2xl" />
          
          <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/15 px-3 py-1 rounded-full border border-accent/20">
            Professional Accreditations
          </span>
          <h3 className="text-2xl md:text-3xl font-black text-white">
            NATE-Certified, Fully Bonded & Code Compliant
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Home mechanical systems are highly complex, pressurized systems involving combustible gas, electrical hazards, and high-pressure water grids. A minor amateur error can lead to fire, carbon monoxide poisoning, or structural flooding.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            JDL eliminates these risks. We are fully accredited NATE (North American Technician Excellence) contractors, EPA certified for safety refrigerants handling, and hold active master licenses in both HVAC mechanics and plumbing lines.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800 text-xs">
            <div className="flex items-center space-x-1.5 bg-slate-950/60 border border-slate-850 px-3.5 py-2 rounded-xl text-slate-300">
              <span>🛡</span>
              <span className="font-bold">NATE Certified Team</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-slate-950/60 border border-slate-850 px-3.5 py-2 rounded-xl text-slate-300">
              <span>💧</span>
              <span className="font-bold">Licensed Master Plumber</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-slate-950/60 border border-slate-850 px-3.5 py-2 rounded-xl text-slate-300">
              <span>🔥</span>
              <span className="font-bold">EPA Safety Approved</span>
            </div>
          </div>
        </div>

        {/* Call to action panel */}
        <div className="space-y-6 lg:pl-6">
          <span className="text-xs font-black text-secondary uppercase tracking-widest bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/15">
            Book NATE Experts
          </span>
          <h3 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
            Experience the JDL Local Advantage Today
          </h3>
          <p className="text-mutedSlate text-sm md:text-base leading-relaxed">
            Whether you are struggling with a warm, blowing AC on a summer afternoon, a cold furnace in January, or a ruptured basement plumbing pipe, the NATE experts at JDL are ready to serve you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center justify-center space-x-1.5 bg-secondary hover:bg-secondary-dark text-white font-black py-4 px-8 rounded-full text-base shadow-lg transition-transform hover:scale-[1.02] focus:outline-none"
            >
              <Calendar className="h-5 w-5" />
              <span>Schedule NATE Crew</span>
            </button>

            <a
              href="tel:8445354822"
              className="flex items-center justify-center space-x-1.5 bg-white border border-slate-200 hover:border-slate-300 text-primary font-extrabold py-4 px-8 rounded-full text-base shadow-sm transition-transform hover:scale-[1.02]"
            >
              <Phone className="h-5 w-5 fill-secondary stroke-none" />
              <span>Call (844) 535-4822</span>
            </a>
          </div>
        </div>

      </section>

      {/* Dialog consultation portal */}
      <Dialog
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Book NATE-Certified Technician"
      >
        <LeadForm onSubmitSuccess={() => setModalOpen(false)} />
      </Dialog>

    </div>
  );
}
