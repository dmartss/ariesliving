import { createContext, useContext } from 'react'

const FeedbackContext = createContext()

export const useFeedback = () => useContext(FeedbackContext)

export default FeedbackContext
