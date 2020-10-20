export default function getTerms(hotel) {
  let name = 'Aries Living'
  let email = 'info'
  if (hotel === 'treehouse') {
    name = 'Treehouse Studio Hotel'
    email = 'treehouse'
  }
  if (hotel === 'ithaca-south-beach') {
    name = 'Ithaca South Beach'
    email = 'ithaca'
  }
  if (hotel === 'villa-paradiso') {
    name = 'Villa Paradiso'
    email = 'villaparadiso'
  }
  return { name, email }
}
