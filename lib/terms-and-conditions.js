export default function TermsAndConditions(hotel) {
  let name = 'Aries Living'
  let email = 'info@ariesliving.com'
  if (hotel === 'treehouse') {
    name = 'Treehouse Studio Hotel'
    email = 'treehouse@ariesliving.com'
  }
  if (hotel === 'ithaca-south-beach') {
    name = 'Ithaca South Beach'
    email = 'ithaca@ariesliving.com'
  }
  if (hotel === 'villa-paradiso') {
    name = 'Villa Paradiso'
    email = 'villaparadiso@ariesliving.com'
  }
  return [
    'Reservations require a valid credit card at the time of booking (Visa, American Express, MasterCard, Discover), email and mobile phone number. Aries Living does not accept cash or check payments.',

    'Guests must be 21 years or older to book a reservation. Minimum check-in age is 21.',

    'Hotel check-in is at 4:00 p.m. Check-out is at 11:00 a.m. Early check-in and late check-out may be available upon request and is subject to availability. Additional fees will apply.',

    'We will do our best to honor your room and bed type preferences based on availability at the time of stay. Please note that room and bed type preferences are a request and not a guarantee.',

    'A valid photo ID and credit card are required at check-in.',

    'Please note that the full amount of the reservation is due before arrival. You are not permitted to enter the property until the full payment has been completed.',

    'An additional incidental amount of $150 will be placed on your credit card provided at check in for incidentals. The final amount of your stay will post at check-out and the remaining funds on hold will be released at that time. These funds may take up to 72 business hours to be reflected on your account.',

    'Only the assigned number of guests are allowed in the hotel room. Any additional, unregistered, guests staying in the room any time after 11pm will be charged $150 per person to the credit card on file.',

    'Parties and gatherings of any kind are strictly prohibited. If guests are found to have had a party, guests will be responsible for extra cleaning charges and in the unfortunate event of the disruptions alerting neighbors, guests may be subject to fines.',

    'All damages and breakages must be reported to us as soon as reasonably practicable. Failure to report them will likely result in a penalty deduction from the security deposit. In the result of any room damages or missing room items guest credit card on file will be charged to cover damages or missing items after departure. To avoid damages and breakages, no furniture is to be moved whatsoever.',

    'You are liable for all charges posted to your room(s). You are further liable for all damages (including missing items) to the room(s) caused by you or your guests during your stay. Should your plans require you to adjust your departure date, please check with Guest Services on room availability, but note that availability is not guaranteed, and your rate may be subject to change.',

    `${name} is a 100% smoke-free hotel. Smoking is strictly prohibited in all guest rooms. A minimum cleaning fee of $250 will be charged for violations.`,

    'Damaged linens due to make-up stains and or other stains will be charged for each of the following: $15 pillowcases, $15 towels, $25 sheets, and $50 duvets.',

    'All kitchenware must be accounted for at the time of checkout. If items from the kitchen are missing the credit card on file will be charged $10 per each unit missing.',

    `${name} will provide 2 beach towels and 2 beach chairs per room. Guests are responsible for returning the towels & chair to their room. Any items not returned in good order will result in the following charges: $20 per beach towel and $50 per beach chair.`,

    `${name} is not responsible for any lost or stolen items.`,

    'No pets allowed. An additional cleaning fee of $250 will be charged to the credit card on file should there be evidence of any pets staying in the room.',

    `Aries Living does not share customer information and credit card transactions to comply with Payment Card Industry (PCI) Data Security Standards. If you would like to review, correct, update, or delete Personal Information that you have previously provided to us, you may contact us by calling or texting us at 1.813.575.4532 or via email at: ${email}.`
  ]
}
