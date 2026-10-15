import { PizzaItem, Hotspot, Testimonial } from '../types';

export const WHATSAPP_PHONE = '51934398066';
export const WHATSAPP_DISPLAY = '934 398 066';

export const BRAND_ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida/AEtjO1W7jR-eyU9osTECxqD9us_xU1ISO7yKBVD80jPhiGx1XvFogFJBa8PDwDAhb4evq_ITzaC1YzqzFlxf77rnsE5Ttwif9of838-A0ENVrxhpNAssfDTiFn11kGKlC-6XnXyd5XH0OobJKSovzUtwhT33iksZUrf8pw6GAnwAGikK7nhpz-tNs8nPFZ6PYC53r5ZixlHDheRaWKlm9sW9-evWXl0nVV3s2f6NKSBzSL3hufSyYPB7Y913_qWC-cqEeEpfkr_BS5RyIw',
  desktopHeroPizza: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9XYemo0JeMs4bhgf0oI5-wRlqtf_T27wdg9QWD9xrWDAtcWiG-YDXETifO8vm2txIvPKmR9qt9Moea83MEn3tmuML9Uc89nSZrRWJa6s3kPvfuOibb2R3gje4RwdFKYMVeIRoLypBCtOSvi4zzJ73kI3W-fk84uJBsR-zAnjU65qVw3MiEBoHNJDBm5SMJemUHbivAO2fcpCf_sHTlq4_HADoVAn0t3WaZ77jtSbNWx6dgFOP7R57',
  mobileHeroPizza: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJyHTd7QK9hD6KpbE96tODHhTM3pgsE3Fi2gfnFAzgvb8niavLZXyE21OgLA_bEmoe9T9i5icJTzdFDn7pvyhJHb0ccYYT3jUjnJxrcZyfkWBiNFawpQji-v-rQ_8Lk709iiBlrWUhPDcUxy8VJSIXlWuw7wcguncgRpMpC1RCLAQfVo5jZtN3HGIPS_tLtJwiNmT32UUiPPKYos4qz48TstYobEc7Ff8OoYA4bD58yVUy-JqFs8vG',
  chefProfile: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj1AHRvrpClCdFOR10xi5EVp5VK6P7wRimBuAITvtZavmyMnccgk_0cCpS0H4TsAk23YrT9bBYb4OESedi5JbdS1xblCD-hHlRX5QrMy8EnO1s0WPZHh5F-myT8rT2zn79c6uoET6TdeDlmmOfKeDz0fyXIMa8uCKgGqgXd2yBuWmjMm_LBSx_mrEBhCYg_M_XEym4aPQI0FrL5m4v4sImSBVl6QThcW9gj7k1VC-sXncgL3hjSmjinq14EUvRzO7eww',
  mapBackground: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAh62w2Te1d8jmexlv0RkcpzAi7tWgMjnrSFO0zdBMeEe6v2_Qw9lKiQxqTyhIdDZWD5-M6vjCfhnzSgplTBLzS5cXrD_yNVTEMwc9LH9jIxpKobDTp6RnLr8m_6oY7YoppR9yPAYAsC7p83js8zY2T0ulqrfTk_BrV6JImqkIQuswMCn3MJ6JEjhFQyVw0dvSg4qJuLAtGUl18wI1xtT3cCNuIHveutrZx70_C1DSsvzMRBhMx9YY'
};

