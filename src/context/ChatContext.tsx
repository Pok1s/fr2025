import { createContext, useContext, useState } from 'react'

type ChatContextType = {
  interlocutor: {
    name: string
    rating: number
  }
  setInterlocutor: (data: { name: string; rating: number }) => void
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [interlocutor, setInterlocutor] = useState({
    name: 'Tyler',
    rating: 4.5
  })

  return (
    <ChatContext.Provider value={{ interlocutor, setInterlocutor }}>
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => {
  const context = useContext(ChatContext)
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider')
  }
  return context
} 