import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICE_AREAS } from "@/data/service-areas";
import { SERVICES } from "@/data/services";
import LeadForm from "@/components/LeadForm";
import { MapPin, Phone, ShieldCheck, CheckCircle2, ChevronRight, Calendar, ArrowLeft, Clock, Sparkles } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === resolvedParams.slug);

  if (!area) {
    return {
      title: "Service Area Not Found - JDL HVAC",
    };
  }

  return {
    title: area.metaTitle,
    description: area.metaDesc,
  };
}

export default async function ServiceAreaSinglePage({ params }: PageProps) {
  const resolvedParams = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === resolvedParams.slug);

  if (!area) {
    notFound();
  }

  // Get a handful of services to cross-link
  const hvacCore = SERVICES.filter((s) => s.category === "hvac").slice(0, 3);
  const plumbingCore = SERVICES.filter((s) => s.category === "plumbing").slice(0, 3);

  // Generate localized JSON-LD Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": `JDL HVAC & Plumbing Services - ${area.name} Branch`,
    "telephone": "(844) 535-4822",
    "url": `https://jdlhvacservices.com/service-area/${area.slug}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14300 Cherry Lane Ct Ste 116",
      "addressLocality": "Laurel",
      "addressRegion": "MD",
      "postalCode": "20707",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": area.fullName
    }
  };

  return (
    <div className="space-y-16 pb-20 pt-6">
      
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* 1. LOCALIZED HERO BANNER */}
      <section className="custom-container">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />

          <div className="relative z-10 max-w-4xl space-y-6">
            <Link
              href="/service-areas"
              className="inline-flex items-center space-x-1 text-slate-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider bg-slate-800/60 py-1.5 px-3 rounded-full border border-slate-750"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to all areas</span>
            </Link>

            <div className="space-y-3">
              <span className="inline-flex items-center space-x-1 bg-secondary/20 border border-secondary/35 text-secondary-light font-extrabold uppercase text-xs tracking-wider px-3.5 py-1 rounded-md">
                <span>📍 DMV Local Coverage</span>
              </span>
              
              <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-white mt-2">
                Trusted HVAC & Plumber in {area.fullName}
              </h1>
              
              <p className="text-accent font-bold text-base md:text-lg">
                {area.tagline}
              </p>
            </div>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl">
              {area.description}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="tel:8445354822"
                className="flex items-center justify-center space-x-2 bg-accent hover:bg-accent-dark text-white font-black py-3 px-6 rounded-full text-sm shadow-md transition-all hover:scale-102"
              >
                <Phone className="h-4 w-4 fill-white stroke-none animate-bounce" />
                <span>Call Local Tech: (844) 535-4822</span>
              </a>

              <div className="bg-white/5 border border-white/10 py-2 px-4 rounded-xl flex items-center justify-center space-x-1.5 text-xs text-slate-350 font-bold">
                <Clock className="h-4 w-4 text-green-450" />
                <span>Same-Day Dispatch Slots Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AREA DETAILS & MAP EMBED */}
      <section className="custom-container grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Coverage details */}
        <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-lg md:text-xl font-extrabold text-primary border-b border-slate-100 pb-3 mb-5 flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-secondary" />
              <span>Coverage in {area.name}</span>
            </h3>

            <div className="space-y-4">
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  1. Local Zip Codes Serviced:
                </span>
                <div className="flex flex-wrap gap-2">
                  {area.zipCodes.map((zip) => (
                    <span
                      key={zip}
                      className="bg-slate-50 border border-slate-100 font-bold text-xs text-slate-700 px-3 py-1 rounded-lg"
                    >
                      {zip}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  2. Communities & Neighborhoods We Route Daily:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700">
                  {area.neighborhoods.map((neigh, idx) => (
                    <div key={idx} className="flex items-center space-x-1.5">
                      <span className="text-green-500">✔</span>
                      <span>{neigh}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex items-start space-x-3 text-xs font-bold text-mutedSlate">
            <ShieldCheck className="h-5 w-5 text-green-550 flex-shrink-0 mt-0.5" />
            <div>
              <span className="block text-primary font-black">DMV Trade Code Compliance</span>
              <span className="block mt-0.5 leading-normal">
                Every single heater, AC replacement, and gas repiping is executed to meet the building codes of {area.fullName}, backed by municipal inspections.
              </span>
            </div>
          </div>
        </div>

        {/* Local Map Widget */}
        <div className="lg:col-span-5 h-[350px] lg:h-auto rounded-3xl overflow-hidden border border-slate-150 shadow-md">
          <iframe
            title={`JDL Coverage Map - ${area.name}`}
            src={area.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </section>

      {/* 3. DOCK DIRECT INTAKE FORM */}
      <section className="bg-white border-y border-slate-200/50 py-16">
        <div className="custom-container grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-black text-secondary uppercase tracking-widest bg-secondary/10 px-4 py-1.5 rounded-full">
              Quick Dispatch Booking
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-primary tracking-tight mt-3">
              Need Same-Day HVAC or Plumbing Help in {area.name}?
            </h3>
            <p className="text-mutedSlate text-sm md:text-base leading-relaxed">
              Don't pay exorbitant pricing for slow national corporate services. At JDL, we maintain a fleet of NATE-certified mechanical technicians and licensed master plumbers right in your neighborhood. Fill out this quick scheduler slot form to book now!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs font-bold text-slate-700">
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✔</span>
                <span>Diagnostics fee waived with completed repairs</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✔</span>
                <span>NATE-Certified service technicians</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✔</span>
                <span>24/7 same-day emergency dispatch</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✔</span>
                <span>Flexible financing on major upgrades</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <LeadForm />
          </div>

        </div>
      </section>

      {/* 4. CROSS LINKED CORE SERVICES */}
      <section className="custom-container space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-6">
          <div>
            <h3 className="text-lg md:text-xl font-extrabold text-primary">
              Core Services We Dispatched Daily to {area.name}
            </h3>
            <p className="text-mutedSlate text-xs md:text-sm">
              We handle all aspects of climate control and pipe systems.
            </p>
          </div>
          
          <Link
            href="/services"
            className="inline-flex items-center space-x-1 text-secondary font-bold text-sm"
          >
            <span>Explore all services catalog</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* HVAC column */}
          <div className="space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400">
              Heating & AC
            </span>
            <div className="grid gap-3">
              {hvacCore.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group block border border-slate-100 hover:border-secondary/40 p-4 rounded-2xl bg-white hover:shadow-md transition-all flex items-start justify-between"
                >
                  <div>
                    <h5 className="font-extrabold text-primary group-hover:text-secondary text-sm md:text-base">
                      {s.name}
                    </h5>
                    <p className="text-mutedSlate text-xs line-clamp-1 mt-0.5">
                      {s.shortDesc}
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-350 group-hover:text-secondary group-hover:translate-x-0.5 transition-all mt-1" />
                </Link>
              ))}
            </div>
          </div>

          {/* Plumbing Column */}
          <div className="space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400">
              Licensed Plumbing
            </span>
            <div className="grid gap-3">
              {plumbingCore.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group block border border-slate-100 hover:border-accent/40 p-4 rounded-2xl bg-white hover:shadow-md transition-all flex items-start justify-between"
                >
                  <div>
                    <h5 className="font-extrabold text-primary group-hover:text-accent text-sm md:text-base">
                      {s.name}
                    </h5>
                    <p className="text-mutedSlate text-xs line-clamp-1 mt-0.5">
                      {s.shortDesc}
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-350 group-hover:text-accent group-hover:translate-x-0.5 transition-all mt-1" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
