import { loading } from './loading-dots.module.css'

export default function LoadingDots({ children = undefined }) {
  return (
    <span className={loading}>
      {children}
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </span>
  )
}
