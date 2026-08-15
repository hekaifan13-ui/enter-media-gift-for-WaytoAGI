import React from 'react';
import LandingNav from './landing/LandingNav';
import LandingHero from './landing/LandingHero';
import LandingTemplates from './landing/LandingTemplates';
import LandingFeatures from './landing/LandingFeatures';
import LandingWorkflow from './landing/LandingWorkflow';
import LandingFooter from './landing/LandingFooter';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => (
  <div
    className="h-full overflow-y-auto overflow-x-hidden font-sans text-slate-800 selection:bg-cyan-200"
    style={{ background: 'linear-gradient(160deg,#f6f9fc 0%,#eef4fb 40%,#e7ecfb 100%)' }}
  >
    {/* Ambient glow layer */}
    <div className="fixed inset-0 pointer-events-none opacity-70">
      <div className="absolute top-[-8%] left-[8%] w-[520px] h-[520px] bg-cyan-200/60 rounded-full blur-[150px] mix-blend-multiply" />
      <div className="absolute top-[35%] right-[4%] w-[520px] h-[520px] bg-purple-200/60 rounded-full blur-[150px] mix-blend-multiply" />
      <div className="absolute bottom-[-6%] left-[35%] w-[460px] h-[460px] bg-amber-100/70 rounded-full blur-[140px] mix-blend-multiply" />
    </div>

    <div className="relative">
      <LandingNav onStart={onStart} />
      <LandingHero onStart={onStart} />
      <LandingTemplates onStart={onStart} />
      <LandingFeatures />
      <LandingWorkflow onStart={onStart} />
      <LandingFooter />
    </div>
  </div>
);

export default LandingPage;
