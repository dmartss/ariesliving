import { createContext, useContext } from 'react'

const HotelContext = createContext()

export const HotelProvider = HotelContext.Provider

export const useHotel = () => useContext(HotelContext)
