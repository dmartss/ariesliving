import { memo } from 'react'
import cn from 'classnames'
import Banner from './banner'
import Nav from './navbar'
import styles from './header.module.css'

const Header = ({ sticky = true, errorPage }) => {
  return (
    <>
      <Banner />

      <header
        className={cn(styles.header, {
          [styles.sticky]: sticky,
          [styles.hideBorder]: errorPage
        })}
      >
        <Nav errorPage={errorPage} />
      </header>
    </>
  )
}

export default memo(Header)
