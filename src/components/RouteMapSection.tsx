import React, { useState, useEffect } from 'react';
import { HOTSPOTS, BRAND_ASSETS, WHATSAPP_PHONE } from '../data/pizzas';
import { Hotspot } from '../types';
import { MapPin, Clock, Compass, Send, Radio } from 'lucide-react';

export const RouteMapSection: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(HOTSPOTS[0]);
  const [isCurrentlyActiveTime, setIsCurrentlyActiveTime] = useState<boolean>(true);

  // Check current Peru time (UTC-5)
  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      // Peru time is UTC-5
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const peruTime = new Date(utc - 3600000 * 5);
      const hours = peruTime.getHours();
      // 16:00 to 20:00 (4 PM to 8 PM)
      setIsCurrentlyActiveTime(hours >= 16 && hours < 20);
    };

    checkTime();
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const locationWaUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    `Hola La Chica de las Pizzas, ¿en qué punto o esquina de Arequipa te encuentras hoy? Me gustaría encontrarte en ${selectedHotspot.name}.`
  )}`;

  return (
    <section 
      id="ruta"
      className="py-16 sm:py-24 lg:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <span className="text-xs sm:text-sm text-[#914c00] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#914c00]" />
                Ruta & Horarios en la Ciudad Blanca
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl text-[#1e1b1a] font-black tracking-tight mt-1 leading-tight">
                ¿Dónde encontrarme en Arequipa?
              </h2>
              <p className="text-sm sm:text-base text-[#5b403c] mt-3 leading-relaxed">
                Salgo todas las tardes con mi canasta térmica llena de minipizzas recién sacadas del horno. Búscame en los puntos más emblemáticos o escríbeme para encontrarnos:
              </p>
            </div>

            {/* Schedule Callout Card */}
            <div className="bg-[#faf2f0] p-5 sm:p-6 rounded-2xl flex items-start gap-4 border border-[#e3beb9]/40 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#ffdcc3] text-[#2f1500] flex items-center justify-center shrink-0 shadow-xs">
                <Clock className="w-6 h-6 text-[#914c00]" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-headline text-base sm:text-lg text-[#1e1b1a] font-bold">
                    Horario de Tardes
                  </h4>
                  {isCurrentlyActiveTime ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      ¡En ruta ahora!
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
                      Próxima salida 4:00 PM
                    </span>
                  )}
                </div>
                <p className="text-base font-bold text-[#ae1d14]">
                  De 4:00 PM a 8:00 PM
                </p>
                <p className="text-xs text-[#5b403c]">
                  (O hasta agotar las bandejas del día. ¡A veces se terminan antes de las 7:00 PM!)
                </p>
              </div>
            </div>

            {/* Hotspots Interactive List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs sm:text-sm font-bold text-[#1e1b1a] uppercase tracking-wide">
                  Puntos frecuentes de venta (Toca para ver en mapa):
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {HOTSPOTS.map((spot) => {
                  const isSelected = selectedHotspot.id === spot.id;
                  return (
                    <button
                      key={spot.id}
                      type="button"
                      onClick={() => setSelectedHotspot(spot)}
                      className={`flex items-start gap-2.5 p-3 rounded-2xl text-left transition-all border ${
                        isSelected
                          ? 'bg-[#ffdad5]/40 border-[#ae1d14] shadow-xs'
                          : 'bg-[#f4ecea] border-transparent hover:bg-[#eee7e4] text-[#1e1b1a]'
                      }`}
                    >
                      <MapPin
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isSelected ? 'text-[#ae1d14]' : 'text-[#914c00]'
                        }`}
                      />
                      <div className="min-w-0">
                        <span className="text-xs sm:text-sm font-bold text-[#1e1b1a] block truncate">
                          {spot.name}
                        </span>
                        <span className="text-[11px] text-[#5b403c] block truncate">
                          {spot.timeWindow}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Spot Details Mini-Banner */}
            <div className="p-3.5 bg-[#f4ecea] rounded-2xl border border-[#e3beb9]/40 flex items-center justify-between gap-3 text-xs">
              <div className="min-w-0">
                <span className="font-bold text-[#ae1d14] block">
                  📍 Punto seleccionado: {selectedHotspot.name}
                </span>
                <span className="text-[#5b403c] block truncate">
                  {selectedHotspot.description}
                </span>
              </div>
              <span className="text-[11px] font-bold text-[#914c00] bg-white px-2.5 py-1 rounded-full shrink-0 shadow-2xs">
                {selectedHotspot.timeWindow}
              </span>
            </div>

            {/* WhatsApp Live Location Request Card */}
            <div className="bg-gradient-to-r from-[#ffdcc3]/60 via-[#ffdad5]/50 to-[#ffd9df]/50 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#e3beb9]/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white text-[#ae1d14] flex items-center justify-center shrink-0 shadow-xs">
                  <Radio className="w-5 h-5 text-[#ae1d14] animate-pulse" />
                </div>
                <p className="text-xs sm:text-sm text-[#1e1b1a] font-semibold text-center sm:text-left">
                  ¿Quieres saber en qué esquina ando ahora mismo?
                </p>
              </div>

              <a
                href={locationWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-[#ae1d14] hover:bg-[#d1382a] text-white text-xs px-5 py-2.5 rounded-full font-bold shadow-sm transition-all flex items-center gap-1.5 active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Preguntar Ubicación</span>
              </a>
            </div>

          </div>

          {/* Right: Map / Arequipa Showcase representation */}
          <div className="lg:col-span-6">
            <div className="relative bg-[#f4ecea] rounded-[2.5rem] p-3 sm:p-6 shadow-xl border border-[#e3beb9]/40">
              
              {/* Map container with photo background */}
              <div 
                className="w-full h-80 sm:h-96 rounded-[2rem] relative overflow-hidden shadow-inner flex items-end p-4 sm:p-6 bg-cover bg-center"
                style={{ backgroundImage: `url('${BRAND_ASSETS.mapBackground}')` }}
              >
                {/* Visual Radar Pins for Hotspots */}
                {HOTSPOTS.map((spot) => {
                  const isSelected = selectedHotspot.id === spot.id;
                  return (
                    <div
                      key={spot.id}
                      onClick={() => setSelectedHotspot(spot)}
                      style={{
                        left: `${spot.coordinates.x}%`,
                        top: `${spot.coordinates.y}%`,
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                    >
                      <div className="relative flex items-center justify-center">
                        {isSelected && (
                          <span className="absolute w-10 h-10 rounded-full bg-[#ae1d14]/40 animate-ping" />
                        )}
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-md transition-transform ${
                            isSelected
                              ? 'bg-[#ae1d14] text-white scale-125 ring-2 ring-white'
                              : 'bg-white text-[#ae1d14] hover:scale-110'
                          }`}
                        >
                          🍕
                        </div>
                      </div>

                      {/* Tooltip on hover/select */}
                      {isSelected && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 bg-[#1e1b1a] text-white text-[10px] font-bold py-1 px-2.5 rounded-full whitespace-nowrap shadow-md pointer-events-none">
                          {spot.name}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Overlaid Floating Card inside Map */}
                <div className="relative z-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl max-w-sm shadow-md border border-[#e3beb9]/40">
                  <div className="flex items-center gap-2 text-[#ae1d14] font-bold text-xs sm:text-sm mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>Ruta Itinerante Arequipa</span>
                  </div>
                  <p className="text-xs text-[#5b403c] leading-relaxed">
                    Recorriendo el Centro Histórico, Universidades y Yanahuara. Sigue mi ruta o coordina entrega directa por WhatsApp.
                  </p>
                </div>
              </div>

              {/* Floating mascot banner at top edge */}
              <div className="absolute -top-4 -right-2 sm:-right-3 bg-white px-4 py-2 rounded-full shadow-md border border-[#e3beb9]/40 flex items-center gap-2 z-30">
                <span className="text-xl">🛵</span>
                <span className="text-xs font-bold text-[#1e1b1a]">
                  ¡Reparto con canasta caliente!
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
