export const SITE_NAME = 'Bethesda Baptist Church';
export const SITE_NAME_NE = 'बेथेस्दा ब्याप्टिष्ट चर्च';
export const SITE_URL = 'https://bethesdabaptistktm.com';

export const CONTACT = {
  address: 'Dhumbarahi-4, Kathmandu, Nepal',
  phones: ['+977 9841-672-936', '+977 9818-971-737'],
  email: 'harichhetri2@gmail.com',
  mapsQuery: 'Dhumbarahi-4, Kathmandu, Nepal',
};

// Structured form of CONTACT.address, used for search-engine schema markup.
export const POSTAL_ADDRESS = {
  streetAddress: 'Dhumbarahi-4',
  addressLocality: 'Kathmandu',
  addressRegion: 'Bagmati Province',
  postalCode: '44602',
  addressCountry: 'NP',
};

export type NavKey =
  | 'home'
  | 'about'
  | 'faith'
  | 'covenant'
  | 'visit'
  | 'sermons'
  | 'ministries'
  | 'contact'
  | 'giving';

// Top-level nav. "about" is a dropdown trigger, not a direct link — see ABOUT_SUBNAV.
export const NAV: { key: NavKey; path: string | null }[] = [
  { key: 'home', path: '/' },
  { key: 'about', path: null },
  { key: 'visit', path: '/visit/' },
  { key: 'sermons', path: '/sermons/' },
  { key: 'ministries', path: '/ministries/' },
  { key: 'contact', path: '/contact/' },
  { key: 'giving', path: '/giving/' },
];

export const ABOUT_SUBNAV: { key: NavKey; path: string }[] = [
  { key: 'about', path: '/about/' },
  { key: 'faith', path: '/beliefs/' },
  { key: 'covenant', path: '/covenant/' },
];
