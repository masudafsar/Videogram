import React, {useState} from "react";
import {PlayerContext} from "../../contexts/PlayerContext";

interface Props {

}

export const PlayerProvider: React.FC<Props> = ({children}) => {
    const [currentPlayer, setCurrentPlayer] = useState<string | null>();

    const play = (videoId: string) => setCurrentPlayer(videoId);
    const pause = (videoId: string) => isPlaying(videoId) && setCurrentPlayer(null);
    const isPlaying = (videoId: string) => videoId === currentPlayer;

    return (
        <PlayerContext.Provider value={{play, pause, isPlaying}}>
            {children}
        </PlayerContext.Provider>
    );
}
