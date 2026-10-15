import React from 'react';
import { WHATSAPP_PHONE } from '../data/pizzas';
import { MessageCircle } from 'lucide-react';

interface MobileBottomNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenBoxBuilder: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenBoxBuilder,
}) => {
  return (
    <>
      {/* Floating Sticky WhatsApp button for quick access (matching Image 5) */}
      <aside aria-label="Contacto directo" className="fixed bottom-20 right-4 z-40">
        <a
          href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola! Quiero pedir minipizzas calientitas.')}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="w-13 h-13 sm:w-14 sm:h-14 bg-[#914c00] hover:bg-[#ff9b43] text-white rounded-full shadow-2xl flex items-center justify-center relative active:scale-90 transition-all border-2 border-white"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#ae1d14] rounded-full ring-2 ring-white" />
        </a>
      </aside>

      {/* Bottom Tab Bar (matching Image 5 navigation) */}
      <nav 
        aria-label="Navegación móvil"
        className="fixed bottom-0 inset-x-0 z-50 bg-[#fff8f6]/95 backdrop-blur-xl border-t border-[#e3beb9]/50 shadow-[0_-2px_12px_rgba(33,30,29,0.06)] pb-[env(safe-area-inset-bottom,0px)]"
      >
        <div className="flex justify-around items-center h-16 max-w-lg mx-auto px-2">
          
          {/* Tab 1: Pizzas (Menú) */}
          <button
            onClick={() => onNavigate('menu')}
            className={`flex flex-col items-center justify-center gap-0.5 w-16 h-12 transition-colors ${
              activeSection === 'menu'
                ? 'text-[#ae1d14] font-bold'
                : 'text-[#5b403c] hover:text-[#ae1d14]'
            }`}
          >
            <span className="text-xl">🍕</span>
            <span className="text-[11px] font-semibold leading-tight">Pizzas</span>
          </button>

          {/* Tab 2: Promos (Packs) */}
          <button
            onClick={onOpenBoxBuilder}
            className={`flex flex-col items-center justify-center gap-0.5 w-16 h-12 transition-colors ${
              activeSection === 'eventos'
                ? 'text-[#ae1d14] font-bold'
                : 'text-[#5b403c] hover:text-[#ae1d14]'
            }`}
          >
            <span className="text-xl">🎁</span>
            <span className="text-[11px] font-semibold leading-tight">Promos</span>
          </button>

          {/* Tab 3: Orden (Cart / Calculator) */}
          <button
            onClick={onOpenCart}
            className="flex flex-col items-center justify-center gap-0.5 w-16 h-12 text-[#5b403c] hover:text-[#ae1d14] relative transition-colors"
          >
            <div className="relative">
              <span className="text-xl">🛍️</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#ae1d14] text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="text-[11px] font-semibold leading-tight">Orden</span>
          </button>

          {/* Tab 4: Foodie (Historia & Testimonios) */}
          <button
            onClick={() => onNavigate('historia')}
            className={`flex flex-col items-center justify-center gap-0.5 w-16 h-12 transition-colors ${
              activeSection === 'historia'
                ? 'text-[#ae1d14] font-bold'
                : 'text-[#5b403c] hover:text-[#ae1d14]'
            }`}
          >
            <span className="text-xl">❤️</span>
            <span className="text-[11px] font-semibold leading-tight">Foodie</span>
          </button>

        </div>
      </nav>
    </>
  );
};
