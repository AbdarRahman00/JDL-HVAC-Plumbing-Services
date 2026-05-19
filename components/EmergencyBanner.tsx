"use client";

import { Phone, Clock, ShieldCheck } from "lucide-react";

export default function EmergencyBanner() {
  return (
    <div className="bg-accent text-white py-2 px-4 shadow-sm relative z-40">
      <div className="custom-container flex flex-col sm:flex-row items-center justify-between gap-2 text-xs md:text-sm font-medium">
        
        {/* Left Side Status */}
        <div className="flex items-center space-x-2">
          {/* Pulsing indicator */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          <span className="tracking-wide uppercase text-[10px] bg-white/10 px-2 py-0.5 rounded-full">
            Live Dispatch Active
          </span>
          <div className="flex items-center space-x-1 text-orange-50">
            <Clock className="h-3.5 w-3.5" />
            <span>24/7 Same-Day Emergency Service</span>
          </div>
        </div>

        {/* Center/Right Actions */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-1 text-orange-100">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Laurel Office: 14300 Cherry Lane Ct</span>
          </div>

          <a
            href="tel:8445354822"
            className="flex items-center space-x-1.5 bg-white text-accent hover:bg-orange-50 transition-all duration-200 py-1 px-3 rounded-full text-xs font-bold shadow-sm group hover:scale-[1.03]"
          >
            <Phone className="h-3.5 w-3.5 fill-accent stroke-none animate-bounce group-hover:scale-110" />
            <span>Emergency Line: (844) 535-4822</span>
          </a>
        </div>

      </div>
    </div>
  );
}