export const PIZZA_ITEMS: PizzaItem[] = [
  {
    id: 'americana',
    name: 'Clásica Americana',
    category: 'individual',
    badge: 'La Favorita ⭐',
    badgeColor: 'bg-[#ae1d14] text-white',
    price: 1.00,
    priceLabel: 'S/ 1.00',
    description: 'Queso mozzarella derretido con burbujas doradas, jamón seleccionado, salsa de tomate casera y toque de orégano andino aromático.',
    ingredients: ['Mozzarella dorada', 'Jamón ahumado selecto', 'Pomodoro artesanal', 'Orégano andino de Characato'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxaPJXuMZn31ri0nPEjp1mz8ywtnveZ78K48LBsiQ1zHAZbpqBJLIDOR1YON_zJs7CR5b_jHRCCRj9I43zcV9iU7MRq1GbBHe7dAxwX3iVraDKUWUgOknFHPBgLQScgzLGX79NhrPWLPCiu7a4QoOPMKJkdp-mRNAzrijvFRmkWBUY0nNptZv7Lf6SZDhDu6xBCUiGgz1mhvs4u2J7S1cLxGrwCu1VOexacP1gXS9YZh0wK3u2rH74',
    subtext: 'Masa crujiente reposada 24 horas',
    hotNote: 'Sale calientita'
  },
  {
    id: 'hawaiana',
    name: 'Minipizza Hawaiana',
    category: 'individual',
    badge: 'Dulce & Salada 🍍',
    badgeColor: 'bg-[#914c00] text-white',
    price: 1.00,
    priceLabel: 'S/ 1.00',
    description: 'Jamoncito en trozos, piña suave caramelizada a fuego lento y abundante mozzarella estirable que enamora al primer bocado.',
    ingredients: ['Piña caramelizada a fuego lento', 'Jamón en cubitos', 'Mozzarella elástica', 'Salsa casera suave'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIZAFdBy-DRABgVUJuItEPdXh7pausNzP5Ly4FbPuVU6SH_92ojNgw6HfZ6IA9iBpFT4k_ttDsSAoW8oi_uxLwWyiqZJXoaNNlKcGyBh63iBdutoddkNyLYZ5pXhS7djhBGZp5R871vik73gvZs73PJIRM_1EBr6ltHz-6Yn8Om4KTDmRFmkM4PYPxRuKFqmRiEOEzl5K7hgDAACXuDBRXHtGhtgLeQMtFvqqL1fSq0MiZcrLBaaz1',
    subtext: 'El equilibrio agridulce favorito de los jóvenes',
    hotNote: 'Equilibrio perfecto'
  },
  {
    id: 'pepperoni',
    name: 'Pepperoni & Queso',
    category: 'individual',
    badge: 'Sabor Intenso 🍕',
    badgeColor: 'bg-[#854555] text-white',
    price: 1.00,
    priceLabel: 'S/ 1.00',
    description: 'Láminas crocantes de pepperoni sobre base crujiente con abundante salsa pomodoro italiana y queso derretido.',
    ingredients: ['Pepperoni crocante tostado', 'Mozzarella fundida', 'Pomodoro italiano', 'Toque de pimienta negra'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB61TzrHDAchFIJzKOo6mckauRqU90Mm0Th4iVvTU3cUgPV09L4-NBEx4d-wLcsx1086pKwCTaJ-PezAFzwF4HiSkMU_eFpQGDs9wLU6WiND_9vPN1VkjSnPLnOJMRXW8_WSwABEdqUq0glQNFxx7b6jBGUqo-lRyKhCAhazC6vVX6w_HZXQF5J5_SC97DIpEH3OJ2OH_CVQQMoNQZ5rEs7PiROTGvhZ81h5qo37UYiP-vZ-AD_692',
    subtext: 'Bordes con leve tostado a la piedra',
    hotNote: 'Bien tostaditas'
  },
  {
    id: 'pack-amigos',
    name: 'Pack Amigos (x6 o x12)',
    category: 'pack',
    badge: 'Ideal Compartir 🎁',
    badgeColor: 'bg-[#ff9b43] text-[#6c3800]',
    price: 6.00,
    priceLabel: 'x6 ó x12',
    description: 'Cajita personalizada con 6 ó 12 minipizzas variadas. Perfecta para la oficina, cumpleaños, reuniones universitarias o la once en casa.',
    ingredients: ['Surtido a tu gusto (Americana, Hawaiana, Pepperoni)', 'Caja térmica hermética', 'Servilletas y salsitas de la casa'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCotvwiLBUEV1AYY5yNLAHJA_wikyEn1bLhDGofXajRcvAFv4gPPOgh88Nh8mAWHRN11G4s-__XThOofv6g5hfCExSdDD6Izz4WpAgeN8qunh-WNJFjHJSHLnxyOpDeMPf-Q2nOqRpei8j3J1BjeyOh8d0jTExrl5q-KqfVffE5Hv3JDSYcgM-bcFMeaF7qwHuG5UZ1odZlPFEkcQN5fdTnFgtgk3N9heDu6z_m7w_I0MOQ-oudmTN_',
    subtext: 'Mantiene el calor hasta por 45 minutos',
    hotNote: 'Caja térmica lista',
    packSize: 6
  }
];

export const HOTSPOTS: Hotspot[] = [
  {
    id: 'unsa',
    name: 'UNSA (Ingenierías & Sociales)',
    area: 'Av. Independencia & Av. Venezuela',
    timeWindow: '4:00 PM - 5:30 PM',
    description: 'Punto estratégico de encuentro universitario. Minipizzas recién calientes para la salida de clases.',
    coordinates: { x: 58, y: 46 },
    icon: 'school',
    popularFor: 'Estudiantes saliendo de clases y grupos de estudio'
  },
  {
    id: 'plaza',
    name: 'Plaza de Armas / Calle Mercaderes',
    area: 'Centro Histórico de Arequipa',
    timeWindow: '5:30 PM - 7:00 PM',
    description: 'Paseando por los portales de sillar y la peatonal Mercaderes con canasta térmica sellada.',
    coordinates: { x: 44, y: 52 },
    icon: 'temple_hindu',
    popularFor: 'Paseantes del centro, familias y oficinistas'
  },
  {
    id: 'yanahuara',
    name: 'Mirador y Plaza de Yanahuara',
    area: 'Yanahuara Tradicional',
    timeWindow: '6:30 PM - 7:45 PM',
    description: 'Frente a los arcos con vista al volcán Misti al atardecer. Ideal para acompañar la vista.',
    coordinates: { x: 38, y: 35 },
    icon: 'deck',
    popularFor: 'Turistas, parejas y tardes de atardecer arequipeño'
  },
  {
    id: 'ejercito',
    name: 'Av. Ejército & Paraderos Clave',
    area: 'Yanahuara / Cayma',
    timeWindow: '7:00 PM - 8:00 PM',
    description: 'Paraderos de retorno a casa frente al Mall Plaza y Real Plaza. Rápido y calientito.',
    coordinates: { x: 48, y: 28 },
    icon: 'traffic',
    popularFor: 'Retorno a casa después del trabajo'
  },
  {
    id: 'ucsm',
    name: 'UCSM (La Católica)',
    area: 'Urb. San Jerónimo, Umacollo',
    timeWindow: 'Tardes coordinadas x WhatsApp',
    description: 'Entregas especiales en puerta principal y paradero de Umacollo con previo aviso.',
    coordinates: { x: 32, y: 60 },
    icon: 'local_library',
    popularFor: 'Reuniones de amigos y centros federados'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Mateo Rivas',
    role: 'Estudiante de Ing. Civil - UNSA',
    location: 'Av. Independencia',
    avatarEmoji: '👷‍♂️',
    quote: 'Salimos con hambre a las 5pm y ver su canasta térmica es salvación pura. Por S/ 2.00 te compras dos minipizzas calientitas y además apoyas a una futura colega chef.',
    pizzasCount: 'Cliente habitual x2 pizzas diarias'
  },
  {
    id: '2',
    author: 'Luciana Paredes',
    role: 'Asistente Contable',
    location: 'Calle Mercaderes',
    avatarEmoji: '💼',
    quote: 'Pedimos una cajita de 12 para la oficina en Mercaderes. Llegaron súper crujientes con el queso elástico. ¡La salsa pomodoro casera tiene ese toque casero inigualable!',
    pizzasCount: 'Caja x12 cada viernes'
  },
  {
    id: '3',
    author: 'Carlos & Diana',
    role: 'Pareja en Yanahuara',
    location: 'Plaza Yanahuara',
    avatarEmoji: '❤️',
    quote: 'Comer minipizzas recién salidas del horno viendo el Misti al atardecer es el mejor plan de fin de semana en Arequipa. Mucho éxito con tu carrera culinaria.',
    pizzasCount: 'Fan de la Hawaiana'
  }
];

export const FAQ_ITEMS = [
  {
    q: '¿Por qué cuestan solo S/ 1.00 cada una?',
    a: 'Es un precio solidario y popular pensado para que cualquier estudiante, trabajador o transeúnte pueda disfrutar un bocado de calidad sin pensarlo. Multiplicando muchas porciones al día logro cubrir mis costos e ingresar las cuotas de mi carrera en Alta Cocina y Pastelería.'
  },
  {
    q: '¿Cómo las conservas calientes en la calle?',
    a: 'Uso una canasta gastronómica con aislamiento térmico multicapa y piedra refractaria precalentada que mantiene las minipizzas a más de 65°C crujientes y con el queso suave hasta la última unidad.'
  },
  {
    q: '¿Qué medios de pago aceptas?',
    a: 'Aceptamos Yape, Plin y efectivo exacto (moneditas de S/ 1.00, S/ 2.00 y S/ 5.00 son muy bienvenidas).'
  },
  {
    q: '¿Hacen pedidos grandes para cumpleaños o eventos?',
    a: '¡Sí! Preparamos cajas de 24, 50 y hasta 100+ minipizzas con 24 horas de anticipación para reuniones en oficinas, colegios, universidades o cumpleaños en Arequipa con entrega coordinada.'
  }
];
