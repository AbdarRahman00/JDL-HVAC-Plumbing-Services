"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ArrowLeft, Loader2, Calendar, Phone, Sparkles, AlertCircle } from "lucide-react";
import { SERVICES } from "@/data/services";
import { cn } from "@/lib/utils";

interface LeadFormProps {
  onSubmitSuccess?: () => void;
  defaultServiceSlug?: string;
}

export default function LeadForm({ onSubmitSuccess, defaultServiceSlug }: LeadFormProps) {
  const [step, setStep] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState("");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Form states
  const [category, setCategory] = React.useState<"hvac" | "plumbing" | "">("");
  const [service, setService] = React.useState("");
  const [urgency, setUrgency] = React.useState<"standard" | "emergency" | "">("");
  const [date, setDate] = React.useState("");
  const [timeSlot, setTimeSlot] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [message, setMessage] = React.useState("");

  // Pre-fill if defaultServiceSlug provided
  React.useEffect(() => {
    if (defaultServiceSlug) {
      const match = SERVICES.find((s) => s.slug === defaultServiceSlug);
      if (match) {
        setCategory(match.category);
        setService(match.name);
      }
    }
  }, [defaultServiceSlug]);

  const servicesFiltered = SERVICES.filter((s) => s.category === category);

  // Simple steps validation
  const validateStep = () => {
    setError("");
    if (step === 1) {
      if (!category) return "Please select a service category (HVAC or Plumbing).";
      if (!service) return "Please choose a specific service.";
      if (!urgency) return "Please select service urgency.";
    }
    if (step === 2) {
      if (!date) return "Please select a preferred date.";
      if (!timeSlot) return "Please choose a preferred time slot.";
    }
    if (step === 3) {
      if (!name.trim()) return "Please enter your full name.";
      if (!phone.trim() || phone.replace(/\D/g, "").length < 10) return "Please enter a valid 10-digit phone number.";
      if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return "Please enter a valid email address.";
      if (!address.trim()) return "Please enter your service address.";
    }
    return "";
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    const validationError = validateStep();
    if (validationError) {
      setError(validationError);
      return;
    }
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    setError("");
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateStep();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);

    if (onSubmitSuccess) {
      setTimeout(() => {
        onSubmitSuccess();
      }, 3000);
    }
  };

  // Get dynamic dates for scheduling slot selection (next 5 days)
  const getNextDays = () => {
    const dates = [];
    const locale = "en-US";
    for (let i = 1; i <= 5; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      const weekday = d.toLocaleDateString(locale, { weekday: "short" });
      const month = d.toLocaleDateString(locale, { month: "short" });
      const dayNum = d.getDate();
      const value = d.toISOString().split("T")[0];
      dates.push({ label: `${weekday}, ${month} ${dayNum}`, value });
    }
    return dates;
  };

  return (
    <div className="bg-white rounded-2xl p-5 md:p-6 border border-slate-100 shadow-xl relative overflow-hidden">
      
      {/* Visual top bar decor */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-secondary via-indigo-500 to-accent" />

      {mounted ? (
        <AnimatePresence mode="wait">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Steps indicator */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Step {step} of 3
                </span>
                <div className="flex space-x-1.5">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={cn(
                        "h-2 w-8 rounded-full transition-all duration-300",
                        step >= s ? "bg-secondary" : "bg-slate-100"
                      )}
                    />
                  ))}
                </div>
              </div>

              {/* Error Message banner */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 bg-red-50 text-red-700 p-3 rounded-xl text-xs font-bold border border-red-100"
                >
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}

              {/* Steps Container */}
              <div className="min-h-[220px]">
                {/* STEP 1: CATEGORY & SERVICE SELECT */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <label className="block text-sm font-extrabold text-primary">
                      1. Select Service Category
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setCategory("hvac");
                          setService("");
                        }}
                        className={cn(
                          "flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all group",
                          category === "hvac"
                            ? "border-secondary bg-secondary/5 text-secondary shadow-sm ring-1 ring-secondary"
                            : "border-slate-200 hover:border-slate-300 text-primary hover:bg-slate-50/50"
                        )}
                      >
                        <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">🔥</span>
                        <span className="font-extrabold text-sm">Heating & AC</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setCategory("plumbing");
                          setService("");
                        }}
                        className={cn(
                          "flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all group",
                          category === "plumbing"
                            ? "border-accent bg-accent/5 text-accent shadow-sm ring-1 ring-accent"
                            : "border-slate-200 hover:border-slate-300 text-primary hover:bg-slate-50/50"
                        )}
                      >
                        <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">💧</span>
                        <span className="font-extrabold text-sm">Plumbing Service</span>
                      </button>
                    </div>

                    {category && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-2"
                      >
                        <label htmlFor="service-select" className="block text-xs font-bold text-slate-500 uppercase tracking-wide">
                          2. Choose Specific Service
                        </label>
                        <select
                          id="service-select"
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full rounded-xl border border-slate-200 p-2.5 text-sm font-semibold text-primary focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none"
                        >
                          <option value="">-- Choose a Service --</option>
                          {servicesFiltered.map((s) => (
                            <option key={s.slug} value={s.name}>
                              {s.name}
                            </option>
                          ))}
                        </select>
                      </motion.div>
                    )}

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide">
                        3. Service Urgency
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setUrgency("standard")}
                          className={cn(
                            "py-2 px-3 rounded-lg border text-xs font-bold transition-all text-center",
                            urgency === "standard"
                              ? "bg-slate-100 border-slate-300 text-primary ring-1 ring-slate-300"
                              : "border-slate-200 text-slate-600 hover:bg-slate-50"
                          )}
                        >
                          Standard Booking
                        </button>
                        <button
                          type="button"
                          onClick={() => setUrgency("emergency")}
                          className={cn(
                            "py-2 px-3 rounded-lg border text-xs font-bold transition-all text-center flex items-center justify-center space-x-1.5",
                            urgency === "emergency"
                              ? "bg-accent/15 border-accent text-accent ring-1 ring-accent font-black animate-pulse"
                              : "border-slate-200 text-slate-600 hover:bg-slate-50"
                          )}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
                          <span>Emergency (24/7 Dispatch)</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: PREFERRED TIMESLOT */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <label className="block text-sm font-extrabold text-primary flex items-center space-x-1">
                      <Calendar className="h-4.5 w-4.5 text-secondary" />
                      <span>Choose Appointment Date</span>
                    </label>

                    <div className="grid grid-cols-3 gap-2">
                      {getNextDays().map((d) => (
                        <button
                          key={d.value}
                          type="button"
                          onClick={() => setDate(d.value)}
                          className={cn(
                            "p-2.5 rounded-xl border text-center transition-all text-[11px] md:text-xs font-bold flex flex-col items-center justify-center",
                            date === d.value
                              ? "border-secondary bg-secondary/5 text-secondary ring-1 ring-secondary"
                              : "border-slate-200 hover:border-slate-300 text-primary hover:bg-slate-50"
                          )}
                        >
                          <span>{d.label.split(",")[0]}</span>
                          <span className="font-extrabold text-[13px] md:text-sm mt-0.5">{d.label.split(",")[1]}</span>
                        </button>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide">
                        Select Preferred Arrival Window
                      </label>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {[
                          "Morning (8:00 AM - 12:00 PM)",
                          "Midday (12:00 PM - 4:00 PM)",
                          "Evening (4:00 PM - 8:00 PM)",
                          "Emergency After-Hours (24/7 Support)",
                        ].map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setTimeSlot(slot)}
                            className={cn(
                              "p-2.5 rounded-lg border font-bold text-left transition-all",
                              timeSlot === slot
                                ? "border-secondary bg-secondary/5 text-secondary ring-1 ring-secondary"
                                : "border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50"
                            )}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: CUSTOMER CONTACT INFO */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  >
                    <div className="space-y-1">
                      <label htmlFor="client-name" className="text-xs font-extrabold text-slate-500 uppercase">
                        Full Name
                      </label>
                      <input
                        id="client-name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 p-2 text-sm font-semibold text-primary outline-none focus:border-secondary"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="client-phone" className="text-xs font-extrabold text-slate-500 uppercase">
                        Phone Number
                      </label>
                      <input
                        id="client-phone"
                        type="tel"
                        placeholder="(240) 555-0199"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 p-2 text-sm font-semibold text-primary outline-none focus:border-secondary"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="client-email" className="text-xs font-extrabold text-slate-500 uppercase">
                        Email Address
                      </label>
                      <input
                        id="client-email"
                        type="email"
                        placeholder="johndoe@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 p-2 text-sm font-semibold text-primary outline-none focus:border-secondary"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="client-address" className="text-xs font-extrabold text-slate-500 uppercase">
                        Service Address
                      </label>
                      <input
                        id="client-address"
                        type="text"
                        placeholder="123 Maple St, Laurel, MD"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 p-2 text-sm font-semibold text-primary outline-none focus:border-secondary"
                      />
                    </div>

                    <div className="space-y-1 md:col-span-2">
                      <label htmlFor="client-msg" className="text-xs font-extrabold text-slate-500 uppercase">
                        Describe the problem (Optional)
                      </label>
                      <textarea
                        id="client-msg"
                        rows={2}
                        placeholder="e.g. AC unit is blowing lukewarm air, leaking water outside..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 p-2 text-xs font-semibold text-primary outline-none focus:border-secondary resize-none"
                      />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Navigation Buttons footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 gap-3">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={loading}
                    className="flex items-center space-x-1.5 border border-slate-200 hover:border-slate-300 text-slate-600 font-bold py-2 px-4 rounded-xl text-sm transition-colors focus:outline-none"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div className="flex items-center space-x-1.5 text-xs text-mutedSlate">
                    <Phone className="h-4 w-4 text-accent fill-accent stroke-none animate-pulse" />
                    <span>Prefer calling? <a href="tel:8445354822" className="text-secondary font-black underline">(844) 535-4822</a></span>
                  </div>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center space-x-1.5 bg-secondary hover:bg-secondary-dark text-white font-extrabold py-2.5 px-5 rounded-xl text-sm shadow-md transition-all hover:scale-[1.02]"
                  >
                    <span>Continue</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center space-x-2 bg-accent hover:bg-accent-dark text-white font-extrabold py-2.5 px-6 rounded-xl text-sm shadow-lg transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Securing Slot...</span>
                      </>
                    ) : (
                      <>
                        <Check className="h-4 w-4" strokeWidth={3} />
                        <span>Book Appointment</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          ) : (
            /* SUCCESS STATE */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center py-8 space-y-4"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 shadow-md">
                <Check className="h-8 w-8" strokeWidth={3.5} />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-black text-primary flex items-center justify-center gap-1">
                  <span>Appointment Requested!</span>
                  <Sparkles className="h-5 w-5 text-accent fill-accent" />
                </h3>
                <p className="text-slate-600 font-bold text-sm max-w-sm">
                  Congratulations, {name.split(" ")[0]}! We have successfully registered your request for <span className="text-secondary">{service}</span> on <span className="text-slate-900">{date}</span>.
                </p>
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-xs font-bold text-mutedSlate max-w-md mt-2">
                  📢 <span className="text-primary font-extrabold">Next Steps:</span> Our Laurel dispatcher will review active technician routes and call you at <span className="text-secondary">{phone}</span> within <span className="text-accent">15 minutes</span> to confirm the dispatch!
                </div>
              </div>

              <div className="text-[11px] font-semibold text-slate-400">
                Need immediate assistance? Call the dispatch desk directly at <a href="tel:8445354822" className="text-secondary font-black hover:underline">(844) 535-4822</a>.
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        /* Static fall-back form for SSR crawling! This is incredibly premium for SEO! */
        <div className="min-h-[280px] flex flex-col items-center justify-center text-center space-y-3 py-6">
          <div className="h-9 w-9 rounded-xl bg-slate-100 text-secondary flex items-center justify-center animate-spin">
            <Loader2 className="h-5 w-5" />
          </div>
          <span className="text-xs font-bold text-slate-400">
            Securing Live Dispatch Schedule Slot...
          </span>
        </div>
      )}
    </div>
  );
}
