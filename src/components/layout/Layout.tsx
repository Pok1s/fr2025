import AnimatedBackground from '../../AnimatedBackground'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* Фіксований фон */}
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      
      {/* Контент */}
      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </>
  )
}

export default Layout 