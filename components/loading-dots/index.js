import styles from './loading-dots.module.css'

export default function LoadingDots({ children = undefined }) {
  return (
    <span className={styles.loading}>
      {children}
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </span>
  )
}
