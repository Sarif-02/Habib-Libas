import { useState } from 'react';
import { PRODUCTS } from '../../data/index.js';

const CATS = ['All','Wedding','Bridal','Formal','Casual','Festive','Evening'];

const BADGE_CLS = {
  amber:   'bg-amber-100 text-amber-800',
  emerald: 'bg-emerald-100 text-emerald-800',
  blue:    'bg-blue-100 text-blue-800',
  purple:  'bg-purple-100 text-purple-800',
  orange:  'bg-orange-100 text-orange-800',
};

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((s) => (
        <svg
          key={s}
          className={`w-3 h-3 ${s <= rating ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Single Product Card ────────────────────────────────────────────────────
function ProductCard({ product, onOrderProduct }) {
  const [hovered,    setHovered]    = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [selColor,   setSelColor]   = useState(0);

  const disc = Math.round(((product.orig - product.price) / product.orig) * 100);

  return (
    <div
      className="pcard group relative bg-white rounded-2xl overflow-hidden"
      style={{
        boxShadow: hovered
          ? '0 32px 72px -12px rgba(26,28,27,.15)'
          : '0 20px 50px -12px rgba(26,28,27,.07)',
        transform:  hovered ? 'translateY(-7px)' : '',
        transition: 'box-shadow .35s, transform .35s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image ── */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
        <img
          src={hovered && product.img2 ? product.img2 : product.img}
          alt={product.name}
          className="pcimg w-full h-full object-cover"
          loading="lazy"
        />
        <div className="poverlay absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className={`text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full font-semibold ${BADGE_CLS[product.bc] || ''}`}>
              {product.badge}
            </span>
          )}
          <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full font-semibold bg-red-100 text-red-700">
            -{disc}%
          </span>
        </div>

        {/* Wishlist heart */}
        <button
          onClick={() => setWishlisted((w) => !w)}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
          aria-label="Wishlist"
        >
          <svg
            className="w-4 h-4 transition-colors duration-300"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            fill={wishlisted ? '#ef4444' : 'none'}
            style={{ color: wishlisted ? '#ef4444' : '#4e4639' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>

        {/* Hover quick-order button (desktop) */}
        <div className="padd absolute inset-x-0 bottom-0 p-3">
          <button
            onClick={() => onOrderProduct(product)}
            className="w-full py-3 text-xs uppercase tracking-widest rounded-xl font-semibold transition-all duration-300 bg-white text-ink hover:gg hover:text-white flex items-center justify-center gap-1.5"
            style={{ background: 'white' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg,#775a19,#c5a059)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#1a1c1b'; }}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>
            Order & Customize
          </button>
        </div>
      </div>

      {/* ── Info ── */}
      <div className="p-4 md:p-5">
        <p className="text-[10px] uppercase tracking-wider text-ink-soft mb-1">{product.cat}</p>
        <h3 className="font-display text-base md:text-lg mb-2 group-hover:text-gold transition-colors duration-300 leading-tight">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <Stars rating={product.rating} />
          <span className="text-xs text-ink-soft">({product.rev})</span>
        </div>

        {/* Color swatches */}
        <div className="flex gap-1.5 mb-4">
          {product.colors.map((c, i) => (
            <button
              key={i}
              onClick={() => setSelColor(i)}
              className={`swatch ${selColor === i ? 'on' : ''}`}
              style={{ background: c }}
              aria-label={`Color ${i + 1}`}
            />
          ))}
        </div>

        {/* Price + delivery */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="font-display text-lg text-gold">PKR {product.price.toLocaleString()}</span>
            <span className="text-xs text-ink-soft line-through ml-1.5">{product.orig.toLocaleString()}</span>
          </div>
          <span className="text-[10px] text-ink-soft uppercase tracking-wider">⏱ {product.del}</span>
        </div>

        {/* Fabric tag */}
        <p className="text-[10px] text-ink-soft uppercase tracking-wider mb-4">
          <span className="inline-block bg-parchment-2 px-2 py-1 rounded-md">{product.fabric}</span>
        </p>

        {/* Mobile CTA — always visible */}
        <button
          onClick={() => onOrderProduct(product)}
          className="w-full border border-stone-light/30 text-ink py-3 text-xs uppercase tracking-widest rounded-xl transition-all duration-300 lg:hidden font-semibold flex items-center justify-center gap-1.5 hover:border-gold hover:text-gold"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
          </svg>
          Order & Customize
        </button>
      </div>
    </div>
  );
}

// ─── Products Section ───────────────────────────────────────────────────────
export default function Products({ onAddToCart }) {
  const [activeCat, setActiveCat] = useState('All');
  const [sort,      setSort]      = useState('f');
  const [view,      setView]      = useState('g');

  const filtered = PRODUCTS
    .filter((p) => activeCat === 'All' || p.cats.includes(activeCat))
    .sort((a, b) => {
      if (sort === 'pa') return a.price - b.price;
      if (sort === 'pd') return b.price - a.price;
      if (sort === 'r')  return b.rating - a.rating;
      return 0;
    });

  return (
    <section id="products" className="py-sec px-site bg-parchment">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div className="rv text-center mb-10 md:mb-14">
          <span className="block text-xs uppercase tracking-[.25em] text-gold mb-4">Our Products</span>
          <h2 className="font-display text-3xl md:text-5xl mb-4">
            Full <em className="text-gold">Collection</em>
          </h2>
          <p className="text-sm text-ink-soft max-w-xl mx-auto leading-relaxed">
            Each piece crafted with precision. Select a design, enter your measurements, and we deliver a perfect fit to your door.
          </p>
        </div>

        {/* How ordering works — mini callout */}
        <div className="rv flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-gold/6 border border-gold/20 rounded-2xl px-5 py-4 mb-10">
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">How Ordering Works</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {['Choose a design','Enter your measurements','We stitch & deliver'].map((step, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs text-ink-soft">
                <span className="w-4 h-4 rounded-full bg-gold text-white text-[9px] flex items-center justify-center font-bold flex-shrink-0">{i + 1}</span>
                {step}
              </span>
            ))}
          </div>
        </div>

        {/* Filters + Sort row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          {/* Category tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scroll">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`ftab ${activeCat === c ? 'on' : ''}`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Sort + View toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-white border border-stone-light/25 rounded-lg px-3 py-2 text-xs uppercase tracking-wider text-ink focus:outline-none focus:border-gold cursor-pointer"
            >
              <option value="f">Featured</option>
              <option value="pa">Price: Low → High</option>
              <option value="pd">Price: High → Low</option>
              <option value="r">Top Rated</option>
            </select>

            <div className="flex border border-stone-light/25 rounded-lg overflow-hidden">
              {['g', 'l'].map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-3 py-2 transition-colors ${view === v ? 'bg-gold text-white' : 'bg-white text-ink-soft hover:bg-parchment-3'}`}
                >
                  {v === 'g' ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-xs text-ink-soft uppercase tracking-wider mb-8">
          Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
          {activeCat !== 'All' ? ` in "${activeCat}"` : ''}
        </p>

        {/* Products grid */}
        <div className={`grid gap-4 md:gap-6 ${view === 'g' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2'}`}>
          {filtered.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onOrderProduct={onAddToCart}   /* onAddToCart in App = handleOrderProduct → opens Measurements */
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-ink-soft mb-4">No products found</p>
            <button onClick={() => setActiveCat('All')} className="text-gold text-xs uppercase tracking-widest underline">
              View All
            </button>
          </div>
        )}

        {/* Load more */}
        <div className="text-center mt-12 rv">
          <button className="inline-flex items-center gap-2.5 border border-stone-light/30 text-ink px-8 py-4 text-xs uppercase tracking-widest rounded-xl hover:border-gold hover:text-gold transition-all duration-300 group">
            Load More Products
            <svg className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
