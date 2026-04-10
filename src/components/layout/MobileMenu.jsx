const LINKS = [
  { href: '#explore',  label: 'Explore' },
  { href: '#products', label: 'Shop' },
  { href: '#story',    label: 'Our Story' },
  { href: '#process',  label: 'How It Works' },
  { href: '#fabrics',  label: 'Fabrics' },
  { href: '#pricing',  label: 'Pricing' },
  { href: '#contact',  label: 'Contact' },
];

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`fixed inset-0 z-[200] transition-all duration-300 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/55 transition-opacity duration-400 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`absolute right-0 top-0 bottom-0 w-full sm:w-[400px] bg-charcoal flex flex-col transition-transform duration-[450ms] cubic-bezier(.4,0,.2,1) ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 border-b border-white/10" style={{ height: 72 }}>
          <span className="font-display text-xl italic text-white">Habib Libas</span>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col px-7 pt-8 flex-1 gap-0.5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={onClose}
              className="text-white/75 font-display text-2xl italic py-4 border-b border-white/10 hover:text-gold-pale transition-colors flex items-center justify-between group"
            >
              {l.label}
              <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          ))}
        </nav>

        {/* Bottom CTAs */}
        <div className="px-7 pb-10 pt-4 space-y-3">
          <a
            href="https://wa.me/923001234567"
            className="flex items-center justify-center gap-2 w-full py-4 text-xs uppercase tracking-widest rounded-xl font-semibold text-white"
            style={{ background: '#25D366' }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a6.7 6.7 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <a href="#contact" onClick={onClose} className="flex items-center justify-center w-full py-4 text-xs uppercase tracking-widest rounded-xl font-semibold text-white gg">
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
}
