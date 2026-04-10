import { useState } from 'react';

const STEPS = [
  { id: 1, icon: 'edit_square',    label: 'SELECT STYLE',   key: 'style' },
  { id: 2, icon: 'tune',           label: 'CUSTOMIZE',      key: 'customize' },
  { id: 3, icon: 'straighten',     label: 'MEASUREMENTS',   key: 'measurements', active: true },
  { id: 4, icon: 'fact_check',     label: 'REVIEW',         key: 'review' },
];

const MEASUREMENT_FIELDS = [
  { id: 'chest',    label: 'Chest (in inches)',    placeholder: '42.0', col: 1 },
  { id: 'waist',    label: 'Waist (in inches)',    placeholder: '34.0', col: 2 },
  { id: 'hips',     label: 'Hips (in inches)',     placeholder: '38.5', col: 1 },
  { id: 'shoulder', label: 'Shoulder Width',       placeholder: '18.5', col: 2 },
  { id: 'sleeve',   label: 'Sleeve Length',        placeholder: '25.0', col: 1 },
  { id: 'neck',     label: 'Neck',                 placeholder: '15.5', col: 2 },
];

const TIPS = {
  chest:    'Measure around the fullest part of your chest, keeping the tape horizontal.',
  waist:    'Measure around your natural waistline, above the belly button.',
  hips:     'Measure around the fullest part of your hips, about 8 inches below the waist.',
  shoulder: 'Measure from shoulder seam to shoulder seam across your back.',
  sleeve:   'Measure from the shoulder seam to the wrist with arm slightly bent.',
  neck:     'Measure around the base of your neck, leaving two fingers of space.',
};

function TooltipIcon({ field }) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        className="w-5 h-5 rounded-full border border-stone-light/50 flex items-center justify-center text-ink-soft hover:border-gold hover:text-gold transition-all text-[10px] font-bold flex-shrink-0"
      >
        ?
      </button>
      {show && (
        <div className="absolute right-0 bottom-7 w-52 bg-charcoal text-white text-xs rounded-xl p-3 leading-relaxed z-20 shadow-2xl"
          style={{ animation: 'fadeInUp .2s ease' }}>
          {TIPS[field]}
          <div className="absolute bottom-[-5px] right-2 w-2.5 h-2.5 bg-charcoal rotate-45" />
        </div>
      )}
    </div>
  );
}

function BodyDiagram() {
  return (
    <div className="relative aspect-[3/4] w-full max-w-xs mx-auto bg-parchment-2 overflow-hidden rounded-xl group">
      {/* SVG mannequin outline */}
      <svg viewBox="0 0 300 400" className="w-full h-full opacity-60 mix-blend-multiply" fill="none">
        {/* Head */}
        <ellipse cx="150" cy="38" rx="22" ry="26" stroke="#7f7667" strokeWidth="1.2" fill="#e8e8e6" />
        {/* Neck */}
        <rect x="141" y="62" width="18" height="18" rx="2" fill="#e8e8e6" stroke="#7f7667" strokeWidth="1" />
        {/* Torso */}
        <path d="M100 80 Q78 90 72 130 L68 200 Q68 220 90 222 L210 222 Q232 220 232 200 L228 130 Q222 90 200 80 Q180 74 150 72 Q120 74 100 80Z" fill="#eeeeec" stroke="#7f7667" strokeWidth="1.2" />
        {/* Left arm */}
        <path d="M100 80 Q70 90 60 120 Q55 145 58 175 Q60 185 68 185 Q76 185 80 175 L82 130 Q90 100 105 90Z" fill="#eeeeec" stroke="#7f7667" strokeWidth="1" />
        {/* Right arm */}
        <path d="M200 80 Q230 90 240 120 Q245 145 242 175 Q240 185 232 185 Q224 185 220 175 L218 130 Q210 100 195 90Z" fill="#eeeeec" stroke="#7f7667" strokeWidth="1" />
        {/* Skirt / bottom */}
        <path d="M90 222 Q72 240 70 280 Q68 320 80 360 L220 360 Q232 320 230 280 Q228 240 210 222Z" fill="#e8e8e6" stroke="#7f7667" strokeWidth="1.2" />

        {/* Measurement dashed lines */}
        {/* Shoulder */}
        <line x1="100" y1="82" x2="200" y2="82" stroke="#775a19" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.7" />
        {/* Chest */}
        <line x1="78" y1="118" x2="222" y2="118" stroke="#775a19" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.7" />
        {/* Waist */}
        <line x1="72" y1="162" x2="228" y2="162" stroke="#775a19" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.7" />
        {/* Hips */}
        <line x1="74" y1="210" x2="226" y2="210" stroke="#775a19" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.7" />

        {/* Small dot markers */}
        {[[78,118],[222,118],[72,162],[228,162],[74,210],[226,210],[100,82],[200,82]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="2.5" fill="#775a19" opacity="0.6" />
        ))}

        {/* Labels */}
        <text x="240" y="121" fontSize="7" fill="#775a19" opacity="0.8" fontFamily="DM Sans, sans-serif">CHEST</text>
        <text x="240" y="165" fontSize="7" fill="#775a19" opacity="0.8" fontFamily="DM Sans, sans-serif">WAIST</text>
        <text x="240" y="213" fontSize="7" fill="#775a19" opacity="0.8" fontFamily="DM Sans, sans-serif">HIPS</text>
        <text x="205" y="78"  fontSize="7" fill="#775a19" opacity="0.8" fontFamily="DM Sans, sans-serif">SHOULDER</text>
      </svg>

      {/* Caption */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3">
        <div className="h-px w-12 bg-stone-light/40" />
        <p className="text-[9px] uppercase tracking-[.2em] text-ink-soft/60">Master Tailor's Reference</p>
        <div className="h-px w-12 bg-stone-light/40" />
      </div>
    </div>
  );
}

