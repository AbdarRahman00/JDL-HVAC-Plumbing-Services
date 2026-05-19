"use client";

import Link from "next/link";
import { MapPin, Phone, ShieldCheck, Clock, ChevronRight } from "lucide-react";
import { SERVICE_AREAS } from "@/data/service-areas";

export default function ServiceAreasDirectory() {
  const mdAreas = SERVICE_AREAS.filter((a) => a.state === "MD");
  const vaAreas = SERVICE_AREAS.filter((a) => a.state === "VA");

  return (
    <div className="space-y-20 pb-20 pt-8">
      
      {/* 1. HERO HEADER */}
      <section className="custom-container">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/15 px-3 py-1 rounded-full border border-accent/20">
              Coverage Network
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-white">
              Proudly Dispatching Across Laurel & the DMV Region
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              We dispatch dozens of NATE-certified mechanical technicians and licensed master plumbers daily from our central Laurel headquarters to homeowners across Maryland and Northern Virginia.
            </p>
          </div>
        </div>
      </section>

      {/* 2. AREA GRIDS SECTION */}
      <section className="custom-container grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Maryland Column */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2 border-b border-slate-200 pb-3">
            <span className="text-2xl">🦀</span>
            <div>
              <h2 className="text-2xl font-black text-primary">
                Maryland Coverage Network
              </h2>
              <span className="text-xs text-mutedSlate font-semibold uppercase tracking-wider">
                7 Major Municipalities Serviced Daily
              </span>
            </div>
          </div>

          <div className="grid gap-4">
            {mdAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-area/${area.slug}`}
                className="group border border-slate-100 hover:border-secondary/40 rounded-2xl p-5 bg-white hover:shadow-md transition-all flex items-start justify-between"
              >
                <div>
                  <h3 className="font-extrabold text-primary group-hover:text-secondary text-base md:text-lg">
                    {area.fullName}
                  </h3>
                  <p className="text-mutedSlate text-xs line-clamp-1 mt-1 leading-normal">
                    Servicing neighborhoods in {area.neighborhoods.slice(0, 3).join(", ")}...
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {area.zipCodes.slice(0, 4).map((zip) => (
                      <span key={zip} className="bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-500 px-2 py-0.5 rounded">
                        {zip}
                      </span>
                    ))}
                    {area.zipCodes.length > 4 && (
                      <span className="text-[10px] font-bold text-slate-400 px-1 py-0.5">
                        +{area.zipCodes.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-slate-350 group-hover:text-secondary group-hover:translate-x-0.5 transition-all mt-1" />
              </Link>
            ))}
          </div>
        </div>

        {/* Northern Virginia Column */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2 border-b border-slate-200 pb-3">
            <span className="text-2xl">🛡</span>
            <div>
              <h2 className="text-2xl font-black text-primary">
                Northern Virginia Coverage Network
              </h2>
              <span className="text-xs text-mutedSlate font-semibold uppercase tracking-wider">
                3 Major Municipalities Serviced Daily
              </span>
            </div>
          </div>

          <div className="grid gap-4">
            {vaAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-area/${area.slug}`}
                className="group border border-slate-100 hover:border-secondary/40 rounded-2xl p-5 bg-white hover:shadow-md transition-all flex items-start justify-between"
              >
                <div>
                  <h3 className="font-extrabold text-primary group-hover:text-secondary text-base md:text-lg">
                    {area.fullName}
                  </h3>
                  <p className="text-mutedSlate text-xs line-clamp-1 mt-1 leading-normal">
                    Servicing neighborhoods in {area.neighborhoods.slice(0, 3).join(", ")}...
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {area.zipCodes.slice(0, 4).map((zip) => (
                      <span key={zip} className="bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-500 px-2 py-0.5 rounded">
                        {zip}
                      </span>
                    ))}
                    {area.zipCodes.length > 4 && (
                      <span className="text-[10px] font-bold text-slate-400 px-1 py-0.5">
                        +{area.zipCodes.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-slate-350 group-hover:text-secondary group-hover:translate-x-0.5 transition-all mt-1" />
              </Link>
            ))}
          </div>
        </div>

      </section>

      {/* 3. PRIMARY OFFICE BRANCH info */}
      <section className="custom-container grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-md space-y-6">
          <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
            <MapPin className="h-5 w-5 text-secondary" />
            <h3 className="text-lg md:text-xl font-extrabold text-primary">
              Laurel, MD Headquarters Office
            </h3>
          </div>

          <p className="text-mutedSlate text-sm leading-relaxed">
            Our physical branch office is located inside the Cherry Lane Court Office Suite Complex in Laurel, Maryland. This strategic central location allows immediate access to major highways (I-95, US-1, MD-200 ICC), enabling our dispatch desk to route emergency trucks rapidly to Bowie, Columbia, Silver Spring, Arlington, Alexandria, and beyond.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold text-slate-700">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-4.5 w-4.5 text-green-500" />
              <span>Laurel Office: 14300 Cherry Lane Ct Ste 116</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4.5 w-4.5 text-secondary" />
              <span>Dispatch Line: (844) 535-4822</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 h-[280px] rounded-3xl overflow-hidden border border-slate-150 shadow-md">
          <iframe
            title="JDL HQ Laurel Office Location"
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
