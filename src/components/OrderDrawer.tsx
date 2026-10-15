import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, Send, ShoppingBag, MapPin, CreditCard, Sparkles } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data/pizzas';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [deliveryPoint, setDeliveryPoint] = useState<string>('Punto de venta del día (Preguntar esquina)');
  const [paymentMethod, setPaymentMethod] = useState<'Yape' | 'Plin' | 'Efectivo'>('Yape');
  const [customerName, setCustomerName] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  if (!isOpen) return null;

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const buildWhatsAppMessage = () => {
    let msg = `¡Hola La Chica de las Pizzas! Deseo confirmar un pedido:\n\n`;
    if (customerName) {
      msg += `👤 Nombre: ${customerName}\n`;
    }
    msg += `🍕 DETALLE DEL PEDIDO:\n`;
    cart.forEach((item) => {
      msg += `• ${item.quantity}x ${item.name} (S/ ${(item.price * item.quantity).toFixed(2)})\n`;
      if (item.notes) {
        msg += `   └ Nota: ${item.notes}\n`;
      }
    });

    msg += `\n💰 TOTAL: S/ ${totalAmount.toFixed(2)}\n`;
    msg += `💳 Pago sugerido: ${paymentMethod}\n`;
    msg += `📍 Encuentro: ${deliveryPoint}\n`;
    if (notes) {
      msg += `📝 Comentario: ${notes}\n`;
    }
    msg += `\n¿A qué hora o punto puedo acercarme? ¡Muchas gracias!`;
    return encodeURIComponent(msg);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-[#e3beb9]/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="px-5 py-4 bg-[#faf2f0] border-b border-[#e3beb9]/40 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-[#ae1d14] text-white flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-headline font-black text-lg text-[#1e1b1a]">
                Mi Canasta de Minipizzas
              </h3>
              <p className="text-xs text-[#5b403c]">
                {totalItemsCount} {totalItemsCount === 1 ? 'minipizza' : 'unidades'} seleccionadas
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white text-[#5b403c] hover:bg-[#f4ecea] flex items-center justify-center transition-colors border border-[#e3beb9]/30"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-5 overflow-y-auto flex-1 space-y-5">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <span className="text-5xl">🍕</span>
              <h4 className="font-headline text-lg font-bold text-[#1e1b1a]">
                Tu canasta está vacía
              </h4>
              <p className="text-xs text-[#5b403c] max-w-xs mx-auto">
                Elige tus minipizzas favoritas a solo S/ 1.00 cada una o arma una cajita para compartir.
              </p>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 bg-[#faf2f0] rounded-2xl border border-[#e3beb9]/40 flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-headline font-bold text-sm text-[#1e1b1a] block truncate">
                          {item.name}
                        </span>
                        <span className="font-headline font-black text-sm text-[#ae1d14]">
                          S/ {(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      {item.notes && (
                        <p className="text-[11px] text-[#5b403c] mt-0.5 line-clamp-2">
                          {item.notes}
                        </p>
                      )}
                      <span className="text-[10px] text-[#914c00] font-semibold">
                        S/ {item.price.toFixed(2)} c/u
                      </span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-full border border-[#e3beb9]/40 shrink-0">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded-full bg-[#f4ecea] hover:bg-[#e8e1df] flex items-center justify-center text-xs font-bold"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-5 text-center font-bold text-xs text-[#ae1d14]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded-full bg-[#ae1d14] text-white hover:bg-[#d1382a] flex items-center justify-center text-xs font-bold"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[#854555] hover:text-[#ae1d14] p-1"
                      title="Quitar"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Preferences Section */}
              <div className="space-y-3 pt-3 border-t border-[#e3beb9]/40 text-xs">
                <div>
                  <label className="block font-bold text-[#1e1b1a] mb-1">
                    Tu Nombre (opcional):
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Ej. Carlos / Lucía"
                    className="w-full p-2.5 rounded-xl border border-[#e3beb9] bg-[#faf2f0] text-[#1e1b1a]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#1e1b1a] mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#ae1d14]" />
                    <span>Lugar de encuentro o entrega:</span>
                  </label>
                  <select
                    value={deliveryPoint}
                    onChange={(e) => setDeliveryPoint(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#e3beb9] bg-[#faf2f0] text-[#1e1b1a] font-semibold"
                  >
                    <option value="Punto de venta del día (Preguntar esquina)">Punto de venta del día (Preguntar esquina)</option>
                    <option value="UNSA (Ingenierías / Sociales)">UNSA (Ingenierías / Sociales)</option>
                    <option value="Plaza de Armas / Calle Mercaderes">Plaza de Armas / Calle Mercaderes</option>
                    <option value="Mirador de Yanahuara">Mirador de Yanahuara</option>
                    <option value="Av. Ejército / Mall Plaza">Av. Ejército / Mall Plaza</option>
                    <option value="UCSM La Católica">UCSM La Católica</option>
                    <option value="Coordinar entrega a domicilio en Arequipa">Coordinar entrega a domicilio en Arequipa</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#1e1b1a] mb-1 flex items-center gap-1">
                    <CreditCard className="w-3.5 h-3.5 text-[#914c00]" />
                    <span>Método de Pago:</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Yape', 'Plin', 'Efectivo'] as const).map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setPaymentMethod(method)}
                        className={`p-2 rounded-xl border font-bold text-center transition-all ${
                          paymentMethod === method
                            ? 'border-[#ae1d14] bg-[#ffdad5]/50 text-[#ae1d14]'
                            : 'border-[#e3beb9]/50 hover:bg-[#faf2f0] text-[#5b403c]'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#1e1b1a] mb-1">
                    Nota para la cocinera:
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ej. 'Bien calientitas', 'Con harto orégano'"
                    className="w-full p-2.5 rounded-xl border border-[#e3beb9] bg-[#faf2f0] text-[#1e1b1a]"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 bg-[#faf2f0] border-t border-[#e3beb9]/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#5b403c] font-semibold">Total a Pagar:</span>
              <span className="font-headline text-2xl font-black text-[#ae1d14]">
                S/ {totalAmount.toFixed(2)}
              </span>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${buildWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#ae1d14] hover:bg-[#d1382a] text-white rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#ae1d14]/25 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Pedido a WhatsApp</span>
            </a>

            <div className="flex justify-between items-center text-[11px] text-[#5b403c] px-1">
              <span>💳 Aceptamos Yape, Plin y Efectivo</span>
              <button
                onClick={onClearCart}
                className="text-[#854555] hover:underline"
              >
                Vaciar canasta
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
