import Logo from './logo'
import IthacaLogo from './ithaca-logo'
import TreehouseLogo from './treehouse-logo'
import VPLogo from './vp-logo'

export default function HotelLogo({ hotel, ...props }) {
  switch (hotel) {
    case 'treehouse':
      return <TreehouseLogo {...props} />
    case 'ithaca-south-beach':
      return <IthacaLogo {...props} />
    case 'villa-paradiso':
      return <VPLogo {...props} />
    default:
      return <Logo />
  }
}
