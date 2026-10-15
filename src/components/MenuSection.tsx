import React, { useState } from 'react';
import { PIZZA_ITEMS, WHATSAPP_PHONE } from '../data/pizzas';
import { PizzaItem } from '../types';
import { Plus, Flame, Sparkles, Send, Box, Info } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MenuSectionProps {
  onAddToCart: (item: PizzaItem, quantity?: number) => void;
  onOpenBoxBuilder: () => void;
  onViewPizzaDetails: (item: PizzaItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  onOpenBoxBuilder,
  onViewPizzaDetails,
}) => {
  const [calculatorCount, setCalculatorCount] = useState<number>(6);
  const unitPrice = 1.00;

  const handleDecrease = () => {
    if (calculatorCount > 1) {
      setCalculatorCount(prev => prev - 1);
    }
  };

  const handleIncrease = () => {
    if (calculatorCount < 100) {
      setCalculatorCount(prev => prev + 1);
    }
  };

  const handleAddWithFeedback = (item: PizzaItem, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(item, 1);
    
    // Light celebratory micro-confetti from button position
    try {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: 15,
        spread: 40,
        origin: { x, y },
        colors: ['#ae1d14', '#ff9b43', '#ffdcc3'],
        disableForReducedMotion: true,
      });
    } catch {
      // ignore
    }
  };

  const totalCalculated = (calculatorCount * unitPrice).toFixed(2);
  const waCalculatorUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    `Hola La Chica de las Pizzas, quisiera pedir ${calculatorCount} minipizzas calientitas por S/ ${totalCalculated}. ¿En qué punto te encuentras hoy?`
  )}`;

  return (
    <section 
      id="menu"
      className="py-16 sm:py-24 lg:py-28 bg-[#faf2f0] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Dough Callout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs sm:text-sm text-[#914c00] font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-[#ae1d14]" />
              Calientitas y Recién Horneadas
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-[2.6rem] text-[#1e1b1a] font-black tracking-tight leading-tight">
              Nuestras Minipizzas (A solo S/ 1.00)
            </h2>
            <p className="text-base text-[#5b403c]">
              Pídete una para el antojo del camino o una cajita completa para compartir con los tuyos.
            </p>
          </div>

          {/* Dough Craft Callout Tag */}
          <div className="inline-flex items-center gap-3 bg-white px-5 py-3.5 rounded-2xl shadow-xs border border-[#e3beb9]/40 text-[#1e1b1a]">
            <span className="text-2xl">🥖</span>
            <p className="text-xs sm:text-sm text-[#5b403c] leading-snug">
              <strong className="text-[#1e1b1a]">Masa artesanal con fermentación lenta:</strong>{' '}
              crocante por fuera y suavecita por dentro.
            </p>
          </div>
        </div>

        {/* Menu Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PIZZA_ITEMS.map((pizza) => {
            const isPack = pizza.category === 'pack';
            return (
              <div
                key={pizza.id}
                className={`group rounded-[2rem] p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#e3beb9]/40 ${
                  isPack 
                    ? 'bg-gradient-to-b from-[#eee7e4] to-white ring-2 ring-[#ff9b43]/30' 
                    : 'bg-white'
                }`}
              >
                <div className="space-y-4">
                  {/* Image Container with Badges */}
                  <div 
                    onClick={() => onViewPizzaDetails(pizza)}
                    className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#f4ecea] cursor-pointer group-hover:shadow-md transition-shadow"
                  >
                    <img
                      src={pizza.image}
                      alt={pizza.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Tag Badge */}
                    <span
                      className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full shadow-sm ${pizza.badgeColor || 'bg-[#ae1d14] text-white'}`}
                    >
                      {pizza.badge}
                    </span>

                    {/* View Details hint */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onViewPizzaDetails(pizza);
                      }}
                      className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-[#1e1b1a] p-2 rounded-full shadow-sm text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-bold"
                    >
                      <Info className="w-3.5 h-3.5 text-[#ae1d14]" />
                      <span>Ingredientes</span>
                    </button>
                  </div>

                  {/* Title and Price */}
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 
                        onClick={() => onViewPizzaDetails(pizza)}
                        className="font-headline text-lg sm:text-xl text-[#1e1b1a] font-bold cursor-pointer hover:text-[#ae1d14] transition-colors leading-tight"
                      >
                        {pizza.name}
                      </h3>
                      <span className="font-headline text-xl sm:text-2xl text-[#ae1d14] font-black shrink-0">
                        {pizza.priceLabel}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#5b403c] mt-2 line-clamp-3 leading-relaxed">
                      {pizza.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 mt-4 border-t border-[#e3beb9]/30 flex items-center justify-between">
                  <span className="text-xs text-[#914c00] font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ae1d14]" />
                    {pizza.hotNote}
                  </span>

                  {isPack ? (
                    <button
                      onClick={onOpenBoxBuilder}
                      className="inline-flex items-center gap-1.5 bg-[#914c00] hover:bg-[#ff9b43] text-white hover:text-[#2f1500] px-4 py-2 rounded-full font-bold text-xs shadow-sm transition-all transform active:scale-95"
                    >
                      <Box className="w-3.5 h-3.5" />
                      <span>Armar Caja</span>
                    </button>
                  ) : (
                    <button
                      onClick={(e) => handleAddWithFeedback(pizza, e)}
                      title={`Añadir ${pizza.name}`}
                      className="w-10 h-10 rounded-full bg-[#ae1d14] hover:bg-[#d1382a] text-white flex items-center justify-center transition-all shadow-sm active:scale-90"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Interactive Calculator Widget */}
        <div className="mt-14 sm:mt-16 bg-white p-6 sm:p-8 rounded-[2.5rem] shadow-sm max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border border-[#e3beb9]/50">
          
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold text-[#ae1d14] uppercase tracking-wider flex items-center justify-center md:justify-start gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Calculadora Rápida de Antojos
            </span>
            <h4 className="font-headline text-xl sm:text-2xl text-[#1e1b1a] font-bold">
              ¿Cuántas minipizzas deseas hoy?
            </h4>
            <p className="text-xs sm:text-sm text-[#5b403c]">
              Multiplica las sonrisas: a solo S/ 1.00 cada una.
            </p>
          </div>

          {/* Stepper with Controls */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-3 bg-[#f4ecea] px-3 py-1.5 rounded-full border border-[#e3beb9]/40">
              <button
                type="button"
                onClick={handleDecrease}
                className="w-9 h-9 rounded-full bg-white text-[#1e1b1a] hover:bg-[#faf2f0] flex items-center justify-center font-bold text-lg transition-colors shadow-xs active:scale-90"
                aria-label="Menos minipizzas"
              >
                -
              </button>
              
              <div className="text-center min-w-[70px]">
                <span className="font-headline text-2xl font-black text-[#ae1d14]">
                  {calculatorCount}
                </span>
                <span className="block text-[10px] text-[#5b403c] uppercase font-bold tracking-wider">
                  unidades
                </span>
              </div>

              <button
                type="button"
                onClick={handleIncrease}
                className="w-9 h-9 rounded-full bg-white text-[#1e1b1a] hover:bg-[#faf2f0] flex items-center justify-center font-bold text-lg transition-colors shadow-xs active:scale-90"
                aria-label="Más minipizzas"
              >
                +
              </button>
            </div>

            {/* Quick Presets */}
            <div className="flex items-center gap-1.5">
              {[3, 6, 12, 24].map((n) => (
                <button
                  key={n}
                  onClick={() => setCalculatorCount(n)}
                  className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition-colors ${
                    calculatorCount === n
                      ? 'bg-[#ae1d14] text-white'
                      : 'bg-[#faf2f0] text-[#5b403c] hover:bg-[#f4ecea]'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          {/* Total & Action Button */}
          <div className="flex flex-col items-center md:items-end gap-2 shrink-0">
            <div className="text-center md:text-right">
              <span className="text-xs text-[#5b403c] block font-medium">Total Estimado</span>
              <span className="font-headline text-2xl sm:text-3xl text-[#914c00] font-black">
                S/ {totalCalculated}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2">
              <a
                href={waCalculatorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#ae1d14] hover:bg-[#d1382a] text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm shadow-sm transition-all whitespace-nowrap active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Pedir este monto</span>
              </a>

              <button
                onClick={onOpenBoxBuilder}
                className="inline-flex items-center gap-1.5 bg-[#f4ecea] hover:bg-[#e8e1df] text-[#5b403c] px-4 py-3 rounded-full font-bold text-xs shadow-xs transition-colors whitespace-nowrap"
              >
                <Box className="w-3.5 h-3.5 text-[#914c00]" />
                <span>Personalizar Caja</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
