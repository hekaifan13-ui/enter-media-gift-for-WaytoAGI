import React from 'react';
import { motion } from 'motion/react';
import { TemplateId } from '../../types';
import TemplatePreview from './TemplatePreview';

interface LandingTemplatesProps {
  onStart: () => void;
}

const ITEMS: { id: TemplateId; name: string; zh: string; desc: string; en: string }[] = [
  {
    id: TemplateId.LIVESTREAM,
    name: 'Live Stream',
    zh: '直播预告 16:9',
    desc: '主题金句 + 嘉宾头像墙 + 机构 Logo 条，渐变与光效背景可一键切换。',
    en: 'Topic, guest wall and logo bar with switchable gradient backdrops.',
  },
  {
    id: TemplateId.MODERN,
    name: 'Modern 10:16',
    zh: '竖版海报 10:16',
    desc: '整图出血排版，底部双二维码区，适合朋友圈与私域分发。',
    en: 'Full-bleed portrait frame with dual QR codes for social sharing.',
  },
  {
    id: TemplateId.CODE,
    name: 'Dev Mode',
    zh: '代码风格卡片',
    desc: 'macOS 窗口 + 编辑器高亮，技术分享与开发者活动的专属质感。',
    en: 'macOS window with syntax highlighting for developer events.',
  },
  {
    id: TemplateId.CLASSROOM,
    name: 'Classroom',
    zh: '课堂课程海报',
    desc: '课程主标题、章节列表与报名二维码，一张图讲清整门课。',
    en: 'Course title, chapter list and sign-up QR in a single frame.',
  },
];

const LandingTemplates: React.FC<LandingTemplatesProps> = ({ onStart }) => (
  <section id="templates" className="relative px-4 py-24">
    <div className="mx-auto max-w-6xl">
      <div className="max-w-2xl">
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-700">Templates</span>
        <h2 className="mt-4 font-serif text-3xl md:text-5xl text-slate-900 tracking-tight">四套模板，覆盖全部场景</h2>
        <p className="mt-3 text-slate-500">Four templates, one project — switch freely without redoing your content.</p>
        <p className="mt-2 text-[14px] text-slate-500">同一个项目内自由切换模板，内容与素材自动沿用，不必重做。</p>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 gap-6">
        {ITEMS.map((t, i) => (
          <motion.button
            key={t.id}
            onClick={onStart}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group text-left rounded-[28px] border border-white/70 bg-white/55 backdrop-blur-xl p-6 shadow-[0_24px_50px_-30px_rgba(15,23,42,0.4)] hover:bg-white/75 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/70 to-white/20 border border-white/60 p-5 mb-6">
              <TemplatePreview id={t.id} className={t.id === TemplateId.MODERN ? 'w-32' : 'w-full'} />
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-serif text-xl text-slate-900">{t.zh}</h3>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 group-hover:text-cyan-700 transition-colors">
                {t.name}
              </span>
            </div>
            <p className="mt-3 text-[14px] leading-relaxed text-slate-600">{t.desc}</p>
            <p className="mt-1.5 text-[12px] leading-relaxed text-slate-400">{t.en}</p>
          </motion.button>
        ))}
      </div>
    </div>
  </section>
);

export default LandingTemplates;
