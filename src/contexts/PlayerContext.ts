import React from "react";

export interface IPlayerContext {
    played: (playerId: string) => void;
    paused: (playerId: string) => void;
    isPlaying: (playerId: string) => boolean;
}

export const PlayerContext = React.createContext<IPlayerContext>({
    played: (playerId: string) => {
    },
    paused: (playerId: string) => {
    },
    isPlaying: (playerId: string) => false,
});
