import { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../../data/index.js';

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((s) => (
        <svg key={s} className={`w-4 h-4 ${s <= rating ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'}`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [idx,     setIdx]     = useState(0);
  const [fading,  setFading]  = useState(false);

  const goTo = (i) => {
    setFading(true);
    setTimeout(() => { setIdx(i); setFading(false); }, 400);
  };

  useEffect(() => {
    const t = setInterval(() => goTo((idx + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, [idx]);

  const t = TESTIMONIALS[idx];

  return (
    <section className="py-sec px-site bg-parchment relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/4 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="rv text-center mb-14 md:mb-20">
          <span className="block text-xs uppercase tracking-[.25em] text-gold mb-4">Testimonials</span>
          <h2 className="font-display text-3xl md:text-5xl italic">Voices of Excellence</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center rv">

          {/* Avatar stack */}
          <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 no-scroll">
            {TESTIMONIALS.map((te, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`flex items-center gap-3 transition-all duration-300 flex-shrink-0 ${i === idx ? 'opacity-100' : 'opacity-35 hover:opacity-60'}`}
              >
                <img
                  src={te.avatar}
                  alt={te.name}
                  className={`rounded-full object-cover transition-all duration-300 ${i === idx ? 'w-14 h-14 ring-2 ring-gold ring-offset-2' : 'w-10 h-10'}`}
                />
                <div className={`text-left transition-all duration-300 ${i === idx ? 'block' : 'hidden md:block'}`}>
                  <p className="font-display text-sm">{te.name}</p>
                  <p className="text-[10px] text-ink-soft uppercase tracking-wider">{te.role}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Quote */}
          <div className="md:col-span-3">
            <div className="relative">
              <span className="font-display text-[9rem] text-gold/8 absolute -top-8 -left-4 leading-none select-none pointer-events-none">"</span>
              <div
                className="relative z-10 tslide"
                style={{ opacity: fading ? 0 : 1, transform: fading ? 'translateY(16px)' : 'translateY(0)', transition: 'opacity .4s, transform .4s' }}
              >
                <Stars rating={t.rating} />
                <p className="font-display text-xl md:text-2xl lg:text-3xl leading-relaxed text-ink italic my-6">
                  {t.text}
                </p>
                <div>
                  <p className="font-display text-base">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-widest text-ink-soft">{t.role} · {t.loc}</p>
                </div>
              </div>
            </div>

            {/* Progress dots */}
            <div className="flex gap-2 mt-10">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="h-1 rounded-full transition-all duration-500"
                  style={{ width: i === idx ? '2.5rem' : '1rem', background: i === idx ? '#775a19' : 'rgba(209,197,180,.4)' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
