"use client";

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Coins, Target, Zap, ArrowRight } from 'lucide-react';

export default function GTMCalculator() {
  const [targetAccounts, setTargetAccounts] = useState<number>(500);
  const [averageACV, setAverageACV] = useState<number>(45000);
  const [conversionRate, setConversionRate] = useState<number>(2.5); // percentage
  const [winRate, setWinRate] = useState<number>(18); // percentage

  const [pipeline, setPipeline] = useState<number>(0);
  const [mrr, setMrr] = useState<number>(0);
  const [dealsWon, setDealsWon] = useState<number>(0);

  useEffect(() => {
    // Calculate values based on sliders
    // Conversion rate maps target accounts to qualified opportunities
    const opportunities = (targetAccounts * (conversionRate / 100));
    // Win rate maps opportunities to closed-won deals
    const won = opportunities * (winRate / 100);
    const calculatedPipeline = opportunities * averageACV;
    const calculatedARR = won * averageACV;
    const calculatedMRR = calculatedARR / 12;

    setDealsWon(Math.round(won * 10) / 10);
    setPipeline(Math.round(calculatedPipeline));
    setMrr(Math.round(calculatedMRR));
  }, [targetAccounts, averageACV, conversionRate, winRate]);

  const formatCurrency = (val: number) => {
    if (val >= 1000000) {
      return `$${(val / 1000000).toFixed(2)}M`;
    }
    return `$${val.toLocaleString()}`;
  };

  return (
    <div id="gtm-calculator" className="w-full bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
      {/* Visual background glow elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full" />

      <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
        <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
          <Target className="w-5 h-5 animate-pulse" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-white text-base">Interactive GTM Pipeline Simulator</h3>
          <p className="text-xs text-gray-400">Model your GTM campaign metrics and see pipeline compound</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-300 font-medium">Target Account Pool</span>
              <span className="text-blue-400 font-mono font-bold">{targetAccounts} companies</span>
            </div>
            <input
              id="slider-target-accounts"
              type="range"
              min="100"
              max="2000"
              step="50"
              value={targetAccounts}
              onChange={(e) => setTargetAccounts(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-300 font-medium">Average Deal Size (ACV)</span>
              <span className="text-indigo-400 font-mono font-bold">${averageACV.toLocaleString()}</span>
            </div>
            <input
              id="slider-acv"
              type="range"
              min="10000"
              max="250000"
              step="5000"
              value={averageACV}
              onChange={(e) => setAverageACV(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-300 font-medium">Account Conversion Rate</span>
              <span className="text-blue-400 font-mono font-bold">{conversionRate.toFixed(1)}%</span>
            </div>
            <input
              id="slider-conversion"
              type="range"
              min="0.5"
              max="10"
              step="0.5"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-300 font-medium">Sales Demo Win Rate</span>
              <span className="text-sky-400 font-mono font-bold">{winRate}%</span>
            </div>
            <input
              id="slider-winrate"
              type="range"
              min="5"
              max="45"
              step="1"
              value={winRate}
              onChange={(e) => setWinRate(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Results Screen */}
        <div className="bg-slate-950/80 border border-white/5 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
          {/* Animated matrix grid effect */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25" />

          <div className="relative z-10 space-y-3">
            <div>
              <span className="text-[10px] tracking-wider font-mono text-gray-400 uppercase">Projected Pipeline Value</span>
              <div className="text-2xl md:text-3xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 font-bold">
                {formatCurrency(pipeline)}
              </div>
              <p className="text-[10px] text-gray-500 mt-0.5">Valued from target opportunities in stage-2</p>
            </div>

            <div className="grid grid-cols-2 gap-3 border-t border-white/5 pt-3">
              <div>
                <span className="text-[9px] tracking-wider font-mono text-gray-400 uppercase">Estimated MRR Added</span>
                <div className="text-lg font-display font-bold text-blue-400">{formatCurrency(mrr)}</div>
              </div>
              <div>
                <span className="text-[9px] tracking-wider font-mono text-gray-400 uppercase">Target Deals Won</span>
                <div className="text-lg font-display font-bold text-indigo-400">{dealsWon} <span className="text-xs text-gray-400">/ yr</span></div>
              </div>
            </div>
          </div>

          <div className="relative z-10 border-t border-white/5 pt-3 mt-4 space-y-2">
            {/* Visual Funnel simulation with micro levels */}
            <div className="space-y-1 text-[10px]">
              <div className="flex justify-between text-gray-400">
                <span>Accounts Target</span>
                <span className="font-mono text-white">{targetAccounts}</span>
              </div>
              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                <motion.div 
                  className="bg-blue-500 h-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="flex justify-between text-gray-400 pt-0.5">
                <span>Qualified Opportunities</span>
                <span className="font-mono text-white">{Math.round(targetAccounts * (conversionRate / 100))}</span>
              </div>
              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                <motion.div 
                  className="bg-indigo-500 h-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${conversionRate * 10}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="flex justify-between text-gray-400 pt-0.5">
                <span>Closed Deals</span>
                <span className="font-mono text-white">{dealsWon}</span>
              </div>
              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                <motion.div 
                  className="bg-sky-500 h-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${winRate * 2.2}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] text-blue-400/90 bg-blue-500/10 p-1.5 rounded border border-blue-500/20 mt-1">
              <Zap className="w-3.5 h-3.5 flex-shrink-0 animate-bounce" />
              <span>Pipeline velocity can increase by 2.4x with SiteOnLab.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
