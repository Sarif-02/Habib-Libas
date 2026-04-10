const CARDS = [
  { title:'Heritage Sherwani', sub:'Silk & Zari Work',      img:'https://images.unsplash.com/photo-1594938298603-c8148c4b8c5a?w=600&q=85&fit=crop', offset:false },
  { title:'Boardroom Suit',    sub:'Italian Wool Blend',    img:'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=85&fit=crop', offset:true  },
  { title:'Bridal Ensemble',   sub:'Embroidered Chiffon',   img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85&fit=crop', offset:false },
  { title:'Formal Kurta',      sub:'Premium Cotton',        img:'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=85&fit=crop', offset:true  },
];

export default function Collections() {
  return (
    <section className="py-sec px-site bg-parchment-2 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 md:mb-14 gap-4 rv">
          <div>
            <span className="block text-xs uppercase tracking-[.25em] text-gold mb-3">Collections</span>
            <h2 className="font-display text-3xl md:text-4xl">Featured <em>Designs</em></h2>
          </div>
          <a href="#products" className="flex items-center gap-1.5 text-xs text-gold uppercase tracking-widest hover:gap-3 transition-all duration-300 group">
            View All
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {CARDS.map((c, i) => (
            <div
              key={i}
              className={`rvs group relative overflow-hidden rounded-2xl cursor-pointer ${c.offset ? 'md:mt-10' : ''}`}
              style={{ aspectRatio: '3/4' }}
            >
              <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <p className="text-white font-display text-base md:text-lg mb-1">{c.title}</p>
                <p className="text-white/60 text-xs">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Wide banner */}
        <div className="rv mt-4 md:mt-5 group relative overflow-hidden rounded-2xl cursor-pointer" style={{ aspectRatio: '21/7', minHeight: 140 }}>
          <img src="https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=1400&q=85&fit=crop" alt="Wedding Collection" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
            <span className="text-[10px] uppercase tracking-[.3em] text-white/60 mb-3">New Arrival</span>
            <h3 className="font-display text-xl md:text-4xl text-white mb-4">The Wedding Collection 2025</h3>
            <a href="#products" className="inline-flex items-center gap-2 text-gold-pale text-xs uppercase tracking-widest hover:gap-4 transition-all duration-300">
              Explore Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
