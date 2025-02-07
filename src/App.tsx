import { Routes, Route, Navigate } from 'react-router-dom'
import SplashScreen from './pages/SplashScreen'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/Auth/operations";
import Rating from './pages/Rating'
import Profile from './pages/Profile'
import SearchingPage from './pages/SearchingPage'
import ChatPage from './pages/ChatPage'
import RateUserPage from './pages/RateUserPage'
import Referrals from './pages/Referrals'
import { RatingProvider } from './context/RatingContext'
import { ChatProvider } from './context/ChatContext'
import { UserProvider } from './context/UserContext'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <RatingProvider>
      <ChatProvider>
        <UserProvider>
          <Routes>
            {/* Redirect from root to splash screen */}
            <Route path="/" element={<Navigate to="/splash" replace />} />
            
            {/* Main routes */}
            <Route path="/splash" element={<SplashScreen />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/rating" element={<Rating />} />
            <Route path="/rate-user" element={<RateUserPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<SearchingPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/referrals" element={<Referrals />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </ChatProvider>
    </RatingProvider>
  )
}

export default App;