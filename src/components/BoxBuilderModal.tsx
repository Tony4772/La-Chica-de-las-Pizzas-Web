import React, { useState } from 'react';
import { X, Plus, Minus, Send, Check, Box } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data/pizzas';
import confetti from 'canvas-confetti';

interface BoxBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBoxToCart: (boxData: {
    size: number;
    flavors: { [flavor: string]: number };
    sauce: string;
    notes: string;
    price: number;
  }) => void;
}

export const BoxBuilderModal: React.FC<BoxBuilderModalProps> = ({
  isOpen,
  onClose,
  onAddBoxToCart,
}) => {
  const [boxSize, setBoxSize] = useState<6 | 12>(6);
  const [flavorCounts, setFlavorCounts] = useState<{ [key: string]: number }>({
    Americana: 2,
    Hawaiana: 2,
    Pepperoni: 2,
  });
  const [selectedSauce, setSelectedSauce] = useState<string>('Salsa Tártara Casera');
  const [specialNote, setSpecialNote] = useState<string>('');

  if (!isOpen) return null;

  const totalSelected = Object.values(flavorCounts).reduce((a, b) => a + b, 0);
  const remaining = boxSize - totalSelected;
  const isComplete = totalSelected === boxSize;
  const totalPrice = (boxSize * 1.00).toFixed(2);

  const handleFlavorChange = (flavor: string, delta: number) => {
    const current = flavorCounts[flavor] || 0;
    const next = current + delta;
    if (next < 0) return;
    if (delta > 0 && remaining <= 0) return;

    setFlavorCounts({
      ...flavorCounts,
      [flavor]: next,
    });
  };

  const handleSelectBoxSize = (size: 6 | 12) => {
    setBoxSize(size);
    if (size === 6) {
      setFlavorCounts({ Americana: 2, Hawaiana: 2, Pepperoni: 2 });
    } else {
      setFlavorCounts({ Americana: 4, Hawaiana: 4, Pepperoni: 4 });
    }
  };

  const handleConfirm = () => {
    if (!isComplete) return;

    try {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ae1d14', '#ff9b43', '#ffd9df'],
      });
    } catch {
      // ignore
    }

    onAddBoxToCart({
      size: boxSize,
      flavors: flavorCounts,
      sauce: selectedSauce,
      notes: specialNote,
      price: boxSize * 1.00,
    });

    onClose();
  };

  const flavorsSummary = Object.entries(flavorCounts)
    .filter(([_, qty]) => qty > 0)
    .map(([name, qty]) => `${qty} ${name}`)
    .join(', ');

  const whatsappMessage = encodeURIComponent(
    `¡Hola La Chica de las Pizzas! Quisiera encargar una Cajita Amigos de ${boxSize} minipizzas: [${flavorsSummary}]. Acompañamiento: ${selectedSauce}${
      specialNote ? `. Nota: ${specialNote}` : ''
    }. Total: S/ ${totalPrice}. ¿En qué punto te encuentras hoy?`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-[#e3beb9]/50 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-[#faf2f0] via-[#f4ecea] to-[#faf2f0] border-b border-[#e3beb9]/40 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-[#914c00] text-white flex items-center justify-center shadow-xs">
              <Box className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-headline text-lg font-black text-[#1e1b1a]">
                Arma tu Cajita de Minipizzas
              </h3>
              <p className="text-xs text-[#5b403c]">
                Elige tus sabores favoritos y salsitas caseras
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white text-[#5b403c] hover:bg-[#faf2f0] flex items-center justify-center transition-colors border border-[#e3beb9]/30"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Step 1: Select Box Size */}
          <div>
            <label className="block text-xs font-bold text-[#914c00] uppercase tracking-wider mb-2">
              1. Selecciona el tamaño de tu caja:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleSelectBoxSize(6)}
                className={`p-3.5 rounded-2xl border text-center transition-all ${
                  boxSize === 6
                    ? 'border-[#ae1d14] bg-[#ffdad5]/40 text-[#1e1b1a] shadow-xs'
                    : 'border-[#e3beb9]/60 hover:bg-[#faf2f0] text-[#5b403c]'
                }`}
              >
                <span className="font-headline text-lg font-black text-[#ae1d14] block">
                  Caja x 6
                </span>
                <span className="text-xs font-semibold block text-[#914c00]">S/ 6.00</span>
                <span className="text-[11px] text-[#5b403c] block mt-0.5">Ideal para 2 a 3 personas</span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectBoxSize(12)}
                className={`p-3.5 rounded-2xl border text-center transition-all ${
                  boxSize === 12
                    ? 'border-[#ae1d14] bg-[#ffdad5]/40 text-[#1e1b1a] shadow-xs'
                    : 'border-[#e3beb9]/60 hover:bg-[#faf2f0] text-[#5b403c]'
                }`}
              >
                <span className="font-headline text-lg font-black text-[#ae1d14] block">
                  Caja x 12
                </span>
                <span className="text-xs font-semibold block text-[#914c00]">S/ 12.00</span>
                <span className="text-[11px] text-[#5b403c] block mt-0.5">Perfecta para oficina o la familia</span>
              </button>
            </div>
          </div>

          {/* Step 2: Flavor Distribution */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-[#914c00] uppercase tracking-wider">
                2. Distribución de sabores:
              </label>
              <span
                className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                  isComplete
                    ? 'bg-emerald-100 text-emerald-800'
                    : remaining > 0
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {isComplete
                  ? '¡Caja completa!'
                  : remaining > 0
                  ? `Faltan ${remaining} pizzas`
                  : `Sobran ${Math.abs(remaining)}`}
              </span>
            </div>

            <div className="space-y-2.5">
              {[
                { key: 'Americana', desc: 'Mozzarella, jamón ahumado y orégano', icon: '🍕' },
                { key: 'Hawaiana', desc: 'Piña caramelizada a fuego lento y jamón', icon: '🍍' },
                { key: 'Pepperoni', desc: 'Pepperoni crocante y pomodoro italiano', icon: '🌶️' },
              ].map(({ key, desc, icon }) => {
                const count = flavorCounts[key] || 0;
                return (
                  <div
                    key={key}
                    className="p-3 bg-[#faf2f0] rounded-2xl border border-[#e3beb9]/40 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-2xl">{icon}</span>
                      <div className="min-w-0">
                        <span className="font-headline font-bold text-sm text-[#1e1b1a] block truncate">
                          {key}
                        </span>
                        <span className="text-xs text-[#5b403c] block truncate">
                          {desc}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 bg-white px-2 py-1 rounded-full border border-[#e3beb9]/50">
                      <button
                        type="button"
                        onClick={() => handleFlavorChange(key, -1)}
                        disabled={count <= 0}
                        className="w-7 h-7 rounded-full bg-[#f4ecea] hover:bg-[#e8e1df] disabled:opacity-30 text-[#1e1b1a] flex items-center justify-center font-bold text-sm transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>

                      <span className="w-6 text-center font-headline font-extrabold text-sm text-[#ae1d14]">
                        {count}
                      </span>

                      <button
                        type="button"
                        onClick={() => handleFlavorChange(key, 1)}
                        disabled={remaining <= 0}
                        className="w-7 h-7 rounded-full bg-[#ae1d14] hover:bg-[#d1382a] disabled:opacity-30 text-white flex items-center justify-center font-bold text-sm transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 3: Complimentary Sauce */}
          <div>
            <label className="block text-xs font-bold text-[#914c00] uppercase tracking-wider mb-2">
              3. Elige tu salsita casera de cortesía:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                'Salsa Tártara Casera',
                'Crema de Rocoto Arequipeño Suave',
                'Pomodoro Extra con Orégano',
                'Sin Salsita Adicional',
              ].map((sauce) => (
                <button
                  key={sauce}
                  type="button"
                  onClick={() => setSelectedSauce(sauce)}
                  className={`p-2.5 px-3 rounded-xl border text-xs text-left font-semibold flex items-center justify-between transition-all ${
                    selectedSauce === sauce
                      ? 'border-[#ae1d14] bg-[#ffdad5]/40 text-[#ae1d14]'
                      : 'border-[#e3beb9]/40 hover:bg-[#faf2f0] text-[#5b403c]'
                  }`}
                >
                  <span>{sauce}</span>
                  {selectedSauce === sauce && <Check className="w-4 h-4 text-[#ae1d14]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Notes input */}
          <div>
            <label className="block text-xs font-bold text-[#5b403c] mb-1">
              Indicación o dedicatoria opcional:
            </label>
            <input
              type="text"
              value={specialNote}
              onChange={(e) => setSpecialNote(e.target.value)}
              placeholder="Ej. 'Bien tostaditas por favor', 'Para el cumple de Sofi'"
              className="w-full text-xs p-3 rounded-xl border border-[#e3beb9] bg-[#faf2f0] text-[#1e1b1a] focus:outline-hidden focus:border-[#ae1d14]"
            />
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-5 bg-[#faf2f0] border-t border-[#e3beb9]/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span className="text-xs text-[#5b403c] block">Total de tu Caja:</span>
            <span className="font-headline text-2xl font-black text-[#ae1d14]">
              S/ {totalPrice}
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleConfirm}
              disabled={!isComplete}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#914c00] hover:bg-[#ff9b43] text-white hover:text-[#2f1500] disabled:opacity-40 disabled:cursor-not-allowed px-5 py-3 rounded-full font-bold text-xs shadow-sm transition-all"
            >
              <Box className="w-4 h-4" />
              <span>Añadir a Mi Orden</span>
            </button>

            <a
              href={isComplete ? `https://wa.me/${WHATSAPP_PHONE}?text=${whatsappMessage}` : '#'}
              target={isComplete ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#ae1d14] hover:bg-[#d1382a] text-white px-5 py-3 rounded-full font-bold text-xs shadow-sm transition-all ${
                !isComplete ? 'opacity-40 pointer-events-none' : ''
              }`}
            >
              <Send className="w-4 h-4" />
              <span>Pedir x WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
