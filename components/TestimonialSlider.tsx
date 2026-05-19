"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShieldCheck, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  serviceTag: string;
  text: string;
  verified: boolean;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "Laurel, MD",
    rating: 5,
    date: "2 weeks ago",
    serviceTag: "AC Repair & Diagnostic",
    text: "Our AC completely shut off on a Sunday during a heatwave. We called JDL and they had a tech at our house in under an hour! The repair was quick, price was exactly as quoted, and the technician was incredibly polite and wore boot covers to keep the carpet clean. 10/10 recommendation!",
    verified: true,
  },
  {
    id: 2,
    name: "David Miller",
    location: "Bowie, MD",
    rating: 5,
    date: "1 month ago",
    serviceTag: "Tankless Water Heater Upgrade",
    text: "JDL did a flawless job installing our new tankless water heater. They answered all of our financing questions, helped us apply, and had the system running smoothly in a single afternoon. We never run out of hot water now, and our utility bills are already dropping. Truly professional plumbers!",
    verified: true,
  },
  {
    id: 3,
    name: "Melissa Thompson",
    location: "Columbia, MD",
    rating: 5,
    date: "3 weeks ago",
    serviceTag: "Emergency Sewer Cleaning",
    text: "We had a severe sewer line backup in our basement. JDL came out immediately with a drain camera, showed us the exact tree root blockage, and hydro-jetted the line. They cleared it completely and double checked their work. Fast, reliable, and extremely honest local business.",
    verified: true,
  },
  {
    id: 4,
    name: "Marcus Vance",
    location: "Silver Spring, MD",
    rating: 5,
    date: "2 months ago",
    serviceTag: "Furnace Installation",
    text: "Professional heating estimate, honest equipment options, and flawless installation of our new gas furnace. JDL team was highly experienced, cleaned up all the debris, and made sure our carbon monoxide detectors were fully tested. Extremely satisfied with their craftsmanship.",
    verified: true,
  },
  {
    id: 5,
    name: "Robert Henderson",
    location: "Fairfax, VA",
    rating: 5,
    date: "1 month ago",
    serviceTag: "Leak Detection & Pipe Fix",
    text: "We had a hidden water leak behind our laundry drywall that was driving our water bill sky-high. JDL located it electronically in minutes and repaired the copper pipe without tearing down the entire wall. Incredible technology, upfront pricing, and top-tier licensed plumbers.",
    verified: true,
  }
];

export default function TestimonialSlider() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const [index, setIndex] = React.useState(0);

  if (!mounted) {
    return (
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-xl relative max-w-4xl mx-auto overflow-hidden min-h-[250px] flex items-center justify-center">
        <span className="text-sm font-bold text-slate-400">
          Loading Client Testimonials...
        </span>
      </div>
    );
  }

  const nextReview = () => {
    setIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-xl relative max-w-4xl mx-auto overflow-hidden">
      
      {/* Decorative quotes icons */}
      <div className="absolute right-6 top-6 text-slate-100 opacity-80 pointer-events-none">
        <MessageSquare className="h-28 w-28 stroke-[1]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        
        {/* Trust Badges */}
        <div className="flex flex-col items-center space-y-1">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-accent fill-accent" />
            ))}
          </div>
          <div className="flex items-center space-x-1 text-xs font-bold text-slate-500 mt-1">
            <span className="text-primary font-extrabold text-sm">4.8 Stars</span>
            <span>•</span>
            <span>Google Reviews Verified</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="min-h-[160px] flex items-center justify-center py-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-4 max-w-2xl"
            >
              <p className="text-primary font-bold text-base md:text-lg italic leading-relaxed text-slate-700">
                "{REVIEWS[index].text}"
              </p>

              <div>
                <div className="flex items-center justify-center space-x-1.5">
                  <span className="font-extrabold text-primary text-base">
                    {REVIEWS[index].name}
                  </span>
                  {REVIEWS[index].verified && (
                    <span className="flex items-center space-x-0.5 bg-green-50 text-green-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-green-100">
                      <ShieldCheck className="h-3 w-3 fill-green-600 stroke-white" />
                      <span>Verified Client</span>
                    </span>
                  )}
                </div>
                
                <div className="text-xs text-mutedSlate font-semibold mt-1">
                  <span>📍 {REVIEWS[index].location}</span>
                  <span className="mx-1.5">•</span>
                  <span>{REVIEWS[index].date}</span>
                  <span className="mx-1.5">•</span>
                  <span className="text-secondary font-bold uppercase tracking-wide text-[10px] bg-secondary/5 px-2.5 py-0.5 rounded-md border border-secondary/10">
                    {REVIEWS[index].serviceTag}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Nav Controls */}
        <div className="flex items-center space-x-4 pt-4 border-t border-slate-100 w-full justify-between max-w-xs">
          <button
            onClick={prevReview}
            className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-primary transition-colors focus:outline-none border border-slate-100"
            aria-label="Previous Review"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-1.5">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-300",
                  index === i ? "bg-accent w-6" : "bg-slate-200"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextReview}
            className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-primary transition-colors focus:outline-none border border-slate-100"
            aria-label="Next Review"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </div>
  );
}
