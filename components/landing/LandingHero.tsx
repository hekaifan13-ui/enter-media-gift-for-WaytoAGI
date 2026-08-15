import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Play } from 'lucide-react';
import { TemplateId } from '../../types';
import TemplatePreview from './TemplatePreview';

interface LandingHeroProps {
  onStart: () => void;
}

const STATS = [
  { value: '4', zh: '套专业模板', en: 'Templates' },
  { value: 'AI', zh: '文案 + 配图', en: 'Copy & Imagery' },
  { value: 'PNG / 视频', zh: '一键导出', en: 'One-click Export' },
];

const LandingHero: React.FC<LandingHeroProps> = ({ onStart }) => (
  <section className="relative px-4 pt-16 pb-24 md:pt-24 md:pb-32">
    <div className="mx-auto max-w-6xl grid lg:grid-cols-[1.05fr_1fr] gap-16 items-center">
      {/* Copy */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 backdrop-blur-md px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-600 shadow-sm">
          <Sparkles size={13} className="text-cyan-600" />
          AI Poster Studio · AI 卡片工作室
        </div>

        <h1 className="mt-7 font-serif text-4xl md:text-5xl leading-[1.15] tracking-tight text-slate-900">
          把每一场直播与课程，
          <br />
          做成值得收藏的卡片
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-500 font-light">
          Turn every session into a card worth keeping.
        </p>

        <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-slate-600">
          四套打磨好的模板，AI 帮你写标题、出配图；嘉宾与 Logo 录入一次即可永久复用。
          几分钟产出一整场活动的宣发物料，导出高清图片或动态视频。
        </p>
        <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-slate-400">
          Four crafted templates, AI copywriting and imagery, reusable guest &amp; logo libraries —
          export as high-res PNG or motion video in minutes.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <button
            onClick={onStart}
            className="group flex items-center gap-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white pl-7 pr-6 py-4 text-sm font-semibold transition-all active:scale-95 shadow-[0_16px_32px_-16px_rgba(15,23,42,0.8)]"
          >
            免费开始创作 <span className="opacity-60 font-normal">Start free</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="#templates"
            className="flex items-center gap-2 rounded-full border border-white/70 bg-white/60 backdrop-blur-md px-6 py-4 text-sm font-semibold text-slate-700 hover:bg-white/80 transition-all"
          >
            <Play size={14} className="text-cyan-600" />
            看模板 <span className="opacity-50 font-normal">See templates</span>
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5">
          {STATS.map(s => (
            <div key={s.zh}>
              <div className="font-serif text-2xl text-slate-900">{s.value}</div>
              <div className="text-[12px] text-slate-500">{s.zh}</div>
              <div className="text-[10px] uppercase tracking-[0.16em] text-slate-400">{s.en}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating card stack */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="relative scene mx-auto w-full max-w-md"
      >
        <div className="absolute -inset-10 bg-gradient-to-br from-cyan-200/50 to-purple-200/50 blur-[90px] rounded-full pointer-events-none" />

        <div className="relative preserve-3d" style={{ transform: 'rotateX(8deg) rotateY(-12deg)' }}>
          <div className="rounded-[28px] border border-white/70 bg-white/50 backdrop-blur-2xl p-5 shadow-[0_40px_80px_-30px_rgba(15,23,42,0.45)]">
            <div className="mb-4 flex items-center justify-between text-[11px] text-slate-500">
              <span className="font-bold uppercase tracking-[0.18em]">Live Stream 16:9</span>
              <span>直播预告</span>
            </div>
            <TemplatePreview id={TemplateId.LIVESTREAM} />
          </div>

          <div className="absolute -left-16 -bottom-24 w-32 animate-float">
            <div className="rounded-[22px] border border-white/70 bg-white/60 backdrop-blur-2xl p-3 shadow-[0_30px_60px_-24px_rgba(15,23,42,0.5)]">
              <TemplatePreview id={TemplateId.MODERN} />
            </div>
          </div>

          <div className="absolute -right-10 -top-16 w-48 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="rounded-[22px] border border-white/70 bg-white/60 backdrop-blur-2xl p-3 shadow-[0_30px_60px_-24px_rgba(15,23,42,0.5)]">
              <TemplatePreview id={TemplateId.CODE} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default LandingHero;
