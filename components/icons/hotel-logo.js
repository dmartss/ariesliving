import Logo from './logo'
import IthacaLogo from './ithaca-logo'
import TreehouseLogo from './treehouse-logo'
import VPLogo from './vp-logo'

export default function HotelLogo({ hotel, ...props }) {
  if (hotel === 'treehouse') return <TreehouseLogo {...props} />
  if (hotel === 'ithaca-south-beach') return <IthacaLogo {...props} />
  if (hotel === 'villa-paradiso') return <VPLogo {...props} />
  return <Logo />
}
