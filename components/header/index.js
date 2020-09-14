import { memo } from 'react'
import cn from 'classnames'
import Banner from './banner'
import Nav from './navbar'
import styles from './header.module.css'

const Header = ({ sticky = true }) => {
  return (
    <>
      <Banner />

      <header className={cn(styles.header, { [styles.sticky]: sticky })}>
        <Nav />
      </header>
    </>
  )
}

export default memo(Header)
