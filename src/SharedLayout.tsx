import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnimatedBackground from './AnimatedBackground'; // Імпорт компоненту AnimatedBackground
import sprite from './assets/icons.svg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Типи
interface NavItemProps {
    to: string;
    icon: string;
    isNeutralBackground: boolean;
    isFilled?: boolean;
}

// Компонент навігаційної кнопки
const NavItem: React.FC<NavItemProps> = ({ to, icon, isNeutralBackground, isFilled = true }) => (
    <Link to={to}>
        <div className={`w-[75px] h-[75px] lg:w-10 lg:h-10 ${isNeutralBackground ? 'bg-base-100' : 'bg-neutral'} lg:bg-neutral rounded-full flex items-center justify-center lg:rounded-none relative group`}>
            <div className={`w-[80%] lg:w-full h-[80%] lg:h-full lg:p-[5px] flex items-center justify-center transition-all duration-300 ease-in-out ${isNeutralBackground ? 'hover:bg-neutral' : 'hover:bg-base-100'} lg:hover:bg-accent hover:rounded-full lg:hover:rounded-[15px]`}>
                <svg className={`w-6 h-6 lg:w-10 lg:h-10 ${isNeutralBackground ? (isFilled ? 'fill-neutral' : 'stroke-neutral') : (isFilled ? 'fill-primary' : 'stroke-primary')} lg:${isFilled ? 'fill-primary' : 'stroke-primary'} ${!isFilled && 'fill-none'} transition-colors group-hover:${isFilled ? 'fill-current' : 'stroke-current'}`}>
                    <use href={`${sprite}#icon-${icon}`} />
                </svg>
            </div>
        </div>
    </Link>
);

// Компонент роздільника для мобільної версії
const Separator: React.FC<{ isNeutralBackground: boolean }> = ({ isNeutralBackground }) => (
    <li className="-ml-[29px] lg:hidden">
        <svg className={`w-[26px] h-[57px] ${isNeutralBackground ? 'fill-base-100' : 'fill-neutral'}`}>
            <use href={`${sprite}#icon-separete`} />
        </svg>
    </li>
);

// Головний компонент
const SharedLayout: React.FC = () => {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
    const [isNeutralBackground, setIsNeutralBackground] = useState(false);

    // Ефект для відслідковування розміру вікна
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Ефект для перевірки нейтрального фону
    useEffect(() => {
        const checkNeutralBackground = () => {
            const neutralContainer = document.querySelector('.mark');
            setIsNeutralBackground(!!neutralContainer);
        };

        checkNeutralBackground();
        window.addEventListener('popstate', checkNeutralBackground);
        return () => window.removeEventListener('popstate', checkNeutralBackground);
    }, [window.location.pathname]);

    // Навігаційні елементи
    const navItems = [
        { to: "/mainpage", icon: "home", isFilled: true },
        { to: "/rating", icon: "star", isFilled: false },
        { to: "/rating", icon: "bell", isFilled: false },
        { to: "/profile", icon: "profile", isFilled: true },
        { to: "/setting", icon: "setting", isFilled: true },
    ];

    return (
        <div className="flex flex-col lg:flex-row relative">
            {/* Бульбашки анімації */}
            <AnimatedBackground />

            <div className={`${isMobile
                ? 'fixed top-16 left-0 right-0 mx-auto w-[calc(100%-50px)]'
                : 'absolute top-5 right-5 w-[282px]'
                } flex h-[70px] p-[10px] pr-[15px] justify-between items-center gap-[14px] bg-neutral rounded-[20px] z-50`}
            />

            <nav className={`${isMobile
                ? 'fixed bottom-0 w-full p-6 mb-[34px] flex justify-center bg-transparent'
                : 'lg:w-[120px] lg:static h-screen items-center rounded-custom p-[35px] bg-neutral'
                }`}
            >
                <ul className="flex flex-row lg:flex-col lg:justify-center items-center gap-4 lg:gap-6 h-full">
                    {navItems.map((item, index) => (
                        <li key={item.to} className={index > 0 ? "-ml-[29.8px] lg:-ml-0" : ""}>
                            <NavItem
                                to={item.to}
                                icon={item.icon}
                                isNeutralBackground={isNeutralBackground}
                                isFilled={item.isFilled}
                            />
                            {index < navItems.length - 1 && <Separator isNeutralBackground={isNeutralBackground} />}
                        </li>
                    ))}
                </ul>
            </nav>
            <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                    <Outlet />
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default SharedLayout;
