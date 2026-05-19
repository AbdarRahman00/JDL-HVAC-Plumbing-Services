"use client";

import * as React from "react";
import { Phone, Calendar, ShieldCheck, Sparkles } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import LeadForm from "@/components/LeadForm";

export default function StickyCTA() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Show dock after scrolling down 300px
  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-2xl pb-safe">
        <div className="flex items-center gap-3">
          {/* Instant Call Button */}
          <a
            href="tel:8445354822"
            className="flex-1 flex items-center justify-center space-x-2 bg-accent hover:bg-accent-dark text-white font-black py-3 px-4 rounded-full text-center text-sm shadow-md transition-all active:scale-[0.97]"
          >
            <Phone className="h-4 w-4 fill-white stroke-none animate-bounce" />
            <span>Call Now</span>
          </a>

          {/* Book Online Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="flex-1 flex items-center justify-center space-x-2 bg-secondary hover:bg-secondary-dark text-white font-black py-3 px-4 rounded-full text-center text-sm shadow-md transition-all active:scale-[0.97]"
          >
            <Calendar className="h-4 w-4" />
            <span>Book Online</span>
          </button>
        </div>

        {/* Small trust seal */}
        <div className="flex items-center justify-center space-x-1 mt-2 text-[9px] font-semibold text-slate-500 uppercase tracking-wide">
          <ShieldCheck className="h-3 w-3 text-green-650" />
          <span>Same-Day dispatch • 4.8★ Google Rated</span>
        </div>
      </div>

      {/* Pop-up Consultation Dialogue */}
      {mounted && (
        <Dialog
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Schedule Professional Service"
        >
          <div className="p-1">
            <div className="flex items-center space-x-1.5 mb-2 bg-secondary/5 border border-secondary/15 rounded-xl p-3 text-xs text-secondary font-bold">
              <Sparkles className="h-4.5 w-4.5 text-accent fill-accent" />
              <span>Guaranteed same-day reply within 15 mins!</span>
            </div>
            <LeadForm onSubmitSuccess={() => setModalOpen(false)} />
          </div>
        </Dialog>
      )}
    </>
  );
}
