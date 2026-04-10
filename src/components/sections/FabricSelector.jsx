import { useState } from 'react';
import { FABRICS } from '../../data/index.js';

const FABRIC_KEYS = Object.keys(FABRICS);

export default function FabricSelector() {
  const [active, setActive] = useState('lawn');
  const [fading, setFading]  = useState(false);

  const select = (key) => {
    setFading(true);
    setTimeout(() => { setActive(key); setFading(false); }, 250);
  };

  const f = FABRICS[active];

  return (
    <section id="fabrics" className="py-sec px-site bg-parchment">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Controls */}
          <div className="rvl">
            <span className="block text-xs uppercase tracking-[.25em] text-gold mb-5">Material Library</span>
            <h2 className="font-display text-3xl md:text-4xl mb-4">Choose Your <em>Fabric</em></h2>
            <p className="text-sm text-ink-soft leading-relaxed mb-8">
              We source premium fabrics from across South Asia, Turkey and Italy. Each tells its own story of texture, drape, and character.
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {FABRIC_KEYS.map((key) => (
                <button key={key} onClick={() => select(key)} className={`fchip ${active === key ? 'on' : ''}`}>
                  {FABRICS[key].name}
                </button>
              ))}
            </div>

            {/* Info card */}
            <div
              className="bg-parchment-2 rounded-2xl p-6 transition-all duration-300"
              style={{ opacity: fading ? 0 : 1, transform: fading ? 'scale(.98)' : 'scale(1)' }}
            >
              <div className="flex items-start justify-between mb-3">
                <p className="text-xs uppercase tracking-widest text-gold font-semibold">{f.name}</p>
                <span className="font-display text-sm text-gold">{f.price}</span>
              </div>
              <p className="text-sm text-ink-soft leading-relaxed mb-4">{f.desc}</p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-light/20">
                {[['Origin',f.orig],['Weight',f.wgt],['Season',f.seas]].map(([k,v]) => (
                  <div key={k}>
                    <p className="text-[9px] uppercase tracking-wider text-ink-soft">{k}</p>
                    <p className="text-xs text-ink mt-0.5">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="rvr">
            <div className="rounded-2xl overflow-hidden aspect-square shadow-2xl">
              <img
                key={active}
                src={f.img}
                alt={f.name}
                className="w-full h-full object-cover animate-fin"
                loading="lazy"
                style={{ transition: 'opacity .4s, transform .5s' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
