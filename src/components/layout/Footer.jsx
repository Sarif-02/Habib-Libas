const QUICK = ['Explore Designs','How It Works','Our Story','Fabric Library','Size Guide'];
const SERVICES = ['Custom Stitching','Bridal Wear','Wedding Collection','Corporate Attire','Alterations'];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-charcoal">
      <div className="h-[2px] gg-h" />
      <div className="max-w-screen-xl mx-auto px-site pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">

          {/* Brand */}
          <div className="col-span-2">
            <div className="font-display text-2xl italic text-white mb-1">Habib Libas</div>
            <p className="text-[10px] uppercase tracking-[.2em] text-white/30 mb-5">Master Tailors Since 1987</p>
            <p className="text-sm text-white/40 leading-relaxed mb-7 max-w-xs">
              Crafting bespoke excellence through generations of heritage — where tradition meets contemporary South Asian fashion.
            </p>
            <div className="flex gap-3">
              {['In','Fb','Wa'].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 text-xs hover:text-gold-pale hover:border-gold-pale/40 transition-all">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[.2em] text-white/30 mb-6">Quick Links</h4>
            <ul className="space-y-3.5">
              {QUICK.map((l) => (
                <li key={l}><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[.2em] text-white/30 mb-6">Services</h4>
            <ul className="space-y-3.5">
              {SERVICES.map((l) => (
                <li key={l}><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[10px] uppercase tracking-[.2em] text-white/30 mb-6">Newsletter</h4>
            <p className="text-xs text-white/35 leading-relaxed mb-5">New collections & exclusive early access.</p>
            <div className="flex flex-col gap-3">
              <input type="email" placeholder="your@email.com"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-gold-pale/50 transition-colors"
              />
              <button className="gg text-white py-3 text-[10px] tracking-[.2em] uppercase font-bold rounded-lg hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Contact strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-10 border-t border-white/10 border-b border-white/10 mb-8">
          {[
            { icon: '📍', label: 'Visit', val: '42 Liberty Market, Gulberg III, Lahore' },
            { icon: '📞', label: 'Call',  val: '+92 300 123 4567' },
            { icon: '🕐', label: 'Hours', val: 'Mon–Sat 10am–9pm · Sun 12–6pm' },
          ].map((c) => (
            <div key={c.label} className="flex items-center gap-3">
              <span className="text-xl">{c.icon}</span>
              <div>
                <p className="text-[9px] uppercase tracking-wider text-white/30">{c.label}</p>
                <p className="text-xs text-white/55 mt-0.5">{c.val}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[10px] uppercase tracking-widest text-white/20">© {year} Habib Libas. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy','Terms','Cookies'].map((l) => (
              <a key={l} href="#" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white/50 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
