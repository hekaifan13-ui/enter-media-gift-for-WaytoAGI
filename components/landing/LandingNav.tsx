import React from 'react';
import { Box, ArrowRight } from 'lucide-react';

interface LandingNavProps {
  onStart: () => void;
}

const LINKS = [
  { href: '#templates', zh: '模板', en: 'Templates' },
  { href: '#features', zh: '功能', en: 'Features' },
  { href: '#workflow', zh: '流程', en: 'Workflow' },
];

const LandingNav: React.FC<LandingNavProps> = ({ onStart }) => (
  <div className="sticky top-0 z-50 px-4 pt-4">
    <nav className="mx-auto max-w-6xl flex items-center justify-between gap-4 rounded-full border border-white/60 bg-white/60 backdrop-blur-xl px-5 py-3 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.25)]">
      <div className="flex items-center gap-2.5">
        <span className="w-8 h-8 rounded-xl bg-white/80 border border-white flex items-center justify-center shadow-sm">
          <Box size={16} className="text-slate-700" strokeWidth={1.5} />
        </span>
        <span className="font-serif text-base font-bold tracking-wide text-slate-800">Box of Memories</span>
      </div>

      <div className="hidden md:flex items-center gap-7">
        {LINKS.map(l => (
          <a key={l.href} href={l.href} className="group text-[13px] text-slate-500 hover:text-slate-900 transition-colors">
            {l.zh}
            <span className="ml-1.5 text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-slate-500">{l.en}</span>
          </a>
        ))}
      </div>

      <button
        onClick={onStart}
        className="group flex items-center gap-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white pl-5 pr-4 py-2.5 text-[13px] font-semibold transition-all active:scale-95 shadow-sm hover:shadow-lg"
      >
        开始创作
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
      </button>
    </nav>
  </div>
);

export default LandingNav;
