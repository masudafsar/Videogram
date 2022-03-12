import React, {useEffect, useState} from "react";
import {VideoPlayerState} from "../types/hooks/videoPlayerState";

export const useVideoPlayer = (videoElement: React.RefObject<HTMLVideoElement>) => {
    const [playerState, setPlayerState] = useState<VideoPlayerState>({
        isPlaying: false,
        progress: 0,
        speed: 1,
        isMuted: false,
    });

    const togglePlay = () => {
        setPlayerState({
            ...playerState,
            isPlaying: !playerState.isPlaying,
        });
    };

    useEffect(() => {
        playerState.isPlaying
            ? videoElement.current?.play()
            : videoElement.current?.pause();
    }, [playerState.isPlaying, videoElement]);

    const handleOnTimeUpdate = () => {
        const progress = videoElement.current
            ? (videoElement.current.currentTime / videoElement.current.duration) * 100
            : 0;
        setPlayerState({
            ...playerState,
            progress,
        });
    };

    const handleVideoProgress = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!videoElement.current) return;
        const manualChange = Number(event.target.value);
        videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
        setPlayerState({
            ...playerState,
            progress: manualChange,
        });
    };

    const handleVideoSpeed = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (!videoElement.current) return;
        const speed = Number(event.target.value);
        videoElement.current.playbackRate = speed;
        setPlayerState({
            ...playerState,
            speed,
        });
    };

    const toggleMute = () => {
        setPlayerState({
            ...playerState,
            isMuted: !playerState.isMuted,
        });
    };

    useEffect(() => {
        if (!videoElement.current) return;
        playerState.isMuted
            ? (videoElement.current.muted = true)
            : (videoElement.current.muted = false);
    }, [playerState.isMuted, videoElement]);

    return {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        toggleMute,
    };

};
