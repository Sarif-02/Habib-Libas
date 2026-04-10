export default function CartDrawer({ isOpen, onClose, items, total, onUpdateQty }) {
  return (
    <div className={`fixed inset-0 z-[300] transition-all duration-300 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-400 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`absolute right-0 top-0 bottom-0 w-full sm:w-[440px] bg-white flex flex-col transition-transform duration-[420ms] cubic-bezier(.4,0,.2,1) ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ boxShadow: '-20px 0 60px rgba(26,28,27,.12)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-light/20">
          <div>
            <h3 className="font-display text-xl">Your Cart</h3>
            <p className="text-xs text-ink-soft mt-0.5">{items.length} item{items.length !== 1 ? 's' : ''}</p>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-full border border-stone-light/30 flex items-center justify-center hover:border-gold transition-colors text-ink-soft hover:text-ink">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <div className="w-16 h-16 rounded-full bg-parchment-3 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-ink-soft" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                </svg>
              </div>
              <p className="font-display text-lg mb-2">Cart is empty</p>
              <p className="text-sm text-ink-soft mb-6">Explore our collections to find your perfect garment.</p>
              <button onClick={onClose} className="gg text-white px-6 py-3 text-xs uppercase tracking-widest rounded-lg font-semibold">
                Shop Now
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 bg-parchment-2 rounded-xl">
                <img src={item.img} alt={item.name} className="w-20 h-24 object-cover rounded-xl flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-display text-sm mb-0.5 truncate">{item.name}</h4>
                  <p className="text-[10px] uppercase tracking-wider text-ink-soft mb-3">{item.cat}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 border border-stone-light/30 rounded-lg overflow-hidden">
                      <button onClick={() => onUpdateQty(item.id, -1)} className="w-7 h-7 flex items-center justify-center hover:bg-parchment-3 text-ink-soft hover:text-ink text-sm transition-colors">−</button>
                      <span className="text-sm w-5 text-center">{item.qty}</span>
                      <button onClick={() => onUpdateQty(item.id,  1)} className="w-7 h-7 flex items-center justify-center hover:bg-parchment-3 text-ink-soft hover:text-ink text-sm transition-colors">+</button>
                    </div>
                    <span className="font-display text-sm text-gold">PKR {(item.price * item.qty).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-stone-light/20 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase tracking-wider text-ink-soft">Subtotal</span>
              <span className="font-display text-xl text-gold">PKR {total.toLocaleString()}</span>
            </div>
            <p className="text-xs text-ink-soft">Delivery & customization fees calculated at checkout.</p>
            <button className="w-full gg text-white py-4 text-xs uppercase tracking-widest rounded-xl hover:opacity-90 transition-opacity font-semibold">
              Proceed to Checkout
            </button>
            <button onClick={onClose} className="w-full border border-stone-light/30 text-ink py-3 text-xs uppercase tracking-widest rounded-xl hover:bg-parchment-3 transition-colors">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
