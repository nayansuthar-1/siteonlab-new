"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Phone, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  ShieldCheck,
  Building2,
  Globe,
  User,
  Sparkles,
  HelpCircle,
  AlertCircle,
  TrendingUp,
  Search
} from "lucide-react";
import { submitLead } from "@/lib/submitLead";

interface MainContactBlockProps {
  onDirectBook: () => void;
  directBookTrigger: boolean;
  onDirectBookClose: () => void;
}

export default function MainContactBlock({ 
  onDirectBook, 
  directBookTrigger, 
  onDirectBookClose 
}: MainContactBlockProps) {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    websiteUrl: "",
    companySize: "",
    helpType: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // AI Assessment Modal State
  const [showAssessment, setShowAssessment] = useState(false);
  const [assessmentStep, setAssessmentStep] = useState(1);
  const [assessmentData, setAssessmentData] = useState({
    domain: "",
    hasFaq: "unsure",
    mentions: "rarely",
    industry: ""
  });
  const [assessmentResult, setAssessmentResult] = useState<any>(null);

  // Form Validation
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = "Full Name is required";
    
    if (!formData.workEmail.trim()) {
      errors.workEmail = "Work Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
      errors.workEmail = "Please enter a valid email address";
    } else if (
      /gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|aol\.com|live\.com|mail\.ru/.test(
        formData.workEmail.toLowerCase()
      )
    ) {
      errors.workEmail = "Please enter a work/corporate email address";
    }

    if (!formData.company.trim()) errors.company = "Company name is required";
    
    if (formData.websiteUrl.trim() && !/^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}\/?/.test(formData.websiteUrl)) {
      errors.websiteUrl = "Please enter a valid URL (e.g., company.com)";
    }

    if (!formData.companySize) errors.companySize = "Please select your company size";
    if (!formData.helpType) errors.helpType = "Please select what you need help with";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Form Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const ok = await submitLead({
      source: "Contact Page — Growth Strategy Session",
      name: formData.fullName,
      email: formData.workEmail,
      fields: {
        Company: formData.company,
        "Website URL": formData.websiteUrl,
        "Company Size": formData.companySize,
        "Needs Help With": formData.helpType,
        Message: formData.message,
      },
    });

    setIsSubmitting(false);
    if (ok) {
      setIsSuccess(true);
    } else {
      setFormErrors({
        workEmail:
          "Something went wrong sending your request. Please try again or email us directly.",
      });
    }
  };

  // Assessment Handler
  const runAssessment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!assessmentData.domain) return;

    setAssessmentStep(4); // show loading
    
    setTimeout(() => {
      // Calculate a mockup GEO (Generative Engine Optimization) readiness score
      let baseScore = 35;
      if (assessmentData.hasFaq === "yes") baseScore += 20;
      if (assessmentData.mentions === "often") baseScore += 25;
      else if (assessmentData.mentions === "sometimes") baseScore += 15;
      if (assessmentData.domain.includes(".tech") || assessmentData.domain.includes(".ai") || assessmentData.domain.includes(".io")) {
        baseScore += 10;
      }
      
      const leaks = [];
      if (assessmentData.hasFaq !== "yes") leaks.push("Missing intent-based schema markups");
      if (assessmentData.mentions !== "often") leaks.push("Low semantic density across LLM corpora");
      leaks.push("Zero structured citations in GPT/Perplexity searches");

      setAssessmentResult({
        score: Math.min(baseScore, 98),
        leaks,
        grade: baseScore > 75 ? "Optimal" : baseScore > 50 ? "Moderate Risks" : "Critical Visibility Gaps"
      });
      setAssessmentStep(5); // result page
    }, 2000);
  };

  // Direct Booking simulated slot selection
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [bookingCompleted, setBookingCompleted] = useState(false);

  const availableSlots = [
    { date: "Monday, Jun 29", times: ["10:00 AM EST", "1:30 PM EST", "4:00 PM EST"] },
    { date: "Tuesday, Jun 30", times: ["9:00 AM EST", "11:00 AM EST", "2:00 PM EST"] },
    { date: "Wednesday, Jul 1", times: ["1:00 PM EST", "3:30 PM EST", "5:00 PM EST"] }
  ];

  const handleBookingSubmit = () => {
    if (selectedDate && selectedTime) {
      setBookingCompleted(true);
    }
  };

  return (
    <section className="py-12 bg-[#0a0f1e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* ==================== LEFT COLUMN: CONTACT FORM ==================== */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="contact-form-stage"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6">
                      <h3 className="font-display font-bold text-2xl text-brand-text mb-2">
                        Request a Growth Strategy Session
                      </h3>
                      <p className="text-sm text-brand-muted font-sans">
                        Take the first step towards systematic pipeline growth. We review every request individually.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Grid for Name & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div className="space-y-1.5">
                          <label htmlFor="fullName" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                              <User className="w-4 h-4" />
                            </span>
                            <input
                              type="text"
                              id="fullName"
                              name="fullName"
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              placeholder="Sarah Jenkins"
                              className={`w-full pl-10 pr-4 py-2.5 bg-slate-950 border ${
                                formErrors.fullName ? "border-red-500" : "border-slate-800 hover:border-slate-700/80"
                              } rounded-md text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors`}
                            />
                          </div>
                          {formErrors.fullName && (
                            <p className="text-xs text-red-400 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              {formErrors.fullName}
                            </p>
                          )}
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                          <label htmlFor="workEmail" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                            Work Email <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                              <Mail className="w-4 h-4" />
                            </span>
                            <input
                              type="email"
                              id="workEmail"
                              name="workEmail"
                              value={formData.workEmail}
                              onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                              placeholder="sarah@enterprise.com"
                              className={`w-full pl-10 pr-4 py-2.5 bg-slate-950 border ${
                                formErrors.workEmail ? "border-red-500" : "border-slate-800 hover:border-slate-700/80"
                              } rounded-md text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors`}
                            />
                          </div>
                          {formErrors.workEmail && (
                            <p className="text-xs text-red-400 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              {formErrors.workEmail}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Grid for Company & Website */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Company */}
                        <div className="space-y-1.5">
                          <label htmlFor="company" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                            Company Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                              <Building2 className="w-4 h-4" />
                            </span>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              placeholder="Enterprise Co."
                              className={`w-full pl-10 pr-4 py-2.5 bg-slate-950 border ${
                                formErrors.company ? "border-red-500" : "border-slate-800 hover:border-slate-700/80"
                              } rounded-md text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors`}
                            />
                          </div>
                          {formErrors.company && (
                            <p className="text-xs text-red-400 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              {formErrors.company}
                            </p>
                          )}
                        </div>

                        {/* Website URL */}
                        <div className="space-y-1.5">
                          <label htmlFor="websiteUrl" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                            Website URL
                          </label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                              <Globe className="w-4 h-4" />
                            </span>
                            <input
                              type="text"
                              id="websiteUrl"
                              name="websiteUrl"
                              value={formData.websiteUrl}
                              onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                              placeholder="enterprise.com"
                              className={`w-full pl-10 pr-4 py-2.5 bg-slate-950 border ${
                                formErrors.websiteUrl ? "border-red-500" : "border-slate-800 hover:border-slate-700/80"
                              } rounded-md text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors`}
                            />
                          </div>
                          {formErrors.websiteUrl && (
                            <p className="text-xs text-red-400 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              {formErrors.websiteUrl}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Dropdown for Company Size & Help Theme */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Company Size */}
                        <div className="space-y-1.5">
                          <label htmlFor="companySize" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                            Company Size <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="companySize"
                            name="companySize"
                            value={formData.companySize}
                            onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                            className={`w-full px-4 py-2.5 bg-slate-950 border ${
                              formErrors.companySize ? "border-red-500" : "border-slate-800 hover:border-slate-700/80"
                            } rounded-md text-sm text-slate-300 focus:outline-none focus:border-blue-500/50 transition-colors cursor-pointer appearance-none`}
                          >
                            <option value="" disabled className="text-slate-600">Select headcount...</option>
                            <option value="10-50">10 – 50 employees</option>
                            <option value="51-200">51 – 200 employees</option>
                            <option value="201-500">201 – 500 employees</option>
                            <option value="500+">500+ employees</option>
                          </select>
                          {formErrors.companySize && (
                            <p className="text-xs text-red-400 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              {formErrors.companySize}
                            </p>
                          )}
                        </div>

                        {/* Help with */}
                        <div className="space-y-1.5">
                          <label htmlFor="helpType" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                            What do you need help with? <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="helpType"
                            name="helpType"
                            value={formData.helpType}
                            onChange={(e) => setFormData({ ...formData, helpType: e.target.value })}
                            className={`w-full px-4 py-2.5 bg-slate-950 border ${
                              formErrors.helpType ? "border-red-500" : "border-slate-800 hover:border-slate-700/80"
                            } rounded-md text-sm text-slate-300 focus:outline-none focus:border-blue-500/50 transition-colors cursor-pointer appearance-none`}
                          >
                            <option value="" disabled className="text-slate-600">Choose objective...</option>
                            <option value="GEO">AI Visibility & Optimization (GEO)</option>
                            <option value="SEO">Advanced B2B Search (SEO)</option>
                            <option value="Demand">High-Intent Demand Generation</option>
                            <option value="CRO">Website Conversion & CRO</option>
                            <option value="Strategy">Full-Stack Revenue Growth Strategy</option>
                            <option value="Other">Other Specialized Needs</option>
                          </select>
                          {formErrors.helpType && (
                            <p className="text-xs text-red-400 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              {formErrors.helpType}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Message Field */}
                      <div className="space-y-1.5">
                        <label htmlFor="message" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                          Context & Current Challenges
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us briefly about your current marketing challenges, target audience, and pipeline goals..."
                          className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 hover:border-slate-700/80 rounded-md text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full relative inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 py-3 px-6 rounded-lg transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_25px_rgba(37,99,235,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-75 cursor-pointer"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-1" />
                              <span>Analyzing your domain data...</span>
                            </>
                          ) : (
                            <>
                              <span>Book My Strategy Call</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>

                      {/* Trust Line */}
                      <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 italic pt-2 border-t border-slate-800">
                        <ShieldCheck className="w-4 h-4 text-blue-500" />
                        <span>We reply within one business day. No spam, ever.</span>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  /* Form Submission Success State */
                  <motion.div
                    key="success-stage"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-500 mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                      <CheckCircle2 className="w-10 h-10 animate-bounce" />
                    </div>
                    
                    <h3 className="font-display font-bold text-2xl text-white mb-3">
                      Strategy Session Requested!
                    </h3>
                    
                    <p className="text-slate-400 text-sm max-w-md mx-auto mb-8 font-sans leading-relaxed">
                      Thank you, <strong className="text-white font-semibold">{formData.fullName}</strong>. 
                      Our B2B revenue consultants are already performing an initial review of{" "}
                      <span className="text-blue-500 font-mono">{formData.websiteUrl || formData.company}</span>.
                    </p>

                    <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 text-left max-w-lg w-full mb-8 space-y-3">
                      <div className="text-xs font-semibold uppercase tracking-wider text-blue-500 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" /> Next steps for {formData.company}:
                      </div>
                      <ol className="text-xs text-slate-400 space-y-2 list-decimal list-inside font-sans">
                        <li>You'll receive an email within 2 hours with draft schedule options.</li>
                        <li>Our analysts are scanning your current Google indexing & AI presence.</li>
                        <li>We will present your complete, custom leak map on our live web call.</li>
                      </ol>
                    </div>

                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          fullName: "",
                          workEmail: "",
                          company: "",
                          websiteUrl: "",
                          companySize: "",
                          helpType: "",
                          message: ""
                        });
                      }}
                      className="text-xs text-blue-400 hover:text-white font-semibold border-b border-blue-400/30 hover:border-white pb-0.5 transition-all"
                    >
                      Need to update or send another request? Click here.
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ==================== RIGHT COLUMN: DIRECT DETAILS & STEPS ==================== */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Booking Panel */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 relative">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-500 block">
                  Skip the queue
                </span>
                <h4 className="font-display font-bold text-xl text-white">
                  Prefer to book directly?
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Lock in a spot on our senior partner's calendar immediately. Zero back-and-forth emails.
                </p>

                <button
                  onClick={onDirectBook}
                  className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold bg-white text-slate-950 hover:bg-slate-200 py-3 px-6 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>Book a Strategy Call</span>
                </button>

                {/* Direct Mail and Phone Indicators (Editable Placeholders) */}
                <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email contact */}
                  <a 
                    href="mailto:hitesh@hybridmonks.com" 
                    className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
                      <Mail className="w-3.5 h-3.5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Mail Us</p>
                      {/* EDITABLE PLACEHOLDER: hitesh@hybridmonks.com */}
                      <p className="font-medium font-mono text-white">hitesh@hybridmonks.com</p>
                    </div>
                  </a>

                  {/* Phone contact */}
                  <a 
                    href="tel:+18005550199" 
                    className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
                      <Phone className="w-3.5 h-3.5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Call Us</p>
                      {/* EDITABLE PLACEHOLDER: +1 (800) 555-0199 */}
                      <p className="font-medium font-mono text-white">+1 (800) 555-0199</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Reassurance Panel - What happens next */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="font-display font-semibold text-lg text-white">
                  What happens next?
                </h4>
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded text-[10px] font-mono text-blue-500">
                  <Clock className="w-3 h-3" />
                  <span>24hr Turnaround</span>
                </div>
              </div>

              {/* 3 Step Mini-List */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-display font-bold text-sm text-blue-500">
                    1
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-white">We review your site & AI visibility</h5>
                    <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                      We trace your brand citations across key LLMs (GPT-4o, Claude, Gemini) and traditional search indexing to identify visibility roadblocks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-display font-bold text-sm text-blue-500">
                    2
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-white">We map where the leaks are</h5>
                    <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                      Our strategists isolate conversion drops, mismatched user intent points, and high-value search keywords where competitor channels outrank you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-display font-bold text-sm text-blue-500">
                    3
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-white">We present a realistic growth plan</h5>
                    <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                      On our call, we lay out clear priority stages, budget targets, and expected citation goals. No pressure tactics, just concrete data.
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary CTA - Interactive GEO assessment */}
              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={() => {
                    setShowAssessment(true);
                    setAssessmentStep(1);
                    setAssessmentResult(null);
                  }}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-blue-400 hover:text-white transition-colors group cursor-pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse text-blue-400" />
                    Or take the AI Visibility Assessment
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ==================== MODAL: DIRECT SCHEDULING CALENDAR SIMULATION ==================== */}
      <AnimatePresence>
        {directBookTrigger && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onDirectBookClose}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />
                   <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative z-10 overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-blue-500" />
              
              {!bookingCompleted ? (
                <div>
                  <h4 className="font-display font-bold text-xl text-white mb-2">
                    Schedule with HybridMonks
                  </h4>
                  <p className="text-xs text-slate-400 font-sans mb-6">
                    Connect instantly with a Senior Partner. Average session is 30 mins.
                  </p>

                  <div className="space-y-4">
                    {/* Step 1: Select Date */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-blue-500 mb-2">
                        1. Select a Date
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {availableSlots.map((slot) => (
                          <button
                            key={slot.date}
                            onClick={() => {
                              setSelectedDate(slot.date);
                              setSelectedTime(""); // Reset time on date change
                            }}
                            className={`p-2.5 rounded-lg border text-xs font-semibold text-center transition-all cursor-pointer ${
                              selectedDate === slot.date
                                ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                                : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                            }`}
                          >
                            {slot.date.split(", ")[0]}
                            <span className="block font-normal text-[10px] opacity-75 mt-0.5">
                              {slot.date.split(", ")[1]}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Step 2: Select Time */}
                    {selectedDate && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                      >
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-blue-500 mb-2">
                          2. Select an Available Slot
                        </label>
                        <div className="grid grid-cols-1 gap-2 max-h-36 overflow-y-auto pr-1">
                          {availableSlots
                            .find((s) => s.date === selectedDate)
                            ?.times.map((time) => (
                              <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={`w-full p-2.5 rounded-lg border text-xs font-semibold text-left transition-all flex items-center justify-between cursor-pointer ${
                                  selectedTime === time
                                    ? "bg-blue-600/20 border-blue-500 text-white"
                                    : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                                }`}
                              >
                                <span>{time}</span>
                                {selectedTime === time && (
                                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                )}
                              </button>
                            ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Booking CTAs */}
                    <div className="pt-4 border-t border-slate-800 flex gap-3">
                      <button
                        onClick={onDirectBookClose}
                        className="w-1/3 py-2.5 px-4 rounded-lg bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-400 hover:text-white text-xs font-semibold transition-all cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleBookingSubmit}
                        disabled={!selectedDate || !selectedTime}
                        className="w-2/3 py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-[0_4px_15px_rgba(37,99,235,0.3)] disabled:opacity-50 cursor-pointer"
                      >
                        Confirm Booking
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Booking Success Message */
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-500 mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 animate-pulse" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-2">
                    Strategy Call Confirmed!
                  </h4>
                  <p className="text-xs text-slate-400 mb-5 leading-relaxed font-sans px-4">
                    Your session is locked in for <strong className="text-white">{selectedDate}</strong> at <strong className="text-white">{selectedTime}</strong>. Calendar invitation and link sent to your workspace.
                  </p>
                  <button
                    onClick={() => {
                      setBookingCompleted(false);
                      setSelectedDate("");
                      setSelectedTime("");
                      onDirectBookClose();
                    }}
                    className="py-2 px-5 bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-blue-500/30 rounded-lg text-xs font-medium text-white transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ==================== MODAL: INTERACTIVE AI VISIBILITY ASSESSMENT ==================== */}
      <AnimatePresence>
        {showAssessment && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAssessment(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />
                   <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative z-10 overflow-hidden"
            >
              {/* Decorative top pulse block */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-blue-500" />
              
              {/* Header */}
              <div className="mb-6 flex justify-between items-start">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-500 mb-1.5">
                    <Sparkles className="w-3 h-3 text-blue-500 animate-spin" />
                    HybridMonks Intelligence Engine
                  </div>
                  <h4 className="font-display font-bold text-xl text-white">
                    GEO & AI Presence Assessment
                  </h4>
                </div>
                <button 
                  onClick={() => setShowAssessment(false)}
                  className="p-1 rounded bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Assessment Steps Form */}
              <form onSubmit={runAssessment} className="space-y-5 font-sans">
                {assessmentStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Let's gauge how readily your corporate website is crawled and recommended by search models like ChatGPT & Perplexity.
                    </p>
                    <div className="space-y-2">
                      <label htmlFor="assessDomain" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                        1. Enter your corporate domain name
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                          <Search className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          id="assessDomain"
                          value={assessmentData.domain}
                          onChange={(e) => setAssessmentData({ ...assessmentData, domain: e.target.value })}
                          placeholder="e.g. cloudtech.com"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-md text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-blue-500/50"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      disabled={!assessmentData.domain}
                      onClick={() => setAssessmentStep(2)}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-md text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>Next: Content Structure</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                )}

                {assessmentStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="space-y-3">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                        2. Do you have semantic structured FAQ or intent modules on key offer pages?
                      </label>
                      <div className="grid grid-cols-3 gap-2.5">
                        {["yes", "no", "unsure"].map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setAssessmentData({ ...assessmentData, hasFaq: opt })}
                            className={`p-2.5 rounded-lg border text-xs capitalize font-semibold cursor-pointer ${
                              assessmentData.hasFaq === opt
                                ? "bg-blue-600/20 border-blue-500 text-blue-400"
                                : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      <p className="text-[10px] text-slate-500 leading-relaxed italic">
                        Semantic FAQ widgets help conversational engines map exact answers to direct user search queries.
                      </p>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setAssessmentStep(1)}
                        className="w-1/3 py-2.5 bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-400 text-xs font-semibold rounded-md transition-all"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setAssessmentStep(3)}
                        className="w-2/3 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Next: Mentions</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {assessmentStep === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="space-y-3">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                        3. How frequently is your brand cited in current industry market maps or comparison indexes?
                      </label>
                      <div className="grid grid-cols-3 gap-2.5">
                        {["often", "sometimes", "rarely"].map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setAssessmentData({ ...assessmentData, mentions: opt })}
                            className={`p-2.5 rounded-lg border text-xs capitalize font-semibold cursor-pointer ${
                              assessmentData.mentions === opt
                                ? "bg-blue-600/20 border-blue-500 text-blue-400"
                                : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setAssessmentStep(2)}
                        className="w-1/3 py-2.5 bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-400 text-xs font-semibold rounded-md transition-all"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="w-2/3 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Calculate Visibility Score</span>
                        <TrendingUp className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Loading Screen */}
                {assessmentStep === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="relative w-16 h-16 mx-auto">
                      <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full" />
                      <div className="absolute inset-0 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                    <div>
                      <p className="text-xs text-white font-semibold uppercase tracking-wider font-mono">
                        Querying Indexing Pools...
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                        Scanning semantic density and mapping LLM citations for {assessmentData.domain}...
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Results Screen */}
                {assessmentStep === 5 && assessmentResult && (
                  <motion.div
                    key="step-5"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-5"
                  >
                    <div className="text-center bg-slate-950 border border-slate-800 rounded-xl p-5">
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                        Domain: {assessmentData.domain}
                      </div>
                      
                      {/* Big Score Dial */}
                      <div className="my-4">
                        <span className="text-5xl font-display font-bold text-blue-500">
                          {assessmentResult.score}%
                        </span>
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                          AI Readiness Level:{" "}
                          <span className={assessmentResult.score > 70 ? "text-emerald-400" : "text-amber-400"}>
                            {assessmentResult.grade}
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Leak warning list */}
                    <div className="space-y-2.5">
                      <h5 className="text-xs font-semibold uppercase text-white tracking-wide">
                        Diagnosed Leaks & Citations Gaps:
                      </h5>
                      <div className="space-y-1.5">
                        {assessmentResult.leaks.map((leak: string, i: number) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                            <span className="text-amber-500 font-bold mt-0.5">•</span>
                            <span>{leak}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800 space-y-3">
                      <p className="text-xs text-slate-400 font-sans leading-relaxed">
                        We have compiled a localized leak map report for <strong className="text-white">{assessmentData.domain}</strong> detailing how to repair these conversational indexes. Let's cover it in depth during your Strategy Call!
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setShowAssessment(false);
                          onDirectBook();
                        }}
                        className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_4px_15px_rgba(37,99,235,0.3)]"
                      >
                        <span>Schedule Deep-Dive Analysis</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
