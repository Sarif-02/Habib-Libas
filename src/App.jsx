import { useState, useEffect } from 'react';
import { useCart } from './hooks/useCart';
import { useScrollReveal } from './hooks/useScrollReveal';

import Cursor          from './components/ui/Cursor';
import ScrollProgress  from './components/ui/ScrollProgress';
import Lightbox        from './components/ui/Lightbox';
import Navbar          from './components/layout/Navbar';
import MobileMenu      from './components/layout/MobileMenu';
import CartDrawer      from './components/layout/CartDrawer';
import Footer          from './components/layout/Footer';
import MobileBottomCTA from './components/layout/MobileBottomCTA';

import Hero            from './components/sections/Hero';
import Marquee         from './components/sections/Marquee';
import Services        from './components/sections/Services';
import Stats           from './components/sections/Stats';
import Story           from './components/sections/Story';
import Collections     from './components/sections/Collections';
import Products        from './components/sections/Products';
import Measurements    from './components/sections/Measurements';
import Process         from './components/sections/Process';
import FabricSelector  from './components/sections/FabricSelector';
import Gallery         from './components/sections/Gallery';
import Testimonials    from './components/sections/Testimonials';
import CtaBanner       from './components/sections/CtaBanner';
import Pricing         from './components/sections/Pricing';
import Contact         from './components/sections/Contact';

export default function App() {
  const [menuOpen,        setMenuOpen]        = useState(false);
  const [cartOpen,        setCartOpen]        = useState(false);
  const [lightboxSrc,     setLightboxSrc]     = useState(null);
  const [measureOpen,     setMeasureOpen]     = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const cart = useCart();
  useScrollReveal();

  useEffect(() => {
    document.body.style.overflow =
      menuOpen || cartOpen || measureOpen ? 'hidden' : '';
  }, [menuOpen, cartOpen, measureOpen]);

  // Clicking "Add to Cart" on a product opens measurements first
  const handleOrderProduct = (product) => {
    setSelectedProduct(product);
    setMeasureOpen(true);
  };

  // Measurements "Proceed to Cart" -> add to cart and open cart drawer
  const handleMeasurementsDone = (data) => {
    if (selectedProduct) {
      cart.add({ ...selectedProduct, measurements: data.measurements });
      setCartOpen(true);
    }
    setMeasureOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="relative overflow-x-hidden">
      <Cursor />
      <ScrollProgress />
      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />

      <Measurements
        isOpen={measureOpen}
        onClose={() => { setMeasureOpen(false); setSelectedProduct(null); }}
        onProceed={handleMeasurementsDone}
        product={selectedProduct}
      />

      <Navbar
        cartCount={cart.count}
        onMenuOpen={() => setMenuOpen(true)}
        onCartOpen={() => setCartOpen(true)}
      />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart.items}
        total={cart.total}
        onUpdateQty={cart.updateQty}
      />

      <main>
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <Story />
        <Collections />
        <Products onAddToCart={handleOrderProduct} />
        <Process />
        <FabricSelector />
        <Gallery onOpen={setLightboxSrc} />
        <Testimonials />
        <CtaBanner />
        <Pricing />
        <Contact />
      </main>

      <Footer />
      <MobileBottomCTA />
    </div>
  );
}
