import React, { useState } from 'react';
import { WHATSAPP_DISPLAY, WHATSAPP_PHONE } from '../data/pizzas';
import { Phone, CheckCircle, PartyPopper, Calendar, Users, X, Send } from 'lucide-react';

export const EventsBanner: React.FC = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [guestCount, setGuestCount] = useState<number>(24);
  const [eventType, setEventType] = useState<string>('Cumpleaños');
  const [eventDate, setEventDate] = useState<string>('');

  // Discount tier: regular is S/ 1.00 each; 50+ is S/ 0.95 each or includes free special packaging + sauces
  const pricePerUnit = guestCount >= 50 ? 0.95 : 1.00;
  const estimatedTotal = (guestCount * pricePerUnit).toFixed(2);

  const eventWhatsAppUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    `¡Hola! Quisiera cotizar un pedido especial de minipizzas para un evento en Arequipa.\n- Tipo: ${eventType}\n- Cantidad aproximada: ${guestCount} minipizzas\n- Fecha estimada: ${eventDate || 'Por coordinar'}\n- Total estimado: S/ ${estimatedTotal}`
  )}`;

  return (
    <section 
      id="eventos"
      className="py-16 sm:py-20 bg-[#faf2f0] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heroic Event Banner */}
        <div className="bg-gradient-to-br from-[#ae1d14] via-[#d1382a] to-[#914c00] text-white rounded-[3rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Ambient Blurred Circles */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#ff9b43]/20 blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold tracking-wide uppercase">
                <PartyPopper className="w-3.5 h-3.5" />
                ¿Cumpleaños, reuniones o pedidos grandes?
              </span>

              <h3 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Lleva minipizzas calientitas a tu evento y apoya mi carrera
              </h3>

              <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed">
                Preparo pedidos al por mayor para oficinas, colegios, cumpleaños, ferias y grupos de amigos en Arequipa. Minipizzas recién hechas, empaque higiénico y puntualidad garantizada con todo el cariño de mi cocina.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-white/90 text-xs sm:text-sm font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#ffdcc3]" />
                  Precios especiales x docena
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#ffdcc3]" />
                  Aceptamos Yape y Plin
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#ffdcc3]" />
                  Pedidos con 24h de anticipación
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola! Quisiera cotizar un pedido especial de minipizzas para un evento en Arequipa')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#faf2f0] text-[#ae1d14] font-headline text-base sm:text-lg px-8 py-5 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 text-center font-extrabold"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Contactar: {WHATSAPP_DISPLAY}</span>
              </a>

              <button
                onClick={() => setQuoteModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm px-6 py-2.5 rounded-full font-bold backdrop-blur-sm transition-colors border border-white/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Calcular Presupuesto Rápido</span>
              </button>

              <span className="text-xs text-white/80 text-center lg:text-right w-full">
                Respondo al instante con mucho gusto 😊
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Quick Event Quote Calculator Modal */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-[#e3beb9]/40 p-6 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#e3beb9]/30 pb-3">
              <div className="flex items-center gap-2">
                <PartyPopper className="w-5 h-5 text-[#ae1d14]" />
                <h4 className="font-headline font-black text-lg text-[#1e1b1a]">
                  Cotizador para Eventos
                </h4>
              </div>
              <button
                onClick={() => setQuoteModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#f4ecea] text-[#5b403c] flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Event Form */}
            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#5b403c] mb-1">
                  Tipo de Evento:
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-[#e3beb9] bg-[#faf2f0] text-[#1e1b1a] font-semibold"
                >
                  <option value="Cumpleaños Infantil / Juvenil">Cumpleaños Infantil / Juvenil</option>
                  <option value="Reunión de Oficina / Trabajo">Reunión de Oficina / Trabajo</option>
                  <option value="Compartir Universitario / Escolar">Compartir Universitario / Escolar</option>
                  <option value="Feria o Kermesse en Arequipa">Feria o Kermesse en Arequipa</option>
                  <option value="Bautizo o Celebración Familiar">Bautizo o Celebración Familiar</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-bold text-[#5b403c]">
                    Cantidad de minipizzas:
                  </label>
                  <span className="font-headline font-black text-sm text-[#ae1d14]">
                    {guestCount} unidades
                  </span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="120"
                  step="6"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-[#ae1d14]"
                />
                <div className="flex justify-between text-[10px] text-[#5b403c]">
                  <span>12 (1 docena)</span>
                  <span>50 (Promo)</span>
                  <span>120+ (Catering)</span>
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#5b403c] mb-1">
                  Fecha estimada:
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-[#e3beb9] bg-[#faf2f0] text-[#1e1b1a]"
                />
              </div>

              {/* Estimate Box */}
              <div className="p-4 bg-[#faf2f0] rounded-2xl border border-[#e3beb9]/40 flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#5b403c] block">Presupuesto Sugerido:</span>
                  <span className="font-headline text-2xl font-black text-[#ae1d14]">
                    S/ {estimatedTotal}
                  </span>
                  {guestCount >= 50 && (
                    <span className="text-[10px] text-[#914c00] font-bold block">
                      ✨ Incluye tarifa promocional y salsitas gratis
                    </span>
                  )}
                </div>
                <Users className="w-8 h-8 text-[#914c00]/50" />
              </div>
            </div>

            {/* CTA in Modal */}
            <a
              href={eventWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#ae1d14] hover:bg-[#d1382a] text-white rounded-full font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Cotización a WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
