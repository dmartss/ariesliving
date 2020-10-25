import { createContext, useContext } from 'react'

const FeedbackContext = createContext()

export const Provider = FeedbackContext.Provider

export const useFeedback = () => useContext(FeedbackContext)
