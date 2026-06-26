"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TargetAccount } from '../types';
import { 
  Building2, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  Eye, 
  MousePointerClick,
  ChevronRight,
  ShieldCheck,
  Calendar
} from 'lucide-react';

const INITIAL_ACCOUNTS: TargetAccount[] = [
  {
    id: '1',
    name: 'Acme Enterprise',
    domain: 'acme.com',
    tier: 'Tier 1',
    industry: 'Cybersecurity',
    engagementScore: 72,
    status: 'Ad Targeting',
    contactsCount: 8,
    intentLevel: 'High',
    recentActivity: 'Targeted ad served to Chief Information Security Officer'
  },
  {
    id: '2',
    name: 'Globex Corp',
    domain: 'globex.io',
    tier: 'Tier 1',
    industry: 'Fintech SaaS',
    engagementScore: 95,
    status: 'Demo Booked',
    contactsCount: 14,
    intentLevel: 'Surging',
    recentActivity: 'CFO booked enterprise demo through personalized landing portal'
  },
  {
    id: '3',
    name: 'Initech Systems',
    domain: 'initech.cloud',
    tier: 'Tier 2',
    industry: 'HR Tech',
    engagementScore: 35,
    status: 'Intent Sourced',
    contactsCount: 3,
    intentLevel: 'Medium',
    recentActivity: 'Captured reverse-IP intent signals from corporate network'
  }
];

const ORCHESTRATION_STEPS = [
  { 
    label: 'Intent Sourced', 
    desc: 'Captured key buyer intent signals via reverse-IP lookup', 
    icon: Eye,
    activeText: 'Target account identified'
  },
  { 
    label: 'Targeted Engagement', 
    desc: 'Serving highly tailored, role-specific creative ads', 
    icon: MousePointerClick,
    activeText: 'Active impression sequence'
  },
  { 
    label: 'Smart Content Hub', 
    desc: 'Directing stakeholders to custom-branded microsites', 
    icon: Building2,
    activeText: 'Microsite customized'
  },
  { 
    label: 'Enterprise Demo', 
    desc: 'High-value decision-makers schedule demo call', 
    icon: CheckCircle2,
    activeText: 'Calendar invite confirmed'
  }
];

