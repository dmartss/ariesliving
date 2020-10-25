import { createContext, useContext } from 'react'

const CollapseContext = createContext()

export const Provider = CollapseContext.Provider

export const useCollapse = () => useContext(CollapseContext)
