import React from 'react';
import { BRAND_ASSETS, WHATSAPP_DISPLAY, WHATSAPP_PHONE } from '../data/pizzas';
import { MessageCircle, Heart, MapPin, Sparkles, Flame, CheckCircle } from 'lucide-react';

interface HeroSectionProps {
  onNavigateStory: () => void;
  onNavigateMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigateStory,
  onNavigateMenu,
}) => {
  return (
    <section 
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-[#fff8f6] via-[#faf2f0] to-[#fff8f6] pt-8 pb-16 sm:py-20 lg:py-24"
    >
      {/* Ambient glowing flour / dough warm accents */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#ffdcc3]/40 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#ffdad5]/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-[#ffd9df]/30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Impactful Storytelling & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5 sm:gap-6">
            
            {/* Artisanal / Kawaii Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f4ecea] text-[#5b403c] text-xs font-semibold shadow-xs border border-[#e3beb9]/40">
                <Flame className="w-3.5 h-3.5 text-[#ae1d14]" />
                Hechas frescas todas las tardes
              </span>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f4ecea] text-[#5b403c] text-xs font-semibold shadow-xs border border-[#e3beb9]/40">
                <MapPin className="w-3.5 h-3.5 text-[#914c00]" />
                En las calles de Arequipa
              </span>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ffd9df] text-[#703443] text-xs font-bold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#854555]" />
                Apoyando mis estudios culinarios
              </span>
            </div>

            {/* Title Lockup */}
            <div className="space-y-3">
              <span className="text-xs sm:text-sm text-[#914c00] tracking-widest uppercase font-extrabold flex items-center gap-2">
                <span className="inline-block w-8 h-0.5 bg-[#914c00]" />
                Sabor Callejero con Alma Volcánica
              </span>

              <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-[#1e1b1a] tracking-tight leading-[1.12]">
                Minipizzas hechas con el corazón a solo{' '}
                <span className="relative inline-block text-[#ae1d14]">
                  S/ 1.00
                  {/* Wavy accent stroke */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3.5 text-[#ff9b43]"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 120 12"
                  >
                    <path
                      d="M2 9C35 2 85 2 118 9"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Emotional Narrative */}
            <p className="text-base sm:text-lg text-[#5b403c] max-w-2xl leading-relaxed">
              Cada minipizza horneada a diario apoya mi sueño de estudiar{' '}
              <strong className="text-[#1e1b1a] font-bold">Gastronomía y Pastelería</strong>{' '}
              y convertirme en chef profesional en mi querida Ciudad Blanca, Arequipa. Calientitas, crujientes y con harto queso.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-1">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola La Chica de las Pizzas, quisiera pedir unas minipizzas calientitas')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-[#ae1d14] hover:bg-[#d1382a] text-white px-5 sm:px-7 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-lg shadow-[#ae1d14]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center w-full sm:w-auto max-w-full"
              >
                <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                <span className="truncate">Pedir por WhatsApp ({WHATSAPP_DISPLAY})</span>
              </a>

              <button
                onClick={onNavigateStory}
                className="inline-flex items-center justify-center gap-2 bg-[#f4ecea] hover:bg-[#e8e1df] text-[#1e1b1a] px-6 py-4 rounded-full font-bold text-sm sm:text-base shadow-xs transition-colors"
              >
                <Heart className="w-4 h-4 text-[#ae1d14] fill-current" />
                <span>Conoce Mi Historia</span>
              </button>
            </div>

            {/* Social Proof Micro-Bar */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-3">
                <span className="w-10 h-10 rounded-full bg-[#ffdcc3] text-[#2f1500] flex items-center justify-center font-bold text-sm shadow-xs ring-2 ring-[#fff8f6]">
                  🍕
                </span>
                <span className="w-10 h-10 rounded-full bg-[#ffdad5] text-[#410000] flex items-center justify-center font-bold text-sm shadow-xs ring-2 ring-[#fff8f6]">
                  ❤️
                </span>
                <span className="w-10 h-10 rounded-full bg-[#ffd9df] text-[#390818] flex items-center justify-center font-bold text-sm shadow-xs ring-2 ring-[#fff8f6]">
                  👩‍🍳
                </span>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-[#1e1b1a]">
                  +500 minipizzas repartidas al mes
                </p>
                <p className="text-xs text-[#5b403c]">
                  Por calles, universidades y plazas de Arequipa
                </p>
              </div>
            </div>

          </div>

          {/* Right: Visual Showcase with Decorative Cards */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Warm backdrop disc */}
              <div className="w-full aspect-square rounded-[3rem] bg-gradient-to-tr from-[#ff9b43]/20 via-[#d1382a]/15 to-[#ffd9df]/30 p-3 sm:p-4 transform rotate-1 transition-transform">
                
                {/* Food photography container */}
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#f4ecea] group">
                  <img
                    src={BRAND_ASSETS.desktopHeroPizza}
                    alt="Minipizza artesanal humeante en tabla de madera tradicional en Arequipa"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b1a]/85 via-black/20 to-transparent" />

                  {/* Floating in-image caption */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#ff9b43] animate-ping" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#ffdcc3]">
                        Recién saliditas del horno
                      </span>
                    </div>
                    <p className="font-headline text-lg sm:text-xl font-bold leading-snug drop-shadow-sm">
                      Masa crujiente, queso fundido y sazón casera
                    </p>
                  </div>
                </div>
              </div>

              {/* Overlapping Price Badge Card */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-white text-[#1e1b1a] p-4 sm:p-5 rounded-[2rem] shadow-xl max-w-[280px] sm:max-w-xs transform -rotate-2 hover:rotate-0 transition-transform border border-[#e3beb9]/40">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#ae1d14] text-white flex items-center justify-center shrink-0 shadow-md">
                    <span className="text-2xl">🍕</span>
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#ffdcc3] text-[#2f1500] text-[10px] font-extrabold uppercase mb-1">
                      ¡Precio Popular!
                    </div>
                    <h4 className="font-headline text-lg sm:text-xl font-black text-[#ae1d14] leading-tight">
                      Solo S/ 1.00 c/u
                    </h4>
                    <p className="text-xs text-[#5b403c] mt-1 leading-snug">
                      Crujientes, calientitas y con harto queso garantizado.
                    </p>
                  </div>
                </div>
              </div>

              {/* Overlapping Kawaii Mascot Badge */}
              <div className="absolute -top-4 -right-2 sm:-top-5 sm:-right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border border-[#e3beb9]/40">
                <span className="text-xl">🐹</span>
                <span className="text-xs font-bold text-[#1e1b1a]">
                  Horneado con Amor • AQP
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
