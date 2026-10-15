import React from 'react';
import { PizzaItem } from '../types';
import { X, Plus, Sparkles, Check, Flame } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data/pizzas';

interface PizzaDetailModalProps {
  pizza: PizzaItem | null;
  onClose: () => void;
  onAddToCart: (pizza: PizzaItem, quantity?: number) => void;
}

export const PizzaDetailModal: React.FC<PizzaDetailModalProps> = ({
  pizza,
  onClose,
  onAddToCart,
}) => {
  if (!pizza) return null;

  const isPack = pizza.category === 'pack';
  const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    `¡Hola La Chica de las Pizzas! Quisiera pedir ${pizza.name} (${pizza.priceLabel}). ¿Dónde te encuentras hoy?`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-[#e3beb9]/40 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative w-full h-56 sm:h-64 bg-[#f4ecea] shrink-0">
          <img
            src={pizza.image}
            alt={pizza.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#1e1b1a] flex items-center justify-center transition-colors shadow-md"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge */}
          <span className="absolute top-4 left-4 bg-[#ae1d14] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {pizza.badge}
          </span>

          {/* Title on Image */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <h3 className="font-headline text-2xl sm:text-3xl font-black leading-tight drop-shadow-sm">
              {pizza.name}
            </h3>
            <span className="font-headline text-xl text-[#ffdcc3] font-extrabold">
              {pizza.priceLabel}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-[#5b403c]">
          <p className="text-base text-[#1e1b1a] leading-relaxed">
            {pizza.description}
          </p>

          {/* Artisan Dough Highlight */}
          <div className="p-4 bg-[#faf2f0] rounded-2xl border border-[#e3beb9]/40 space-y-1.5">
            <div className="flex items-center gap-2 text-[#ae1d14] font-bold text-xs">
              <Flame className="w-4 h-4" />
              <span>Secretos de la Masa Arequipeña</span>
            </div>
            <p className="text-xs text-[#5b403c] leading-relaxed">
              Masa de harina de alta fuerza con 24 horas de reposo en frío. Estirada a mano una por una, pre-cocida a fuego vivo para lograr una corteza crocante que no se ablanda y resiste caliente en la canasta térmica.
            </p>
          </div>

          {/* Ingredients list */}
          <div>
            <h4 className="font-bold text-xs text-[#914c00] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Ingredientes Seleccionados:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {pizza.ingredients.map((ing, i) => (
                <div key={i} className="flex items-center gap-2 p-2 bg-[#f4ecea] rounded-xl text-xs text-[#1e1b1a]">
                  <Check className="w-3.5 h-3.5 text-[#ae1d14] shrink-0" />
                  <span>{ing}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-[#faf2f0] border-t border-[#e3beb9]/40 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[11px] text-[#5b403c]">Precio Solidario</span>
            <span className="font-headline text-2xl font-black text-[#ae1d14]">
              {pizza.priceLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onAddToCart(pizza, 1);
                onClose();
              }}
              className="inline-flex items-center gap-1.5 bg-[#ae1d14] hover:bg-[#d1382a] text-white px-5 py-3 rounded-full font-bold text-xs shadow-sm transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Añadir al Pedido</span>
            </button>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#914c00] hover:bg-[#ff9b43] text-white hover:text-[#2f1500] px-5 py-3 rounded-full font-bold text-xs shadow-sm transition-all"
            >
              <span>Pedir x WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
