import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ConnectionIcon, EndOfCallIcon, MuteIcon } from "./Logo";
import { OpositUser, RoomContext } from "./RoomContext";
import { Audio } from "./Audio";
import { ConnectionRing } from "./ConnectionRing";
import { usersNames } from "./redux/Users/selectors";
import { useAuth } from "./redux/Hooks/useAuth";

// Інтерфейси
interface Peer {
    id: string;
    stream: MediaStream;
}

// Компоненти кнопок
const IconButton: React.FC<{
    onClick: () => void;
    children: React.ReactNode;
}> = ({ onClick, children }) => (
    <button
        onClick={onClick}
        className="bg-transparent border-0 hover:opacity-80 transition-opacity"
    >
        {children}
    </button>
);

export const ConnectPageComp: React.FC = () => {
    // State
    const [isConnected, setIsConnected] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    // Hooks
    const { ws, me, peers, stream, clearPeers } = useContext(RoomContext);
    const usersInRoom = useSelector(usersNames);
    const { user } = useAuth();
    const navigate = useNavigate();

    // Визначення протилежного користувача
    const opositUser: OpositUser | null = Array.isArray(usersInRoom)
        ? usersInRoom.find((u: OpositUser) => u.userName !== user?.username) || null
        : null;

    // Effects
    useEffect(() => {
        const peersCount = Object.values(peers).length;
        if (peersCount > 1) {
            setIsConnected(true);
        }
    }, [peers]);

    // Handlers
    const onMuteChange = () => setIsMuted(prev => !prev);

    const handleEndCall = () => {
        ws.emit("end-call");
        clearPeers();
        navigate(user ? '/mainpage' : '/');
    };

    // Якщо не підключені, показуємо кільце з'єднання
    if (!isConnected) {
        return <ConnectionRing />;
    }

    // Основний інтерфейс дзвінка
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {/* Аудіо стріми */}
            <div className="hidden">
                {Object.values(peers).map((peer: Peer) => (
                    peer.id !== me?.id && (
                        <Audio
                            key={peer.id}
                            stream={peer.stream}
                            isMuted={isMuted}
                        />
                    )
                ))}
            </div>

            {/* Контроли дзвінка */}
            <div className="fixed bottom-20 flex items-center gap-4">
                <IconButton onClick={onMuteChange}>
                    {isMuted ? (
                        <MuteIcon width={33} height={35} />
                    ) : (
                        <ConnectionIcon width={33} height={35} />
                    )}
                </IconButton>

                <IconButton onClick={handleEndCall}>
                    <EndOfCallIcon
                        width={44}
                        height={44}
                        style={{ zIndex: 1000 }}
                    />
                </IconButton>
            </div>
        </div>
    );
};