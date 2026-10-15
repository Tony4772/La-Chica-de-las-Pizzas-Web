/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { MenuSection } from './components/MenuSection';
import { RouteMapSection } from './components/RouteMapSection';
import { EventsBanner } from './components/EventsBanner';
import { Footer } from './components/Footer';
import { BoxBuilderModal } from './components/BoxBuilderModal';
import { PizzaDetailModal } from './components/PizzaDetailModal';
import { OrderDrawer } from './components/OrderDrawer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { CartItem, PizzaItem } from './types';
import { Check, Sparkles, Smartphone, Monitor } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Initial friendly preview item
    return [
      {
        id: 'americana',
        name: 'Clásica Americana',
        price: 1.00,
        quantity: 3,
        notes: 'Recién horneada con harto queso',
      },
      {
        id: 'hawaiana',
        name: 'Minipizza Hawaiana',
        price: 1.00,
        quantity: 3,
        notes: 'Piña caramelizada',
      },
    ];
  });

  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [selectedPizza, setSelectedPizza] = useState<PizzaItem | null>(null);
  const [isBoxBuilderOpen, setIsBoxBuilderOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'responsive' | 'mobile-mock'>('responsive');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (pizza: PizzaItem, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === pizza.id);
      if (existing) {
        return prev.map((item) =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: pizza.id,
          name: pizza.name,
          price: pizza.price,
          quantity: quantity,
          notes: pizza.hotNote,
        },
      ];
    });
    showToast(`¡${quantity}x ${pizza.name} añadida a tu orden!`);
  };

  const handleAddBoxToCart = (boxData: {
    size: number;
    flavors: { [flavor: string]: number };
    sauce: string;
    notes: string;
    price: number;
  }) => {
    const summaryFlavors = Object.entries(boxData.flavors)
      .filter(([_, q]) => q > 0)
      .map(([f, q]) => `${q} ${f}`)
      .join(', ');

    const newBoxItem: CartItem = {
      id: `caja-${Date.now()}`,
      name: `Cajita Amigos x${boxData.size}`,
      price: boxData.price,
      quantity: 1,
      notes: `Sabores: ${summaryFlavors} | Salsa: ${boxData.sauce}${
        boxData.notes ? ` | Nota: ${boxData.notes}` : ''
      }`,
      boxFlavors: boxData.flavors,
    };

    setCart((prev) => [...prev, newBoxItem]);
    showToast(`¡Caja de ${boxData.size} minipizzas personalizada lista!`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    showToast('Producto eliminado de la canasta');
  };

  const handleClearCart = () => {
    setCart([]);
    showToast('Canasta vaciada');
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#fff8f6] text-[#1e1b1a] relative flex flex-col font-sans">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#1e1b1a] text-white px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-xs sm:text-sm font-bold animate-in fade-in slide-in-from-top-4 duration-200">
          <Sparkles className="w-4 h-4 text-[#ff9b43]" />
          <span>{toastMessage}</span>
          <Check className="w-4 h-4 text-emerald-400 ml-1" />
        </div>
      )}

      {/* When in Mobile Simulation Mode */}
      {viewMode === 'mobile-mock' ? (
        <div className="min-h-screen bg-[#2f1500]/90 py-6 px-3 flex flex-col items-center justify-center">
          
          {/* Top Bar Switcher */}
          <div className="mb-4 flex items-center justify-between w-full max-w-sm px-2 text-white">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold">Simulador Móvil (PWA)</span>
            </div>
            <button
              onClick={() => setViewMode('responsive')}
              className="text-xs font-bold px-3 py-1 bg-white/20 hover:bg-white/30 rounded-full flex items-center gap-1.5 transition-colors"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Ver Pantalla Completa</span>
            </button>
          </div>

          {/* Smartphone Bezel */}
          <div className="w-full max-w-[420px] h-[860px] max-h-[92vh] bg-white rounded-[3rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border-8 border-[#33302e] overflow-hidden flex flex-col relative">
            
            {/* Phone Camera Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#33302e] rounded-full z-50" />

            {/* Simulated Content Area */}
            <div className="flex-1 overflow-y-auto pt-6 pb-20 relative bg-[#fff8f6]">
              <Navbar
                cartCount={totalCartCount}
                onOpenCart={() => setIsCartOpen(true)}
                activeSection={activeSection}
                onNavigate={scrollToSection}
                viewMode={viewMode}
                onToggleViewMode={() => setViewMode('responsive')}
              />

              <main>
                <HeroSection
                  onNavigateStory={() => scrollToSection('historia')}
                  onNavigateMenu={() => scrollToSection('menu')}
                />

                <StorySection />

                <MenuSection
                  onAddToCart={handleAddToCart}
                  onOpenBoxBuilder={() => setIsBoxBuilderOpen(true)}
                  onViewPizzaDetails={(p) => setSelectedPizza(p)}
                />

                <RouteMapSection />

                <EventsBanner />
              </main>

              <Footer />
            </div>

            {/* Mobile Bottom Bar Inside Phone Frame */}
            <MobileBottomNav
              activeSection={activeSection}
              onNavigate={scrollToSection}
              cartCount={totalCartCount}
              onOpenCart={() => setIsCartOpen(true)}
              onOpenBoxBuilder={() => setIsBoxBuilderOpen(true)}
            />
          </div>
        </div>
      ) : (
        /* Responsive Desktop / Universal View */
        <>
          <Navbar
            cartCount={totalCartCount}
            onOpenCart={() => setIsCartOpen(true)}
            activeSection={activeSection}
            onNavigate={scrollToSection}
            viewMode={viewMode}
            onToggleViewMode={() => setViewMode('mobile-mock')}
          />

          <main className="flex-1 pt-20">
            <HeroSection
              onNavigateStory={() => scrollToSection('historia')}
              onNavigateMenu={() => scrollToSection('menu')}
            />

            <StorySection />

            <MenuSection
              onAddToCart={handleAddToCart}
              onOpenBoxBuilder={() => setIsBoxBuilderOpen(true)}
              onViewPizzaDetails={(p) => setSelectedPizza(p)}
            />

            <RouteMapSection />

            <EventsBanner />
          </main>

          <Footer />

          {/* Mobile Bottom Tab Navigation for Small Screens */}
          <div className="lg:hidden">
            <MobileBottomNav
              activeSection={activeSection}
              onNavigate={scrollToSection}
              cartCount={totalCartCount}
              onOpenCart={() => setIsCartOpen(true)}
              onOpenBoxBuilder={() => setIsBoxBuilderOpen(true)}
            />
          </div>
        </>
      )}

      {/* Modals & Slide-out Drawers */}
      <BoxBuilderModal
        isOpen={isBoxBuilderOpen}
        onClose={() => setIsBoxBuilderOpen(false)}
        onAddBoxToCart={handleAddBoxToCart}
      />

      <PizzaDetailModal
        pizza={selectedPizza}
        onClose={() => setSelectedPizza(null)}
        onAddToCart={handleAddToCart}
      />

      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
