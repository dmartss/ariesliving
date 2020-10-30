import Logo from './logo'
import IthacaLogo from './ithaca-logo'
import TreehouseLogo from './treehouse-logo'
import VPLogo from './vp-logo'

export default function HotelLogo({ hotel, ...props }) {
  return hotel === 'treehouse' ? (
    <TreehouseLogo {...props} />
  ) : hotel === 'ithaca-south-beach' ? (
    <IthacaLogo {...props} />
  ) : hotel === 'villa-paradiso' ? (
    <VPLogo {...props} />
  ) : (
    <Logo />
  )
}
