import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";

export default function TermsAndConditions() {
  const lastUpdated = "May 18, 2026";

  return (
    <div className="custom-container py-12 max-w-4xl space-y-8 text-slate-700">
      
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center space-x-1 text-slate-500 hover:text-primary transition-colors text-xs font-bold uppercase tracking-wider"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Return to Home</span>
      </Link>

      <div className="space-y-4 border-b border-slate-200 pb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
          <Scale className="h-6 w-6" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-black text-primary leading-tight">
          Terms & Conditions
        </h1>
        <p className="text-slate-400 text-xs font-bold">
          Last Updated: {lastUpdated}
        </p>
      </div>

      <div className="space-y-6 text-sm md:text-base leading-relaxed font-semibold">
        <section className="space-y-2">
          <h2 className="text-lg md:text-xl font-bold text-primary">
            1. Scope of Trade Work
          </h2>
          <p>
            All HVAC repairs, heating/cooling installations, sewer clearing, water heater placements, and plumbing upgrades executed by JDL HVAC & Plumbing Services are strictly subject to these business terms. We promise to execute all trade operations in an extremely high-quality, professional, and code-compliant manner matching Maryland mechanical safety standards.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg md:text-xl font-bold text-primary">
            2. Transparent Diagnostics & Flat-Rate Quotes
          </h2>
          <p>
            We require flat-rate dispatch diagnostic fees to cover vehicle routing and field testing. All mechanical repairs or replacements require a formal itemized quote which must be signed by the property owner before our technicians begin turning wrenches. Once quotes are signed, prices are fully guaranteed—there are zero hidden surcharges or surprise fees.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg md:text-xl font-bold text-primary">
            3. Financing Tiers & Payment Guidelines
          </h2>
          <p>
            Payment in full is strictly due immediately upon completion of the mechanical or plumbing job. We accept major credit cards, verified check drafts, and offer secure, approachable low-interest financing promotions. Financing terms and credit limits are subject to third-party secure lending approvals.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg md:text-xl font-bold text-primary">
            4. Parts & Labor Warranties
          </h2>
          <p>
            JDL proudly backs all installations with robust manufacturer parts warranties and itemized labor guarantees which are declared directly on your final invoice. Warranties are completely void if systems have undergone tampering or amateur modifications by non-licensed contractors. For direct warranty claims or terms discussions, please contact our dispatch managers at <a href="tel:8445354822" className="text-secondary font-black hover:underline">(844) 535-4822</a>.
          </p>
        </section>
      </div>

    </div>
  );
}
