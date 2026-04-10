export default function Story() {
  return (
    <section id="story" className="py-sec px-site bg-parchment overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">

          {/* Image collage */}
          <div className="rvl relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=85&fit=crop"
                alt="Master tailor at work"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
            </div>
            {/* Overlapping photo */}
            <div className="absolute -bottom-5 -right-4 md:-right-10 w-36 md:w-48 rounded-2xl overflow-hidden border-4 border-parchment group" style={{ boxShadow: '0 24px 48px -8px rgba(26,28,27,.2)', zIndex: 2 }}>
              <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80&fit=crop" alt="Fabric detail" className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            </div>
            {/* Badge */}
            <div className="absolute -top-5 -left-4 md:-left-8 gg text-white rounded-2xl p-4 md:p-5 shadow-2xl animate-floatA" style={{ zIndex: 2 }}>
              <p className="font-display text-3xl font-bold leading-none">37</p>
              <p className="text-[9px] uppercase tracking-widest opacity-80 mt-0.5">Years</p>
            </div>
          </div>

          {/* Text */}
          <div className="rvr pt-10 md:pt-0">
            <span className="block text-xs uppercase tracking-[.25em] text-gold mb-5">Our Heritage</span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">
              Craft Passed Through <em>Generations</em>
            </h2>
            <p className="text-sm md:text-base text-ink-soft leading-relaxed mb-5">
              Founded in 1987 by Ustad Habib Ahmed in the heart of Lahore, Habib Libas began with one sewing machine and an uncompromising commitment to fit. What started as a small neighbourhood atelier has grown into one of Pakistan's most celebrated tailoring institutions.
            </p>
            <p className="text-sm md:text-base text-ink-soft leading-relaxed mb-10">
              Three generations of tailors and a team of 50+ craftsmen continue the same traditions — enhanced with modern design tools and premium fabrics sourced from across the world.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-5 mb-10 pb-10 border-b border-stone-light/20">
              {[['5K+','Clients'],['50+','Artisans'],['3','Generations']].map(([v,l]) => (
                <div key={l}>
                  <p className="font-display text-2xl md:text-3xl text-gold font-bold">{v}</p>
                  <p className="text-[10px] uppercase tracking-widest text-ink-soft mt-1">{l}</p>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2.5 gg text-white px-7 py-4 text-xs uppercase tracking-widest rounded-xl hover:opacity-90 active:scale-95 transition-all font-semibold group">
              Meet Our Team
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
