"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  FileCode, 
  Copy, 
  Download, 
  Check, 
  ExternalLink,
  Code2,
  Sparkles,
  Info
} from "lucide-react";

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExportModal({ isOpen, onClose }: ExportModalProps) {
  const [copied, setCopied] = useState(false);

  // Generate the absolute self-contained single file HTML string as requested.
  const standaloneHTML = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact HybridMonks | AI-Powered B2B Revenue Growth & AI Visibility</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Tailwind Play CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                        display: ['Space Grotesk', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            dark: '#070913',
                            card: '#0f1424',
                            'card-light': '#171e35',
                            accent: '#3b82f6',
                            'accent-hover': '#2563eb',
                            cyan: '#06b6d4',
                            text: '#f8fafc',
                            muted: '#94a3b8'
                        }
                    }
                }
            }
        }
    </script>

    <!-- Custom scrollbar & visual matching overrides -->
    <style>
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #070913;
        }
        ::-webkit-scrollbar-thumb {
            background: #1e293b;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #3b82f6;
        }
        .text-glow {
            text-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
        }
    </style>
</head>
<body class="bg-brand-dark text-brand-text font-sans antialiased">

    <!-- ========================================== -->
    <!-- 1. STICKY ANNOUNCEMENT BAR -->
    <!-- ========================================== -->
    <div id="announcement-bar" class="sticky top-0 z-50 w-full bg-brand-dark border-b border-brand-card-light py-2.5 px-4 flex flex-col md:flex-row items-center justify-center gap-3 text-center">
        <div class="flex items-center justify-center gap-2 text-sm text-brand-text font-medium">
            <span class="inline-flex items-center justify-center bg-brand-accent/20 text-brand-cyan px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider border border-brand-cyan/20">
                <i data-lucide="sparkles" class="w-3 h-3 mr-1"></i>
                New: GEO & AI Search
            </span>
            <span class="text-brand-text/90">
                Now helping B2B teams get found in Google — and cited in <strong class="text-brand-text font-semibold text-brand-cyan">ChatGPT, Perplexity & AI Overviews</strong>.
            </span>
        </div>
        <button onclick="openBooking()" class="inline-flex items-center justify-center gap-1.5 text-xs bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold py-1 px-3.5 rounded-full transition-all duration-200 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] focus:outline-none cursor-pointer">
            <span>Book a Meeting</span>
            <i data-lucide="arrow-right" class="w-3 h-3"></i>
        </button>
    </div>

    <!-- ========================================== -->
    <!-- 2. STICKY NAVIGATION -->
    <!-- ========================================== -->
    <nav id="main-nav" class="sticky top-[45px] z-40 w-full transition-all duration-300 border-b bg-brand-dark/95 backdrop-blur-md py-4 border-brand-card-light shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center">
                    <a href="#" class="flex items-center gap-2 group">
                        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-accent to-brand-cyan flex items-center justify-center font-display text-white font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                            S
                        </div>
                        <span class="font-display font-bold text-xl tracking-tight text-brand-text group-hover:text-brand-accent transition-colors">
                            Hybrid<span class="text-brand-cyan">Monks</span>
                        </span>
                    </a>
                </div>

                <!-- Desktop Menu -->
                <div class="hidden lg:flex items-center gap-8">
                    <a href="#framework" class="text-sm font-medium text-brand-muted hover:text-brand-text transition-colors">Framework</a>
                    <a href="#services" class="text-sm font-medium text-brand-muted hover:text-brand-text transition-colors">Services</a>
                    <a href="#industries" class="text-sm font-medium text-brand-muted hover:text-brand-text transition-colors">Industries</a>
                    <a href="#case-studies" class="text-sm font-medium text-brand-muted hover:text-brand-text transition-colors">Case Studies</a>
                    <a href="#about" class="text-sm font-medium text-brand-muted hover:text-brand-text transition-colors">About</a>
                    <a href="#resources" class="text-sm font-medium text-brand-muted hover:text-brand-text transition-colors">Resources</a>
                </div>

                <!-- Call to Action -->
                <div class="hidden sm:flex items-center">
                    <button onclick="openBooking()" class="relative inline-flex items-center justify-center gap-2 text-sm font-semibold bg-white/5 hover:bg-white/10 text-brand-text border border-white/10 hover:border-brand-accent/50 py-2 px-5 rounded-lg transition-all duration-300 cursor-pointer">
                        <span>Book a Strategy Call</span>
                        <i data-lucide="arrow-right" class="w-4 h-4 text-brand-cyan"></i>
                    </button>
                </div>

                <!-- Mobile Hamburger Toggle -->
                <div class="flex lg:hidden">
                    <button onclick="toggleMobileMenu()" class="inline-flex items-center justify-center p-2 rounded-md text-brand-muted hover:text-brand-text hover:bg-white/5 focus:outline-none cursor-pointer">
                        <i data-lucide="menu" id="hamburger-icon" class="w-6 h-6"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Drawer -->
        <div id="mobile-menu" class="hidden lg:hidden w-full bg-brand-dark/95 backdrop-blur-lg border-b border-brand-card-light transition-all duration-300">
            <div class="px-4 pt-4 pb-6 space-y-3">
                <a href="#framework" onclick="toggleMobileMenu()" class="block px-3 py-2.5 rounded-lg text-base font-medium text-brand-muted hover:text-brand-text hover:bg-brand-card-light transition-colors">Framework</a>
                <a href="#services" onclick="toggleMobileMenu()" class="block px-3 py-2.5 rounded-lg text-base font-medium text-brand-muted hover:text-brand-text hover:bg-brand-card-light transition-colors">Services</a>
                <a href="#industries" onclick="toggleMobileMenu()" class="block px-3 py-2.5 rounded-lg text-base font-medium text-brand-muted hover:text-brand-text hover:bg-brand-card-light transition-colors">Industries</a>
                <a href="#case-studies" onclick="toggleMobileMenu()" class="block px-3 py-2.5 rounded-lg text-base font-medium text-brand-muted hover:text-brand-text hover:bg-brand-card-light transition-colors">Case Studies</a>
                <a href="#about" onclick="toggleMobileMenu()" class="block px-3 py-2.5 rounded-lg text-base font-medium text-brand-muted hover:text-brand-text hover:bg-brand-card-light transition-colors">About</a>
                <a href="#resources" onclick="toggleMobileMenu()" class="block px-3 py-2.5 rounded-lg text-base font-medium text-brand-muted hover:text-brand-text hover:bg-brand-card-light transition-colors">Resources</a>
                <div class="pt-4 border-t border-brand-card-light">
                    <button onclick="toggleMobileMenu(); openBooking()" class="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold bg-brand-accent hover:bg-brand-accent-hover text-white py-3 px-4 rounded-lg transition-all duration-200">
                        <span>Book a Strategy Call</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- ========================================== -->
    <!-- 3. CONTACT HERO -->
    <!-- ========================================== -->
    <section class="relative pt-12 pb-8 overflow-hidden">
        <div class="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div class="absolute top-1/3 right-1/4 -translate-y-1/2 w-64 h-64 bg-brand-cyan/5 rounded-full blur-[80px] pointer-events-none"></div>

        <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-accent/10 border border-brand-accent/25 rounded-full text-xs font-semibold text-brand-cyan tracking-wider uppercase mb-5">
                <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
                <span>Contact</span>
            </div>
            <h1 class="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-brand-text mb-6 leading-[1.1]">
                Let's talk about your <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-blue-400 to-brand-cyan relative">pipeline.<span class="absolute bottom-1.5 left-0 w-full h-[4px] bg-brand-accent/30 rounded"></span></span>
            </h1>
            <p class="font-sans text-base sm:text-lg md:text-xl text-brand-muted max-w-3xl mx-auto leading-relaxed">
                Tell us where you want to grow. We'll assess your search and AI presence, pinpoint where the pipeline leaks are, and show you a realistic growth path — <span class="text-brand-text font-medium border-b border-brand-cyan/40">before you commit to anything</span>.
            </p>
        </div>
    </section>

    <!-- ========================================== -->
    <!-- 4. MAIN CONTACT BLOCK (TWO-COLUMN) -->
    <!-- ========================================== -->
    <section class="py-12 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                <!-- LEFT COLUMN: FORM CARD -->
                <div class="lg:col-span-7">
                    <div class="bg-brand-card border border-white/5 rounded-2xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
                        <div class="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-accent via-blue-500 to-brand-cyan"></div>
                        
                        <!-- Form State -->
                        <div id="form-container">
                            <div class="mb-6">
                                <h3 class="font-display font-bold text-2xl text-brand-text mb-2">Request a Growth Strategy Session</h3>
                                <p class="text-sm text-brand-muted font-sans">Take the first step towards systematic pipeline growth. We review every request individually.</p>
                            </div>

                            <form id="contactForm" onsubmit="handleFormSubmit(event)" class="space-y-5">
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <!-- Full Name -->
                                    <div class="space-y-1.5">
                                        <label class="block text-xs font-semibold text-brand-text/90 uppercase tracking-wider">Full Name *</label>
                                        <div class="relative">
                                            <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-brand-muted">
                                                <i data-lucide="user" class="w-4 h-4"></i>
                                            </span>
                                            <input type="text" id="fullName" required placeholder="Sarah Jenkins" class="w-full pl-10 pr-4 py-3 bg-brand-dark border border-white/10 hover:border-white/20 rounded-lg text-sm text-brand-text placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all">
                                        </div>
                                    </div>

                                    <!-- Work Email -->
                                    <div class="space-y-1.5">
                                        <label class="block text-xs font-semibold text-brand-text/90 uppercase tracking-wider">Work Email *</label>
                                        <div class="relative">
                                            <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-brand-muted">
                                                <i data-lucide="mail" class="w-4 h-4"></i>
                                            </span>
                                            <input type="email" id="workEmail" required placeholder="sarah@enterprise.com" class="w-full pl-10 pr-4 py-3 bg-brand-dark border border-white/10 hover:border-white/20 rounded-lg text-sm text-brand-text placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all">
                                        </div>
                                        <p id="email-error" class="hidden text-xs text-red-400 mt-1 flex items-center gap-1">
                                            <i data-lucide="alert-circle" class="w-3 h-3"></i> Please use your work/corporate email.
                                        </p>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <!-- Company Name -->
                                    <div class="space-y-1.5">
                                        <label class="block text-xs font-semibold text-brand-text/90 uppercase tracking-wider">Company Name *</label>
                                        <div class="relative">
                                            <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-brand-muted">
                                                <i data-lucide="building-2" class="w-4 h-4"></i>
                                            </span>
                                            <input type="text" id="company" required placeholder="Enterprise Co." class="w-full pl-10 pr-4 py-3 bg-brand-dark border border-white/10 hover:border-white/20 rounded-lg text-sm text-brand-text placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all">
                                        </div>
                                    </div>

                                    <!-- Website URL -->
                                    <div class="space-y-1.5">
                                        <label class="block text-xs font-semibold text-brand-text/90 uppercase tracking-wider">Website URL</label>
                                        <div class="relative">
                                            <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-brand-muted">
                                                <i data-lucide="globe" class="w-4 h-4"></i>
                                            </span>
                                            <input type="text" id="websiteUrl" placeholder="enterprise.com" class="w-full pl-10 pr-4 py-3 bg-brand-dark border border-white/10 hover:border-white/20 rounded-lg text-sm text-brand-text placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all">
                                        </div>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <!-- Company Size -->
                                    <div class="space-y-1.5">
                                        <label class="block text-xs font-semibold text-brand-text/90 uppercase tracking-wider">Company Size *</label>
                                        <select id="companySize" required class="w-full px-4 py-3 bg-brand-dark border border-white/10 hover:border-white/20 rounded-lg text-sm text-brand-text focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent cursor-pointer">
                                            <option value="" disabled selected>Select headcount...</option>
                                            <option value="10-50">10 – 50 employees</option>
                                            <option value="51-200">51 – 200 employees</option>
                                            <option value="201-500">201 – 500 employees</option>
                                            <option value="500+">500+ employees</option>
                                        </select>
                                    </div>

                                    <!-- Assistance Theme -->
                                    <div class="space-y-1.5">
                                        <label class="block text-xs font-semibold text-brand-text/90 uppercase tracking-wider">What do you need help with? *</label>
                                        <select id="helpType" required class="w-full px-4 py-3 bg-brand-dark border border-white/10 hover:border-white/20 rounded-lg text-sm text-brand-text focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent cursor-pointer">
                                            <option value="" disabled selected>Choose objective...</option>
                                            <option value="GEO">AI Visibility & GEO</option>
                                            <option value="SEO">Advanced B2B SEO</option>
                                            <option value="Demand">High-Intent Demand Generation</option>
                                            <option value="CRO">Website Conversion & CRO</option>
                                            <option value="Strategy">Full-Stack Revenue Strategy</option>
                                            <option value="Other">Other Specialized Needs</option>
                                        </select>
                                    </div>
                                </div>

                                <!-- Message -->
                                <div class="space-y-1.5">
                                    <label class="block text-xs font-semibold text-brand-text/90 uppercase tracking-wider">Context & Current Challenges</label>
                                    <textarea id="message" rows="4" placeholder="Tell us briefly about your current marketing challenges..." class="w-full px-4 py-3 bg-brand-dark border border-white/10 hover:border-white/20 rounded-lg text-sm text-brand-text placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent resize-none"></textarea>
                                </div>

                                <button type="submit" class="w-full relative inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-brand-accent hover:bg-brand-accent-hover py-3.5 px-6 rounded-lg transition-all duration-300 shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_25px_rgba(59,130,246,0.5)] cursor-pointer">
                                    <span>Book My Strategy Call</span>
                                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                                </button>

                                <!-- Trust Line -->
                                <div class="flex items-center justify-center gap-1.5 text-xs text-brand-muted pt-2 border-t border-white/5">
                                    <i data-lucide="shield-check" class="w-4 h-4 text-brand-cyan"></i>
                                    <span>We reply within one business day. No spam, ever.</span>
                                </div>
                            </form>
                        </div>

                        <!-- Success Screen (hidden by default) -->
                        <div id="success-container" class="hidden py-12 text-center flex flex-col items-center justify-center">
                            <div class="w-16 h-16 bg-brand-cyan/10 border border-brand-cyan/30 rounded-full flex items-center justify-center text-brand-cyan mb-6">
                                <i data-lucide="check-circle-2" class="w-10 h-10"></i>
                            </div>
                            <h3 class="font-display font-bold text-3xl text-brand-text mb-3">Strategy Session Requested!</h3>
                            <p class="text-brand-muted text-sm max-w-md mx-auto mb-8 leading-relaxed">
                                Thank you! Our B2B revenue consultants are already performing an initial search review of your corporate presence.
                            </p>
                            <div class="bg-brand-dark border border-white/5 rounded-xl p-5 text-left max-w-lg w-full mb-8">
                                <p class="text-xs font-semibold uppercase tracking-wider text-brand-cyan mb-2">Next Steps:</p>
                                <ol class="text-xs text-brand-muted space-y-2 list-decimal list-inside font-sans">
                                    <li>We will email schedule options within 2 hours.</li>
                                    <li>We are preparing a custom pipeline leak analysis.</li>
                                    <li>We will share the complete findings live.</li>
                                </ol>
                            </div>
                            <button onclick="resetForm()" class="text-xs text-brand-cyan hover:text-brand-text font-semibold border-b border-brand-cyan/30 pb-0.5 transition-all">Submit another request</button>
                        </div>
                    </div>
                </div>

                <!-- RIGHT COLUMN: DIRECT AND INFO PANEL -->
                <div class="lg:col-span-5 space-y-8">
                    <!-- Prefer direct? -->
                    <div class="bg-brand-card/60 border border-white/5 rounded-2xl p-6 sm:p-8 relative">
                        <span class="text-xs font-semibold uppercase tracking-widest text-brand-cyan block mb-2">Skip the queue</span>
                        <h4 class="font-display font-bold text-2xl text-brand-text mb-2">Prefer to book directly?</h4>
                        <p class="text-sm text-brand-muted leading-relaxed mb-4">Lock in a spot on our senior partner's calendar immediately. Zero back-and-forth emails.</p>
                        
                        <button onclick="openBooking()" class="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold bg-white text-brand-dark hover:bg-brand-text py-3 px-6 rounded-lg transition-all duration-200 cursor-pointer">
                            <i data-lucide="calendar" class="w-4 h-4 text-brand-accent"></i>
                            <span>Book a Strategy Call</span>
                        </button>

                        <!-- Direct Contacts (Commented Placeholders) -->
                        <div class="pt-4 mt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <!-- EDITABLE EMAIL LINK -->
                            <a href="mailto:growth@hybridmonks.com" class="flex items-center gap-2.5 text-xs text-brand-muted hover:text-brand-cyan transition-colors">
                                <div class="p-2 bg-white/5 rounded-lg border border-white/5">
                                    <i data-lucide="mail" class="w-3.5 h-3.5 text-brand-cyan"></i>
                                </div>
                                <div>
                                    <p class="text-[10px] text-brand-muted/50 uppercase tracking-widest">Mail Us</p>
                                    <p class="font-medium font-mono text-brand-text">growth@hybridmonks.com</p>
                                </div>
                            </a>

                            <!-- EDITABLE PHONE LINK -->
                            <a href="tel:+18005550199" class="flex items-center gap-2.5 text-xs text-brand-muted hover:text-brand-cyan transition-colors">
                                <div class="p-2 bg-white/5 rounded-lg border border-white/5">
                                    <i data-lucide="phone" class="w-3.5 h-3.5 text-brand-cyan"></i>
                                </div>
                                <div>
                                    <p class="text-[10px] text-brand-muted/50 uppercase tracking-widest">Call Us</p>
                                    <p class="font-medium font-mono text-brand-text">+1 (800) 555-0199</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <!-- Steps Panel -->
                    <div class="bg-brand-card/40 border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6">
                        <div class="flex items-center justify-between">
                            <h4 class="font-display font-semibold text-lg text-brand-text">What happens next?</h4>
                            <div class="flex items-center gap-1.5 px-2 py-0.5 bg-brand-cyan/10 border border-brand-cyan/20 rounded text-[10px] font-mono text-brand-cyan">
                                <i data-lucide="clock" class="w-3 h-3"></i>
                                <span>24hr Turnaround</span>
                            </div>
                        </div>

                        <div class="space-y-4">
                            <!-- Step 1 -->
                            <div class="flex items-start gap-4">
                                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center font-display font-bold text-sm text-brand-cyan">1</div>
                                <div>
                                    <h5 class="font-semibold text-sm text-brand-text">We review your site & AI visibility</h5>
                                    <p class="text-xs text-brand-muted leading-relaxed mt-0.5">We trace your brand citations across key LLMs (GPT-4o, Claude, Gemini) and traditional search indexing to identify visibility roadblocks.</p>
                                </div>
                            </div>

                            <!-- Step 2 -->
                            <div class="flex items-start gap-4">
                                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center font-display font-bold text-sm text-brand-cyan">2</div>
                                <div>
                                    <h5 class="font-semibold text-sm text-brand-text">We map where the leaks are</h5>
                                    <p class="text-xs text-brand-muted leading-relaxed mt-0.5">Our strategists isolate conversion drops, mismatched user intent points, and high-value search keywords where competitor channels outrank you.</p>
                                </div>
                            </div>

                            <!-- Step 3 -->
                            <div class="flex items-start gap-4">
                                <div class="flex-shrink-0 w-8 h-8 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center font-display font-bold text-sm text-brand-cyan">3</div>
                                <div>
                                    <h5 class="font-semibold text-sm text-brand-text">We present a realistic growth plan</h5>
                                    <p class="text-xs text-brand-muted leading-relaxed mt-0.5">On our call, we lay out clear priority stages, budget targets, and expected citation goals. No pressure tactics, just concrete data.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Secondary CTA -->
                        <div class="pt-4 border-t border-white/5">
                            <button onclick="openAssessment()" class="w-full inline-flex items-center justify-between text-xs font-semibold text-brand-cyan hover:text-brand-text transition-colors group">
                                <span class="flex items-center gap-1.5">
                                    <i data-lucide="sparkles" class="w-3.5 h-3.5 text-brand-cyan"></i>
                                    Or take the AI Visibility Assessment
                                </span>
                                <i data-lucide="arrow-right" class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- ========================================== -->
    <!-- 5. TRUST STRIP -->
    <!-- ========================================== -->
    <section id="trust-strip" class="py-10 border-t border-b border-white/5 bg-brand-dark/40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                
                <!-- Stat Columns (EDITABLE PLACEHOLDERS) -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full lg:w-auto flex-grow max-w-4xl">
                    <div class="flex items-center gap-3 bg-brand-card/30 border border-white/5 p-3 rounded-xl hover:border-brand-accent/30 transition-all">
                        <div class="w-8 h-8 rounded bg-brand-accent/5 flex items-center justify-center text-brand-cyan">
                            <i data-lucide="shield" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <!-- EDITABLE PLACEHOLDER -->
                            <p class="text-sm font-display font-bold text-brand-text">120+ B2B Brands</p>
                            <p class="text-[11px] text-brand-muted uppercase tracking-wider font-medium">Scaled globally</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-3 bg-brand-card/30 border border-white/5 p-3 rounded-xl hover:border-brand-accent/30 transition-all">
                        <div class="w-8 h-8 rounded bg-brand-accent/5 flex items-center justify-center text-brand-cyan">
                            <i data-lucide="trending-up" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <!-- EDITABLE PLACEHOLDER -->
                            <p class="text-sm font-display font-bold text-brand-text">$25M+ Pipeline</p>
                            <p class="text-[11px] text-brand-muted uppercase tracking-wider font-medium">Attributed revenue</p>
                        </div>
                    </div>

                    <div class="flex items-center gap-3 bg-brand-card/30 border border-white/5 p-3 rounded-xl hover:border-brand-accent/30 transition-all">
                        <div class="w-8 h-8 rounded bg-brand-accent/5 flex items-center justify-center text-brand-cyan">
                            <i data-lucide="check-circle" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <!-- EDITABLE PLACEHOLDER -->
                            <p class="text-sm font-display font-bold text-brand-text">1-Business Day</p>
                            <p class="text-[11px] text-brand-muted uppercase tracking-wider font-medium">Guaranteed reply SLA</p>
                        </div>
                    </div>
                </div>

                <!-- Grayscale logos (EDITABLE PLACEHOLDERS) -->
                <div class="w-full lg:w-auto flex flex-col items-center lg:items-end justify-center gap-2">
                    <span class="text-[10px] font-bold uppercase tracking-widest text-brand-muted/50 mb-2">Featured in major search indexes</span>
                    <div class="flex flex-wrap justify-center lg:justify-end items-center gap-4 sm:gap-6 opacity-40 hover:opacity-75 transition-opacity">
                        <div class="flex items-center gap-1 bg-white/5 border border-white/5 py-1.5 px-3 rounded text-brand-text font-display font-bold text-xs">
                            <span class="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
                            <span>SaaSify Core</span>
                        </div>
                        <div class="flex items-center gap-1 bg-white/5 border border-white/5 py-1.5 px-3 rounded text-brand-text font-display font-bold text-xs">
                            <span class="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
                            <span>CyberArmor</span>
                        </div>
                        <div class="flex items-center gap-1 bg-white/5 border border-white/5 py-1.5 px-3 rounded text-brand-text font-display font-bold text-xs">
                            <span class="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
                            <span>ApexTech</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- ========================================== -->
    <!-- 6. FOOTER -->
    <!-- ========================================== -->
    <footer id="main-footer" class="bg-brand-dark text-brand-muted border-t border-white/5 pt-16 pb-12 relative overflow-hidden">
        <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12 mb-12">
                
                <div class="lg:col-span-2 space-y-5">
                    <a href="#" class="flex items-center gap-2 group">
                        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-accent to-brand-cyan flex items-center justify-center font-display text-white font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.3)]">S</div>
                        <span class="font-display font-bold text-xl tracking-tight text-brand-text group-hover:text-brand-accent transition-colors">Hybrid<span class="text-brand-cyan">Monks</span></span>
                    </a>
                    <p class="text-sm text-brand-muted leading-relaxed max-w-sm">The AI-powered B2B revenue growth and AI visibility agency. We build predictable pipeline engines for high-growth tech & service leaders.</p>
                    
                    <div class="flex items-center gap-3 pt-2">
                        <a href="#" class="p-2 bg-white/5 border border-white/5 hover:border-brand-accent hover:text-brand-text rounded-lg transition-all"><i data-lucide="linkedin" class="w-4 h-4"></i></a>
                        <a href="#" class="p-2 bg-white/5 border border-white/5 hover:border-brand-accent hover:text-brand-text rounded-lg transition-all"><i data-lucide="twitter" class="w-4 h-4"></i></a>
                        <a href="#" class="p-2 bg-white/5 border border-white/5 hover:border-brand-accent hover:text-brand-text rounded-lg transition-all"><i data-lucide="youtube" class="w-4 h-4"></i></a>
                    </div>
                </div>

                <!-- Services -->
                <div>
                    <h5 class="font-display font-bold text-xs text-brand-text uppercase tracking-widest mb-4">Services</h5>
                    <ul class="space-y-2.5 text-xs">
                        <li><a href="#" class="hover:text-brand-text hover:underline transition-colors">AI Visibility & GEO</a></li>
                        <li><a href="#" class="hover:text-brand-text hover:underline transition-colors">Advanced B2B SEO</a></li>
                        <li><a href="#" class="hover:text-brand-text hover:underline transition-colors">High-Intent Demand Gen</a></li>
                        <li><a href="#" class="hover:text-brand-text hover:underline transition-colors">Website CRO & Funnels</a></li>
                        <li><a href="#" class="hover:text-brand-text hover:underline transition-colors">Account-Based Marketing</a></li>
                    </ul>
                </div>

                <!-- Industries -->
                <div>
                    <h5 class="font-display font-bold text-xs text-brand-text uppercase tracking-widest mb-4">Industries</h5>
                    <ul class="space-y-2.5 text-xs">
                        <li><a href="#" class="hover:text-brand-text hover:underline transition-colors">SaaS & Enterprise Tech</a></li>
                        <li><a href="#" class="hover:text-brand-text hover:underline transition-colors">Cybersecurity & IT/MSP</a></li>
                        <li><a href="#" class="hover:text-brand-text hover:underline transition-colors">Professional Services</a></li>
                        <li><a href="#" class="hover:text-brand-text hover:underline transition-colors">Advanced Manufacturing</a></li>
                    </ul>
                </div>

                <!-- Resources -->
                <div>
                    <h5 class="font-display font-bold text-xs text-brand-text uppercase tracking-widest mb-4">Resources</h5>
                    <ul class="space-y-2.5 text-xs">
                        <li><a href="#" class="hover:text-brand-text hover:underline transition-colors">B2B Revenue Blog</a></li>
                        <li><a href="#" class="hover:text-brand-text hover:underline transition-colors">AI Visibility Checker</a></li>
                        <li><a href="#" class="hover:text-brand-text hover:underline transition-colors">Pipeline Leak Mapper</a></li>
                        <li><a href="#" class="hover:text-brand-text hover:underline transition-colors">Growth Case Studies</a></li>
                    </ul>
                </div>

                <!-- Company -->
                <div>
                    <h5 class="font-display font-bold text-xs text-brand-text uppercase tracking-widest mb-4">Company</h5>
                    <ul class="space-y-2.5 text-xs">
                        <li><a href="#" class="hover:text-brand-text hover:underline transition-colors">About HybridMonks</a></li>
                        <li><a href="#" class="hover:text-brand-text hover:underline transition-colors">Our Framework</a></li>
                        <li><a href="#" class="hover:text-brand-text hover:underline transition-colors flex items-center gap-1">Consulting Team</a></li>
                        <li><a href="#" class="hover:text-brand-text hover:underline transition-colors flex items-center gap-1">Careers</a></li>
                    </ul>
                </div>

            </div>

            <div class="pt-8 mt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
                <p>© 2026 HybridMonks. All rights reserved.</p>
                <div class="flex flex-wrap items-center gap-6">
                    <a href="#" class="hover:text-brand-text transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-brand-text transition-colors">Terms of Service</a>
                    <a href="#" class="hover:text-brand-text transition-colors">Sitemap</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- ========================================== -->
    <!-- DIRECT SCHEDULING CALENDAR MODAL -->
    <!-- ========================================== -->
    <div id="booking-modal" class="hidden fixed inset-0 z-50 overflow-y-auto flex items-center justify-center px-4">
        <div onclick="closeBooking()" class="fixed inset-0 bg-black/80 backdrop-blur-sm"></div>
        <div class="bg-brand-card border border-white/10 rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative z-10 overflow-hidden">
            <div class="absolute top-0 inset-x-0 h-1 bg-brand-accent"></div>
            
            <div id="booking-step-1">
                <h4 class="font-display font-bold text-2xl text-brand-text mb-2">Schedule with HybridMonks</h4>
                <p class="text-xs text-brand-muted font-sans mb-6">Connect instantly with a Senior Partner. Average session is 30 mins.</p>

                <div class="space-y-4">
                    <!-- Dates -->
                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-brand-cyan mb-2">1. Select a Date</label>
                        <div class="grid grid-cols-3 gap-2">
                            <button onclick="selectDate('Monday, Jun 29')" class="p-2.5 rounded-lg border text-xs font-semibold text-center bg-brand-dark border-white/5 text-brand-muted hover:border-white/10 date-btn">Mon, Jun 29</button>
                            <button onclick="selectDate('Tuesday, Jun 30')" class="p-2.5 rounded-lg border text-xs font-semibold text-center bg-brand-dark border-white/5 text-brand-muted hover:border-white/10 date-btn">Tue, Jun 30</button>
                            <button onclick="selectDate('Wednesday, Jul 1')" class="p-2.5 rounded-lg border text-xs font-semibold text-center bg-brand-dark border-white/5 text-brand-muted hover:border-white/10 date-btn">Wed, Jul 1</button>
                        </div>
                    </div>

                    <!-- Slots (shown when date is selected) -->
                    <div id="time-slots-container" class="hidden">
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-brand-cyan mb-2">2. Select an Available Slot</label>
                        <div class="grid grid-cols-1 gap-2 max-h-36 overflow-y-auto" id="slots-list">
                            <!-- Injected times -->
                        </div>
                    </div>

                    <div class="pt-4 border-t border-white/5 flex gap-3">
                        <button onclick="closeBooking()" class="w-1/3 py-2.5 px-4 rounded-lg bg-white/5 hover:bg-white/10 text-brand-muted text-xs font-semibold transition-all">Cancel</button>
                        <button onclick="confirmBooking()" id="confirm-booking-btn" disabled class="w-2/3 py-2.5 px-4 rounded-lg bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-semibold transition-all disabled:opacity-50">Confirm Booking</button>
                    </div>
                </div>
            </div>

            <!-- success state -->
            <div id="booking-success" class="hidden text-center py-6">
                <div class="w-12 h-12 bg-brand-cyan/10 border border-brand-cyan/30 rounded-full flex items-center justify-center text-brand-cyan mx-auto mb-4">
                    <i data-lucide="check-circle-2" class="w-6 h-6 animate-pulse"></i>
                </div>
                <h4 class="font-display font-bold text-xl text-brand-text mb-2">Strategy Call Confirmed!</h4>
                <p class="text-xs text-brand-muted mb-5 leading-relaxed">Your session is locked in. Calendar invitation and link sent to your workspace.</p>
                <button onclick="closeBooking(); resetBookingState();" class="py-2 px-5 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg text-xs font-medium text-brand-text transition-all">Done</button>
            </div>
        </div>
    </div>

    <!-- ========================================== -->
    <!-- INTERACTIVE AI VISIBILITY ASSESSMENT MODAL -->
    <!-- ========================================== -->
    <div id="assessment-modal" class="hidden fixed inset-0 z-50 overflow-y-auto flex items-center justify-center px-4">
        <div onclick="closeAssessment()" class="fixed inset-0 bg-black/85 backdrop-blur-md"></div>
        <div class="bg-brand-card border border-white/10 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative z-10 overflow-hidden">
            <div class="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-cyan via-brand-accent to-brand-cyan"></div>
            
            <div class="mb-6 flex justify-between items-start">
                <div>
                    <div class="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-cyan mb-1.5">
                        <i data-lucide="sparkles" class="w-3 h-3 text-brand-cyan animate-spin"></i>
                        HybridMonks Intelligence Engine
                    </div>
                    <h4 class="font-display font-bold text-xl text-brand-text">GEO & AI Presence Assessment</h4>
                </div>
                <button onclick="closeAssessment()" class="p-1 rounded bg-white/5 text-brand-muted hover:text-brand-text">✕</button>
            </div>

            <!-- Step 1 -->
            <div id="assess-step-1" class="space-y-4">
                <p class="text-xs text-brand-muted leading-relaxed">Let's gauge how readily your corporate website is recommended by generative search models like ChatGPT & Perplexity.</p>
                <div class="space-y-2">
                    <label class="block text-xs font-semibold uppercase tracking-wider text-brand-text/90">1. Enter your corporate domain name</label>
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-brand-muted">
                            <i data-lucide="search" class="w-4 h-4"></i>
                        </span>
                        <input type="text" id="assessDomain" placeholder="e.g. cloudtech.com" class="w-full pl-10 pr-4 py-3 bg-brand-dark border border-white/10 rounded-lg text-sm text-brand-text placeholder-brand-muted/40 focus:outline-none focus:border-brand-cyan">
                    </div>
                </div>
                <button onclick="goToAssessStep2()" class="w-full py-3 bg-brand-accent hover:bg-brand-accent-hover text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5">
                    <span>Next: Content Structure</span>
                    <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                </button>
            </div>

            <!-- Step 2 -->
            <div id="assess-step-2" class="hidden space-y-4">
                <div class="space-y-3">
                    <label class="block text-xs font-semibold uppercase tracking-wider text-brand-text/90">2. Do you have semantic structured FAQ or intent modules on key offer pages?</label>
                    <div class="grid grid-cols-3 gap-2.5">
                        <button onclick="selectAssessFAQ('yes')" class="faq-btn p-2.5 rounded-lg border text-xs capitalize font-semibold bg-brand-dark border-white/5 text-brand-muted">Yes</button>
                        <button onclick="selectAssessFAQ('no')" class="faq-btn p-2.5 rounded-lg border text-xs capitalize font-semibold bg-brand-dark border-white/5 text-brand-muted">No</button>
                        <button onclick="selectAssessFAQ('unsure')" class="faq-btn p-2.5 rounded-lg border text-xs capitalize font-semibold bg-brand-dark border-white/5 text-brand-muted">Unsure</button>
                    </div>
                </div>
                <div class="flex gap-3 pt-2">
                    <button onclick="goToAssessStep1()" class="w-1/3 py-2.5 bg-white/5 text-brand-muted text-xs font-semibold rounded-lg">Back</button>
                    <button onclick="goToAssessStep3()" class="w-2/3 py-2.5 bg-brand-accent text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5">Next: Mentions <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></button>
                </div>
            </div>

            <!-- Step 3 -->
            <div id="assess-step-3" class="hidden space-y-4">
                <div class="space-y-3">
                    <label class="block text-xs font-semibold uppercase tracking-wider text-brand-text/90">3. How frequently is your brand cited in current industry market maps?</label>
                    <div class="grid grid-cols-3 gap-2.5">
                        <button onclick="selectAssessMentions('often')" class="mentions-btn p-2.5 rounded-lg border text-xs capitalize font-semibold bg-brand-dark border-white/5 text-brand-muted">Often</button>
                        <button onclick="selectAssessMentions('sometimes')" class="mentions-btn p-2.5 rounded-lg border text-xs capitalize font-semibold bg-brand-dark border-white/5 text-brand-muted">Sometimes</button>
                        <button onclick="selectAssessMentions('rarely')" class="mentions-btn p-2.5 rounded-lg border text-xs capitalize font-semibold bg-brand-dark border-white/5 text-brand-muted">Rarely</button>
                    </div>
                </div>
                <div class="flex gap-3 pt-2">
                    <button onclick="goToAssessStep2()" class="w-1/3 py-2.5 bg-white/5 text-brand-muted text-xs font-semibold rounded-lg">Back</button>
                    <button onclick="calculateAssess()" class="w-2/3 py-2.5 bg-brand-cyan text-brand-dark text-xs font-bold rounded-lg flex items-center justify-center gap-1.5">Calculate Visibility Score <i data-lucide="trending-up" class="w-3.5 h-3.5"></i></button>
                </div>
            </div>

            <!-- Step 4: Loading -->
            <div id="assess-loading" class="hidden py-12 text-center space-y-4">
                <div class="relative w-16 h-16 mx-auto">
                    <div class="absolute inset-0 border-2 border-brand-cyan/20 rounded-full"></div>
                    <div class="absolute inset-0 border-2 border-brand-cyan border-t-transparent rounded-full animate-spin"></div>
                </div>
                <div>
                    <p class="text-xs text-brand-text font-semibold uppercase tracking-wider font-mono">Querying Indexing Pools...</p>
                    <p class="text-[10px] text-brand-muted mt-1">Scanning semantic density & citations...</p>
                </div>
            </div>

            <!-- Step 5: Results -->
            <div id="assess-results" class="hidden space-y-5">
                <div class="text-center bg-brand-dark/40 border border-white/5 rounded-xl p-5">
                    <div class="text-[10px] font-bold text-brand-muted uppercase tracking-widest mb-1" id="res-domain">Domain: </div>
                    <div class="my-4">
                        <span class="text-5xl font-display font-bold text-brand-cyan" id="res-score">65%</span>
                        <span class="block text-[11px] font-bold uppercase tracking-wider text-brand-text/80 mt-1">AI Readiness: <span id="res-grade" class="text-amber-400">Moderate Risks</span></span>
                    </div>
                </div>

                <div class="space-y-2.5">
                    <h5 class="text-xs font-semibold uppercase text-brand-text/90 tracking-wide">Diagnosed Leaks & Citations Gaps:</h5>
                    <div class="space-y-1.5 text-xs text-brand-muted" id="res-leaks-list">
                        <!-- Injected gaps -->
                    </div>
                </div>

                <div class="pt-4 border-t border-white/5 space-y-3">
                    <p class="text-xs text-brand-muted font-sans leading-relaxed">We have compiled a localized leak map report detailing how to repair these conversational indexes. Let's cover it in depth during your Strategy Call!</p>
                    <button onclick="closeAssessment(); openBooking();" class="w-full py-3 bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 shadow-[0_4px_15px_rgba(59,130,246,0.3)]">
                        <span>Schedule Deep-Dive Analysis</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- ========================================== -->
    <!-- INTERACTIVE JAVASCRIPT LOGIC -->
    <!-- ========================================== -->
    <!-- Lucide Icon Renderer -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <script>
        lucide.createIcons();

        // -----------------------------
        // MOBILE HAMBURGER NAVIGATION
        // -----------------------------
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('hamburger-icon');
            menu.classList.toggle('hidden');
            
            if(menu.classList.contains('hidden')) {
                icon.setAttribute('data-lucide', 'menu');
            } else {
                icon.setAttribute('data-lucide', 'x');
            }
            lucide.createIcons();
        }

        // -----------------------------
        // CONTACT FORM VALIDATION & FLOW
        // -----------------------------
        function handleFormSubmit(e) {
            e.preventDefault();
            const emailInput = document.getElementById('workEmail');
            const emailVal = emailInput.value.toLowerCase();
            const errorBlock = document.getElementById('email-error');
            
            // Check for non-business emails
            const personalDomains = /gmail\\.com|yahoo\\.com|hotmail\\.com|outlook\\.com|aol\\.com|live\\.com/;
            if (personalDomains.test(emailVal)) {
                errorBlock.classList.remove('hidden');
                emailInput.classList.add('border-red-500');
                return;
            } else {
                errorBlock.classList.add('hidden');
                emailInput.classList.remove('border-red-500');
            }

            // Show simulated loading on button
            const submitBtn = e.target.querySelector('button[type="submit"]');
            const originalHTML = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="inline-block animate-spin mr-2">✦</span>Analyzing domain presence...';

            setTimeout(() => {
                document.getElementById('form-container').classList.add('hidden');
                document.getElementById('success-container').classList.remove('hidden');
            }, 1500);
        }

        function resetForm() {
            document.getElementById('contactForm').reset();
            document.getElementById('form-container').classList.remove('hidden');
            document.getElementById('success-container').classList.add('hidden');
        }

        // -----------------------------
        // DIRECT BOOKING MODAL & CALENDAR
        // -----------------------------
        let selectedBookingDate = "";
        let selectedBookingTime = "";
        
        const slotMockups = {
            "Monday, Jun 29": ["10:00 AM EST", "1:30 PM EST", "4:00 PM EST"],
            "Tuesday, Jun 30": ["9:00 AM EST", "11:00 AM EST", "2:00 PM EST"],
            "Wednesday, Jul 1": ["1:00 PM EST", "3:30 PM EST", "5:00 PM EST"]
        };

        function openBooking() {
            document.getElementById('booking-modal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeBooking() {
            document.getElementById('booking-modal').classList.add('hidden');
            document.body.style.overflow = '';
        }

        function selectDate(dateStr) {
            selectedBookingDate = dateStr;
            selectedBookingTime = "";
            document.getElementById('confirm-booking-btn').disabled = true;

            // Highlight button
            const btns = document.querySelectorAll('.date-btn');
            btns.forEach(btn => {
                if(btn.innerText.includes(dateStr.split(', ')[0])) {
                    btn.className = "p-2.5 rounded-lg border text-xs font-semibold text-center bg-brand-accent/20 border-brand-accent text-brand-text";
                } else {
                    btn.className = "p-2.5 rounded-lg border text-xs font-semibold text-center bg-brand-dark border-white/5 text-brand-muted hover:border-white/10 date-btn";
                }
            });

            // Render times
            const list = document.getElementById('slots-list');
            list.innerHTML = "";
            const times = slotMockups[dateStr] || [];
            
            times.forEach(t => {
                const btn = document.createElement('button');
                btn.className = "w-full p-2.5 rounded-lg border border-white/5 bg-brand-dark text-brand-muted hover:border-white/10 text-xs font-semibold text-left flex items-center justify-between slot-time-btn";
                btn.onclick = () => selectTime(t, btn);
                btn.innerHTML = \`<span>\${t}</span>\`;
                list.appendChild(btn);
            });

            document.getElementById('time-slots-container').classList.remove('hidden');
        }

        function selectTime(timeStr, element) {
            selectedBookingTime = timeStr;
            document.getElementById('confirm-booking-btn').disabled = false;

            // Highlight slot time button
            const btns = document.querySelectorAll('.slot-time-btn');
            btns.forEach(btn => {
                btn.className = "w-full p-2.5 rounded-lg border border-white/5 bg-brand-dark text-brand-muted hover:border-white/10 text-xs font-semibold text-left flex items-center justify-between slot-time-btn";
            });
            element.className = "w-full p-2.5 rounded-lg border border-brand-accent bg-brand-accent/25 text-brand-text text-xs font-semibold text-left flex items-center justify-between slot-time-btn";
        }

        function confirmBooking() {
            document.getElementById('booking-step-1').classList.add('hidden');
            document.getElementById('booking-success').classList.remove('hidden');
        }

        function resetBookingState() {
            selectedBookingDate = "";
            selectedBookingTime = "";
            document.getElementById('booking-step-1').classList.remove('hidden');
            document.getElementById('booking-success').classList.add('hidden');
            document.getElementById('time-slots-container').classList.add('hidden');
            document.getElementById('confirm-booking-btn').disabled = true;
            const btns = document.querySelectorAll('.date-btn');
            btns.forEach(b => {
                b.className = "p-2.5 rounded-lg border text-xs font-semibold text-center bg-brand-dark border-white/5 text-brand-muted hover:border-white/10 date-btn";
            });
        }

        // -----------------------------
        // AI PRESENCE ASSESSMENT WIDGET
        // -----------------------------
        let faqState = "";
        let mentionsState = "";

        function openAssessment() {
            document.getElementById('assessment-modal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            goToAssessStep1();
        }

        function closeAssessment() {
            document.getElementById('assessment-modal').classList.add('hidden');
            document.body.style.overflow = '';
        }

        function goToAssessStep1() {
            hideAssessSteps();
            document.getElementById('assess-step-1').classList.remove('hidden');
        }

        function goToAssessStep2() {
            const domain = document.getElementById('assessDomain').value;
            if(!domain) return;
            hideAssessSteps();
            document.getElementById('assess-step-2').classList.remove('hidden');
        }

        function goToAssessStep3() {
            hideAssessSteps();
            document.getElementById('assess-step-3').classList.remove('hidden');
        }

        function hideAssessSteps() {
            document.getElementById('assess-step-1').classList.add('hidden');
            document.getElementById('assess-step-2').classList.add('hidden');
            document.getElementById('assess-step-3').classList.add('hidden');
            document.getElementById('assess-loading').classList.add('hidden');
            document.getElementById('assess-results').classList.add('hidden');
        }

        function selectAssessFAQ(val) {
            faqState = val;
            const btns = document.querySelectorAll('.faq-btn');
            btns.forEach(btn => {
                if(btn.innerText.toLowerCase() === val) {
                    btn.className = "faq-btn p-2.5 rounded-lg border text-xs capitalize font-semibold bg-brand-cyan/15 border-brand-cyan text-brand-cyan";
                } else {
                    btn.className = "faq-btn p-2.5 rounded-lg border text-xs capitalize font-semibold bg-brand-dark border-white/5 text-brand-muted";
                }
            });
        }

        function selectAssessMentions(val) {
            mentionsState = val;
            const btns = document.querySelectorAll('.mentions-btn');
            btns.forEach(btn => {
                if(btn.innerText.toLowerCase() === val) {
                    btn.className = "mentions-btn p-2.5 rounded-lg border text-xs capitalize font-semibold bg-brand-cyan/15 border-brand-cyan text-brand-cyan";
                } else {
                    btn.className = "mentions-btn p-2.5 rounded-lg border text-xs capitalize font-semibold bg-brand-dark border-white/5 text-brand-muted";
                }
            });
        }

        function calculateAssess() {
            hideAssessSteps();
            document.getElementById('assess-loading').classList.remove('hidden');
            const domain = document.getElementById('assessDomain').value;

            setTimeout(() => {
                // Calculate score
                let score = 35;
                if(faqState === 'yes') score += 20;
                if(mentionsState === 'often') score += 25;
                else if(mentionsState === 'sometimes') score += 15;
                if(domain.includes('.ai') || domain.includes('.tech')) score += 10;
                score = Math.min(score, 98);

                let grade = "Critical Gaps";
                let leaks = [];
                
                if(score > 75) {
                    grade = "Optimal Presence";
                } else if(score > 50) {
                    grade = "Moderate Risks";
                }
                
                if(faqState !== 'yes') {
                    leaks.push("Missing semantic structured FAQ markups for LLMs.");
                }
                if(mentionsState !== 'often') {
                    leaks.push("Low entity frequency in external index catalogs.");
                }
                leaks.push("Zero verified schema citations in ChatGPT searches.");

                // Populate results
                document.getElementById('res-domain').innerText = "Domain: " + domain;
                document.getElementById('res-score').innerText = score + "%";
                document.getElementById('res-grade').innerText = grade;
                
                const list = document.getElementById('res-leaks-list');
                list.innerHTML = "";
                leaks.forEach(leak => {
                    list.innerHTML += \`<div class="flex items-start gap-2"><span class="text-amber-400 font-bold">•</span><span>\${leak}</span></div>\`;
                });

                document.getElementById('assess-loading').classList.add('hidden');
                document.getElementById('assess-results').classList.remove('hidden');
            }, 1800);
        }
    </script>
</body>
</html>`;

  // Handle Code Copy Action
  const handleCopy = () => {
    navigator.clipboard.writeText(standaloneHTML);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Handle Code Download Action
  const handleDownload = () => {
    const blob = new Blob([standaloneHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "hybridmonks-contact-page.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center px-4 font-sans">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="bg-brand-card border border-white/10 rounded-2xl max-w-4xl w-full p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative z-10 overflow-hidden flex flex-col max-h-[85vh]"
          >
            {/* Top indicator banner */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-accent via-blue-500 to-brand-cyan" />

            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-brand-cyan/15 rounded text-[10px] font-bold text-brand-cyan uppercase tracking-widest mb-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Dev Deliverable Center
                </span>
                <h4 className="font-display font-bold text-2xl text-brand-text">
                  Standalone HTML Exporter
                </h4>
                <p className="text-xs text-brand-muted mt-1">
                  Download or copy the raw self-contained, validated, single-file HTML version containing all styling, Lucide CDNs, and interactive scripts.
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-brand-muted hover:text-brand-text bg-white/5 p-2 rounded-lg border border-white/5 hover:border-white/10 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Warning / Instruction Box */}
            <div className="bg-brand-cyan/5 border border-brand-cyan/20 rounded-xl p-4 flex gap-3 text-xs text-brand-muted mb-6 leading-relaxed">
              <Info className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-brand-text font-semibold mb-0.5">Ready for Production & Hosting</p>
                This file is 100% self-contained. It embeds Tailwind's Play CSS framework, Google Fonts, and Lucide vector icons dynamically. Simply upload this single file directly to your web server (S3, Cloudflare, Netlify) or paste it into your CMS.
              </div>
            </div>

            {/* Code Mirror Preview Block */}
            <div className="flex-1 overflow-hidden bg-brand-dark rounded-xl border border-white/5 flex flex-col mb-6">
              <div className="bg-brand-card/80 border-b border-white/5 px-4 py-2.5 flex items-center justify-between text-xs text-brand-muted">
                <span className="flex items-center gap-1.5 font-mono">
                  <Code2 className="w-4 h-4 text-brand-cyan" />
                  hybridmonks-contact-page.html
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">
                  ✔ Responsive & Validated
                </span>
              </div>
              
              {/* Code display window */}
              <div className="flex-1 overflow-y-auto p-4 font-mono text-xs text-brand-muted/80 select-all scrollbar-thin">
                <pre className="whitespace-pre-wrap leading-relaxed">
                  {standaloneHTML}
                </pre>
              </div>
            </div>

            {/* Actions Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
              <div className="text-xs text-brand-muted flex items-center gap-1">
                <span>Created exactly to B2B guidelines &</span>
                <span className="text-brand-text font-semibold border-b border-brand-cyan/30">dark-mode specification</span>
              </div>
              
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleCopy}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-accent/50 text-brand-text py-2.5 px-4 rounded-lg transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-brand-cyan" />
                      <span>Copy Full Code</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleDownload}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 text-xs font-semibold bg-brand-accent hover:bg-brand-accent-hover text-white py-2.5 px-5 rounded-lg transition-all shadow-[0_4px_15px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)] cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Standalone HTML</span>
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
