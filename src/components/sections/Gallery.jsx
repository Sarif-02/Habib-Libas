import { GALLERY_IMAGES } from '../../data/index.js';

export default function Gallery({ onOpen }) {
  return (
    <section className="py-sec px-site bg-parchment-2">
      <div className="max-w-screen-xl mx-auto">
        <div className="rv flex justify-between items-end mb-10 md:mb-14">
          <div>
            <span className="block text-xs uppercase tracking-[.25em] text-gold mb-3">Gallery</span>
            <h2 className="font-display text-3xl md:text-4xl">Behind the <em>Seams</em></h2>
          </div>
          <a href="#" className="flex items-center gap-1.5 text-xs text-gold uppercase tracking-widest hover:gap-3 transition-all group">
            Instagram
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Masonry columns */}
        <div className="columns-2 md:columns-3 gap-3 md:gap-5">
          {GALLERY_IMAGES.map((src, i) => (
            <div
              key={i}
              className={`gitem mb-3 md:mb-5 rvs d${(i % 4) + 1}`}
              onClick={() => onOpen(src)}
            >
              <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
              <div className="gover">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
