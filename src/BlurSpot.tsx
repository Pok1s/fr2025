import React, { useState, useEffect } from 'react';

// Утиліта для генерації випадкових значень
const getRandomValue = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

// Інтерфейс для розмірів і позиції плями
interface SpotStyles {
  width: string;
  height: string;
  left: string;
  top: string;
}

// Компонент для однієї розмитої плями
const BlurSpot: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    // Випадковий інтервал для зміни видимості
    const timeout = setTimeout(() => {
      setVisible(!visible);
    }, getRandomValue(3000, 8000));

    return () => clearTimeout(timeout);
  }, [visible]);

  // Обчислення розміру та позиції
  const size: number = getRandomValue(244, 319);
  const left: number = getRandomValue(-size / 2, window.innerWidth - size / 2);
  const top: number = getRandomValue(-size / 2, window.innerHeight - size / 2);

  // Стилі для плями
  const spotStyles: SpotStyles = {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}px`,
    top: `${top}px`,
  };

  return (
    <div
      className={`
       absolute 
       bg-accent 
       rounded-full 
       blur-3xl 
       transition-all 
       duration-[4000ms] 
       ease-in-out 
       z-[-1]
       ${visible ? 'opacity-25 scale-100' : 'opacity-0 scale-75'}
     `}
      style={spotStyles}
    />
  );
};

// Інтерфейс для пропсів BackgroundBlurs
interface BackgroundBlursProps {
  children?: React.ReactNode;
}

// Головний компонент з розмитим фоном
const BackgroundBlurs: React.FC<BackgroundBlursProps> = ({ children }) => {
  // Створюємо масив з 5 елементів
  const spots = Array.from({ length: 5 }, (_, index) => (
    <BlurSpot key={`blur-spot-${index}`} />
  ));

  return (
    <div className="fixed inset-0 overflow-hidden">
      {spots}
      {children}
    </div>
  );
};

export default BackgroundBlurs;