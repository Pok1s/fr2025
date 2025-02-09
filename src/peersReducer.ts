import { ADD_PEER, REMOVE_PEER, CLEAR_PEERS } from "./PeerAction";

export const initialState = {};

type PeerState = Record<string, { stream: MediaStream }>;

type PeerAction =
    | {
        type: typeof ADD_PEER;
        payload: { peerId: string; stream: MediaStream };
    }
    | {
        type: typeof REMOVE_PEER;
        payload: { peerId: string };
    }
    | {
        type: typeof CLEAR_PEERS;
    };

export const peersReducer = (
    state: PeerState = initialState,
    action: PeerAction
): PeerState => {
    switch (action.type) {
        case ADD_PEER:
            return {
                ...state,
                [action.payload.peerId]: {
                    stream: action.payload.stream,
                },
            };
        case REMOVE_PEER:
            const { [action.payload.peerId]: removed, ...rest } = state;
            return { ...rest };
        case CLEAR_PEERS:
            return {};
        default:
            return state;
    }
};