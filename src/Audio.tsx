import { useEffect, useRef } from "react";

// Опис типів пропсів для компонента
interface AudioProps {
    stream: MediaStream | null;
    isMuted: boolean;
}

export const Audio = ({ stream, isMuted }: AudioProps) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const audioElement = audioRef.current;

        if (audioElement && stream) {
            // Встановлюємо медіа потік як джерело для аудіо елемента
            audioElement.srcObject = stream;

            // Отримуємо всі аудіо треки та встановлюємо їх стан відповідно до isMuted
            const audioTracks = stream.getAudioTracks();
            audioTracks.forEach(track => {
                track.enabled = !isMuted;
            });

            // Додаємо обробник помилок
            audioElement.onerror = (error) => {
                console.error('Audio playback error:', error);
            };
        }

        // Функція очистки при розмонтуванні компонента
        return () => {
            if (audioElement) {
                audioElement.srcObject = null;
                audioElement.load(); // Оновлюємо аудіо елемент
            }
        };
    }, [stream, isMuted]); // Залежності для useEffect

    return (
        <audio
            ref={audioRef}
            autoPlay
            playsInline // Для кращої підтримки на мобільних пристроях
            style={{ display: 'none' }} // Приховуємо аудіо елемент
        />
    );
};

export default Audio;