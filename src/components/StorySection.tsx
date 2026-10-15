import React, { useState } from 'react';
import { BRAND_ASSETS, TESTIMONIALS } from '../data/pizzas';
import { Heart, Sparkles, GraduationCap, Award, BookOpen, UtensilsCrossed } from 'lucide-react';

export const StorySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'historia' | 'testimonios' | 'metas'>('historia');

  return (
    <section 
      id="historia"
      className="py-16 sm:py-24 lg:py-28 bg-white relative overflow-hidden border-y border-[#e3beb9]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 text-[#914c00] text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#914c00]" />
            Mi Vocación y Mi Esfuerzo
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-[2.6rem] text-[#1e1b1a] mt-2 font-black tracking-tight leading-tight">
            El Gran Sueño: Cocinando mi futuro con pasión y harina
          </h2>
          <div className="w-20 h-1.5 bg-[#d1382a] mx-auto rounded-full mt-4" />

          {/* Subtabs for exploring story dimensions */}
          <div className="inline-flex items-center gap-1.5 p-1 bg-[#f4ecea] rounded-full mt-6 border border-[#e3beb9]/40">
            <button
              onClick={() => setActiveTab('historia')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'historia'
                  ? 'bg-white text-[#ae1d14] shadow-xs'
                  : 'text-[#5b403c] hover:text-[#1e1b1a]'
              }`}
            >
              📖 La Historia
            </button>
            <button
              onClick={() => setActiveTab('metas')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'metas'
                  ? 'bg-white text-[#ae1d14] shadow-xs'
                  : 'text-[#5b403c] hover:text-[#1e1b1a]'
              }`}
            >
              🎓 Mi Carrera
            </button>
            <button
              onClick={() => setActiveTab('testimonios')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'testimonios'
                  ? 'bg-white text-[#ae1d14] shadow-xs'
                  : 'text-[#5b403c] hover:text-[#1e1b1a]'
              }`}
            >
              💬 Arequipeños Opinan
            </button>
          </div>
        </div>

        {activeTab === 'historia' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Column Left: Framed Quote & Aesthetic Lockup */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="relative bg-gradient-to-br from-[#f4ecea] to-[#eee7e4] p-8 sm:p-10 rounded-[2.5rem] shadow-sm border border-[#e3beb9]/50">
                {/* Decorative Giant Quotation Mark */}
                <span className="font-serif text-7xl sm:text-8xl text-[#ae1d14]/15 absolute top-3 left-6 select-none leading-none">
                  “
                </span>

                <div className="relative z-10 space-y-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ae1d14]/10 text-[#ae1d14] text-xs font-bold">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    Mensaje de la Cocinera
                  </span>

                  <blockquote className="font-headline text-xl sm:text-2xl text-[#1e1b1a] font-bold leading-snug">
                    "Cada moneda de un sol no solo paga una minipizza crujiente: paga un libro de cocina, un uniforme blanco y una clase más hacia mi título de chef."
                  </blockquote>

                  <div className="pt-3 flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full ring-2 ring-[#ff9b43] overflow-hidden shrink-0 shadow-sm bg-white">
                      <img
                        src={BRAND_ASSETS.chefProfile}
                        alt="La Chica de las Pizzas"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="font-headline text-base sm:text-lg text-[#ae1d14] font-extrabold leading-tight">
                        La Chica de las Pizzas
                      </h4>
                      <p className="text-xs sm:text-sm text-[#5b403c]">
                        Futura Chef Gastronómica • Arequipeña de corazón
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Sillar Stone Sticker */}
                <div className="mt-6 pt-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between border border-[#e3beb9]/40">
                  <span className="text-xs font-semibold text-[#5b403c]">
                    Hecho en sillar y fuego lento
                  </span>
                  <span className="text-xs font-bold text-[#914c00]">
                    Volcán Misti ♥
                  </span>
                </div>
              </div>
            </div>

            {/* Column Right: Narrative Prose & Bento Metrics */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="space-y-4 text-[#5b403c] text-base sm:text-lg leading-relaxed">
                <p>
                  En Arequipa la comida no es solo alimento, es orgullo, tradición y cultura. Desde muy pequeña aprendí que el amor se amasa con paciencia. Con ese mismo espíritu nació{' '}
                  <strong className="text-[#1e1b1a] font-bold">La Chica de las Pizzas</strong>: un proyecto lleno de coraje para hacer realidad mi vocación culinaria.
                </p>
                <p>
                  Cada mediodía preparo una masa de fermentación lenta de 24 horas, selecciono ingredientes frescos y elaboro mi salsa pomodoro casera perfumada con orégano andino. Al caer la tarde, cargo mi canasta térmica sellada y salgo a recorrer los puntos más concurridos de la ciudad para ofrecer minipizzas listas para comer a un precio que todos puedan disfrutar:{' '}
                  <span className="font-extrabold text-[#ae1d14]">S/ 1.00</span>.
                </p>
                <p>
                  Mi propósito es claro: reunir mes a mes las cuotas para culminar mi carrera universitaria en{' '}
                  <strong className="text-[#1e1b1a] font-bold">Alta Cocina y Pastelería</strong>, demostrando que con trabajo honesto, constancia y una receta deliciosa, ningún sueño queda fuera de alcance.
                </p>
              </div>

              {/* Bento Metrics Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-[#faf2f0] p-4 rounded-2xl flex flex-col gap-1 border border-[#e3beb9]/40 hover:bg-[#f4ecea] transition-colors">
                  <span className="font-headline text-2xl sm:text-3xl text-[#ae1d14] font-black">
                    +500
                  </span>
                  <span className="text-sm font-bold text-[#1e1b1a]">
                    Sonrisas al mes
                  </span>
                  <span className="text-xs text-[#5b403c]">
                    Vecinos, jóvenes y oficinistas felices.
                  </span>
                </div>

                <div className="bg-[#faf2f0] p-4 rounded-2xl flex flex-col gap-1 border border-[#e3beb9]/40 hover:bg-[#f4ecea] transition-colors">
                  <span className="font-headline text-2xl sm:text-3xl text-[#914c00] font-black">
                    100%
                  </span>
                  <span className="text-sm font-bold text-[#1e1b1a]">
                    Amor & Frescura
                  </span>
                  <span className="text-xs text-[#5b403c]">
                    Ingredientes del día, sin conservantes.
                  </span>
                </div>

                <div className="bg-[#faf2f0] p-4 rounded-2xl flex flex-col gap-1 border border-[#e3beb9]/40 hover:bg-[#f4ecea] transition-colors">
                  <div className="flex items-center gap-1.5 text-[#854555]">
                    <GraduationCap className="w-6 h-6" />
                    <span className="font-headline text-2xl sm:text-3xl font-black">
                      V Ciclo
                    </span>
                  </div>
                  <span className="text-sm font-bold text-[#1e1b1a]">
                    Meta Chef
                  </span>
                  <span className="text-xs text-[#5b403c]">
                    Carrera de Alta Cocina y Pastelería.
                  </span>
                </div>
              </div>

            </div>

          </div>
        )}

        {activeTab === 'metas' && (
          <div className="bg-[#faf2f0] p-6 sm:p-10 rounded-[2.5rem] border border-[#e3beb9]/40 max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
            <div className="text-center max-w-lg mx-auto">
              <h3 className="font-headline text-2xl font-black text-[#1e1b1a]">
                ¿Cómo impacta cada minipizza de S/ 1.00?
              </h3>
              <p className="text-sm text-[#5b403c] mt-2">
                La educación culinaria requiere insumos para talleres, cuchillería profesional, libros y mensualidades.
              </p>
            </div>

            {/* Visual Milestones */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-[#e3beb9]/40 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#ae1d14]/10 text-[#ae1d14] flex items-center justify-center mx-auto">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div className="font-headline font-bold text-base text-[#1e1b1a]">Insumos Diarios</div>
                <p className="text-xs text-[#5b403c]">Harina de trigo de alta fuerza, queso mozzarella andino y orégano seco.</p>
                <span className="inline-block text-[11px] font-bold text-[#ae1d14] bg-[#ffdad5]/60 px-2 py-0.5 rounded-full">Costeado con orgullo</span>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#e3beb9]/40 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#914c00]/10 text-[#914c00] flex items-center justify-center mx-auto">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="font-headline font-bold text-base text-[#1e1b1a]">Libros & Recetarios</div>
                <p className="text-xs text-[#5b403c]">Textos de panadería francesa, pastelería fina y técnicas moleculares.</p>
                <span className="inline-block text-[11px] font-bold text-[#914c00] bg-[#ffdcc3]/60 px-2 py-0.5 rounded-full">Comprados paso a paso</span>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#e3beb9]/40 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#854555]/10 text-[#854555] flex items-center justify-center mx-auto">
                  <Award className="w-5 h-5" />
                </div>
                <div className="font-headline font-bold text-base text-[#1e1b1a]">Uniforme & Taller</div>
                <p className="text-xs text-[#5b403c]">Filipina blanca oficial, mandil bordado y juego de cuchillos de chef.</p>
                <span className="inline-block text-[11px] font-bold text-[#854555] bg-[#ffd9df]/60 px-2 py-0.5 rounded-full">Equipada al 100%</span>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#e3beb9]/40 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#ae1d14]/10 text-[#ae1d14] flex items-center justify-center mx-auto">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="font-headline font-bold text-base text-[#1e1b1a]">Título Profesional</div>
                <p className="text-xs text-[#5b403c]">Graduación en Gastronomía & Pastelería y posterior apertura de pizzería propia.</p>
                <span className="inline-block text-[11px] font-bold text-[#ae1d14] bg-[#ffdad5]/60 px-2 py-0.5 rounded-full">¡La gran meta!</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'testimonios' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-in fade-in duration-300">
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id}
                className="bg-[#faf2f0] p-6 rounded-3xl border border-[#e3beb9]/40 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl p-2 bg-white rounded-2xl shadow-xs">
                      {t.avatarEmoji}
                    </span>
                    <div>
                      <h4 className="font-headline font-bold text-base text-[#1e1b1a]">
                        {t.author}
                      </h4>
                      <p className="text-xs text-[#5b403c] font-medium">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#5b403c] italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#e3beb9]/30 flex items-center justify-between text-xs text-[#914c00] font-bold">
                  <span>📍 {t.location}</span>
                  <span className="text-[#ae1d14]">{t.pizzasCount}</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
