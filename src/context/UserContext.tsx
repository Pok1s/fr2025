import { createContext, useContext, useState } from 'react'

type UserContextType = {
  userData: {
    name: string
    username: string
    age: string
    gender: string
    language: string
    about: string
  }
  setUserData: (data: {
    name: string
    username: string
    age: string
    gender: string
    language: string
    about: string
  }) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState({
    name: 'Joanny',
    username: 'Joanny',
    age: '21',
    gender: 'Female',
    language: 'UKR',
    about: ''
  })

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
} 