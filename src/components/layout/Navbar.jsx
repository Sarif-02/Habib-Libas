import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#explore',  label: 'Explore' },
  { href: '#products', label: 'Shop' },
  { href: '#story',    label: 'Our Story' },
  { href: '#process',  label: 'How It Works' },
  { href: '#pricing',  label: 'Pricing' },
  { href: '#contact',  label: 'Contact' },
];

export default function Navbar({ cartCount, onMenuOpen, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`gnav fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'gnav-shadow' : ''}`}>
      <div className="flex justify-between items-center w-full px-site h-16 md:h-20 max-w-screen-2xl mx-auto">

        {/* Logo */}
        <a href="#" className="group flex flex-col leading-none">
          <span className="font-display text-xl md:text-2xl italic text-gold group-hover:text-gold-light transition-colors duration-300">
            Habib Libas
          </span>
          <span className="hidden sm:block text-[9px] uppercase tracking-[.2em] text-ink-soft mt-0.5">
            Est. 1987 · Lahore
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-9">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="uline text-sm text-ink-soft hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-5">
          <button className="flex items-center gap-1.5 text-ink-soft hover:text-ink text-sm transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
            </svg>
            Account
          </button>

          <button onClick={onCartOpen} className="relative flex items-center gap-1.5 text-ink-soft hover:text-ink text-sm transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
            </svg>
            Cart
            {cartCount > 0 && <span className="cbadge">{cartCount}</span>}
          </button>

          <a href="#contact" className="bsh gg text-white px-5 xl:px-7 py-2.5 text-xs font-semibold tracking-widest uppercase rounded-xl hover:opacity-90 transition-opacity">
            Order Now
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-4 lg:hidden">
          <button onClick={onCartOpen} className="relative text-ink-soft">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
            </svg>
            {cartCount > 0 && <span className="cbadge">{cartCount}</span>}
          </button>
          <button onClick={onMenuOpen} className="text-ink p-1">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
