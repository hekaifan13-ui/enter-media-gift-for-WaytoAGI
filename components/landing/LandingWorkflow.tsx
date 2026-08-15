import React from 'react';
import { motion } from 'motion/react';
import { Box, SlidersHorizontal, Share2, ArrowRight } from 'lucide-react';

interface LandingWorkflowProps {
  onStart: () => void;
}

const STEPS = [
  {
    icon: Box,
    step: '01',
    zh: '打开亚克力盒，选模板',
    en: 'Open the box, pick a template',
    desc: '新建项目后从收藏盒中取出一张卡片：直播、竖版、代码或课堂。',
  },
  {
    icon: SlidersHorizontal,
    step: '02',
    zh: '填内容，让 AI 补齐',
    en: 'Fill in, let AI finish it',
    desc: '写主题或让 AI 生成文案与配图，从嘉宾库、Logo 库直接取素材。',
  },
  {
    icon: Share2,
    step: '03',
    zh: '导出发布',
    en: 'Export and publish',
    desc: '导出高清 PNG 或动效视频，项目自动保存，下次改一改就能复用。',
  },
];

const LandingWorkflow: React.FC<LandingWorkflowProps> = ({ onStart }) => (
  <section id="workflow" className="relative px-4 py-24">
    <div className="mx-auto max-w-6xl">
      <div className="max-w-2xl">
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500">Workflow</span>
        <h2 className="mt-4 font-serif text-3xl md:text-5xl text-slate-900 tracking-tight">三步出片</h2>
        <p className="mt-3 text-slate-500">Three steps from idea to publish.</p>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative rounded-[28px] border border-white/70 bg-white/55 backdrop-blur-xl p-7 shadow-[0_20px_44px_-30px_rgba(15,23,42,0.4)]"
          >
            <span className="font-serif text-5xl text-slate-900/10 absolute top-5 right-6">{s.step}</span>
            <span className="inline-flex w-11 h-11 items-center justify-center rounded-2xl bg-white border border-white/80 shadow-sm text-slate-700">
              <s.icon size={18} strokeWidth={1.6} />
            </span>
            <h3 className="mt-5 text-[16px] font-semibold text-slate-900">{s.zh}</h3>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">{s.en}</p>
            <p className="mt-3 text-[13px] leading-relaxed text-slate-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA band */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
        className="mt-16 relative overflow-hidden rounded-[36px] border border-white/60 bg-white/60 backdrop-blur-2xl px-8 py-14 text-center shadow-[0_36px_70px_-36px_rgba(15,23,42,0.45)]"
      >
        <div className="absolute -top-24 -left-16 w-72 h-72 bg-cyan-200/50 blur-[110px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -right-16 w-72 h-72 bg-purple-200/50 blur-[110px] rounded-full pointer-events-none" />
        <div className="relative">
          <h2 className="font-serif text-3xl md:text-5xl text-slate-900 tracking-tight">下一场活动的物料，现在就做完</h2>
          <p className="mt-4 text-slate-500">Get your next event assets done in the next ten minutes.</p>
          <button
            onClick={onStart}
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white pl-7 pr-6 py-4 text-sm font-semibold transition-all active:scale-95 shadow-[0_16px_32px_-16px_rgba(15,23,42,0.8)]"
          >
            进入工作台 <span className="opacity-60 font-normal">Open the studio</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default LandingWorkflow;