export default function Measurements({ isOpen, onClose, onProceed, product }) {
  const [tab, setTab]         = useState('custom'); // 'custom' | 'standard'
  const [saveToProfile, setSave] = useState(false);
  const [values, setValues]   = useState({ chest:'', waist:'', hips:'', shoulder:'', sleeve:'', neck:'' });
  const [size, setSize]       = useState('');
  const [errors, setErrors]   = useState({});

  if (!isOpen) return null;

  const handleChange = (field, val) => {
    setValues((v) => ({ ...v, [field]: val }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: false }));
  };

  const validate = () => {
    if (tab === 'standard') return !size ? (setErrors({ size: true }), false) : true;
    const newErr = {};
    MEASUREMENT_FIELDS.forEach(({ id }) => { if (!values[id]) newErr[id] = true; });
    if (Object.keys(newErr).length) { setErrors(newErr); return false; }
    return true;
  };

  const handleProceed = () => {
    if (!validate()) return;
    onProceed?.({ measurements: tab === 'custom' ? values : { size }, saveToProfile });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[400] flex" style={{ animation: 'fadeIn .3s ease' }}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal container */}
      <div
        className="relative z-10 m-auto w-full bg-parchment flex flex-col overflow-hidden"
        style={{
          maxWidth: 980,
          maxHeight: '96vh',
          borderRadius: '1.25rem',
          boxShadow: '0 40px 100px -20px rgba(26,28,27,.35)',
          animation: 'scaleIn .35s cubic-bezier(.4,0,.2,1)',
        }}
      >
        {/* ── TOP NAV (sticky) ── */}
        <div className="gnav border-b border-stone-light/20 flex items-center justify-between px-6 md:px-10 h-16 flex-shrink-0">
          <span className="font-display text-lg italic text-gold">Habib Libas</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
            <a href="#explore" className="hover:text-ink transition-colors">Explore</a>
            <a href="#story"   className="hover:text-ink transition-colors">Our Story</a>
            <a href="#process" className="hover:text-ink transition-colors">How it Works</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm text-ink-soft hover:text-ink transition-colors hidden sm:block">Account</button>
            <button className="text-sm font-semibold text-gold">Cart (0)</button>
            <button onClick={onClose} className="w-8 h-8 rounded-full border border-stone-light/30 flex items-center justify-center text-ink-soft hover:border-gold hover:text-gold transition-all ml-2">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── BODY (scrollable) ── */}
        <div className="flex flex-1 overflow-hidden min-h-0">

          {/* ── LEFT SIDEBAR ── */}
          <aside className="hidden md:flex flex-col bg-parchment-2 border-r border-stone-light/20 w-56 flex-shrink-0 p-7 gap-5">
            {/* Title */}
            <div className="mb-2">
              <h2 className="font-display text-base text-ink">Customization</h2>
              <p className="text-[10px] uppercase tracking-[.12em] text-ink-soft mt-0.5">Step 3 of 4</p>
            </div>

            {/* Step nav */}
            <nav className="flex flex-col gap-1">
              {STEPS.map((step) => (
                <div
                  key={step.id}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-sm transition-all duration-200 cursor-pointer select-none group ${
                    step.active
                      ? 'bg-parchment border-l-2 border-gold text-gold'
                      : 'text-ink-soft hover:bg-parchment hover:pl-4'
                  }`}
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={step.active ? 1.8 : 1.4}>
                    {step.key === 'style'        && <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />}
                    {step.key === 'customize'    && <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />}
                    {step.key === 'measurements' && <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />}
                    {step.key === 'review'       && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                  </svg>
                  <span className="text-[10px] uppercase tracking-[.12em] font-semibold">{step.label}</span>
                </div>
              ))}
            </nav>

            {/* Save progress */}
            <button className="mt-auto text-[10px] uppercase tracking-widest text-ink-soft border border-stone-light/30 py-2.5 px-4 hover:border-gold hover:text-gold transition-all rounded-sm">
              Save Progress
            </button>
          </aside>

          {/* ── MAIN CONTENT ── */}
          <main className="flex flex-1 flex-col lg:flex-row overflow-y-auto min-w-0">

            {/* ── LEFT PANEL: Diagram ── */}
            <div className="lg:w-[45%] flex-shrink-0 p-6 md:p-10 flex flex-col">
              {/* Product pill */}
              {product && (
                <div className="flex items-center gap-3 mb-6 bg-white rounded-xl px-4 py-3 border border-stone-light/20">
                  <img src={product.img} alt={product.name} className="w-10 h-12 object-cover rounded-lg flex-shrink-0" />
                  <div>
                    <p className="font-display text-sm">{product.name}</p>
                    <p className="text-[10px] text-ink-soft uppercase tracking-wider">{product.fabric}</p>
                  </div>
                  <span className="ml-auto font-display text-sm text-gold">PKR {product.price?.toLocaleString()}</span>
                </div>
              )}

              <h1 className="font-display text-3xl md:text-4xl text-ink leading-tight mb-4">Your Precision<br />Fit</h1>
              <p className="text-sm text-ink-soft leading-relaxed mb-8 max-w-sm">
                Achieving the perfect drape requires meticulous detail. Follow our guide to ensure your bespoke garment fits like a second skin.
              </p>

              <BodyDiagram />
            </div>

            {/* ── RIGHT PANEL: Form ── */}
            <div className="lg:flex-1 p-6 md:p-10 flex flex-col bg-white lg:bg-transparent lg:border-l border-stone-light/20">

              {/* Tabs */}
              <div className="flex gap-6 border-b border-stone-light/20 mb-8">
                {[['custom','Custom Measurements'],['standard','Standard Sizes']].map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setTab(key)}
                    className={`pb-3.5 text-sm font-semibold tracking-wide transition-all duration-200 ${
                      tab === key
                        ? 'text-ink border-b-2 border-gold -mb-px'
                        : 'text-ink-soft hover:text-ink'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* ── CUSTOM TAB ── */}
              {tab === 'custom' && (
                <div className="flex-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 mb-8">
                    {MEASUREMENT_FIELDS.map(({ id, label, placeholder }) => (
                      <div key={id} className="group">
                        <label className="block text-[10px] uppercase tracking-widest text-ink-soft mb-2">{label}</label>
                        <div className="flex items-center gap-2">
                          <div className={`flex-1 relative border-b transition-colors duration-300 ${errors[id] ? 'border-red-400' : 'border-stone-light/40 group-focus-within:border-gold'}`}>
                            <input
                              type="number"
                              step="0.1"
                              placeholder={placeholder}
                              value={values[id]}
                              onChange={(e) => handleChange(id, e.target.value)}
                              className="w-full bg-transparent py-2.5 text-sm text-ink placeholder-stone-light/60 focus:outline-none"
                            />
                          </div>
                          <TooltipIcon field={id} />
                        </div>
                        {errors[id] && <p className="text-[10px] text-red-500 mt-1">Required</p>}
                      </div>
                    ))}
                  </div>

                  {/* Save checkbox */}
                  <label className="flex items-start gap-3 cursor-pointer group mb-8">
                    <div className="relative mt-0.5">
                      <input
                        type="checkbox"
                        checked={saveToProfile}
                        onChange={(e) => setSave(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${saveToProfile ? 'bg-gold border-gold' : 'border-stone-light/50 group-hover:border-gold'}`}>
                        {saveToProfile && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-ink-soft group-hover:text-ink transition-colors leading-relaxed">
                      Save these measurements to my profile for future orders
                    </span>
                  </label>
                </div>
              )}

              {/* ── STANDARD SIZES TAB ── */}
              {tab === 'standard' && (
                <div className="flex-1 mb-8">
                  <p className="text-sm text-ink-soft mb-6 leading-relaxed">
                    Select your standard size below. Our tailors will adjust for a better fit during final finishing.
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {['XS','S','M','L','XL','XXL','3XL','Custom'].map((s) => (
                      <button
                        key={s}
                        onClick={() => { setSize(s); setErrors({}); }}
                        className={`py-3 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                          size === s
                            ? 'gg text-white border-transparent shadow-md'
                            : 'bg-parchment-2 text-ink border-stone-light/30 hover:border-gold hover:text-gold'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  {errors.size && <p className="text-[10px] text-red-500 mt-3">Please select a size</p>}

                  {/* Size guide table */}
                  <div className="mt-8 bg-parchment-2 rounded-xl overflow-hidden border border-stone-light/20">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-stone-light/20">
                          <th className="text-left py-3 px-4 text-[10px] uppercase tracking-wider text-ink-soft font-semibold">Size</th>
                          <th className="text-center py-3 px-2 text-[10px] uppercase tracking-wider text-ink-soft font-semibold">Chest</th>
                          <th className="text-center py-3 px-2 text-[10px] uppercase tracking-wider text-ink-soft font-semibold">Waist</th>
                          <th className="text-center py-3 px-2 text-[10px] uppercase tracking-wider text-ink-soft font-semibold">Hips</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[['XS','34','28','36'],['S','36','30','38'],['M','38','32','40'],['L','40','34','42'],['XL','42','36','44'],['XXL','44','38','46']].map(([s,c,w,h]) => (
                          <tr key={s} className={`border-b border-stone-light/10 transition-colors ${size === s ? 'bg-gold/8' : 'hover:bg-parchment'}`}>
                            <td className={`py-2.5 px-4 font-semibold ${size === s ? 'text-gold' : 'text-ink'}`}>{s}</td>
                            <td className="py-2.5 px-2 text-center text-ink-soft">{c}"</td>
                            <td className="py-2.5 px-2 text-center text-ink-soft">{w}"</td>
                            <td className="py-2.5 px-2 text-center text-ink-soft">{h}"</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer group mt-6">
                    <div className={`w-5 h-5 mt-0.5 rounded border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 ${saveToProfile ? 'bg-gold border-gold' : 'border-stone-light/50 group-hover:border-gold'}`}
                      onClick={() => setSave(!saveToProfile)}>
                      {saveToProfile && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm text-ink-soft group-hover:text-ink transition-colors leading-relaxed">
                      Save these measurements to my profile for future orders
                    </span>
                  </label>
                </div>
              )}

              {/* ── ACTION BUTTONS ── */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-stone-light/20">
                <button
                  onClick={handleProceed}
                  className="bsh flex-1 gg text-white py-4 px-6 text-xs font-semibold tracking-widest uppercase rounded-xl hover:opacity-90 active:scale-95 transition-all relative overflow-hidden"
                >
                  Proceed to Cart
                </button>
                <button
                  onClick={onClose}
                  className="sm:flex-none border border-stone-light/30 text-ink py-4 px-8 text-xs font-semibold tracking-widest uppercase rounded-xl hover:border-gold hover:text-gold transition-all"
                >
                  Cancel
                </button>
              </div>

              {/* ── CONSULTATION TIP ── */}
              <div className="mt-6 flex gap-4 items-start bg-parchment-2 rounded-xl p-5 border border-stone-light/20">
                <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-ink mb-1.5">Unsure About Your Fit?</p>
                  <p className="text-xs text-ink-soft leading-relaxed mb-3">
                    Book a 15-minute digital consultation with our head cutter. We'll guide you through the measurement process via video link.
                  </p>
                  <a href="#contact" onClick={onClose} className="text-[10px] font-bold uppercase tracking-widest text-gold border-b border-gold/30 pb-0.5 hover:border-gold transition-colors">
                    Schedule Call
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(.96); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
