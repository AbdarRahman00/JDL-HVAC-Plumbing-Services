"use client";

import * as React from "react";
import { Coins, ShieldCheck, FileCheck2, Percent, Calculator, Sparkles, Phone, Calendar } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import LeadForm from "@/components/LeadForm";

export default function Financing() {
  const [modalOpen, setModalOpen] = React.useState(false);

  const plans = [
    {
      icon: Percent,
      title: "0% APR Interest Promo",
      duration: "For 12 Months",
      desc: "Perfect for emergency water heater burstings or sudden furnace failures. Pay off the system comfortably within a full year with zero accrued interest fees.",
      tag: "Most Popular",
      color: "bg-secondary text-white border-secondary",
    },
    {
      icon: Calculator,
      title: "Low monthly payments",
      duration: "Up to 84 Months",
      desc: "Keep your household cash flow healthy. Get long-term mechanical loans starting at 5.99% APR, resulting in predictable payments as low as $89/month.",
      tag: "Budget Friendly",
      color: "bg-slate-900 text-white border-slate-900",
    },
    {
      icon: Coins,
      title: "Zero Down Upfront",
      duration: "Immediate Approvals",
      desc: "Get your heating, cooling, or main sewer system replaced today without paying a single penny out of pocket. Live dispatchers guide your secure application.",
      tag: "Emergency Relief",
      color: "bg-accent text-white border-accent",
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
              Payment Flexibility
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-white">
              Flexible HVAC & Plumbing Financing Plans
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Don't stress over a sudden breakdown. JDL delivers flexible, low-interest financing options and helps you secure federal tax credits to keep home system upgrades approachable.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PLANS GRID */}
      <section className="custom-container space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black text-secondary uppercase tracking-widest bg-secondary/10 px-4 py-1.5 rounded-full">
            Financing Tiers
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-primary mt-2">
            Choose the Perfect Plan for Your Budget
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className="border border-slate-100 rounded-3xl p-6 bg-white shadow-md flex flex-col justify-between space-y-6 hover:shadow-xl transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-slate-50 border border-slate-100 px-3 py-1 rounded-full text-slate-500">
                    {p.tag}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-extrabold text-primary text-lg md:text-xl">
                    {p.title}
                  </h3>
                  <span className="block font-black text-secondary text-base uppercase tracking-wider">
                    {p.duration}
                  </span>
                </div>

                <p className="text-mutedSlate text-xs md:text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-150 text-primary font-black py-2.5 px-4 rounded-xl text-xs md:text-sm transition-colors text-center"
              >
                Inquire About Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TAX CREDITS callout */}
      <section className="custom-container">
        <div className="bg-gradient-to-tr from-slate-900 to-slate-950 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-850">
          
          <div className="space-y-4 max-w-2xl relative z-10">
            <span className="text-[10px] font-black text-accent uppercase tracking-widest bg-accent/15 border border-accent/20 px-3 py-1 rounded-md">
              Federal 25C Rebates
            </span>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight mt-2 leading-none">
              Claim Up to $2,000 in Energy Star Tax Credits!
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Under the Inflation Reduction Act, upgrading to high-efficiency Heat Pumps and Tankless Water Heaters qualifies you for major federal tax rebates of up to $2,000. JDL's NATE-certified mechanical estimators size and configure eligible Energy Star systems, and provide complete documentation so you can claim these credits effortlessly on your taxes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 relative z-10 flex-shrink-0 w-full lg:w-auto">
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center justify-center space-x-1.5 bg-accent hover:bg-accent-dark text-white font-black py-4 px-8 rounded-full text-base shadow-lg transition-transform hover:scale-[1.02]"
            >
              <span>Verify Credit Eligibility</span>
            </button>
          </div>

        </div>
      </section>

      {/* 4. STEPS */}
      <section className="custom-container space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black text-secondary uppercase tracking-widest bg-secondary/10 px-4 py-1.5 rounded-full">
            Application Guide
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-primary mt-2">
            Secure Funding in 3 Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              step: "01",
              title: "Schedule Free Estimate",
              desc: "Book a complimentary field audit. Our technician will assess your system and provide itemized replacement options.",
            },
            {
              step: "02",
              title: "Choose Custom Monthly Payments",
              desc: "Compare tiered financing options side-by-side. Select the APR term that fits your household cash flow.",
            },
            {
              step: "03",
              title: "Get Approved Digitally",
              desc: "Fill out a highly secure, non-invasive digital application. Secured approvals are returned in less than 2 minutes.",
            },
          ].map((s) => (
            <div
              key={s.step}
              className="bg-white border border-slate-100 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between space-y-4 shadow-sm"
            >
              <span className="text-2xl font-black text-secondary-light/45">
                {s.step}
              </span>
              <div>
                <h4 className="font-extrabold text-primary text-base">
                  {s.title}
                </h4>
                <p className="text-mutedSlate text-xs md:text-sm mt-1 leading-normal">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Dialogue */}
      <Dialog
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Consultation Request - Financing"
      >
        <LeadForm onSubmitSuccess={() => setModalOpen(false)} />
      </Dialog>

    </div>
  );
}
