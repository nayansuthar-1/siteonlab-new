"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Cpu, 
  Database, 
  Mail, 
  Slack, 
  CheckCircle, 
  Play, 
  User, 
  RefreshCw, 
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SimulationStep {
  name: string;
  desc: string;
  scoreGained: number;
  icon: React.ReactNode;
  active: boolean;
}

export default function AutomationEngine() {
  const [leadProfile, setLeadProfile] = useState<'high_intent' | 'nurtured' | 'cold'>('high_intent');
  const [simState, setSimState] = useState<'idle' | 'running' | 'completed'>('idle');
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [leadScore, setLeadScore] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  const [showSlackNotification, setShowSlackNotification] = useState(false);

  // Generate steps based on active profile
  const getSteps = (): SimulationStep[] => {
    switch (leadProfile) {
      case 'high_intent':
        return [
          {
            name: "Enterprise Visit",
            desc: "IP detected: Fortune 500 tech company visits pricing page",
            scoreGained: 25,
            icon: <Database className="w-4 h-4 text-blue-500" />,
            active: false
          },
          {
            name: "Resource Download",
            desc: "Fills form for 'B2B Stack ROI Calculator' whitepaper",
            scoreGained: 30,
            icon: <Mail className="w-4 h-4 text-blue-400" />,
            active: false
          },
          {
            name: "Automated Check",
            desc: "CRM check: Match target account segment lists",
            scoreGained: 15,
            icon: <Cpu className="w-4 h-4 text-green-500" />,
            active: false
          },
          {
            name: "High-Intent Trigger",
            desc: "Schedules immediate demo via custom calendar trigger",
            scoreGained: 40,
            icon: <Zap className="w-4 h-4 text-orange-500" />,
            active: false
          }
        ];
      case 'nurtured':
        return [
          {
            name: "Cold Registration",
            desc: "Subscriber joins mailing list from footer blog signup",
            scoreGained: 10,
            icon: <Mail className="w-4 h-4 text-zinc-400" />,
            active: false
          },
          {
            name: "Stage 2 Nurture",
            desc: "Opens educational sequence & clicks case study link",
            scoreGained: 20,
            icon: <Mail className="w-4 h-4 text-blue-400" />,
            active: false
          },
          {
            name: "Dynamic Banner",
            desc: "Visits site, shown personalized banner matching vertical",
            scoreGained: 25,
            icon: <Cpu className="w-4 h-4 text-blue-500" />,
            active: false
          },
          {
            name: "Product Trial",
            desc: "Signs up for 14-day free product validation run",
            scoreGained: 30,
            icon: <Zap className="w-4 h-4 text-orange-400" />,
            active: false
          }
        ];
      case 'cold':
        return [
          {
            name: "Newsletter Signup",
            desc: "Enters email to receive monthly product newsletters",
            scoreGained: 5,
            icon: <Mail className="w-4 h-4 text-zinc-500" />,
            active: false
          },
          {
            name: "Nurture Delivery",
            desc: "First automated welcome newsletter email sent",
            scoreGained: 5,
            icon: <Mail className="w-4 h-4 text-zinc-500" />,
            active: false
          },
          {
            name: "Idle Account",
            desc: "No page visits or opens for consecutive 14 days",
            scoreGained: -10,
            icon: <Cpu className="w-4 h-4 text-red-500" />,
            active: false
          },
          {
            name: "Cold Vault",
            desc: "Re-allocated to quarterly reactivation archive",
            scoreGained: 0,
            icon: <Database className="w-4 h-4 text-zinc-600" />,
            active: false
          }
        ];
    }
  };

  const steps = getSteps();

  // Reset simulation when profile changes
  useEffect(() => {
    resetSimulation();
  }, [leadProfile]);

  const resetSimulation = () => {
    setSimState('idle');
    setCurrentStepIndex(-1);
    setLeadScore(0);
    setLog(["System Ready: Select a Lead Profile to simulate automatic workflows."]);
    setShowSlackNotification(false);
  };

  const runSimulation = async () => {
    if (simState === 'running') return;
    setSimState('running');
    setCurrentStepIndex(0);
    setLeadScore(steps[0].scoreGained);
    setLog([`[0.0s] Lead Initiated: CRM detected a new prospect path.`]);
    setShowSlackNotification(false);

    let idx = 0;
    const interval = setInterval(() => {
      idx++;
      if (idx < steps.length) {
        setCurrentStepIndex(idx);
        setLeadScore(prev => {
          const nextScore = Math.max(0, prev + steps[idx].scoreGained);
          return nextScore;
        });
        setLog(prev => [
          ...prev,
          `[+${idx * 1.5}s] ${steps[idx].name}: ${steps[idx].desc} (+${steps[idx].scoreGained} Lead Score)`
        ]);
      } else {
        clearInterval(interval);
        setSimState('completed');
        // If final score >= 75 points, trigger MQL Slack Notification
        const finalScore = steps.reduce((sum, s) => Math.max(0, sum + s.scoreGained), 0);
        if (finalScore >= 75) {
          setShowSlackNotification(true);
          setLog(prev => [
            ...prev,
            `[MQL REACHED] Pipeline score: ${finalScore}. Triggered bi-directional CRM Sync & Slack alert!`
          ]);
        } else {
          setLog(prev => [
            ...prev,
            `[Flow Complete] Profile did not cross MQL threshold (${finalScore}/75). Kept in automated nurturing tracks.`
          ]);
        }
      }
    }, 1500);
  };

  return (
    <div id="automation-engine-container" className="relative w-full max-w-lg bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
      {/* Absolute Header Indicator */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-blue-400 uppercase">SiteOnLab Engine</span>
        </div>
        <div className="flex items-center space-x-2 bg-zinc-800 px-3 py-1 rounded-full border border-zinc-700">
          <TrendingUp className="w-3.5 h-3.5 text-green-400" />
          <span className="text-xs font-mono text-zinc-300 font-semibold">Score: {leadScore}</span>
        </div>
      </div>

      {/* Select Lead Profile */}
      <div className="mb-4">
        <label className="text-xs text-zinc-400 font-medium block mb-2">Select Lead Persona to Test:</label>
        <div className="grid grid-cols-3 gap-2">
          <button 
            id="btn-high-intent"
            onClick={() => leadProfile !== 'high_intent' && setLeadProfile('high_intent')}
            disabled={simState === 'running'}
            className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
              leadProfile === 'high_intent' 
                ? 'bg-blue-600/10 border-blue-500 text-blue-400 font-semibold' 
                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
            } disabled:opacity-50`}
          >
            🔥 Enterprise SaaS
          </button>
          <button 
            id="btn-nurtured"
            onClick={() => leadProfile !== 'nurtured' && setLeadProfile('nurtured')}
            disabled={simState === 'running'}
            className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
              leadProfile === 'nurtured' 
                ? 'bg-blue-600/10 border-blue-500 text-blue-400 font-semibold' 
                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
            } disabled:opacity-50`}
          >
            🌱 Trial Nurture
          </button>
          <button 
            id="btn-cold"
            onClick={() => leadProfile !== 'cold' && setLeadProfile('cold')}
            disabled={simState === 'running'}
            className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
              leadProfile === 'cold' 
                ? 'bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:text-zinc-200' 
                : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-400'
            } disabled:opacity-50`}
          >
            ❄️ Cold Inactive
          </button>
        </div>
      </div>

      {/* Main Simulation View */}
      <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800 min-h-[220px] flex flex-col justify-between relative overflow-hidden mb-4">
        {/* Connection Pathways (Visual Canvas) */}
        <div className="absolute inset-y-0 left-8 w-[1px] bg-zinc-800 z-0" />

        <div className="space-y-4 z-10">
          {steps.map((step, idx) => {
            const isCompleted = idx < currentStepIndex;
            const isActive = idx === currentStepIndex;
            return (
              <motion.div 
                key={idx}
                layout
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`flex items-start space-x-3 transition-all ${
                  isActive ? 'opacity-100 scale-102' : isCompleted ? 'opacity-60' : 'opacity-30'
                }`}
              >
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                  isActive 
                    ? 'bg-blue-600/20 border-blue-400 animate-pulse text-blue-400' 
                    : isCompleted 
                      ? 'bg-green-500/20 border-green-500 text-green-400' 
                      : 'bg-zinc-900 border-zinc-800 text-zinc-600'
                }`}>
                  {isCompleted ? <CheckCircle className="w-3.5 h-3.5" /> : step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-semibold ${isActive ? 'text-blue-400' : 'text-zinc-300'}`}>
                      {step.name}
                    </span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      step.scoreGained > 0 
                        ? 'bg-green-500/10 text-green-400' 
                        : step.scoreGained < 0 
                          ? 'bg-red-500/10 text-red-400' 
                          : 'bg-zinc-800 text-zinc-500'
                    }`}>
                      {step.scoreGained > 0 ? `+${step.scoreGained}` : step.scoreGained}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-tight mt-0.5">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Real-time Slack Alert Notification popup overlay */}
        <AnimatePresence>
          {showSlackNotification && (
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-3 left-3 right-3 bg-zinc-900 text-zinc-100 p-3 rounded-lg shadow-xl border border-zinc-700 flex items-start space-x-3 z-20"
            >
              <div className="bg-blue-600 p-1 rounded text-white flex-shrink-0">
                <Slack className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-tight text-white">Sales Alert #mql-leads</span>
                  <span className="text-[9px] text-zinc-500">Just Now</span>
                </div>
                <p className="text-[10px] text-zinc-300 mt-0.5 truncate leading-tight">
                  🎯 <strong>MQL Score {leadScore} reached!</strong> Account: <em>{leadProfile === 'high_intent' ? 'TechEnterprise Corp' : 'GrowScale Ltd'}</em>
                </p>
                <div className="flex items-center space-x-1.5 mt-1 bg-zinc-800 px-1.5 py-0.5 rounded w-max">
                  <span className="text-[9px] text-blue-400 font-mono font-bold uppercase">Actions Fired: CRM Synced · SDR Alerted</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Automation Terminal Console Logs */}
      <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800/80 mb-4 h-[72px] overflow-y-auto font-mono text-[9px] text-zinc-400 leading-normal scrollbar-thin">
        {log.slice().reverse().map((line, i) => (
          <div key={i} className={line.includes('[MQL REACHED]') ? 'text-orange-400 font-bold' : line.includes('System') ? 'text-blue-400' : ''}>
            {line}
          </div>
        ))}
      </div>

      {/* CTA Interactive trigger button */}
      <div className="flex items-center space-x-2">
        {simState === 'idle' ? (
          <button
            id="btn-trigger-simulation"
            onClick={runSimulation}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center space-x-2 transition-all shadow-lg shadow-blue-600/10 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Simulate Automation Sequence</span>
          </button>
        ) : (
          <button
            id="btn-reset-simulation"
            onClick={resetSimulation}
            disabled={simState === 'running'}
            className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center space-x-2 transition-all border border-zinc-700 cursor-pointer disabled:opacity-40"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${simState === 'running' ? 'animate-spin' : ''}`} />
            <span>{simState === 'running' ? 'Simulating Engine...' : 'Reset Simulation'}</span>
          </button>
        )}
      </div>

      {/* Visual background indicator */}
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-zinc-500/5 rounded-full blur-2xl pointer-events-none" />
    </div>
  );
}
