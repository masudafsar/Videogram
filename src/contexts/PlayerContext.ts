import React from "react";

export interface IPlayerContext {
    play: (playerId: string) => void;
    pause: (playerId: string) => void;
    isPlaying: (playerId: string) => boolean;
}

export const PlayerContext = React.createContext<IPlayerContext>({
    play: (playerId: string) => {
    },
    pause: (playerId: string) => {
    },
    isPlaying: (playerId: string) => false,
});
