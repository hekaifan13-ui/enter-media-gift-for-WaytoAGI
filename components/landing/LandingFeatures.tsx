import React from 'react';
import { motion } from 'motion/react';
import { PenLine, Wand2, Users, Layers, Download, CloudUpload, Palette, Crop } from 'lucide-react';

const FEATURES = [
  {
    icon: PenLine,
    zh: 'AI 文案助手',
    en: 'AI Copywriter',
    desc: '输入主题，自动生成标题、金句与章节大纲，语气与长度可反复重写。',
  },
  {
    icon: Wand2,
    zh: 'AI 配图生成',
    en: 'AI Imagery',
    desc: '文生图、参考图生图，直接把生成结果作为卡片主视觉或背景。',
  },
  {
    icon: Users,
    zh: '嘉宾库',
    en: 'Guest Library',
    desc: '头像、姓名、职称录入一次，任意项目一键调用，排版位置可自由拖拽。',
  },
  {
    icon: Layers,
    zh: 'Logo 库',
    en: 'Logo Library',
    desc: '自动去白底裁边，多机构 Logo 支持独立缩放、间距与分隔线颜色。',
  },
  {
    icon: Palette,
    zh: '背景与光效预设',
    en: 'Presets & Overlays',
    desc: '渐变背景组合搭配全息、烫金、邮票等叠加质感，风格立刻成型。',
  },
  {
    icon: Crop,
    zh: '精准裁切与排版',
    en: 'Crop & Layout',
    desc: '内置裁图器与缩放拖拽画布，字号、间距、层级都能像设计稿一样微调。',
  },
  {
    icon: Download,
    zh: '图片与视频导出',
    en: 'PNG & Video Export',
    desc: '一键导出高清 PNG，或录制带动效的短视频，直接用于发布。',
  },
  {
    icon: CloudUpload,
    zh: '云端项目管理',
    en: 'Cloud Projects',
    desc: '项目与素材自动保存到云端，随时回到任一项目继续编辑。',
  },
];

const LandingFeatures: React.FC = () => (
  <section id="features" className="relative px-4 py-24">
    <div className="mx-auto max-w-6xl">
      <div className="max-w-2xl">
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-purple-700">Features</span>
        <h2 className="mt-4 font-serif text-3xl md:text-5xl text-slate-900 tracking-tight">从写文案到出片，一个工具搞定</h2>
        <p className="mt-3 text-slate-500">Everything from copy to export, in one place.</p>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.zh}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
            className="group rounded-[24px] border border-white/70 bg-white/55 backdrop-blur-xl p-6 shadow-[0_20px_44px_-30px_rgba(15,23,42,0.4)] hover:bg-white/80 hover:-translate-y-1 transition-all duration-300"
          >
            <span className="inline-flex w-11 h-11 items-center justify-center rounded-2xl bg-white border border-white/80 shadow-sm text-slate-700 group-hover:scale-110 transition-transform duration-300">
              <f.icon size={18} strokeWidth={1.6} />
            </span>
            <h3 className="mt-5 text-[15px] font-semibold text-slate-900">{f.zh}</h3>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">{f.en}</p>
            <p className="mt-3 text-[13px] leading-relaxed text-slate-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LandingFeatures;
