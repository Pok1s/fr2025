import { Logo } from './Logo';
import AnimatedBackground from './AnimatedBackground';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Додаємо імпорт для навігації

export const SignInComponent = () => {
  const navigate = useNavigate(); // Ініціалізуємо хук для навігації

  const logoAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Функція для обробки кліку
  const handleNavigate = () => {
    navigate('/mainpage'); // Програмна навігація на /mainpage
  };

  return (
    <AnimatedBackground>
      <div className="container flex flex-col items-center h-screen relative mx-auto z-10">
        <motion.div
          variants={logoAnimation}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex justify-center mt-16"
        >
          <Logo
            width={230}
            height={230}
            style={{}}
          />
        </motion.div>

        <motion.div
          variants={textAnimation}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
          className="flex flex-col items-center mt-6 absolute bottom-[48px] px-[25px] w-full max-w-[400px]"
        >
          <p className="text-[48px] font-bold text-center text-[#E4F2FF]">
            Discover a New Way to{' '}
            <span className="text-[#0274FF] leading-[120%] tracking-[-1.44px] italic">
              Connect
            </span>
          </p>
          <button
            onClick={handleNavigate}
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-indigo-400/20 backdrop-blur-sm px-8 py-4 rounded-xl hover:from-pink-400/30 hover:via-purple-400/30 hover:to-indigo-400/30 transition-all duration-300 mt-6 text-lg w-64 cursor-pointer"
            style={{
              backdropFilter: 'blur(4px)',
            }}
          >
            <span className="text-white/90">Telegram</span>
          </button>
        </motion.div>
      </div>
    </AnimatedBackground>
  );
};

export default SignInComponent;