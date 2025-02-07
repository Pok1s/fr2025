import Layout from '../components/layout/Layout'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AnimatedBackground from '../AnimatedBackground'
import WaveBorder from '../components/WaveBorder'
import WaveAnimation from '../components/WaveAnimation'
import TalkingWave from '../components/TalkingWave'
import Header from '../components/layout/Header'
import { useRating } from '../context/RatingContext'
import { useChat } from '../context/ChatContext'
import { useUser } from '../context/UserContext'

const ChatPage = () => {
  const navigate = useNavigate()
  const [isMuted, setIsMuted] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const { rating } = useRating()
  const { interlocutor } = useChat()
  const { userData } = useUser()

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Форматування часу в формат mm:ss
  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <Layout>
      <div className="flex flex-col min-h-screen bg-[#010817] relative">
        {/* Фоновий компонент */}
        <div className="absolute inset-0">
          <AnimatedBackground />
        </div>

        {/* Контент */}
        <div className="relative flex flex-col min-h-screen">
          {/* Верхня частина */}
          <div className="px-4 pt-6">
            <Header />
          </div>

          {/* Центральна частина */}
          <div className="px-4 mt-8 flex-1">
            {/* Карточка співрозмовника */}
            <div className="relative bg-[#ECF8FF] rounded-[32px] p-4 w-[95%] max-w-3xl mx-auto min-h-[450px] flex flex-col overflow-hidden">
              {/* Анімовані хвилі */}
              <WaveAnimation />
              
              {/* Контент */}
              <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
                {/* Іконка по центру */}
                <div className="w-40 h-40 rounded-full bg-[#005CF9] flex items-center justify-center mb-4">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#ECF8FF"/>
                  </svg>
                </div>
                
                {/* Секундомір */}
                <span className="text-[#005CF9] text-lg mb-2">{formatTime(seconds)}</span>
                
                {/* Інформація */}
                <h2 className="text-[#010817] text-2xl font-bold mb-2">{interlocutor.name}</h2>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L10.247 5.27337L16 6.11146L12 10.2149L12.944 16L8 13.2734L3.056 16L4 10.2149L0 6.11146L5.72 5.27337L8 0Z" fill="#005CF9"/>
                  </svg>
                  <span className="text-[#010817] text-lg font-medium">{interlocutor.rating}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Нижня частина з карткою користувача і кнопками */}
          <div className="px-4 absolute bottom-36 left-0 right-0">
            {/* Карточка поточного користувача */}
            <div className="bg-[#ECF8FF] rounded-[32px] p-4 w-full max-w-md mx-auto mb-8 relative overflow-hidden">
              {/* Анімована хвиля */}
              <TalkingWave isMuted={isMuted} />
              
              {/* Контент */}
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#005CF9] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#ECF8FF"/>
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-black">{userData.name}</span>
                </div>

                {/* Рейтинг справа */}
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0L10.247 5.27337L16 6.11146L12 10.2149L12.944 16L8 13.2734L3.056 16L4 10.2149L0 6.11146L5.72 5.27337L8 0Z" fill="#005CF9"/>
                  </svg>
                  <span className="text-[#010817] text-lg font-medium">{rating}</span>
                </div>
              </div>
            </div>

            {/* Кнопки керування */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="bg-[#ECF8FF] p-4 rounded-[22px] shadow-[0_0_7.8px_rgba(255,255,255,0.36)]"
              >
                <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                  <path d="M17 9.16699C17 7.7083 17.5795 6.30936 18.6109 5.2779C19.6424 4.24645 21.0413 3.66699 22.5 3.66699C23.9587 3.66699 25.3576 4.24645 26.3891 5.2779C27.4205 6.30936 28 7.7083 28 9.16699V18.3337C28.0001 18.8766 27.9198 19.4166 27.7617 19.936M24.095 23.6027C23.2731 23.8517 22.4042 23.9048 21.5581 23.7578C20.7119 23.6107 19.912 23.2675 19.2223 22.7557C18.5326 22.2438 17.9724 21.5776 17.5865 20.8104C17.2006 20.0431 16.9997 19.1962 17 18.3373V16.504" stroke="#0274FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.66675 18.334C9.66635 20.6501 10.2928 22.9232 11.4796 24.9121C12.6664 26.9011 14.3693 28.5318 16.4079 29.6313C18.4464 30.7308 20.7444 31.2582 23.0584 31.1574C25.3723 31.0566 27.6159 30.3315 29.5511 29.059M33.2177 25.3923C34.5995 23.2979 35.334 20.8431 35.3297 18.334M15.1667 38.5007H29.8334M22.5001 31.1673V38.5007" stroke="#0274FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  {isMuted && (
                    <path d="M6 5.50033L39 38.5003" stroke="#0274FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  )}
                </svg>
              </button>
              <button
                onClick={() => navigate('/rate-user')}
                className="bg-[#ECF8FF] p-4 rounded-[22px] shadow-[0_0_7.8px_rgba(255,255,255,0.36)]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#FF4D4D] mx-auto">
                  <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.31 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" fill="#FF4D4D"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ChatPage 