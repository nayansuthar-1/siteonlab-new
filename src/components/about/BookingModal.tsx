"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { X, Calendar, Clock, User, Mail, Building, Globe, ChevronRight, CheckCircle2, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { submitLead } from "@/lib/submitLead";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TIME_SLOTS = [
  "09:30 AM EST",
  "11:00 AM EST",
  "01:30 PM EST",
  "03:00 PM EST",
  "04:30 PM EST"
];

const BOTTLENECKS = [
  "Low organic traffic / poor Google rankings",
  "Not recommended in ChatGPT / Perplexity / Copilot",
  "High traffic but low lead/pipeline conversion",
  "Inefficient content scaling & SEO production",
  "Unsure where revenue drop-offs are occurring"
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    bottleneck: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Generate next 5 business days
  const getNextBusinessDays = () => {
    const days: { dateStr: string; label: string; weekday: string }[] = [];
    let current = new Date();

    while (days.length < 5) {
      current.setDate(current.getDate() + 1);
      const dayOfWeek = current.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Skip Sat/Sun
        const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
        days.push({
          dateStr: current.toISOString().split('T')[0],
          label: current.toLocaleDateString('en-US', options),
          weekday: current.toLocaleDateString('en-US', { weekday: 'long' })
        });
      }
    }
    return days;
  };

  const days = getNextBusinessDays();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectBottleneck = (bottleneck: string) => {
    setFormData(prev => ({ ...prev, bottleneck }));
    if (errors.bottleneck) {
      setErrors(prev => ({ ...prev, bottleneck: "" }));
    }
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!selectedDate) newErrors.date = "Please select a preferred date.";
    if (!selectedTime) newErrors.time = "Please select a convenient time slot.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Work email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid business email.";
    }
    if (!formData.company.trim()) newErrors.company = "Company name is required.";
    if (!formData.website.trim()) {
      newErrors.website = "Website URL is required.";
    } else if (!formData.website.startsWith("http://") && !formData.website.startsWith("https://") && !formData.website.includes(".")) {
      newErrors.website = "Please enter a valid website URL.";
    }
    if (!formData.bottleneck) newErrors.bottleneck = "Please select your primary growth bottleneck.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateStep2()) {
      submitLead({
        source: "About Page — Strategy Call Booking",
        name: formData.name,
        email: formData.email,
        fields: {
          Company: formData.company,
          Website: formData.website,
          Bottleneck: formData.bottleneck,
          "Preferred Date": selectedDate,
          "Preferred Time": selectedTime,
        },
      });
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(prev => prev - 1);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
        {/* Backdrop click closes modal */}
        <div className="absolute inset-0" onClick={onClose}></div>

        <motion.div
          id="booking-modal-container"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-2xl bg-brand-bg-light border border-slate-800 rounded-2xl overflow-hidden shadow-2xl z-10"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-brand-accent/20 to-brand-orange/20 px-6 py-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-accent animate-pulse" />
              <span className="text-sm font-semibold tracking-wider uppercase text-brand-accent">HybridMonks Revenue Strategy</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-brand-text-secondary hover:text-white hover:bg-slate-800 transition-all-300"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 md:p-8">
            {step < 3 && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold tracking-tight text-white">Book Your 1-on-1 Growth Consultation</h2>
                  <span className="text-xs text-brand-text-muted font-mono bg-slate-900 px-2 py-1 rounded border border-slate-800">Step {step} of 2</span>
                </div>
                <p className="text-sm text-brand-text-secondary">
                  Schedule a private 30-minute session with our executive growth consultants. We'll run an initial scan of your B2B search and AI engine presence before the call.
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-slate-900 h-1 mt-4 rounded-full overflow-hidden">
                  <div
                    className="bg-brand-accent h-full transition-all duration-300"
                    style={{ width: `${step === 1 ? 50 : 100}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* STEP 1: Date & Time Selector */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-brand-text-primary mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-accent" />
                    Select a Date
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {days.map((day) => (
                      <button
                        key={day.dateStr}
                        type="button"
                        onClick={() => {
                          setSelectedDate(day.dateStr);
                          if (errors.date) setErrors(prev => ({ ...prev, date: "" }));
                        }}
                        className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center transition-all-300 cursor-pointer ${
                          selectedDate === day.dateStr
                            ? "bg-brand-accent/10 border-brand-accent text-white font-semibold"
                            : "bg-slate-900 border-slate-800 text-brand-text-secondary hover:border-slate-700 hover:text-white"
                        }`}
                      >
                        <span className="text-xs text-brand-text-muted">{day.weekday.substring(0, 3)}</span>
                        <span className="text-base mt-1">{day.label.replace(/^[a-zA-Z]+,\s/, '')}</span>
                      </button>
                    ))}
                  </div>
                  {errors.date && (
                    <p className="mt-2 text-xs text-brand-orange flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-text-primary mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-accent" />
                    Select a Time Slot
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {TIME_SLOTS.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => {
                          setSelectedTime(time);
                          if (errors.time) setErrors(prev => ({ ...prev, time: "" }));
                        }}
                        className={`p-3 rounded-xl border text-sm transition-all-300 cursor-pointer text-center ${
                          selectedTime === time
                            ? "bg-brand-accent/10 border-brand-accent text-white font-semibold"
                            : "bg-slate-900 border-slate-800 text-brand-text-secondary hover:border-slate-700 hover:text-white"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  {errors.time && (
                    <p className="mt-2 text-xs text-brand-orange flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.time}
                    </p>
                  )}
                </div>

                <div className="flex justify-end pt-4 border-t border-slate-800/60">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2.5 bg-brand-accent hover:bg-brand-accent-hover text-white font-medium rounded-xl flex items-center gap-2 transition-all-300 cursor-pointer shadow-lg hover:shadow-brand-accent/20"
                  >
                    Continue to Details
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Company Details */}
            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="booking-name" className="block text-xs font-medium text-brand-text-secondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-brand-accent" /> Full Name
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all-300"
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-brand-orange">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="booking-email" className="block text-xs font-medium text-brand-text-secondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-brand-accent" /> Work Email
                    </label>
                    <input
                      id="booking-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@company.com"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all-300"
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-brand-orange">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="booking-company" className="block text-xs font-medium text-brand-text-secondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-brand-accent" /> Company Name
                    </label>
                    <input
                      id="booking-company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enterprise Technologies"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all-300"
                    />
                    {errors.company && <p className="mt-1.5 text-xs text-brand-orange">{errors.company}</p>}
                  </div>

                  <div>
                    <label htmlFor="booking-website" className="block text-xs font-medium text-brand-text-secondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-brand-accent" /> Website URL
                    </label>
                    <input
                      id="booking-website"
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://company.com"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all-300"
                    />
                    {errors.website && <p className="mt-1.5 text-xs text-brand-orange">{errors.website}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-brand-text-secondary uppercase tracking-wider mb-2">
                    What is your primary revenue or AI visibility bottleneck?
                  </label>
                  <div className="space-y-1.5">
                    {BOTTLENECKS.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => handleSelectBottleneck(b)}
                        className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all-300 flex items-center justify-between cursor-pointer ${
                          formData.bottleneck === b
                            ? "bg-brand-accent/5 border-brand-accent text-white font-medium"
                            : "bg-slate-900/60 border-slate-850 text-brand-text-secondary hover:border-slate-700 hover:text-white"
                        }`}
                      >
                        <span>{b}</span>
                        {formData.bottleneck === b && <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 ml-2" />}
                      </button>
                    ))}
                  </div>
                  {errors.bottleneck && <p className="mt-1.5 text-xs text-brand-orange">{errors.bottleneck}</p>}
                </div>

                <div className="flex justify-between pt-4 border-t border-slate-800/60">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-5 py-2 bg-slate-900 border border-slate-800 hover:border-slate-700 text-brand-text-secondary hover:text-white text-sm font-medium rounded-xl transition-all-300 cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-brand-accent hover:bg-brand-accent-hover text-white font-medium rounded-xl flex items-center gap-2 transition-all-300 cursor-pointer shadow-lg hover:shadow-brand-accent/20"
                  >
                    Confirm Booking
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: SUCCESS CONFIRMATION */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-2">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Your Strategy Call is Confirmed!</h3>
                  <p className="text-sm text-brand-text-secondary max-w-md mx-auto">
                    We've reserved your slot on <strong className="text-white">{days.find(d => d.dateStr === selectedDate)?.label || selectedDate}</strong> at <strong className="text-white">{selectedTime}</strong>. A calendar invite has been sent to <span className="text-brand-accent font-semibold">{formData.email}</span>.
                  </p>
                </div>

                <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-5 text-left max-w-lg mx-auto space-y-3.5">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-orange" /> How to prepare for your session:
                  </h4>
                  <ul className="text-xs text-brand-text-secondary space-y-2.5">
                    <li className="flex gap-2">
                      <span className="text-brand-accent shrink-0 font-bold">1.</span>
                      <span>Our tech team will perform a comprehensive <strong className="text-brand-text-primary">GEO/SEO Gap Audit</strong> of <span className="text-brand-accent font-mono">{formData.website}</span> over the next 48 hours.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-brand-accent shrink-0 font-bold">2.</span>
                      <span>Please ensure all key B2B decision-makers of the revenue/marketing team can attend this 30-minute roadmap review.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-brand-accent shrink-0 font-bold">3.</span>
                      <span>We will review realistic timeline estimates and the exact mechanics of making your brand the most cited recommendation in AI engines.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4">
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-brand-accent hover:bg-brand-accent-hover text-white font-medium rounded-xl transition-all-300 cursor-pointer shadow-md"
                  >
                    Got it, Thank You
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
