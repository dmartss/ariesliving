export const FACEBOOK = 'https://www.facebook.com/Aries-Living-112940767034421/'
export const TWITTER = 'https://twitter.com/aries_living'
export const INSTAGRAM = 'https://instagram.com/ariesliving'
export const NAME = 'Aries Living'
export const LLC = 'Aries Living YT LLC'
export const EMAIL = 'info@ariesliving.com'
export const PHONE = '+1 (813) 575-4532'
export const ADDRESS = ['667 Madison Ave, 5th Floor', 'New York, NY 10065']
export const PLATFORM_URL = 'https://ariesliving.com'
export const defaultOgImage =
  'https://res.cloudinary.com/dqtpoczux/image/upload/v1597079319/Aries_Living_Black_1_1_i7zxvd.png'

export const HOTELS = [
  {
    name: 'Villa Paradiso Hotel',
    url: 'https://villaparadisohotels.com',
    rezUrl: 'https://villaparadiso.reztrip.com/',
    alt: 'vp',
    src: '/showcase-thumbnails/villa-paradiso/exterior/1.jpg'
  },
  {
    name: 'Treehouse Studio Hotel',
    url: 'https://treehousebyaries.com',
    rezUrl: 'https://treehousestudio.reztrip.com/',
    alt: 'treehouse',
    src: '/showcase-thumbnails/treehouse/back/1.jpg'
  },
  {
    name: 'Ithaca of South Beach Hotel',
    url: 'https://ithacasouthbeach.com',
    rezUrl: 'https://ithacahotel.reztrip.com/',
    alt: 'ithaca',
    src: '/showcase-thumbnails/ithaca/entrance/1.jpg'
  }
]

export const TEAM = [
  { name: 'Max Khaghan', position: 'CEO', description: '', img: '/team/dan.jpg' },
  { name: 'James Khaghan', position: 'CFO', description: '', img: '/team/dan.jpg' },
  { name: 'Dan Martin', position: 'C', description: '', img: '/team/dan.jpg' },
  { name: 'Daniel Tennant', position: 'C', description: '', img: '/team/dan.jpg' },
  { name: 'Jordan Goldman', position: 'C', description: '', img: '/team/dan.jpg' }
]

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
