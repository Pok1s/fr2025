import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import socketIOClient from "socket.io-client";
import { addPeerAction, clearPeersAction } from "./PeerAction";
import Peer from "peerjs";
import { v4 as uuidV4 } from "uuid";
import { peersReducer } from "./peersReducer";
import { useAuth } from "./redux/Hooks/useAuth";
import { setUserNames } from "./redux/Users/slice";
import { usersNames } from "./redux/Users/selectors";
import { useNavigate } from 'react-router-dom';

// Константи
const SERVERS = {
  PROD: "https://api.friendsrate.org",
  DEV: "http://localhost:3000/"
} as const;

// Типи та інтерфейси
export interface OpositUser {
  userName: string;
  avatarURL: string;
  rate: number;
  ratingCount: number;
}

interface RoomContextType {
  ws: any; // TODO: додати правильний тип для socket.io
  me: Peer | null;
  stream: MediaStream | undefined;
  peers: Record<string, any>; // TODO: уточнити тип для peers
  rateModalOpen: boolean;
  openRateModal: () => void;
  closeRateModal: () => void;
  clearPeers: () => void;
}

interface HandleUserListParams {
  users: string[];
  names: Record<string, any>;
  roomId: string;
}

// Створення контексту
export const RoomContext = createContext<RoomContextType | null>(null);

// Ініціалізація WebSocket
const ws = socketIOClient(SERVERS.DEV);

// Компонент провайдера
export const RoomProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Стейт
  const [me, setMe] = useState<Peer | null>(null);
  const [peers, dispatch] = useReducer(peersReducer, {});
  const [rateModalOpen, setRateModalOpen] = useState(false);
  const [stream, setStream] = useState<MediaStream>();

  // Хуки
  const { user } = useAuth();
  const usersInRoom = useSelector(usersNames);
  const navigate = useNavigate();
  const reduxDispatch = useDispatch();

  // Обчислення протилежного користувача
  const opositUser: OpositUser | null = Array.isArray(usersInRoom)
    ? usersInRoom.find((u: OpositUser) => u.userName !== user?.username) || null
    : null;

  // Колбеки
  const handleUserList = useCallback(
    ({ users, names, roomId }: HandleUserListParams) => {
      navigate(`/chatRoom/${roomId}`);

      users.forEach((peerId) => {
        if (stream && me) {
          const call = me.call(peerId, stream);
          call?.on("stream", (userVideoStream: MediaStream) => {
            dispatch(addPeerAction(peerId, userVideoStream));
          });
        }
      });

      reduxDispatch(setUserNames(names));
    },
    [reduxDispatch, stream, me, navigate]
  );

  const clearPeers = useCallback(() => {
    dispatch(clearPeersAction());
    if (user !== null && opositUser?.userName && !opositUser.userName.startsWith("Unregistered User")) {
      setRateModalOpen(true);
    } else {
      navigate(user ? "/mainpage" : "/");
    }
  }, [opositUser?.userName, user, navigate]);

  // Ефекти
  // Ініціалізація Peer
  useEffect(() => {
    if (typeof window !== "undefined") {
      const meId = uuidV4();
      const peer = new Peer(meId, {
        config: {
          iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
        },
      });
      setMe(peer);

      // Отримання медіа потоку
      const initMediaStream = async () => {
        try {
          const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
          setStream(mediaStream);
        } catch (err) {
          console.error('Media stream error:', err);
        }
      };

      initMediaStream();
    }
  }, []);

  // WebSocket слухачі
  useEffect(() => {
    ws.on("get-user", handleUserList);
    ws.on("user-disconnected", clearPeers);

    return () => {
      ws.off("get-user");
      ws.off("user-disconnected");
    };
  }, [handleUserList, clearPeers]);

  // Обробка медіа з'єднань
  useEffect(() => {
    if (!stream || !me) return;

    const handleUserJoined = ({ peerId, names }: { peerId: string; names: Record<string, any> }) => {
      reduxDispatch(setUserNames(names));
      const call = me.call(peerId, stream);
      call.on("stream", (userVideoStream: MediaStream) => {
        dispatch(addPeerAction(peerId, userVideoStream));
      });
    };

    const handleIncomingCall = (call: any) => {
      call.answer(stream);
      call.on("stream", (userVideoStream: MediaStream) => {
        dispatch(addPeerAction(call.peer, userVideoStream));
      });
    };

    ws.on("user-joined", handleUserJoined);
    me.on("call", handleIncomingCall);

    return () => {
      ws.off("user-joined");
      me.off("call");
    };
  }, [stream, me, reduxDispatch]);

  // Обробка закриття вікна
  useEffect(() => {
    const handlePopState = () => ws.emit("end-call");
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      ws.emit("end-call");
      event.returnValue = "";
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Модальні функції
  const openRateModal = () => setRateModalOpen(true);
  const closeRateModal = () => setRateModalOpen(false);

  return (
    <RoomContext.Provider
      value={{
        ws,
        me,
        stream,
        peers,
        rateModalOpen,
        openRateModal,
        closeRateModal,
        clearPeers,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};