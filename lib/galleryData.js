// Default gallery images
export const defaultGallery = [
  '/assets/ratar_gul_forest.jpg',
  '/assets/jaflong_pahar.jpg',
  '/assets/lake.jpg',
  '/assets/jaflong_waterfall.jpg',
  '/assets/ful_bagan.jpg',
  '/assets/zero_point.jpg',
  '/assets/unique_ful.jpg',
  '/assets/samne_bharot.jpg',
  '/assets/ratar_gul02.jpg',
  '/assets/ratar_gul_forest01.jpg',
  '/assets/jaflong_zero_point.jpg',
  '/assets/ratar_gul01.jpg',
];

export function getGallery() {
  if (typeof window === 'undefined') return defaultGallery;
  try {
    const saved = localStorage.getItem('portfolio_gallery');
    if (saved) return JSON.parse(saved);
  } catch (e) { /* ignore */ }
  return defaultGallery;
}

export function saveGallery(images) {
  localStorage.setItem('portfolio_gallery', JSON.stringify(images));
}
