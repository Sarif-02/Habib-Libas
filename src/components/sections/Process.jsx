const STEPS = [
  { num: '01', emoji: '🎨', title: 'Choose Style',   desc: 'Browse our catalogue or bring your own design. Pick fabric, cut, and every detail you want.' },
  { num: '02', emoji: '📏', title: 'Measurements',   desc: 'Visit our Lahore atelier or use our guided home-measurement kit. Precision guaranteed.' },
  { num: '03', emoji: '✂️', title: 'Craft & Stitch', desc: 'Our master tailors handcraft your garment with meticulous care, typically in 7–14 days.' },
  { num: '04', emoji: '📦', title: 'Delivered',       desc: 'Free delivery across Pakistan. Try it on — unlimited alterations included if needed.' },
];

export default function Process() {
  return (
    <section id="process" className="py-sec px-site bg-charcoal overflow-hidden">
      <div className="max-w-screen-xl mx-auto">

        <div className="rv text-center mb-14 md:mb-20">
          <span className="block text-xs uppercase tracking-[.25em] text-gold-pale mb-4">How It Works</span>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
            From Idea to <em className="text-gold-pale">Wardrobe</em>
          </h2>
          <p className="text-sm text-white/50 max-w-md mx-auto">Four simple steps to your perfect garment — we handle every detail.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="pconn" />

          {STEPS.map((step, i) => (
            <div
              key={i}
              className={`rv d${i + 1} relative group bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-gold/30 transition-all duration-500`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full gg flex items-center justify-center text-white font-display text-lg font-bold shadow-lg">
                  {i + 1}
                </div>
                <span className="font-display text-5xl text-white/5 font-bold">{step.num}</span>
              </div>
              <div className="text-2xl mb-4">{step.emoji}</div>
              <h3 className="font-display text-xl text-white mb-3">{step.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
              <div className="mt-6 h-px w-0 gg group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
