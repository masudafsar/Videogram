import React, {useCallback, useContext, useEffect, useRef, VideoHTMLAttributes} from "react";
import {PlayerContext} from "../../contexts/PlayerContext";

interface Props extends VideoHTMLAttributes<HTMLVideoElement> {
    playerId: string;
}

export const VideoPlayer: React.FC<Props> = ({playerId, ...props}) => {
    const playerRef = useRef<HTMLVideoElement>(null);
    const {play, pause, isPlaying} = useContext(PlayerContext);

    useEffect(() => {
        console.log(`Updated ${playerId}`);
        if (isPlaying(playerId)) {
            playerRef.current?.play();
        } else {
            playerRef.current?.pause();
        }
    });

    const handleClickVideo = useCallback(() => {
        if (playerRef.current?.paused) {
            play(playerId);
        } else {
            pause(playerId);
        }
    }, [])

    return (
        <video
            ref={playerRef}
            onClick={handleClickVideo}
            {...props}
        />
    );
}
