import Logo from './logo'
import IthacaLogo from './ithaca-logo'
import EivissaLogo from './eivissa-logo'
import VPLogo from './vp-logo'

export default function HotelLogo({ hotel, ...props }) {
  return hotel === 'eivissa' ? (
    <EivissaLogo {...props} />
  ) : hotel === 'ithaca-south-beach' ? (
    <IthacaLogo {...props} />
  ) : hotel === 'villa-paradiso' ? (
    <VPLogo {...props} />
  ) : (
    <Logo />
  )
}
