import React, { useState } from 'react';
import { BRAND_ASSETS, WHATSAPP_DISPLAY, WHATSAPP_PHONE } from '../data/pizzas';
import { ShoppingBag, MessageCircle, Menu, X, Smartphone, Monitor } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  viewMode: 'responsive' | 'mobile-mock';
  onToggleViewMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  activeSection,
  onNavigate,
  viewMode,
  onToggleViewMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'historia', label: 'Su Historia' },
    { id: 'menu', label: 'El Menú' },
    { id: 'ruta', label: 'Dónde Encontrarla' },
    { id: 'eventos', label: 'Eventos' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fff8f6]/92 backdrop-blur-xl border-b border-[#e3beb9]/50 shadow-[0_2px_12px_rgba(33,30,29,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Zone */}
        <div 
          onClick={() => handleLinkClick('inicio')}
          className="flex items-center gap-3 cursor-pointer group shrink-0"
        >
          <div className="relative">
            <img
              src={BRAND_ASSETS.logo}
              alt="La Chica de las Pizzas Logo"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover ring-2 ring-[#ae1d14]/20 group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // styled fallback if external image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <span className="absolute -bottom-1 -right-1 text-xs">🍕</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-lg sm:text-xl font-extrabold text-[#ae1d14] tracking-tight leading-none group-hover:text-[#d1382a] transition-colors">
              La Chica de las Pizzas
            </span>
            <span className="text-xs font-semibold text-[#914c00] tracking-wide mt-0.5">
              Arequipa • Sabor Artesanal
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#d1382a] text-[#fff5f3] shadow-sm'
                    : 'text-[#5b403c] hover:text-[#1e1b1a] hover:bg-[#faf2f0]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls Zone */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* View mode toggle (Responsive vs Mobile Screen Simulator) */}
          <button
            onClick={onToggleViewMode}
            title={viewMode === 'mobile-mock' ? 'Cambiar a vista completa de escritorio' : 'Ver en simulador de pantalla móvil'}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-[#f4ecea] text-[#5b403c] hover:bg-[#e8e1df] transition-colors border border-[#e3beb9]/60"
          >
            {viewMode === 'mobile-mock' ? (
              <>
                <Monitor className="w-3.5 h-3.5 text-[#ae1d14]" />
                <span>Vista Web</span>
              </>
            ) : (
              <>
                <Smartphone className="w-3.5 h-3.5 text-[#ae1d14]" />
                <span>Modo Celular</span>
              </>
            )}
          </button>

          {/* Cart Counter Button */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#f4ecea] hover:bg-[#e8e1df] text-[#1e1b1a] transition-all"
            aria-label="Abrir pedido actual"
          >
            <ShoppingBag className="w-5 h-5 text-[#ae1d14]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#ae1d14] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-md animate-scale">
                {cartCount}
              </span>
            )}
          </button>

          {/* WhatsApp Direct CTA */}
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('¡Hola La Chica de las Pizzas! Quisiera consultar por las minipizzas calientitas.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#ae1d14] hover:bg-[#d1382a] text-white px-4 sm:px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span className="hidden md:inline">Pide al {WHATSAPP_DISPLAY}</span>
            <span className="md:hidden">WhatsApp</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#5b403c] hover:bg-[#f4ecea] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fff8f6] border-b border-[#e3beb9] px-4 pt-2 pb-6 shadow-lg animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold text-left transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#d1382a] text-white'
                    : 'text-[#1e1b1a] hover:bg-[#faf2f0]'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs opacity-60">→</span>
              </button>
            ))}

            <div className="pt-2 mt-2 border-t border-[#e3beb9]/60 flex items-center justify-between px-2">
              <span className="text-xs text-[#5b403c]">Horario: 4:00 PM - 8:00 PM</span>
              <button
                onClick={() => {
                  onToggleViewMode();
                  setMobileMenuOpen(false);
                }}
                className="text-xs font-bold text-[#ae1d14] underline"
              >
                {viewMode === 'mobile-mock' ? 'Pantalla Completa' : 'Simulador Móvil'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
