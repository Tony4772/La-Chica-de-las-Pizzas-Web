import React from 'react';
import { BRAND_ASSETS, WHATSAPP_DISPLAY, WHATSAPP_PHONE } from '../data/pizzas';
import { MapPin, Clock, CreditCard, MessageCircle, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#faf2f0] text-[#5b403c] border-t border-[#e3beb9]/40 pt-16 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-start">
          
          {/* Brand info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={BRAND_ASSETS.logo}
                alt="Logo La Chica de las Pizzas"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-[#ae1d14]/20"
                referrerPolicy="no-referrer"
              />
              <span className="font-headline text-xl font-black text-[#ae1d14]">
                La Chica de las Pizzas
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#5b403c] leading-relaxed">
              Horneando sonrisas y masa crujiente con el corazón volcánico de Arequipa, la Ciudad Blanca de sillar y buen comer.
            </p>

            <p className="text-xs font-bold text-[#854555] tracking-wide uppercase flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 fill-current text-[#ae1d14]" />
              <span>Hecho con amor en cada porción</span>
            </p>
          </div>

          {/* Quick Route Links */}
          <div className="space-y-3">
            <h4 className="font-headline text-base font-bold text-[#1e1b1a]">
              Ruta & Enlaces Rápidos
            </h4>
            <ul className="space-y-2 text-xs text-[#5b403c]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#914c00] shrink-0 mt-0.5" />
                <span>Arequipa, Perú (Puntos itinerantes: UNSA, Yanahuara, Plaza de Armas, Mercaderes)</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#914c00] shrink-0" />
                <span>Tardes de 4:00 PM a 8:00 PM (o hasta agotar stock)</span>
              </li>
              <li className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#914c00] shrink-0" />
                <span>Minipizzas a S/ 1.00 • Pagos en Yape / Plin / Efectivo</span>
              </li>
            </ul>
          </div>

          {/* WhatsApp & Orders */}
          <div className="space-y-3">
            <h4 className="font-headline text-base font-bold text-[#1e1b1a]">
              Atención & Pedidos
            </h4>
            <p className="text-xs text-[#5b403c]">
              ¿Tienes un antojo o quieres pizzas para tu evento? Escríbenos directamente:
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola! Deseo información de las minipizzas calientitas')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f4ecea] hover:bg-[#e8e1df] text-[#1e1b1a] px-4 py-2.5 rounded-full text-xs font-bold transition-colors border border-[#e3beb9]/50"
            >
              <MessageCircle className="w-4 h-4 text-[#ae1d14] fill-current" />
              <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-[#e3beb9]/30 text-center text-[11px] text-[#5b403c]">
          <p>© 2025 La Chica de las Pizzas • Arequipa, Ciudad Blanca. Todos los derechos reservados con masa madre y cariño.</p>
        </div>

      </div>
    </footer>
  );
};
