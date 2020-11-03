import s from './skeleton.module.css'

export default function Skeleton({ children, style }) {
  return (
    <span className={s.skeleton} style={style}>
      {children}
    </span>
  )
}
