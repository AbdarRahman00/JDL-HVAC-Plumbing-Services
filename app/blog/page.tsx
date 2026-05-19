"use client";

import * as React from "react";
import { BookOpen, Clock, ChevronRight, Phone, Calendar, ShieldCheck, Sparkles } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import LeadForm from "@/components/LeadForm";

interface Article {
  id: number;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string;
}

const ARTICLES: Article[] = [
  {
    id: 1,
    title: "5 Spring HVAC Tips to Dodge Summer Breakdowns in Maryland",
    category: "Air Conditioning",
    readTime: "4 Min Read",
    date: "April 15, 2026",
    excerpt: "Maryland summers are notoriously humid and taxing on older AC systems. Learn five easy preventative steps to secure your cooling comfort before temperatures soar.",
    content: "When hot, muggy DMV summer cycles kick in, residential air conditioning systems work triple-time to extract humidity and cool household air. Dodging a sudden heat breakdown in July begins in the spring. First, always swap out your return air filters every 60-90 days to prevent static pressure issues. Second, clear weeds, branches, and grass clipping pileups from around your outdoor condenser coil to ensure correct fan airflow. Third, wash the condensate drain tube with vinegar to dissolve algae slime. Fourth, verify that mechanical insulation wrapping the copper liquid cooling lines hasn't cracked. Finally, schedule a professional NATE-certified diagnostic system flush to top off refrigerants charge and verify compressor motor amps drawing."
  },
  {
    id: 2,
    title: "Why Tankless Water Heaters Are Exploding in Laurel Neighborhoods",
    category: "Plumbing Trends",
    readTime: "5 Min Read",
    date: "May 02, 2026",
    excerpt: "Homeowners across Laurel are abandoning standard gas water heater tanks in favor of continuous tankless replacements. Discover the energy, space, and life-cycle advantages.",
    content: "Standard gas hot water tanks constantly heat 40 or 50 gallons of water even when your family is sleeping or at work, costing hundreds yearly in passive heat energy loss. Modern tankless systems eliminate this waste. They use heavy-duty copper heat exchangers to heat cold water on-demand when a faucet is cracked open. You secure unlimited, continuous hot water recoverability—meaning zero cold showers even if three bathrooms are running simultaneously. They also save valuable square footage in utility closets, operate for up to 20 years (double standard tanks), and qualify Laurel homeowners for substantial Energy Star tax credits."
  },
  {
    id: 3,
    title: "The Homeowner's Guide to Preventing Sewer Backups & Main Clogs",
    category: "Sewer & Drains",
    readTime: "4 Min Read",
    date: "May 10, 2026",
    excerpt: "A sewer main backup is a severe plumbing emergency that can cost thousands in basement restorations. Learn the key habits and preventative signs to look out for.",
    content: "Sewer mains collapse or back up due to tree root intrusions, shifting ground soils, or flushable wipes collecting grease. Avoid disaster by implementing three strict household guidelines. First, never dump cooking oils, bacon grease, or heavy butter down kitchen disposal lines. They solidify inside pipes, catching hair and soap particles. Second, reject 'flushable' wipes. Unlike toilet paper, synthetic wipes do not break down in water, snagging pipe joints and causing structural blocks. Finally, monitor minor warnings. If multiple drains in your basement gurgle, toilets drain slowly, or a sewage smell rises from laundry lines, tree roots have likely entered pipe cracks. Schedule a hydro-jetting diagnostic flush before pipes collapse completely."
  }
];

export default function Blog() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [activeArticle, setActiveArticle] = React.useState<Article | null>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="space-y-20 pb-20 pt-8">
      
      {/* 1. HERO HEADER */}
      <section className="custom-container">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/15 px-3 py-1 rounded-full border border-accent/20">
              Homeowner Resources
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-white">
              The JDL Expert Homeowner Blog & Repair Guides
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Explore easy DIY maintenance checklists, seasonal energy-efficiency strategies, and expert plumbing guides written directly by our Laurel master technicians.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ARTICLES GRID */}
      <section className="custom-container space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <div
              key={article.id}
              className="border border-slate-100 rounded-3xl p-6 bg-white shadow-md flex flex-col justify-between space-y-6 hover:shadow-xl transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                  <span className="text-secondary uppercase tracking-wider">
                    {article.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-extrabold text-primary text-base md:text-lg leading-snug">
                  {article.title}
                </h3>

                <p className="text-mutedSlate text-xs md:text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                <span className="text-slate-400 text-xs font-bold">
                  {article.date}
                </span>

                <button
                  onClick={() => setActiveArticle(article)}
                  className="flex items-center space-x-0.5 text-secondary hover:text-secondary-dark font-extrabold text-xs"
                >
                  <span>Read Article</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. NEWSLETTER BANNER */}
      <section className="custom-container">
        <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="inline-flex bg-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              ✉ Seasonal Comfort Digest
            </span>
            <h3 className="text-xl md:text-2xl font-black mt-1">
              Want expert energy tips delivered quarterly?
            </h3>
            <p className="text-slate-400 text-xs md:text-sm">
              We never spam. Just NATE diagnostic tips and exclusive Laurel discounts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-slate-800/80 border border-slate-700 rounded-xl py-2.5 px-4 text-xs font-bold text-white placeholder-slate-500 outline-none focus:border-secondary w-full sm:w-60"
            />
            <button
              onClick={() => setModalOpen(true)}
              className="bg-secondary hover:bg-secondary-dark text-white font-black py-2.5 px-6 rounded-xl text-xs md:text-sm shadow-md transition-colors"
            >
              Subscribe Free
            </button>
          </div>
        </div>
      </section>

      {/* Article Detail Dialogue */}
      {mounted && activeArticle && (
        <Dialog
          isOpen={!!activeArticle}
          onClose={() => setActiveArticle(null)}
          title={activeArticle.title}
        >
          <div className="p-1 space-y-4">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 border-b border-slate-100 pb-2">
              <span className="text-secondary uppercase">{activeArticle.category}</span>
              <span>{activeArticle.date}</span>
            </div>
            
            <p className="text-slate-755 text-sm md:text-base leading-relaxed font-semibold">
              {activeArticle.content}
            </p>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
              <div className="space-y-1">
                <span className="block text-[10px] font-black uppercase text-accent tracking-wider">
                  Need Professional Support?
                </span>
                <span className="block text-xs font-bold text-mutedSlate leading-normal">
                  Our dispatchers are routing NATE techs in Laurel and the DMV area.
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="tel:8445354822"
                  className="flex items-center space-x-1 bg-accent text-white font-extrabold text-xs py-2 px-4 rounded-xl shadow-md"
                >
                  <Phone className="h-3.5 w-3.5 fill-white stroke-none" />
                  <span>Call Us</span>
                </a>
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    setModalOpen(true);
                  }}
                  className="bg-secondary text-white font-extrabold text-xs py-2 px-4 rounded-xl shadow-md"
                >
                  <span>Book Online</span>
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      )}

      {/* Booking Dialogue */}
      {mounted && (
        <Dialog
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Subscribe & Consultation Form"
        >
          <LeadForm onSubmitSuccess={() => setModalOpen(false)} />
        </Dialog>
      )}

    </div>
  );
}
