import React from 'react';
import { Box } from 'lucide-react';

const LandingFooter: React.FC = () => (
  <footer className="px-4 pb-12">
    <div className="mx-auto max-w-6xl rounded-[28px] border border-white/60 bg-white/50 backdrop-blur-xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2.5">
        <span className="w-8 h-8 rounded-xl bg-white/80 border border-white flex items-center justify-center shadow-sm">
          <Box size={16} className="text-slate-700" strokeWidth={1.5} />
        </span>
        <div>
          <div className="font-serif text-[15px] font-bold text-slate-800">Box of Memories</div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">AI Poster &amp; Card Studio</div>
        </div>
      </div>
      <p className="text-[12px] text-slate-400 text-center md:text-right">
        直播 · 课程 · 技术分享的卡片生产线
        <br className="hidden md:block" />
        <span className="md:ml-2">A card production line for live shows, courses and dev talks.</span>
      </p>
    </div>
  </footer>
);

export default LandingFooter;
