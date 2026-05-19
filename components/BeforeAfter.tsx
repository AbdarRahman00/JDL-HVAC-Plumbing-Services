"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, CheckCircle2, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  category: "hvac" | "plumbing";
  location: string;
  beforeStats: string[];
  afterStats: string[];
  description: string;
  beforeLabel: string;
  afterLabel: string;
  beforeHighlight: string;
  afterHighlight: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "High-Efficiency Water Heater Upgrade",
    category: "plumbing",
    location: "Laurel, MD",
    beforeStats: ["12-Year-Old Rusty 50-Gal Tank", "Active slow leak at base", "High energy draws", "Lukewarm water in minutes"],
    afterStats: ["Next-Gen Energy Star 50-Gal Tank", "New thermal expansion tank added", "Save $20+ monthly on utilities", "Unlimited Hot Water Recovery"],
    description: "Replaced a corroded, dangerous old hot water tank with a new energy-efficient unit. Installed a code-compliant thermal expansion tank and dynamic gas safety valves, giving the homeowner absolute peace of mind.",
    beforeLabel: "Old Corroded Tank",
    afterLabel: "Elite JDL Tank Installation",
    beforeHighlight: "Leaking & Dangerous",
    afterHighlight: "Code Compliant & Sealed"
  },
  {
    id: 2,
    title: "16 SEER2 Air Conditioning Install",
    category: "hvac",
    location: "Bowie, MD",
    beforeStats: ["R-22 Freon system (Obsolete)", "Cracked coil & completely flat charge", "Noisy outdoor compressor unit", "Poor humidity removal"],
    afterStats: ["Modern 16 SEER2 Cooling Unit", "Premium quiet fan sweep blades", "Up to 35% reduction in electric use", "Advanced multi-stage humidity control"],
    description: "Homeowner's old R-22 air conditioning system had a cracked evaporator coil. We designed and installed a new high-efficiency 16 SEER2 unit, completely matching the existing ductwork static pressure for balanced airflow.",
    beforeLabel: "Failing Obsolete AC",
    afterLabel: "JDL 16 SEER2 System",
    beforeHighlight: "Warm Air Blowing",
    afterHighlight: "Whisper-Quiet Chill"
  },
  {
    id: 3,
    title: "Complete Sewer Main Replacement",
    category: "plumbing",
    location: "Silver Spring, MD",
    beforeStats: ["Corroded cast iron line", "Heavy tree root intrusion", "Repeated basement backups", "Cracked pipe joints"],
    afterStats: ["Heavy-Duty Schedule 40 PVC Line", "Root-resistant seamless jointing", "Dual directional cleanouts added", "Lifetime drainage assurance"],
    description: "Resolved severe recurring sewer backups by excavating and replacing a completely collapsed cast iron main with durable Schedule 40 PVC, restoring complete drain capability to the entire household.",
    beforeLabel: "Collapsed Main Line",
    afterLabel: "Seamless PVC Replacement",
    beforeHighlight: "Active Backups",
    afterHighlight: "Flawless Drainage"
  }
];