export default function InteractiveDashboard() {
  const [accounts, setAccounts] = useState<TargetAccount[]>(INITIAL_ACCOUNTS);
  const [selectedAccountId, setSelectedAccountId] = useState<string>('1');

  const selectedAccount = accounts.find(a => a.id === selectedAccountId) || accounts[0];

  const getActiveStepIndex = (status: string) => {
    switch (status) {
      case 'Intent Sourced': return 0;
      case 'Ad Targeting': return 1;
      case 'Custom Landing Page':
      case 'Sales Outreach': return 2;
      case 'Demo Booked': return 3;
      default: return 0;
    }
  };

  const activeStepIndex = getActiveStepIndex(selectedAccount.status);

  const handleTriggerPlay = () => {
    setAccounts(prev => prev.map(acc => {
      if (acc.id === selectedAccountId) {
        let nextStatus: TargetAccount['status'] = 'Intent Sourced';
        let score = 35;
        let intent: TargetAccount['intentLevel'] = 'Medium';
        let activity = '';

        if (acc.status === 'Intent Sourced') {
          nextStatus = 'Ad Targeting';
          score = 64;
          intent = 'High';
          activity = 'Targeted ads deployed to key decision-makers at corporate HQ';
        } else if (acc.status === 'Ad Targeting') {
          nextStatus = 'Custom Landing Page';
          score = 82;
          intent = 'High';
          activity = 'SDR play active: customized landing site rendered for account visitors';
        } else if (acc.status === 'Custom Landing Page' || acc.status === 'Sales Outreach') {
          nextStatus = 'Demo Booked';
          score = 98;
          intent = 'Surging';
          activity = 'Enterprise demo booked directly with VP stakeholders';
        } else {
          nextStatus = 'Intent Sourced';
          score = 35;
          intent = 'Medium';
          activity = 'Simulated cycle reset. Capturing fresh intent signals...';
        }

        return {
          ...acc,
          engagementScore: score,
          status: nextStatus,
          intentLevel: intent,
          recentActivity: activity,
          contactsCount: nextStatus === 'Demo Booked' ? acc.contactsCount + 2 : acc.contactsCount
        };
      }
      return acc;
    }));
  };

  return (
    <div className="w-full bg-[#09090B] border border-white/5 rounded-2xl overflow-hidden shadow-2xl transition duration-300">
      
      {/* Header bar */}
      <div className="px-5 py-3.5 border-b border-white/5 flex items-center justify-between bg-zinc-950/40">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
            Live Orchestration Simulator
          </span>
        </div>
        <span className="font-mono text-[9px] text-zinc-600">
          SiteOnLab System v1.0
        </span>
      </div>

      {/* Main Grid split */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        
        {/* Left Column: Minimal Target Accounts Stream */}
        <div className="md:col-span-5 border-r border-white/5 bg-zinc-950/20 flex flex-col divide-y divide-white/5">
          <div className="px-4 py-3 bg-zinc-950/10 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
              ICP Accounts
            </span>
            <span className="text-[10px] font-mono text-blue-400">
              3 active
            </span>
          </div>

          <div className="flex flex-col">
            {accounts.map((acc) => {
              const isSelected = acc.id === selectedAccountId;
              const stepIdx = getActiveStepIndex(acc.status);
              
              return (
                <button
                  key={acc.id}
                  onClick={() => setSelectedAccountId(acc.id)}
                  className={`w-full text-left p-4 transition-all duration-200 relative flex items-center justify-between group cursor-pointer ${
                    isSelected ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
                  }`}
                >
                  {/* Selected indicator bar */}
                  {isSelected && (
                    <motion.div 
                      layoutId="activeAccountIndicator"
                      className="absolute left-0 top-0 bottom-0 w-[2px] bg-blue-500" 
                    />
                  )}

                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-xs font-semibold tracking-tight transition ${isSelected ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-300'}`}>
                        {acc.name}
                      </span>
                      <span className="text-[9px] text-zinc-600 font-mono font-medium">
                        {acc.domain}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-zinc-500">
                      <span>{acc.industry}</span>
                      <span className="text-zinc-700">•</span>
                      <span className="font-mono">{acc.tier}</span>
                    </div>
                  </div>

                  <div className="text-right flex flex-col items-end gap-1 font-mono">
                    <span className={`text-xs font-bold ${isSelected ? 'text-blue-400' : 'text-zinc-500'}`}>
                      {acc.engagementScore}%
                    </span>
                    <div className="w-12 h-1 bg-zinc-900 rounded-full overflow-hidden">
                      <div 
                        className="bg-blue-500 h-full transition-all duration-300"
                        style={{ width: `${acc.engagementScore}%` }}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Visual Minimal Orchestration Pipeline */}
        <div className="md:col-span-7 p-6 bg-zinc-950/40 flex flex-col justify-between min-h-[400px]">
          
          {/* Active target details panel */}
          <div className="space-y-6">
            
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-sm font-semibold text-white tracking-tight">
                  {selectedAccount.name}
                </h4>
                <p className="text-[11px] font-mono text-zinc-500">
                  Active phase: <span className="text-blue-400 font-medium">{selectedAccount.status}</span>
                </p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded font-mono text-[9px] text-blue-400 flex items-center gap-1">
                <TrendingUp className="w-2.5 h-2.5" />
                <span>{selectedAccount.intentLevel} Intent</span>
              </div>
            </div>

            {/* Stepper Pipeline */}
            <div className="relative pl-1">
              {/* Stepper vertical timeline guide line */}
              <div className="absolute left-[13px] top-2 bottom-2 w-[1px] bg-zinc-800" />

              <div className="space-y-5 relative">
                {ORCHESTRATION_STEPS.map((step, idx) => {
                  const isCompleted = idx < activeStepIndex;
                  const isActive = idx === activeStepIndex;
                  const StepIcon = step.icon;

                  return (
                    <div key={idx} className="flex gap-4 items-start relative group">
                      
                      {/* Connection node point */}
                      <div className="relative shrink-0 z-10">
                        {isCompleted ? (
                          <div className="w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500 flex items-center justify-center text-blue-400">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                        ) : isActive ? (
                          <div className="w-6 h-6 rounded-full bg-blue-500 border border-blue-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                            <StepIcon className="w-3.5 h-3.5 text-blue-400" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-600">
                            <StepIcon className="w-3 h-3" />
                          </div>
                        )}

                        {/* Active pulsing ring */}
                        {isActive && (
                          <span className="absolute -inset-1 rounded-full border border-blue-500/35 animate-ping opacity-60 pointer-events-none" />
                        )}
                      </div>

                      {/* Content block */}
                      <div className="space-y-0.5 pt-0.5">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-semibold ${isActive ? 'text-white' : isCompleted ? 'text-zinc-300' : 'text-zinc-600'}`}>
                            {step.label}
                          </span>
                          {isActive && (
                            <span className="text-[8px] font-mono uppercase bg-blue-500/10 text-blue-400 px-1 py-0.2 rounded">
                              {step.activeText}
                            </span>
                          )}
                        </div>
                        <p className={`text-[10px] leading-relaxed transition ${isActive ? 'text-zinc-400' : 'text-zinc-600'}`}>
                          {step.desc}
                        </p>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Action button & Simulation Log */}
          <div className="space-y-4 pt-6 border-t border-white/5">
            
            {/* Live event stream box */}
            <div className="px-3.5 py-2.5 bg-zinc-950 rounded-lg border border-white/5 font-mono text-[10px] text-zinc-500 flex items-center gap-2.5">
              <span className="text-zinc-700 font-bold shrink-0">LOG:</span>
              <p className="truncate text-zinc-400">
                {selectedAccount.recentActivity}
              </p>
            </div>

            {/* Advance orchestration play button */}
            <button
              onClick={handleTriggerPlay}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-600/10 hover:shadow-blue-600/25 transition duration-200 active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>Simulate Next Play</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
