import Layout from '../components/layout/Layout'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AnimatedBackground from '../AnimatedBackground'
import Header from '../components/layout/Header'
import '../styles/SearchingAnimation.css'

const SearchingPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/chat')
    }, 20000) // 20 секунд

    return () => clearTimeout(timer) // Очищаємо таймер при розмонтуванні компонента
  }, [navigate])

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

          {/* Центральна частина з анімацією */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="loader">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
              </div>
              <h2 className="text-white text-2xl font-bold mt-16">Searching a new stranger...</h2>
            </div>
          </div>

          {/* Нижня частина */}
          <div className="px-4 pb-16 flex justify-center">
            <button 
              onClick={() => navigate('/home')}
              className="w-[280px] bg-[#005CF9] text-white py-4 rounded-[32px] text-base font-medium"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SearchingPage 