export default function BeforeAfter() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const [activeIdx, setActiveIdx] = React.useState(0);
  const current = PROJECTS[activeIdx];

  if (!mounted) {
    return (
      <div className="bg-slate-900 rounded-3xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden min-h-[450px] flex items-center justify-center">
        <span className="text-sm font-bold text-slate-400">
          Loading Job Gallery Showcase...
        </span>
      </div>
    );
  }

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % PROJECTS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  return (
    <div className="bg-slate-900 rounded-3xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden">
      
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-secondary/25 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />

      {/* Header section */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
        <div>
          <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/15 px-3 py-1 rounded-full border border-accent/20">
            Showcase of Excellence
          </span>
          <h3 className="text-2xl md:text-3xl font-black text-white mt-3">
            Real JDL Before-and-After Results
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            See actual jobs completed by our certified Laurel technicians.
          </p>
        </div>

        {/* Project Selector Toggles */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-xl border border-slate-800 bg-slate-950/40 text-slate-400 hover:text-white hover:border-slate-700 transition-all focus:outline-none"
            aria-label="Previous Project"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <div className="text-xs font-extrabold text-slate-300 bg-slate-950/60 py-2 px-4 rounded-xl border border-slate-800">
            Project {activeIdx + 1} of {PROJECTS.length}
          </div>

          <button
            onClick={handleNext}
            className="p-2.5 rounded-xl border border-slate-800 bg-slate-950/40 text-slate-400 hover:text-white hover:border-slate-700 transition-all focus:outline-none"
            aria-label="Next Project"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Active Project Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
        >
          {/* Project Details Column */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <span className={cn(
                "inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-extrabold uppercase border mb-3",
                current.category === "hvac"
                  ? "bg-secondary/15 text-secondary border-secondary/25"
                  : "bg-accent/15 text-accent border-accent/25"
              )}>
                <Wrench className="h-3.5 w-3.5" />
                <span>{current.category === "hvac" ? "HVAC Project" : "Plumbing Work"}</span>
              </span>
              
              <h4 className="text-xl md:text-2xl font-extrabold text-white">
                {current.title}
              </h4>
              
              <div className="flex items-center space-x-1 text-slate-400 text-xs font-bold mt-1">
                <span>📍 Job Location:</span>
                <span className="text-slate-200">{current.location}</span>
              </div>

              <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Trust Badge */}
            <div className="bg-slate-950/40 border border-slate-800 rounded-2xl p-4 flex items-start space-x-3">
              <Star className="h-5 w-5 text-accent fill-accent flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-black uppercase text-accent tracking-wider">
                  Guaranteed Craftsmanship
                </span>
                <span className="block text-[11px] text-slate-400 mt-0.5">
                  Every installation is backed by JDL's robust parts and labor warranties, strictly meeting DMV building codes.
                </span>
              </div>
            </div>
          </div>

          {/* Before & After Cards Column */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* BEFORE CARD */}
            <div className="border border-slate-850 rounded-2xl p-5 bg-gradient-to-b from-slate-950/80 to-slate-950/40 relative overflow-hidden flex flex-col justify-between shadow-inner">
              <div className="absolute top-4 right-4 bg-red-600/25 border border-red-500/25 text-red-400 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                {current.beforeHighlight}
              </div>

              <div>
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Before
                </span>
                <h5 className="text-lg font-bold text-slate-300 mt-1 border-b border-slate-850 pb-2 mb-4">
                  {current.beforeLabel}
                </h5>

                <ul className="space-y-2.5 text-slate-400 text-xs font-semibold">
                  {current.beforeStats.map((stat, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-red-500 text-sm leading-none mt-0.5">✕</span>
                      <span>{stat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-3 bg-red-600/10 border-t border-red-500/20 mt-8 rounded-b-xl -mx-5 -mb-5 flex items-center justify-center py-2 text-[9px] font-bold text-red-400 uppercase tracking-wider">
                System Failed Diagnostic
              </div>
            </div>

            {/* AFTER CARD */}
            <div className="border border-secondary-light/35 rounded-2xl p-5 bg-gradient-to-b from-slate-950/80 to-slate-950/40 relative overflow-hidden flex flex-col justify-between shadow-lg shadow-secondary/5 ring-1 ring-secondary/10">
              <div className="absolute top-4 right-4 bg-green-500/25 border border-green-400/25 text-green-400 text-[10px] font-black uppercase px-2 py-0.5 rounded-full animate-pulse">
                {current.afterHighlight}
              </div>

              <div>
                <span className="block text-xs font-bold text-secondary-light uppercase tracking-widest">
                  After
                </span>
                <h5 className="text-lg font-bold text-white mt-1 border-b border-slate-850 pb-2 mb-4">
                  {current.afterLabel}
                </h5>

                <ul className="space-y-2.5 text-slate-300 text-xs font-semibold">
                  {current.afterStats.map((stat, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white font-bold">{stat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-3 bg-green-500/10 border-t border-green-400/20 mt-8 rounded-b-xl -mx-5 -mb-5 flex items-center justify-center py-2 text-[9px] font-bold text-green-400 uppercase tracking-wider">
                Technician Certified Pass
              </div>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
