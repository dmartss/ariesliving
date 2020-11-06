import cn from 'classnames'
import { root } from './grid.module.css'

const Grid = ({ className, children }) => {
  const rootClassName = cn(root, className)
  return <div className={rootClassName}>{children}</div>
}

export default Grid
