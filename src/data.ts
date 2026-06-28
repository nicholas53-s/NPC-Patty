// ── WhatsApp ──────────────────────────────────────────────────
export const WHATSAPP_NUMBER = '6281399642072';
export const WHATSAPP_MESSAGE =
  "Hi Neil's Patty Club! I'd like to place an order.";
export const waLink = `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// ── Contact & social ──────────────────────────────────────────
export const INSTAGRAM = 'https://www.instagram.com/neilspattyclub/';
export const ADDRESS = 'Tanjung Duren Utara, West Jakarta, Indonesia';
export const HOURS = 'Exclusive Pre-Order';

export const STAR = '✦';

// ── Nav ───────────────────────────────────────────────────────
export const NAV = {
  badge: 'NPC',
  name: "Neil's Patty Club",
  links: [
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Story', href: '#story' },
    { label: 'Contact', href: '#contact' },
  ],
  cta: 'Order on WhatsApp',
};

// ── Hero ──────────────────────────────────────────────────────
export const HERO = {
  eyebrow: 'Members, not customers',
  titleLine1: 'THE PATTY',
  titleLine2: 'FIRST.',
  sub: 'Stacked. Seared. Signature.',
  body: 'A thick-burger house built around one obsession: the patty. Char on the outside. Juicy in the middle. The bun is just the room.',
  ctaPrimary: 'Order on WhatsApp',
  ctaSecondary: 'See the menu',
  slides: [
    '/photos/IMG_3738_pro.jpg',
    '/photos/IMG_3641_pro.jpg',
    '/photos/IMG_3727_pro.jpg',
    '/photos/IMG_3607_pro.jpg',
  ],
};

// ── Story ─────────────────────────────────────────────────────
export const STORY = {
  kicker: 'The Club',
  title: 'Club, not chain.',
  lead: 'Most brands sell a burger. We sell the patty — thick, juicy, char on the outside, pink in the middle. The patty is the guest of honor.',
  cards: [
    {
      title: 'Patty-first',
      body: "Hand-formed at the same weight. Seared to the same temperature. Rested the same way — or it doesn't leave the kitchen.",
    },
    {
      title: 'Loud & honest',
      body: 'No corporate fluff. The food does the talking. The bite does the bragging.',
    },
    {
      title: 'Our sauce?',
      body: 'Still a secret. Some rules of a good burger are just facts.',
    },
  ],
};

// ── Menu ──────────────────────────────────────────────────────
export const MENU_SECTION = {
  kicker: 'The Lineup',
  title: 'The menu.',
  note: 'Every patty: hand-formed, hard-seared, rested two minutes. No order system here — tap any item to order on WhatsApp.',
};

export type MenuItem = {
  name: string;
  note: string;
  price: string;
  image: string;
  hot?: boolean;
};

export type MenuType = 'burger' | 'fries';

export const MENU_TABS: { id: MenuType; label: string }[] = [
  { id: 'burger', label: 'Burgers' },
  { id: 'fries', label: 'Fries' },
];

export const MENU: Record<MenuType, MenuItem[]> = {
  burger: [
    {
      name: `Neil's Signature`,
      note: 'Juicy beef patty, melted American cheese, signature NPC sauce, and soft toasted buns. Simple, timeless, and built to satisfy.',
      price: 'Rp50k',
      image: '/photos/menu/signature.png',
    },
    {
      name: `Neil's Double Stack`,
      note: 'Double the beef. Double the cheese. Double the satisfaction. Two perfectly thick patties stacked high for those who believe more is more.',
      price: 'Rp62k',
      image: '/photos/menu/double-stack.png',
    },
    {
      name: `Neil's Bacon Club`,
      note: 'A total flavor party! First, you get a giant hit of SMOKY warmth, then a loud, super-satisfying TEXTURE that snaps with every single bite.',
      price: 'Rp76k',
      image: '/photos/menu/bacon-club.png',
    },
  ],
  fries: [
    {
      name: `Neil's Fries`,
      note: "Crisp on the outside. Fluffy in the middle. Salted just right with our special salt of course. The patty's best friend.",
      price: 'Rp15k',
      image: '/photos/menu/fries.png',
    },
  ],
};

// ── Gallery ───────────────────────────────────────────────────
export const GALLERY_SECTION = {
  kicker: 'Patty Porn',
  title: 'The grid.',
  note: 'Two sides of the same obsession — dark and bright. All patty.',
};

export type GalleryTile = { src: string; alt: string; theme: 'dark' | 'light' };

export const GALLERY: GalleryTile[] = [
  {
    src: '/photos/IMG_3738_pro.jpg',
    alt: 'Single thick patty, hero-lit',
    theme: 'dark',
  },
  {
    src: '/photos/gallery/light-1.jpg',
    alt: 'Cheeseburger close-up',
    theme: 'light',
  },
  {
    src: '/photos/IMG_3727_pro.jpg',
    alt: 'Hand-stacking the patty',
    theme: 'dark',
  },
  {
    src: '/photos/gallery/light-2.jpg',
    alt: 'Bacon cheeseburger',
    theme: 'light',
  },
  { src: '/photos/IMG_3641_pro.jpg', alt: 'Golden fries', theme: 'dark' },
  {
    src: '/photos/gallery/light-3.jpg',
    alt: 'Bite cross-section',
    theme: 'light',
  },
  { src: '/photos/IMG_3607_pro.jpg', alt: 'Three on the rack', theme: 'dark' },
  {
    src: '/photos/gallery/light-4.jpg',
    alt: 'Pull-apart in hand',
    theme: 'light',
  },
];

// ── Contact ───────────────────────────────────────────────────
export const CONTACT = {
  kicker: 'Your seat at the counter',
  title: 'JOIN THE PATTY CLUB.',
  body: 'No online order system — every order goes straight to us on WhatsApp. Come hungry. Leave a member.',
  cta: 'Order on WhatsApp',
};

// ── Footer ────────────────────────────────────────────────────
export const FOOTER = {
  tagline: 'NPC · STACKED. SEARED. SIGNATURE. · NPC',
  // The name-play aside. brand is shown in red; prefix/suffix wrap it.
  nameNote: {
    prefix: "Yes, it's",
    brand: "Neil's",
    suffix: '— a little wink to the founder, Niel.',
  },
};
