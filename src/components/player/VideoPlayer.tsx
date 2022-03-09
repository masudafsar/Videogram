import React, {useCallback, useContext, useEffect, useRef, VideoHTMLAttributes} from "react";
import {PlayerContext} from "../../contexts/PlayerContext";

interface Props extends VideoHTMLAttributes<HTMLVideoElement> {
    playerId: string;
}

export const VideoPlayer: React.FC<Props> = ({playerId, ...props}) => {
    const playerRef = useRef<HTMLVideoElement>(null);
    const {play, pause, isPlaying} = useContext(PlayerContext);

    useEffect(() => {
        let observer = new IntersectionObserver(entries =>
            entries.forEach(entry => {
                if (entry.intersectionRatio !== 1 && isPlaying(playerId)) {
                    pause(playerId);
                } else {
                    play(playerId);
                }
            }), {threshold: .2});
        playerRef.current && observer.observe(playerRef.current);
    }, []);

    useEffect(() => {
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
