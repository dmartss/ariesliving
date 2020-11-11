import { createContext, useContext } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = FeedbackContext.Provider

export const useFeedback = () => useContext(FeedbackContext)
