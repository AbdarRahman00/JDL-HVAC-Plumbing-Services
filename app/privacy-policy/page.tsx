import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export default function PrivacyPolicy() {
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
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
          <ShieldAlert className="h-6 w-6" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-black text-primary leading-tight">
          Privacy Policy
        </h1>
        <p className="text-slate-400 text-xs font-bold">
          Last Updated: {lastUpdated}
        </p>
      </div>

      <div className="space-y-6 text-sm md:text-base leading-relaxed font-semibold">
        <section className="space-y-2">
          <h2 className="text-lg md:text-xl font-bold text-primary">
            1. Information We Collect
          </h2>
          <p>
            At JDL HVAC & Plumbing Services, we collect essential client information to route technicians, process secure payments, and confirm booking schedules. This includes your name, home service address, phone number, email address, and description of your mechanical comfort problem. We also collect anonymous analytical metrics (cookies) to monitor website core web vitals and local campaign effectiveness.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg md:text-xl font-bold text-primary">
            2. How We Use Your Information
          </h2>
          <p>
            Your collected information is used strictly to fulfill dispatch services:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-655 text-xs md:text-sm">
            <li>Scheduling home consultations and dispatching mechanical crews.</li>
            <li>Confirming arrival schedules via SMS text or direct telephone calls.</li>
            <li>Processing secure payments, billing invoices, and financing requests.</li>
            <li>Responding to technical customer support requests.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg md:text-xl font-bold text-primary">
            3. Sharing & Protecting Your Personal Data
          </h2>
          <p>
            We strictly NEVER sell, lease, trade, or distribute client personal details to third-party marketing companies. Personal data is only shared with trusted legal entities involved directly in compiling home solutions (e.g., licensed credit lenders for custom financing requests). All data collected through our online forms is encrypted and locked behind secure server environments.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg md:text-xl font-bold text-primary">
            4. Your Consent & Policy Changes
          </h2>
          <p>
            By filling out our online booking scheduler, you consent to our privacy terms and authorize JDL dispatch coordinators to contact you to confirm technician dispatches. Any adjustments to this privacy framework will be actively declared on this page. If you have any inquiries regarding data protection, please contact our Laurel office desk at <a href="tel:8445354822" className="text-secondary font-black hover:underline">(844) 535-4822</a> or email <span className="text-primary font-black">dispatch@jdlhvacservices.com</span>.
          </p>
        </section>
      </div>

    </div>
  );
}
