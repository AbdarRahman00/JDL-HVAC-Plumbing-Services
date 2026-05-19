import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES } from "@/data/services";
import { SERVICE_AREAS } from "@/data/service-areas";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import LeadForm from "@/components/LeadForm";
import { Flame, Wrench, ShieldCheck, CheckCircle2, ChevronRight, Phone, Calendar, ArrowLeft, Sparkles, HelpCircle } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const service = SERVICES.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    return {
      title: "Service Not Found - JDL HVAC",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDesc,
  };
}

export default async function ServiceSinglePage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = SERVICES.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  // Get related services (same category, different slug)
  const related = SERVICES.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3);

  // Generate dynamic JSON-LD Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "provider": {
      "@type": "HVACBusiness",
      "name": "JDL HVAC & Plumbing Services",
      "telephone": "(844) 535-4822",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "14300 Cherry Lane Ct Ste 116",
        "addressLocality": "Laurel",
        "addressRegion": "MD",
        "postalCode": "20707",
        "addressCountry": "US"
      }
    },
    "description": service.shortDesc,
    "areaServed": SERVICE_AREAS.map((area) => ({
      "@type": "AdministrativeArea",
      "name": area.fullName
    }))
  };

  return (
    <div className="space-y-16 pb-20 pt-6">
      
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* 1. PREMIUM SERVICE HERO */}
      <section className="custom-container">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-secondary/25 blur-3xl" />
          
          <div className="relative z-10 max-w-4xl space-y-6">
            <Link
              href="/services"
              className="inline-flex items-center space-x-1 text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider bg-slate-800/60 py-1.5 px-3 rounded-full border border-slate-750"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to all services</span>
            </Link>

            <div className="space-y-3">
              <span className="inline-flex items-center space-x-1.5 bg-accent/20 border border-accent/30 text-accent font-extrabold uppercase text-xs tracking-wider px-3.5 py-1 rounded-md">
                <span>{service.category === "hvac" ? "🔥 Heating & Air Conditioning" : "💧 Licensed Plumbing"}</span>
              </span>
              
              <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-white mt-2">
                {service.name}
              </h1>
              
              <p className="text-accent font-bold text-base md:text-lg">
                {service.tagline}
              </p>
            </div>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl">
              {service.longDesc}
            </p>

            {service.pricingInfo && (
              <div className="bg-white/5 border border-white/10 py-2 px-4 rounded-xl inline-flex items-center space-x-2 text-xs font-bold text-slate-300">
                <Sparkles className="h-4.5 w-4.5 text-accent fill-accent" />
                <span>Special Promotion: {service.pricingInfo}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. PROBLEMS SOLVED & BENEFITS GRID */}
      <section className="custom-container grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Symptoms Checklist */}
        <div className="lg:col-span-6 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-lg md:text-xl font-extrabold text-primary border-b border-slate-100 pb-3 mb-5 flex items-center space-x-2">
              <span className="text-red-500">✕</span>
              <span>{service.problemsTitle}</span>
            </h3>
            
            <ul className="space-y-4">
              {service.problems.map((prob, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs md:text-sm font-semibold text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-red-500 flex-shrink-0 mt-1.5" />
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50/50 border border-red-100 p-4 rounded-2xl text-xs font-bold text-red-800 mt-8">
            📢 <span className="font-extrabold">Active system danger?</span> Turn the breaker or gas off at the main valve and contact JDL dispatch immediately.
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-extrabold text-primary border-b border-slate-100 pb-3 mb-5 flex items-center space-x-2">
              <ShieldCheck className="h-5 w-5 text-secondary" />
              <span>{service.benefitsTitle}</span>
            </h3>

            {service.benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex items-start space-x-3.5"
              >
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-primary text-sm md:text-base">
                    {b.title}
                  </h4>
                  <p className="text-mutedSlate text-xs md:text-sm leading-normal mt-0.5">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* 3. STEP-BY-STEP PROCESS */}
      <section className="bg-white border-y border-slate-200/50 py-16">
        <div className="custom-container space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black text-secondary uppercase tracking-widest bg-secondary/10 px-4 py-1.5 rounded-full">
              How We Work
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-primary mt-2">
              {service.processTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-black text-secondary-light/40">
                    {step.step}
                  </span>
                  <div className="h-1.5 w-10 bg-secondary rounded-full" />
                </div>
                
                <div>
                  <h4 className="font-extrabold text-primary text-sm md:text-base">
                    {step.title}
                  </h4>
                  <p className="text-mutedSlate text-xs leading-normal mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQS ACCORDION & LEAD INTAKE */}
      <section className="custom-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Accordions */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
            <HelpCircle className="h-5 w-5 text-secondary animate-pulse" />
            <h3 className="text-lg md:text-xl font-extrabold text-primary">
              Frequently Asked Questions
            </h3>
          </div>

          <Accordion className="w-full">
            {service.faqs.map((faq, idx) => (
              <AccordionItem key={idx} id={idx} title={faq.question}>
                {faq.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Form Intake */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-900 rounded-2xl p-4 text-white text-center text-xs font-bold flex items-center justify-center space-x-2">
            <Sparkles className="h-4.5 w-4.5 text-accent fill-accent animate-spin" />
            <span>Secure Same-Day Priority Dispatch Slot</span>
          </div>
          <LeadForm defaultServiceSlug={service.slug} />
        </div>

      </section>

      {/* 5. RELATED SERVICES & AREA COVERAGE */}
      <section className="custom-container space-y-8">
        <div className="border-t border-slate-200 pt-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-lg md:text-xl font-extrabold text-primary">
              Other Related {service.category === "hvac" ? "HVAC" : "Plumbing"} Services
            </h4>
            <p className="text-mutedSlate text-xs md:text-sm">
              Explore nearby solutions for your home comfort.
            </p>
          </div>
          
          <Link
            href="/services"
            className="inline-flex items-center space-x-1 text-secondary font-bold text-sm"
          >
            <span>View all services dashboard</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((rel) => (
            <Link
              key={rel.slug}
              href={`/services/${rel.slug}`}
              className="group border border-slate-150 rounded-2xl p-5 hover:border-secondary hover:shadow-md bg-white hover:bg-slate-50/20 transition-all flex flex-col justify-between"
            >
              <div>
                <h5 className="font-extrabold text-primary group-hover:text-secondary text-sm md:text-base">
                  {rel.name.replace(" & Troubleshooting", "").replace(" & Heating Diagnostics", "")}
                </h5>
                <p className="text-mutedSlate text-xs line-clamp-2 mt-1 leading-normal">
                  {rel.shortDesc}
                </p>
              </div>
              <span className="text-xs font-bold text-secondary flex items-center space-x-0.5 mt-3 group-hover:translate-x-0.5 transition-transform">
                <span>View service details</span>
                <ChevronRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
