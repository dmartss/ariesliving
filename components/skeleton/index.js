import { skeletonContainer, skeleton } from './skeleton.module.css'

export default function Skeleton({ children, style }) {
  return (
    <div className={skeletonContainer}>
      <span className={skeleton} style={style}>
        {children}
      </span>
    </div>
  )
}
