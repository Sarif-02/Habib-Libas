// ─── CtaBanner ─────────────────────────────────────────────────────────────
export function CtaBanner() {
  return (
    <section className="relative py-20 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=1600&q=85&fit=crop" alt="Atelier" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/30" />
      </div>
      <div className="relative z-10 max-w-screen-xl mx-auto px-site">
        <div className="rvl max-w-xl">
          <span className="block text-[10px] uppercase tracking-[.3em] text-gold-pale mb-5">Limited Slots This Month</span>
          <h2 className="font-display text-4xl md:text-6xl text-white leading-tight mb-6">
            Ready to Wear <em className="text-gold-pale">Perfection?</em>
          </h2>
          <p className="text-sm md:text-base text-white/70 leading-relaxed mb-10">
            Book your consultation today. Our master tailors guide you through every choice — fabric, fit, and finishing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bsh gg text-white px-8 py-4 text-xs font-semibold tracking-widest uppercase rounded-xl shadow-2xl hover:opacity-90 active:scale-95 transition-all flex items-center justify-center relative overflow-hidden">
              Book Consultation
            </a>
            <a href="https://wa.me/923001234567" className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/25 text-white px-8 py-4 text-xs font-semibold tracking-widest uppercase rounded-xl hover:bg-white/20 transition-all">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a6.7 6.7 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ───────────────────────────────────────────────────────────────
import { PRICING_PLANS } from '../../data/index.js';

export function Pricing() {
  return (
    <section id="pricing" className="py-sec px-site bg-parchment-2">
      <div className="max-w-screen-xl mx-auto">
        <div className="rv text-center mb-14">
          <span className="block text-xs uppercase tracking-[.25em] text-gold mb-4">Pricing</span>
          <h2 className="font-display text-3xl md:text-5xl mb-4">Transparent <em>Plans</em></h2>
          <p className="text-sm text-ink-soft max-w-sm mx-auto">No hidden fees. Choose what fits your needs and budget.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-center">
          {PRICING_PLANS.map((plan, i) => (
            <div key={i} className={`rvs d${i+1} pplan ${plan.hot ? 'hot' : 'bg-white'} ${plan.hot ? 'md:-my-4' : ''} relative`}>
              {plan.hot && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-gold px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold shadow-lg whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <p className={`text-[10px] uppercase tracking-widest mb-2 ${plan.hot ? 'text-white/60' : 'text-ink-soft'}`}>{plan.tagline}</p>
              <h3 className={`font-display text-2xl mb-1 ${plan.hot ? 'text-white' : ''}`}>{plan.name}</h3>
              <div className="my-5">
                <span className={`font-display text-4xl font-bold ${plan.hot ? 'text-white' : 'text-gold'}`}>PKR {plan.price}</span>
                <span className={`text-xs ml-1 ${plan.hot ? 'text-white/60' : 'text-ink-soft'}`}>/ piece</span>
              </div>
              <div className={`h-px mb-6 ${plan.hot ? 'bg-white/20' : 'bg-stone-light/20'}`} />
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-3 text-sm ${plan.hot ? 'text-white/90' : 'text-ink-soft'}`}>
                    <svg className={`w-4 h-4 flex-shrink-0 ${plan.hot ? 'text-white' : 'text-gold'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`block w-full text-center py-4 text-xs uppercase tracking-widest rounded-xl transition-all duration-300 font-semibold ${plan.hot ? 'bg-white text-gold hover:bg-white/90' : 'border border-stone-light/30 text-ink hover:bg-gold hover:border-gold hover:text-white'}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ───────────────────────────────────────────────────────────────
import { useState } from 'react';

export function Contact() {
  const [loading,   setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1400);
  };

  const INFO = [
    { icon:'📍', label:'Visit Us',        val:'42 Liberty Market, Gulberg III\nLahore, Punjab 54000' },
    { icon:'🕐', label:'Hours',           val:'Mon–Sat: 10:00 AM – 9:00 PM\nSun: 12:00 PM – 6:00 PM' },
    { icon:'📞', label:'Call / WhatsApp', val:'+92 300 123 4567' },
    { icon:'📧', label:'Email',           val:'hello@habib-libas.pk' },
  ];

  return (
    <section id="contact" className="py-sec px-site bg-parchment">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* Info */}
          <div className="rvl">
            <span className="block text-xs uppercase tracking-[.25em] text-gold mb-5">Get In Touch</span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">Begin Your <em>Journey</em></h2>
            <p className="text-sm text-ink-soft leading-relaxed mb-10">
              Visit our atelier in Lahore, or start your order online. Our team responds within 2 hours during business hours.
            </p>
            <div className="space-y-6">
              {INFO.map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 text-lg">{c.icon}</div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-ink-soft mb-1">{c.label}</p>
                    <p className="text-sm whitespace-pre-line">{c.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rvr">
            <div className="bg-white rounded-2xl p-7 md:p-10" style={{ boxShadow: '0 24px 64px -12px rgba(26,28,27,.08)' }}>
              <h3 className="font-display text-2xl mb-7">Send an Enquiry</h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h4 className="font-display text-xl mb-2">Message Sent!</h4>
                  <p className="text-sm text-ink-soft">We'll reply within 2 hours during business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-ink-soft mb-2">Full Name</label>
                      <input type="text" required placeholder="Your name" className="finput" />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-ink-soft mb-2">Phone</label>
                      <input type="tel" placeholder="+92 300 ..." className="finput" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-ink-soft mb-2">Email</label>
                    <input type="email" placeholder="your@email.com" className="finput" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-ink-soft mb-2">Garment Type</label>
                    <select required className="finput">
                      <option value="">Select type...</option>
                      {['Sherwani','Suit / Blazer','Kurta Shalwar','Bridal Dress','Waistcoat','Formal Shirt','Other'].map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-ink-soft mb-2">Message</label>
                    <textarea rows={3} placeholder="Tell us about your requirements..." className="finput resize-none" />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full gg text-white py-4 text-xs uppercase tracking-widest rounded-xl hover:opacity-90 active:scale-95 transition-all font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : 'Send Enquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
