import { createContext, useContext } from 'react'

export const NavContext = createContext(null)

export const Provider = NavContext.Provider

export const useNav = () => useContext(NavContext)
