import { memo } from 'react'
import cn from 'classnames'
import Banner from './banner'
import Nav from './navbar'

const Header = ({ sticky = true }) => {
  return (
    <>
      <Banner />

      <header className={cn({ sticky })}>
        <Nav />
      </header>

      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          z-index: 1000;
          box-shadow: var(--header-border-bottom);
          background: var(--header-background);
          transition: box-shadow 0.2s ease 0s;
        }
        header.sticky {
          position: sticky;
          top: 0;
        }
      `}</style>
    </>
  )
}

export default memo(Header)
