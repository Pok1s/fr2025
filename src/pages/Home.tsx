import Layout from '../components/layout/Layout'
import BottomNav from '../components/layout/BottomNav'
import Header from '../components/layout/Header'
import BonusCard from '../components/BonusCard'
import AnimatedBackground from '../AnimatedBackground'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <div className="flex flex-col min-h-screen bg-[#010817] relative">
        {/* Фоновий компонент */}
        <div className="absolute inset-0">
          <AnimatedBackground />
        </div>
        
        <div className="px-4 pt-6 relative z-10">
          <Header />
          <BonusCard />
        </div>

        {/* Центральна кнопка */}
        <div className="flex-1 flex flex-col items-center justify-center -mt-60 relative z-10">
          <button 
            className="w-64 h-64 bg-[#ECF8FF] rounded-full flex flex-col items-center justify-center gap-2 mb-4"
            onClick={() => navigate('/search')}
          >
            <svg width="221" height="220" viewBox="0 0 221 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="110.249" cy="109.962" r="109.962" fill="#ECF8FF"/>
              <path d="M149.916 71.3807C150.185 80.375 149.895 89.3681 149.966 98.3631C150.082 117.092 137.531 130.387 120.328 135.595C106.832 139.68 82.1345 145.298 82.1345 145.298C82.3164 121.863 82.3846 99.7532 82.1345 76.3188C82.0872 71.4242 82.2369 66.9988 84.5077 61.0365C86.7785 55.0742 93.4245 40.8603 115.657 40.8604C137.89 40.8604 149.149 57.8392 149.916 71.3807ZM98.6238 59.289C94.3529 64.6311 93.1806 69.6537 93.261 76.3188C93.2742 94.3752 93.2894 112.432 93.3308 130.488C110.285 127.461 138.392 122.892 138.585 101.005C138.671 92.9057 138.624 84.8025 138.731 76.7033C138.812 70.2422 137.954 64.3632 133.199 59.5045C124.282 49.7596 107.949 49.3252 98.6238 59.289Z" fill="#06142E"/>
              <path d="M161.357 76.165C161.942 76.1682 161.942 76.1682 162.539 76.1714C162.963 76.1724 163.387 76.1734 163.824 76.1744C164.267 76.1806 164.71 76.1869 165.167 76.1933C165.835 76.1938 165.835 76.1938 166.516 76.1943C169.823 76.2175 169.823 76.2175 170.426 76.7998C170.484 77.5523 170.505 78.3075 170.512 79.0621C170.517 79.5456 170.522 80.0291 170.527 80.5272C170.53 81.3225 170.53 81.3225 170.534 82.1339C170.537 82.6834 170.54 83.2329 170.543 83.7991C170.455 128.933 165.531 148.119 105.771 160.437C105.771 163.133 105.771 165.471 105.771 168.249C108.972 168.249 111.151 168.249 114.155 168.249C114.506 171.625 114.157 175.075 114.155 178.464C105.214 178.464 85.1297 178.545 85.1297 178.545V168.549H94.0256C94.0256 166.746 94.0256 161.864 94.0256 160.437L83.8105 153.226C145.401 140.608 158.583 134.493 159.064 87.0811C159.082 85.4878 159.106 83.8947 159.13 82.3015C159.133 81.8138 159.136 81.3261 159.139 80.8236C159.149 80.1524 159.149 80.1524 159.16 79.4676C159.164 79.0743 159.168 78.681 159.172 78.2757C159.373 76.8898 159.913 76.3466 161.357 76.165Z" fill="#06142E"/>
              <path d="M53.5027 76.0157C54.1352 76.0137 54.1352 76.0137 54.7804 76.0117C55.2211 76.0157 55.6618 76.0196 56.1159 76.0237C56.5566 76.0197 56.9974 76.0158 57.4515 76.0117C57.8731 76.013 58.2947 76.0144 58.7291 76.0157C59.1159 76.0169 59.5028 76.018 59.9013 76.0192C60.8792 76.1514 60.8792 76.1514 61.9377 77.1727C62.0779 78.2487 62.0779 78.2487 62.0896 79.5967C62.0967 80.1019 62.1038 80.6071 62.1112 81.1276C62.1139 81.6775 62.1167 82.2275 62.1196 82.7941C62.1274 83.3627 62.1351 83.9313 62.1431 84.5171C62.1677 86.3458 62.1858 88.1745 62.2023 90.0034C61.9377 111.406 66.7289 124.802 71.4921 131.697C71.4921 137.569 71.4921 140.378 71.4921 145.114C56.8439 136.119 50.2215 114.907 50.2052 98.7028C50.2035 98.0883 50.2017 97.4738 50.1999 96.8407C50.1972 95.5501 50.196 94.2596 50.1961 92.969C50.1949 90.9867 50.1853 89.0044 50.1753 87.0221C50.1737 85.7664 50.1727 84.5106 50.1722 83.2549C50.1665 82.3629 50.1665 82.3629 50.1606 81.4528C50.1623 80.9054 50.1639 80.358 50.1656 79.794C50.1648 79.3112 50.1641 78.8284 50.1633 78.3309C50.4044 76.1966 51.5408 76.0216 53.5027 76.0157Z" fill="#06142E"/>
            </svg>
          </button>
          <span className="text-xl font-semibold text-white">Let's talk</span>
        </div>

        <div className="relative z-10">
          <BottomNav />
        </div>
      </div>
    </Layout>
  )
}

export default Home 