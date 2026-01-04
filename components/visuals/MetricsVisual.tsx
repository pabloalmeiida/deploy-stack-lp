import React from 'react';
import { Rocket, Eye, FileBarChart, CheckCircle2 } from 'lucide-react';

export const MetricsVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-sm">
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-blue-400 rounded-2xl blur opacity-30 animate-pulse"></div>
        <div className="relative glass-card rounded-xl p-5 border border-slate-700">
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-slate-300 text-xs font-semibold uppercase tracking-wider">Stack Status</h4>
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] text-green-400 font-mono">SYSTEM ACTIVE</span>
                </div>
            </div>
            
            <div className="space-y-3">
                {/* Ads Row (CHANGED TO BLUE) */}
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded bg-blue-500/20 text-blue-400">
                            <Rocket size={14} />
                        </div>
                        <div>
                            <div className="text-[10px] text-slate-400">Ads Publicados</div>
                            <div className="text-xs font-bold text-white">142 Criativos</div>
                        </div>
                    </div>
                    <CheckCircle2 size={14} className="text-green-500" />
                </div>

                {/* Monitor Row */}
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded bg-amber-500/20 text-amber-400">
                            <Eye size={14} />
                        </div>
                        <div>
                            <div className="text-[10px] text-slate-400">Monitoramento</div>
                            <div className="text-xs font-bold text-white">12 Contas Online</div>
                        </div>
                    </div>
                    <CheckCircle2 size={14} className="text-green-500" />
                </div>
                
                {/* Insights Row */}
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded bg-green-500/20 text-green-400">
                            <FileBarChart size={14} />
                        </div>
                        <div>
                            <div className="text-[10px] text-slate-400">Insights IA</div>
                            <div className="text-xs font-bold text-white">Relatório Gerado</div>
                        </div>
                    </div>
                    <CheckCircle2 size={14} className="text-green-500" />
                </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center">
               <div className="text-[10px] text-slate-500">Uptime: 99.9%</div>
               <div className="text-[10px] font-mono text-brand-400">v.1.0.5</div>
            </div>
        </div>
    </div>
  );
};