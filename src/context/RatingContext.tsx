import { createContext, useContext, useState } from 'react'

type RatingContextType = {
  rating: number
  setRating: (rating: number) => void
}

const RatingContext = createContext<RatingContextType | undefined>(undefined)

export const RatingProvider = ({ children }: { children: React.ReactNode }) => {
  const [rating, setRating] = useState(0)

  return (
    <RatingContext.Provider value={{ rating, setRating }}>
      {children}
    </RatingContext.Provider>
  )
}

export const useRating = () => {
  const context = useContext(RatingContext)
  if (context === undefined) {
    throw new Error('useRating must be used within a RatingProvider')
  }
  return context
} 