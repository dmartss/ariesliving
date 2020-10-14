import { createContext, useContext } from 'react'

export const NavContext = createContext(false)

export const Provider = NavContext.Provider

export const useNav = () => useContext(NavContext)
