import s from './loading-dots.module.css'

export default function LoadingDots({ children = undefined }) {
  return (
    <span className={s.loading}>
      {children}
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </span>
  )
}
