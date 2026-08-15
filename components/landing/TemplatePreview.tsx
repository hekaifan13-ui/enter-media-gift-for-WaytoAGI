import React from 'react';
import { TemplateId } from '../../types';
import { Radio, QrCode, GraduationCap } from 'lucide-react';

interface TemplatePreviewProps {
  id: TemplateId;
  className?: string;
}

/** Lightweight abstract mockups of the real card templates, used for marketing only. */
const TemplatePreview: React.FC<TemplatePreviewProps> = ({ id, className = '' }) => {
  const base = `relative overflow-hidden rounded-2xl border border-white/60 shadow-[0_18px_40px_-18px_rgba(15,23,42,0.45)] ${className}`;

  if (id === TemplateId.LIVESTREAM) {
    return (
      <div className={`${base} aspect-video`} style={{ background: 'linear-gradient(135deg,#7c3aed 0%,#6366f1 45%,#22d3ee 100%)' }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,.7), transparent 45%)' }} />
        <div className="absolute inset-0 p-4 flex flex-col justify-between">
          <div className="flex items-center gap-1.5 self-start bg-white/25 backdrop-blur-md rounded-full px-2 py-1 border border-white/40">
            <Radio size={9} className="text-white" />
            <span className="text-[7px] font-bold tracking-[0.2em] text-white">LIVE</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2.5 w-4/5 rounded-full bg-white/90" />
            <div className="h-2.5 w-3/5 rounded-full bg-white/60" />
          </div>
          <div className="flex items-end justify-between">
            <div className="flex gap-1.5">
              {[0, 1, 2].map(i => (
                <div key={i} className="w-6 h-6 rounded-full bg-white/70 border border-white" />
              ))}
            </div>
            <div className="h-1.5 w-12 rounded-full bg-white/70" />
          </div>
        </div>
      </div>
    );
  }

  if (id === TemplateId.MODERN) {
    return (
      <div className={`${base} aspect-[10/16] bg-[#141414]`}>
        <div className="absolute inset-0 p-3 flex flex-col gap-2">
          <div className="flex-1 rounded-xl bg-gradient-to-br from-slate-600 to-slate-800 border border-white/10" />
          <div className="space-y-1">
            <div className="h-1.5 w-3/4 rounded-full bg-white/80" />
            <div className="h-1.5 w-1/2 rounded-full bg-white/35" />
          </div>
          <div className="rounded-xl bg-emerald-200/90 p-2 flex gap-2">
            {[0, 1].map(i => (
              <div key={i} className="flex-1 aspect-square rounded-md bg-white flex items-center justify-center">
                <QrCode size={12} className="text-slate-800" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (id === TemplateId.CODE) {
    return (
      <div className={`${base} aspect-video bg-[#1e1e2e]`}>
        <div className="h-5 flex items-center gap-1.5 px-3 bg-[#2a2a3c] border-b border-white/5">
          {['#ef4444', '#f59e0b', '#22c55e'].map(c => (
            <span key={c} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: c }} />
          ))}
        </div>
        <div className="p-3 space-y-1.5 font-mono">
          {[
            ['w-6 bg-fuchsia-400/80', 'w-14 bg-sky-300/70'],
            ['w-10 bg-amber-300/70', 'w-8 bg-emerald-300/70'],
            ['w-4 bg-sky-300/60', 'w-20 bg-white/30'],
            ['w-12 bg-fuchsia-400/60', 'w-6 bg-amber-300/50'],
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-1.5" style={{ paddingLeft: i === 2 ? 12 : 0 }}>
              <span className="h-1.5 w-1 rounded-full bg-white/15" />
              {row.map((cls, j) => (
                <span key={j} className={`h-1.5 rounded-full ${cls}`} />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`${base} aspect-video`} style={{ background: 'linear-gradient(135deg,#f8e3c9 0%,#e0a877 55%,#c8794a 100%)' }}>
      <div className="absolute inset-0 p-4 flex flex-col justify-between">
        <div className="flex items-center gap-1.5">
          <GraduationCap size={12} className="text-white/90" />
          <div className="h-2 w-20 rounded-full bg-white/90" />
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {[0, 1, 2, 3].map(i => (
            <div key={i} className="h-4 rounded-md bg-white/45 border border-white/60" />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="h-1.5 w-14 rounded-full bg-white/70" />
          <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center">
            <QrCode size={12} className="text-[#c8794a]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePreview;
