import Layout from '../components/layout/Layout'
import BottomNav from '../components/layout/BottomNav'
import Header from '../components/layout/Header'
import AnimatedBackground from '../AnimatedBackground'

const Rating = () => {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen bg-[#010817] relative">
        {/* Фоновий компонент */}
        <div className="absolute inset-0">
          <AnimatedBackground />
        </div>

        {/* Контент */}
        <div className="relative flex flex-col min-h-screen">
          <div className="px-4 pt-6 relative z-10">
            <Header />


            {/* Your rating */}
            <div className="mt-6">
              <div className="text-2xl font-medium mb-4 px-4 text-white">Your rating</div>
              <div className="bg-white rounded-[32px] overflow-hidden mx-4">
                <div className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gray-200"></div>
                    <span className="text-base text-black/60">Empty</span>
                    <div className="flex items-center gap-2 ml-auto">
                      <span className="text-base text-black/60">#</span>
                      <span className="text-base text-black/60">-</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global rating section */}
            <div className="mt-6 pb-36">
              <div className="text-2xl font-medium mb-4 px-4 text-white">Global rating</div>
              <div className="bg-white rounded-[32px] overflow-hidden mx-4">
                <div 
                  className="overflow-y-auto scrollbar-hide pt-4" 
                  style={{ maxHeight: 'calc(100vh - 520px)' }}
                >
                  {/* Топ-3 з кольоровим фоном */}
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="relative mb-2">
                      <span
                        className={`absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-medium ${
                          index === 1
                            ? 'text-[#FF9500]'
                            : index === 2
                            ? 'text-[#0047B3]'
                            : index === 3
                            ? 'text-[#FF6B00]'
                            : ''
                        }`}
                      >
                        {index}
                      </span>
                      <div className="px-14 py-2">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-gray-200"></div>
                          <span className="text-base text-black/60">Empty</span>
                          <div className="flex items-center gap-2 ml-auto">
                            <span className="text-base text-black/60">#</span>
                            <span className="text-base text-black">{index}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0">
              <div className="max-w-[520px] mx-auto">
                <BottomNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Rating