import { createContext, useContext } from 'react'

export const MobileNavContext = createContext()

export const useMobileNav = () => useContext(MobileNavContext)
