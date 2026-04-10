import { useState, useEffect, useRef } from 'react';
import { HERO_SLIDES } from '../../data/index.js';

export default function Hero() {
  const [idx, setIdx]           = useState(0);
  const [transitioning, setTrans] = useState(false);
  const timerRef = useRef(null);

  const goTo = (i) => {
    if (transitioning || i === idx) return;
    setTrans(true);
    setTimeout(() => { setIdx(i); setTrans(false); }, 500);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => setIdx((c) => (c + 1) % HERO_SLIDES.length), 5500);
    return () => clearInterval(timerRef.current);
  }, []);

  const s = HERO_SLIDES[idx];

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center" style={{ minHeight: '100svh' }}>

      {/* BG images */}
      <div className="absolute inset-0 flex">
        <div className="relative overflow-hidden w-full md:w-1/2 h-full">
          <img key={`l${idx}`} src={s.left} alt="Tailoring" className="w-full h-full object-cover animate-hzoom" loading="eager" />
          <div className="absolute inset-0 bg-ink/20" />
        </div>
        <div className="hidden md:block relative overflow-hidden w-1/2 h-full">
          <img key={`r${idx}`} src={s.right} alt="Fashion" className="w-full h-full object-cover animate-hzoom" loading="eager" />
          <div className="absolute inset-0 bg-ink/20" />
        </div>
      </div>
      <div className="absolute inset-0 hovl z-[1]" />

      {/* Floating badges */}
      <div className="absolute top-24 md:top-32 right-4 md:right-14 z-10 animate-floatA hidden sm:block">
        <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 border border-white/20 text-center shadow-2xl">
          <p className="text-white font-display text-2xl md:text-3xl font-bold leading-none">37+</p>
          <p className="text-white/70 text-[10px] uppercase tracking-widest mt-1">Years of<br />Craft</p>
        </div>
      </div>
      <div className="absolute bottom-32 left-4 md:left-14 z-10 animate-floatB hidden sm:block">
        <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 border border-white/20 text-center shadow-2xl">
          <p className="text-white font-display text-2xl md:text-3xl font-bold leading-none">5K+</p>
          <p className="text-white/70 text-[10px] uppercase tracking-widest mt-1">Happy<br />Clients</p>
        </div>
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center px-5 md:px-8 max-w-5xl mx-auto w-full mt-16 transition-all duration-500"
        style={{ opacity: transitioning ? 0 : 1, transform: transitioning ? 'translateY(16px)' : 'translateY(0)' }}
      >
        <div className="inline-flex items-center gap-2 mb-5 md:mb-7 animate-fup">
          <span className="w-8 h-px bg-gold-pale" />
          <span className="text-[10px] md:text-xs uppercase tracking-[.3em] text-white/80">{s.tag}</span>
          <span className="w-8 h-px bg-gold-pale" />
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-4 md:mb-6 animate-fup" style={{ animationDelay: '.1s' }}>
          {s.h1line1} <em className="gtext not-italic">{s.h1line2}</em>
        </h1>

        <p className="text-base md:text-xl text-white/75 mb-8 md:mb-12 animate-fup" style={{ animationDelay: '.2s' }}>
          {s.sub}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center items-center animate-fup" style={{ animationDelay: '.32s' }}>
          <a href="#products" className="w-full sm:w-auto bsh gg text-white px-8 md:px-12 py-4 text-xs md:text-sm font-semibold tracking-widest uppercase rounded-xl shadow-2xl hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 relative overflow-hidden">
            Shop Collection
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a href="#process" className="w-full sm:w-auto bg-white/10 backdrop-blur border border-white/30 text-white px-8 md:px-12 py-4 text-xs md:text-sm font-semibold tracking-widest uppercase rounded-xl hover:bg-white/20 active:scale-95 transition-all flex items-center justify-center">
            How It Works
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex items-center justify-center gap-6 md:gap-12 mt-10 md:mt-14 animate-fup" style={{ animationDelay: '.44s' }}>
          {[['5,000+','Clients'],['48hr','Express'],['100%','Fit Guarantee']].map(([v, l], i) => (
            <div key={l} className="flex items-center gap-6 md:gap-12">
              {i > 0 && <div className="w-px h-8 bg-white/20" />}
              <div className="text-center">
                <p className="text-white font-display text-xl md:text-2xl font-bold">{v}</p>
                <p className="text-white/50 text-[9px] uppercase tracking-widest mt-1">{l}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`hdot ${i === idx ? 'on' : 'w-2'}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-24 right-5 md:right-14 z-10 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/50 animate-pulse-soft" />
        <span className="text-white/40 text-[9px] uppercase tracking-[.3em]" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
      </div>
    </section>
  );
}
