// ─── Marquee ───────────────────────────────────────────────────────────────
const ITEMS = ['Bespoke Tailoring','Custom Embroidery','Bridal Wear','Sherwani Collection','Formal Suits','Premium Fabrics','Perfect Fit Guaranteed','Free Pan-Pakistan Delivery'];

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="gg-h py-3.5 overflow-hidden">
      <div className="flex w-max animate-mq">
        {doubled.map((item, i) => (
          <span key={i} className="mx-6 text-white/90 text-xs uppercase tracking-widest whitespace-nowrap">✦ {item}</span>
        ))}
      </div>
    </div>
  );
}

// ─── Services ──────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"/></svg>, title:'Custom Stitching',        badge:'Most Popular', badgeColor:'amber',   desc:'Select your fabric, silhouette, and every detail — from collar to button. Pure personalization from start to finish.', bg:'bg-white' },
  { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"/></svg>, title:'Perfect Fit',             badge:null,           badgeColor:null,      desc:'Precision measurements by master tailors ensuring a silhouette that feels like a second skin — guaranteed.', bg:'bg-parchment-2' },
  { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3"/></svg>, title:'Premium Fabrics',         badge:null,           badgeColor:null,      desc:'200+ premium fabrics from Pakistan, Italy, Turkey and India. Every weight, every occasion, every season covered.', bg:'bg-white' },
  { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/></svg>, title:'Swift Delivery',           badge:'Free',         badgeColor:'emerald', desc:'Free delivery across Pakistan. 48-hour express option available. Alterations always included.', bg:'bg-parchment-2' },
  { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"/></svg>, title:'Guaranteed Satisfaction',  badge:null,           badgeColor:null,      desc:"100% fit guarantee. If it isn't perfect, we fix it — free of charge, no questions asked, every time.", bg:'bg-white' },
  { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"/></svg>, title:'Honest Pricing',            badge:null,           badgeColor:null,      desc:"Direct-to-atelier pricing. No showroom markup. Savile Row quality at genuinely accessible rates.", bg:'bg-parchment-2' },
];

const BADGE_CLS = { amber:'bg-amber-100 text-amber-800', emerald:'bg-emerald-100 text-emerald-800', blue:'bg-blue-100 text-blue-800' };
const DELAY = ['d1','d2','d3','d4','d5','d6'];

export function Services() {
  return (
    <section id="explore" className="py-sec px-site bg-parchment">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-20 gap-6">
          <div className="rvl max-w-xl">
            <span className="block text-xs uppercase tracking-[.25em] text-gold mb-4">Our Services</span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">The Art of <em className="text-gold">Bespoke</em> Craft</h2>
          </div>
          <p className="rv rvr text-sm text-ink-soft max-w-xs leading-relaxed">Every thread tells a story. We bridge traditional tailoring with modern accessibility — beautifully.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map((s, i) => (
            <div key={i} className={`rvs ${DELAY[i]} group relative p-7 md:p-8 rounded-2xl ${s.bg} card-hover overflow-hidden cursor-default`} style={{ boxShadow: '0 20px 50px -12px rgba(26,28,27,.06)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300 relative z-10">
                {s.icon}
              </div>
              {s.badge && (
                <span className={`absolute top-5 right-5 text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full font-semibold ${BADGE_CLS[s.badgeColor]}`}>{s.badge}</span>
              )}
              <h3 className="font-display text-xl mb-3 relative z-10">{s.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed mb-6 relative z-10">{s.desc}</p>
              <div className="h-px w-10 bg-gold-pale group-hover:w-full transition-all duration-700 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats ─────────────────────────────────────────────────────────────────
const STATS = [
  { val:'37+', label:'Years',         icon:'⟡' },
  { val:'5K+', label:'Clients',       icon:'◈' },
  { val:'50+', label:'Artisans',      icon:'✦' },
  { val:'200+',label:'Fabrics',       icon:'◆' },
  { val:'100%',label:'Fit Guarantee', icon:'◉' },
  { val:'3',   label:'Generations',   icon:'⌘' },
];

export function Stats() {
  return (
    <div className="bg-charcoal py-10 md:py-14">
      <div className="max-w-screen-xl mx-auto px-site">
        <div className="grid grid-cols-3 md:grid-cols-6">
          {STATS.map((s, i) => (
            <div key={i} className={`rv ${DELAY[i]} text-center py-5 px-3 group ${i < 5 ? 'border-r border-white/10' : ''}`}>
              <p className="text-gold-pale text-xs mb-2">{s.icon}</p>
              <p className="font-display text-2xl md:text-3xl text-white font-bold mb-1 group-hover:text-gold-pale transition-colors duration-300">{s.val}</p>
              <p className="text-[9px] uppercase tracking-widest text-white/40">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
