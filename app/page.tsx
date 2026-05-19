"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  ShieldCheck,
  Calendar,
  Sparkles,
  Award,
  Clock,
  Coins,
  ChevronRight,
  Star,
  Users,
  Flame,
  Wrench,
  ThumbsUp,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";
import BeforeAfter from "@/components/BeforeAfter";
import TestimonialSlider from "@/components/TestimonialSlider";
import { SERVICES } from "@/data/services";
import { SERVICE_AREAS } from "@/data/service-areas";
import { Dialog } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export default function Home() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Group services for structured highlights
  const hvacHighlights = SERVICES.filter((s) => s.category === "hvac").slice(0, 5);
  const plumbingHighlights = SERVICES.filter((s) => s.category === "plumbing").slice(0, 5);

  const trustBadges = [
    {
      icon: ShieldCheck,
      title: "Licensed & Insured",
      desc: "Fully compliant with DMV safety and mechanical regulations.",
      color: "text-blue-600 bg-blue-50",
    },
    {
      icon: Clock,
      title: "Same-Day Service",
      desc: "Live dispatchers routing NATE-certified techs to you immediately.",
      color: "text-accent bg-orange-50",
    },
    {
      icon: ThumbsUp,
      title: "Honest Upfront Pricing",
      desc: "Flat-rate diagnostic fees and quotes before any repairs begin.",
      color: "text-green-650 bg-green-50",
    },
    {
      icon: Coins,
      title: "Flexible Financing",
      desc: "Approachable monthly terms & low interest promotions.",
      color: "text-purple-600 bg-purple-50",
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION & LEAD INTAKE */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 py-16 lg:py-24 text-white">
        
        {/* Background visual accents */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />

        <div className="custom-container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Trust Signals */}
          <div className="lg:col-span-7 space-y-6 lg:pr-6">
            
            {/* Urgent Dispatch Notification Tag */}
            <div className="inline-flex items-center space-x-2 bg-accent/20 border border-accent/35 px-4 py-1.5 rounded-full text-xs font-black text-accent uppercase tracking-wider animate-pulse">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>24/7 Same-Day Dispatch Available</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
              Trusted <span className="text-secondary-light">HVAC</span> & <span className="text-accent-light">Plumbing</span> Services in Laurel, MD
            </h1>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
              Don't deal with bait-and-switch pricing or late technicians. Get fast, reliable, same-day HVAC and plumbing services from Laurel's community experts. Certified, honest, and available 24/7.
            </p>

            {/* Quick stats / rating bar */}
            <div className="flex items-center space-x-6 py-2 border-y border-slate-800/80 max-w-lg">
              <div className="flex items-center space-x-1.5">
                <div className="flex space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 text-accent fill-accent" />
                  ))}
                </div>
                <span className="text-sm font-black text-white">4.8 Stars</span>
              </div>
              <div className="h-4 w-px bg-slate-850" />
              <div className="text-xs font-bold text-slate-400">
                240+ Verified Local Google Reviews
              </div>
            </div>

            {/* Immediate Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="tel:8445354822"
                className="flex items-center justify-center space-x-2 bg-accent hover:bg-accent-dark text-white font-black py-4 px-8 rounded-full text-base shadow-xl transition-all hover:scale-[1.03] group"
              >
                <Phone className="h-5 w-5 fill-white stroke-none animate-bounce" />
                <span>Call Dispatch: (844) 535-4822</span>
              </a>

              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white font-extrabold py-4 px-8 rounded-full text-base border border-slate-700 transition-all hover:scale-[1.03]"
              >
                <Calendar className="h-5 w-5 text-secondary-light" />
                <span>Book Service Online</span>
              </button>
            </div>

            {/* Minor DMV trust banner */}
            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400 pt-2">
              <ShieldCheck className="h-4.5 w-4.5 text-green-500" />
              <span>Proudly serving Laurel, Bowie, Columbia, Silver Spring & the DMV region</span>
            </div>

          </div>

          {/* Right Column: Hero Intake Form */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Form title callout */}
              <div className="absolute -top-3 -right-3 z-10 bg-accent text-white font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded-lg shadow-lg rotate-3 flex items-center space-x-1">
                <Sparkles className="h-3 w-3 fill-white stroke-none" />
                <span>Guaranteed Reply</span>
              </div>
              
              <div className="text-primary">
                {mounted ? (
                  <LeadForm />
                ) : (
                  <div className="min-h-[350px] flex flex-col items-center justify-center text-center space-y-3 py-6 bg-white rounded-3xl border border-slate-100 shadow-xl">
                    <span className="text-xs font-bold text-slate-400">
                      Loading Priority Booking Slot...
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SERVICES GRID OVERVIEW */}
      <section className="custom-container">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-black text-secondary uppercase tracking-widest bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/15">
            JDL Core Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary tracking-tight mt-3">
            Professional HVAC & Plumbing Solutions
          </h2>
          <p className="text-mutedSlate text-sm md:text-base leading-relaxed">
            Click on any service below to explore dedicated SEO benefits, common symptoms resolved, transparent process, and specific service FAQs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* HVAC Grid Column */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-md space-y-6">
            <div className="flex items-center space-x-3 border-b border-slate-150 pb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <Flame className="h-6 w-6 fill-secondary/20" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-primary">
                  Heating & Air Conditioning
                </h3>
                <span className="text-xs text-mutedSlate font-semibold uppercase tracking-wider">
                  NATE-Certified HVAC Contractors
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {hvacHighlights.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group block border border-slate-100 hover:border-secondary/40 p-4 rounded-2xl bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <span className="block font-extrabold text-primary group-hover:text-secondary text-sm md:text-base mb-1 transition-colors">
                    {s.name.replace(" & Troubleshooting", "").replace(" & Heating Diagnostics", "")}
                  </span>
                  <span className="block text-mutedSlate text-xs leading-normal line-clamp-2">
                    {s.shortDesc}
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href="/services"
              className="inline-flex items-center space-x-1.5 text-secondary hover:text-secondary-dark font-extrabold text-sm md:text-base pt-2 group"
            >
              <span>Explore all HVAC services</span>
              <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Plumbing Grid Column */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-md space-y-6">
            <div className="flex items-center space-x-3 border-b border-slate-150 pb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Wrench className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-primary">
                  Professional Plumbing
                </h3>
                <span className="text-xs text-mutedSlate font-semibold uppercase tracking-wider">
                  Licensed Master Plumbers
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {plumbingHighlights.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group block border border-slate-100 hover:border-accent/40 p-4 rounded-2xl bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <span className="block font-extrabold text-primary group-hover:text-accent text-sm md:text-base mb-1 transition-colors">
                    {s.name.replace(" & Clog Clearing", "").replace(" & Diagnostics", "").replace(" & Fixes", "")}
                  </span>
                  <span className="block text-mutedSlate text-xs leading-normal line-clamp-2">
                    {s.shortDesc}
                  </span>
                </Link>
              ))}
            </div>

            <Link
              href="/services"
              className="inline-flex items-center space-x-1.5 text-accent hover:text-accent-dark font-extrabold text-sm md:text-base pt-2 group"
            >
              <span>Explore all plumbing services</span>
              <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="bg-white border-y border-slate-200/60 py-20 relative overflow-hidden">
        <div className="custom-container">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-black text-accent uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full border border-accent/15">
              The JDL Advantage
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary tracking-tight mt-3">
              Why Laurel Homeowners Trust JDL
            </h2>
            <p className="text-mutedSlate text-sm md:text-base leading-relaxed">
              We are faster and more responsive than large national corporate conglomerates, while delivering a level of premium, local craftsmanship they simply cannot duplicate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow hover:bg-white flex flex-col items-start gap-4"
              >
                <div className={cn("p-3 rounded-xl flex items-center justify-center", badge.color)}>
                  <badge.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-primary text-base md:text-lg mb-1">
                    {badge.title}
                  </h4>
                  <p className="text-mutedSlate text-xs md:text-sm leading-relaxed">
                    {badge.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mini Counter Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 border-t border-slate-150 text-center max-w-4xl mx-auto">
            <div>
              <span className="block text-3xl md:text-4xl font-black text-secondary">
                100%
              </span>
              <span className="block text-xs font-bold text-slate-500 uppercase tracking-wide mt-1">
                Licensed & Insured
              </span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-black text-accent">
                24/7
              </span>
              <span className="block text-xs font-bold text-slate-500 uppercase tracking-wide mt-1">
                Emergency Response
              </span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-black text-secondary">
                4.8★
              </span>
              <span className="block text-xs font-bold text-slate-500 uppercase tracking-wide mt-1">
                Google Rating
              </span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-black text-accent">
                15 Min
              </span>
              <span className="block text-xs font-bold text-slate-500 uppercase tracking-wide mt-1">
                Reply Guarantee
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BEFORE & AFTER WIDGET */}
      <section className="custom-container">
        <BeforeAfter />
      </section>

      {/* 5. ABOUT COMPANY OVERVIEW */}
      <section className="custom-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Images mockup / details */}
        <div className="space-y-6 bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-secondary to-accent" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/15 blur-3xl" />

          <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/15 px-3 py-1 rounded-full border border-accent/20">
            About Our Company
          </span>
          <h3 className="text-2xl md:text-3xl font-black text-white">
            Rooted in Laurel, Serving the Greater DMV Area
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            At JDL HVAC & Plumbing Services, we believe home comfort should never be stressful. We started this business to build a company that homeowners can trust unconditionally. No corporate fluff, no high-pressure sales techniques, and no hidden surcharges. Just highly experienced, certified tradesmen who arrive on time, treat your family with respect, and do the job right the first time.
          </p>

          <div className="grid grid-cols-2 gap-4 text-xs font-bold pt-4 border-t border-slate-800">
            <div className="flex items-center space-x-2 text-slate-350">
              <span className="text-secondary">✔</span>
              <span>NATE Certified Team</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-350">
              <span className="text-accent">✔</span>
              <span>Licensed Plumbers</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-350">
              <span className="text-secondary">✔</span>
              <span>Laurel Office Location</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-350">
              <span className="text-accent">✔</span>
              <span>24/7 Priority Dispatch</span>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center space-x-1.5 text-accent hover:text-accent-light font-extrabold text-sm md:text-base pt-2 group"
          >
            <span>Learn more about our crew</span>
            <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Right Side: Authority / Trust Details */}
        <div className="space-y-6 lg:pl-6">
          <span className="text-xs font-black text-secondary uppercase tracking-widest bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/15">
            DMV Authority
          </span>
          <h3 className="text-3xl md:text-4xl font-black text-primary tracking-tight">
            Family-Owned Local Mechanical Experts
          </h3>
          <p className="text-mutedSlate text-sm md:text-base leading-relaxed">
            Corporate national plumbing and HVAC companies view you as a number. We view you as our neighbor. We have lived and worked in Maryland and the DMV for decades, giving us unique insights into localized weather issues:
          </p>

          <div className="space-y-4 font-semibold text-slate-700">
            <div className="flex items-start space-x-3 bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
              <div className="h-6 w-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                1
              </div>
              <div>
                <h5 className="text-primary font-extrabold text-sm md:text-base mb-0.5">
                  DMV Weather Demands
                </h5>
                <p className="text-mutedSlate text-xs md:text-sm">
                  We size and configure heating and air conditioning units specifically tailored to withstand Maryland's humid summers and freezing winter cycles.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 bg-white border border-slate-100 rounded-xl p-4 shadow-sm">
              <div className="h-6 w-6 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                2
              </div>
              <div>
                <h5 className="text-primary font-extrabold text-sm md:text-base mb-0.5">
                  Historic Home Sewer Solutions
                </h5>
                <p className="text-mutedSlate text-xs md:text-sm">
                  Our plumbing team has extensive experience repiping older historic DMV homes, managing tree root clearing, and addressing pipe leaks with non-invasive methods.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* 6. SERVICE AREAS DIRECTORY */}
      <section className="bg-slate-900 border-y border-slate-950 py-20 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        
        <div className="custom-container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Summary */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/15 px-3 py-1 rounded-full border border-accent/20">
              Active Service Footprint
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Proudly Serving Laurel & the Entire DMV Region
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We dispatch NATE-certified mechanical technicians and licensed master plumbers right from our central Cherry Lane office to homes across Maryland, Northern Virginia, and Washington D.C. Click on any city below to explore localized mapping, nearby reviews, and custom local landing pages!
            </p>
            <div className="pt-2">
              <Link
                href="/service-areas"
                className="inline-flex items-center space-x-1 bg-secondary text-white font-extrabold py-3 px-6 rounded-full text-sm shadow-md transition-all hover:scale-102 hover:bg-secondary-dark"
              >
                <span>View Full Map Coverage</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Area Grid links */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SERVICE_AREAS.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-area/${area.slug}`}
                  className="block rounded-2xl bg-slate-950/50 hover:bg-slate-950 border border-slate-800 hover:border-secondary p-4 text-center transition-all duration-300 hover:shadow-lg shadow-secondary/5 group hover:scale-[1.02]"
                >
                  <span className="block font-black text-white text-sm md:text-base group-hover:text-secondary-light">
                    {area.name}
                  </span>
                  <span className="block text-slate-500 text-[10px] uppercase font-bold mt-1 tracking-wider">
                    {area.state === "MD" ? "Maryland" : "Virginia"}
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. TESTIMONIALS Google Reviews */}
      <section className="custom-container">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-black text-secondary uppercase tracking-widest bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/15">
            Client Satisfaction
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary tracking-tight mt-3">
            What Your Neighbors Say About JDL
          </h2>
          <p className="text-mutedSlate text-sm md:text-base leading-relaxed">
            We work incredibly hard to earn five-star ratings on every dispatch call. Don't take our word for it — read reviews directly from verified local homeowners.
          </p>
        </div>

        <TestimonialSlider />
      </section>

      {/* 8. FINANCING BANNER STRIP */}
      <section className="custom-container">
        <div className="bg-gradient-to-tr from-secondary to-blue-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Background elements */}
          <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-accent/25 blur-3xl" />

          <div className="space-y-4 max-w-xl relative z-10">
            <span className="text-[10px] font-black text-accent uppercase tracking-widest bg-white text-accent px-3 py-1 rounded-md shadow-sm border">
              Flexible Finance Tiers
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mt-2 leading-none">
              Need a New System? Pay Approachably Over Time!
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              New HVAC units or tankless water heaters are major investments. JDL partners with trusted lenders to deliver zero-down financing options, low-interest payment terms, and assistance claiming up to $2,000 in federal tax credits!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 relative z-10 flex-shrink-0 w-full lg:w-auto">
            <Link
              href="/financing"
              className="flex items-center justify-center space-x-1.5 bg-accent hover:bg-accent-dark text-white font-black py-4 px-8 rounded-full text-base shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Financing Plans</span>
              <ChevronRight className="h-5 w-5" />
            </Link>

            <a
              href="tel:8445354822"
              className="flex items-center justify-center space-x-1.5 bg-white/10 hover:bg-white/20 text-white font-extrabold py-4 px-8 rounded-full text-base border border-white/20 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="h-5 w-5 fill-white stroke-none" />
              <span>Ask Our Staff</span>
            </a>
          </div>

        </div>
      </section>

      {/* 9. EMERGENCY STRIP CTA */}
      <section className="bg-accent text-white py-12 relative overflow-hidden border-y border-orange-600 shadow-xl">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-5 [background-size:24px_24px]" />
        
        <div className="custom-container relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-1 bg-white/15 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
              🚨 Priority Emergency Dispatch
            </div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-none mt-1">
              Need Fast HVAC or Plumbing Help?
            </h3>
            <p className="text-orange-55 text-sm md:text-base font-semibold">
              Don't wait! Live dispatch coordinators are routing NATE-certified techs right now.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto flex-shrink-0">
            <a
              href="tel:8445354822"
              className="flex items-center justify-center space-x-2 bg-white text-accent hover:bg-orange-50 font-black py-4 px-8 rounded-full text-base shadow-xl transition-all hover:scale-[1.03]"
            >
              <Phone className="h-5 w-5 fill-accent stroke-none animate-bounce" />
              <span>Call Now: (844) 535-4822</span>
            </a>

            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-950 text-white font-extrabold py-4 px-8 rounded-full text-base transition-all hover:scale-[1.03]"
            >
              <Calendar className="h-5 w-5 text-accent-light" />
              <span>Book Online Instant</span>
            </button>
          </div>

        </div>
      </section>

      {/* Dialog Online Scheduler */}
      {mounted && (
        <Dialog
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Schedule Service Booking"
        >
          <LeadForm onSubmitSuccess={() => setModalOpen(false)} />
        </Dialog>
      )}

    </div>
  );
}
