"use client";

import * as React from "react";
import TestimonialSlider from "@/components/TestimonialSlider";
import { Star, ShieldCheck, Check, Clock, Phone, Loader2 } from "lucide-react";

export default function CustomerReviews() {
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [name, setName] = React.useState("");
  const [rating, setRating] = React.useState(5);
  const [service, setService] = React.useState("");
  const [review, setReview] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !review.trim()) return;

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 pb-20 pt-8">
      
      {/* 1. HERO HEADER */}
      <section className="custom-container">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/15 px-3 py-1 rounded-full border border-accent/20">
              Client Feedback
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-white">
              Homeowner Reviews & Local Community Reputation
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              We work hard to earn five-star ratings on every dispatcher call. See why Laurel residents consistently choose JDL for HVAC repairs and plumbing.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN SLIDER */}
      <section className="custom-container space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black text-secondary uppercase tracking-widest bg-secondary/10 px-4 py-1.5 rounded-full">
            Google Reviews Slider
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-primary mt-2">
            Read Real Neighbor Experiences
          </h2>
        </div>

        <TestimonialSlider />
      </section>

      {/* 3. SUBMISSION FORM */}
      <section className="custom-container max-w-xl mx-auto">
        <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
          
          {/* Accent strip */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-secondary to-accent" />

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-slate-100 pb-3 mb-4 text-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Share Your Story
                </span>
                <h3 className="text-lg md:text-xl font-extrabold text-primary mt-1">
                  Leave Us a Review
                </h3>
              </div>

              <div className="space-y-1">
                <label htmlFor="rev-name" className="text-xs font-bold text-slate-500 uppercase">
                  Your Full Name
                </label>
                <input
                  id="rev-name"
                  type="text"
                  required
                  placeholder="Sarah J."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-2.5 text-sm font-semibold text-primary outline-none focus:border-secondary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="rev-service" className="text-xs font-bold text-slate-500 uppercase">
                    Service Performed
                  </label>
                  <input
                    id="rev-service"
                    type="text"
                    required
                    placeholder="e.g. AC Repair"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 p-2.5 text-sm font-semibold text-primary outline-none focus:border-secondary"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="rev-rating" className="text-xs font-bold text-slate-500 uppercase">
                    Star Rating
                  </label>
                  <select
                    id="rev-rating"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="w-full rounded-xl border border-slate-200 p-2.5 text-sm font-semibold text-primary outline-none focus:border-secondary bg-white"
                  >
                    <option value={5}>5 Stars ★★★★★</option>
                    <option value={4}>4 Stars ★★★★</option>
                    <option value={3}>3 Stars ★★★</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="rev-msg" className="text-xs font-bold text-slate-500 uppercase">
                  Describe Your Experience
                </label>
                <textarea
                  id="rev-msg"
                  required
                  rows={4}
                  placeholder="How did our technician do? Were we on time?"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-2.5 text-xs font-semibold text-primary outline-none focus:border-secondary resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center space-x-2 bg-secondary hover:bg-secondary-dark text-white font-extrabold py-3 px-4 rounded-xl shadow-md transition-colors"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Submitting review...</span>
                  </>
                ) : (
                  <span>Submit Verified Feedback</span>
                )}
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-6 space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 shadow-md">
                <Check className="h-6 w-6" strokeWidth={3} />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-primary text-lg">
                  Thank You, {name}!
                </h4>
                <p className="text-slate-655 text-xs md:text-sm max-w-xs">
                  Your feedback has been successfully registered. We review all entries in our morning crew meetings!
                </p>
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
