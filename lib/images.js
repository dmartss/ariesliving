export const IMAGES = [
  '/showcase/ithaca/rooms/cks/5.jpg',
  '/showcase/villa-paradiso/rooms/multi-unit/1.jpg',
  '/showcase/ithaca/rooms/sk/2.jpg',
  '/showcase/treehouse/rooms/ql/1.jpg',
  '/showcase/villa-paradiso/rooms/16/1.jpg'
]

export const randomImage = IMAGES.sort(() => Math.random() - 0.5)

const linesGalleryImages = [
  {
    src: 'villa-paradiso/rooms/multi-unit/2.jpg',
    alt: 'Villa Paradiso Hotel'
  },
  {
    src: 'villa-paradiso/rooms/multi-unit/3.jpg',
    alt: 'Villa Paradiso Hotel'
  },
  { src: 'villa-paradiso/rooms/16/9.jpg', alt: 'Villa Paradiso Hotel' },
  { src: 'villa-paradiso/rooms/18/1.jpg', alt: 'Villa Paradiso Hotel' },
  { src: 'villa-paradiso/rooms/18/2.jpg', alt: 'Villa Paradiso Hotel' },
  { src: 'villa-paradiso/rooms/18/3.jpg', alt: 'Villa Paradiso Hotel' },
  { src: 'ithaca/entrance/2.jpg', alt: 'Ithaca of South Beach Hotel' },
  { src: 'ithaca/rooms/cks/9.jpg', alt: 'Ithaca of South Beach Hotel' },
  { src: 'ithaca/rooms/dqs/1.jpg', alt: 'Ithaca of South Beach Hotel' },
  { src: 'ithaca/rooms/dqs/4.jpg', alt: 'Ithaca of South Beach Hotel' },
  { src: 'ithaca/rooms/dqs/9.jpg', alt: 'Ithaca of South Beach Hotel' },
  { src: 'ithaca/rooms/sk/10.jpg', alt: 'Ithaca of South Beach Hotel' },
  { src: 'ithaca/rooms/sk/14.jpg', alt: 'Ithaca of South Beach Hotel' },
  { src: 'treehouse/lobby/1.jpg', alt: 'Treehouse Studio Hotel' },
  { src: 'treehouse/lobby/4.jpg', alt: 'Treehouse Studio Hotel' },
  { src: 'treehouse/rooms/fr/1.jpg', alt: 'Treehouse Studio Hotel' },
  { src: 'treehouse/rooms/qd/1.jpg', alt: 'Treehouse Studio Hotel' },
  { src: 'treehouse/rooms/ql/1.jpg', alt: 'Treehouse Studio Hotel' }
]

export const shuffled = linesGalleryImages.sort(() => 0.5 - Math.random()).slice(0, 5)
