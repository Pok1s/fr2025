import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Logo, TwiterIcon, TelegramIcon } from './Logo';
import AnimatedBackground from './AnimatedBackground';

const SplashScreen = () => {
    const navigate = useNavigate();
    const [animationStart, setAnimationStart] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationStart(true); // Start animation after 8 seconds
        }, 8000); // 8 seconds

        const navigateTimer = setTimeout(() => {
            navigate('/signin');
        }, 10000); // 10 seconds

        return () => {
            clearTimeout(timer);
            clearTimeout(navigateTimer);
        };
    }, [navigate]);

    // Animation settings
    const splashAnimation = {
        hidden: { opacity: 1 },
        visible: { opacity: 0 },
    };

    const moveAnimation = {
        hidden: { opacity: 1, y: 0 },
        visible: (direction) => ({
            opacity: 0,
            y: direction === 'up' ? -50 : 50, // Determine direction
        }),
    };

    return (
        <AnimatedBackground>
            <motion.div
                initial="hidden"
                animate={animationStart ? "visible" : "hidden"}
                exit="hidden"
                variants={splashAnimation}
                transition={{ duration: 1 }}
                className="relative h-full flex flex-col items-center justify-between py-8 md:py-12 lg:py-16 z-10"
            >
                {/* Logo Section */}
                <motion.div
                    variants={moveAnimation}
                    initial="hidden"
                    animate={animationStart ? "visible" : "hidden"}
                    custom="up" // Animation upward
                    transition={{ duration: 1 }}
                    className="flex items-center gap-2 md:gap-4"
                >
                    <Logo width={64} height={64} style={{ width: 'auto' }} />
                    <span className="text-white text-2xl md:text-3xl font-medium">FriendsRate</span>
                </motion.div>

                {/* Loading Dots */}
                <div className="flex gap-2 md:gap-3">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white/40 rounded-full"
                            animate={{
                                opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>

                {/* Bottom Info */}
                <motion.div
                    variants={moveAnimation}
                    initial="hidden"
                    animate={animationStart ? "visible" : "hidden"}
                    custom="down" // Animation downward
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center px-4 md:px-0"
                >
                    <p className="text-white/60 text-base md:text-lg mb-2 md:mb-3">Stay tuned</p>
                    <p className="text-white text-lg md:text-xl mb-6 md:mb-8">Official channels for info</p>
                    <div className="flex gap-4 mb-3 md:mb-4">
                        <a href="#" className="text-white hover:text-white/80 transition-colors">
                            <TwiterIcon width={30} height={30} />
                        </a>
                        <a href="#" className="text-white hover:text-white/80 transition-colors">
                            <TelegramIcon width={30} height={30} />
                        </a>
                    </div>
                    <span className="text-white/40 text-sm md:text-base">@friendsrate</span>
                </motion.div>
            </motion.div>
        </AnimatedBackground>
    );
};

export default SplashScreen;
