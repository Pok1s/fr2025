import { motion } from 'framer-motion';
import { useCallback } from 'react';

interface AnimatedBackgroundProps {
    children: React.ReactNode;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ children }) => {
    const getRandomPosition = useCallback(() => {
        return {
            x: Math.random() * 100 - 50, // Випадкові координати
            y: Math.random() * 100 - 50,
        };
    }, []);

    const getRandomDuration = useCallback(() => {
        return Math.random() * 10 + 20; // Мінімальний час 20 секунд
    }, []);

    const positions = Array.from({ length: 10 }, () => getRandomPosition());
    const durations = positions.map(getRandomDuration);

    return (
        <div className="h-screen bg-[#0A0A16] relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/30 opacity-50 blur-[20px] will-change-transform" // Зменшено розмір
                    style={{
                        boxShadow: '0 0 100px 50px rgba(128, 0, 128, 0.2)',
                        left: '30%',
                        top: '20%',
                    }}
                    animate={{
                        x: [0, ...positions.map(pos => pos.x)],
                        y: [0, ...positions.map(pos => pos.y)],
                    }}
                    transition={{
                        duration: durations[0],
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut", // Плавний тип easing
                    }}
                />
                <motion.div
                    className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/30 opacity-50 blur-[20px] will-change-transform" // Зменшено розмір
                    style={{
                        boxShadow: '0 0 80px 40px rgba(0, 0, 255, 0.2)',
                        right: '20%',
                        bottom: '30%',
                    }}
                    animate={{
                        x: [0, ...positions.map(pos => pos.x)],
                        y: [0, ...positions.map(pos => pos.y)],
                    }}
                    transition={{
                        duration: durations[1],
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut", // Плавний тип easing
                    }}
                />
                <motion.div
                    className="absolute w-[300px] h-[300px] rounded-full bg-indigo-500/30 opacity-50 blur-[20px] will-change-transform" // Зменшено розмір
                    style={{
                        boxShadow: '0 0 60px 30px rgba(75, 0, 130, 0.2)',
                        left: '50%',
                        top: '50%',
                    }}
                    animate={{
                        x: [0, ...positions.map(pos => pos.x)],
                        y: [0, ...positions.map(pos => pos.y)],
                    }}
                    transition={{
                        duration: durations[2],
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut", // Плавний тип easing
                    }}
                />
            </div>
            {children}
        </div>
    );
};

export default AnimatedBackground;
