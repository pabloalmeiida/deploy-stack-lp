import React from 'react';
import { Layers, Rocket, Eye, FileBarChart, Zap } from 'lucide-react';

export const AutomationVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto perspective-1000">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-brand-500/20 blur-[100px] rounded-full" />
      
      <div className="relative h-[300px] w-full animate-float">
         
         {/* Center Hub: The Stack */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-24 h-24 bg-slate-900 border-2 border-brand-500 rounded-2xl flex flex-col items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.4)] relative">
               <Layers className="text-white w-10 h-10 mb-1" />
               <div className="text-[10px] font-bold text-brand-300 uppercase">Stack</div>
               
               {/* Pulse Ring */}
               <div className="absolute inset-0 border border-brand-500 rounded-2xl animate-scale-up opacity-0"></div>
            </div>
         </div>

         {/* Orbiting Planet 1: Ads (CHANGED TO BLUE) */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-[float_4s_ease-in-out_infinite]">
            <div className="glass-card p-3 rounded-xl border-b-4 border-blue-500 flex items-center gap-2 shadow-lg">
               <div className="bg-blue-500/20 p-1.5 rounded-lg text-blue-400"><Rocket size={16} /></div>
               <div className="text-xs font-bold text-white">Deploy Ads</div>
            </div>
            {/* Connector */}
            <div className="absolute top-full left-1/2 w-0.5 h-16 bg-gradient-to-b from-blue-500/50 to-transparent -translate-x-1/2"></div>
         </div>

         {/* Orbiting Planet 2: Monitor */}
         <div className="absolute bottom-4 left-4 animate-[float_5s_ease-in-out_1s_infinite]">
            <div className="glass-card p-3 rounded-xl border-b-4 border-amber-500 flex items-center gap-2 shadow-lg">
               <div className="bg-amber-500/20 p-1.5 rounded-lg text-amber-400"><Eye size={16} /></div>
               <div className="text-xs font-bold text-white">Deploy Monitor</div>
            </div>
             {/* Connector */}
             <div className="absolute bottom-full right-0 w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-500/50 rotate-45 origin-bottom-right transform translate-x-8 translate-y-8"></div>
         </div>

         {/* Orbiting Planet 3: Insights */}
         <div className="absolute bottom-4 right-4 animate-[float_6s_ease-in-out_2s_infinite]">
            <div className="glass-card p-3 rounded-xl border-b-4 border-green-500 flex items-center gap-2 shadow-lg">
               <div className="bg-green-500/20 p-1.5 rounded-lg text-green-400"><FileBarChart size={16} /></div>
               <div className="text-xs font-bold text-white">Deploy Insights</div>
            </div>
         </div>

         {/* Connecting lines (Visual only) */}
         <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30">
            <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="#818cf8" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="50%" y1="50%" x2="20%" y2="85%" stroke="#818cf8" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="50%" y1="50%" x2="80%" y2="85%" stroke="#818cf8" strokeWidth="1" strokeDasharray="4 4" />
         </svg>

      </div>
    </div>
  );
};