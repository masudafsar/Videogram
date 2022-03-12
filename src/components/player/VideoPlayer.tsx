import React, {useRef, VideoHTMLAttributes} from "react";
import {useVideoPlayer} from "../../hooks/useVideoPlayer";

import {ReactComponent as PlayIcon} from '../icons/play.svg'
import {ReactComponent as PauseIcon} from '../icons/pause.svg'
import {ReactComponent as VolumeMuteIcon} from '../icons/vol-mute.svg'
import {ReactComponent as VolumeFullIcon} from '../icons/vol-full.svg'

import styles from "./VideoPlayer.module.scss";

interface Props extends VideoHTMLAttributes<HTMLVideoElement> {
    mediaSrc: string;
    playerId: string;
}

export const VideoPlayer: React.FC<Props> = ({mediaSrc, playerId, ...props}) => {
    const playerRef = useRef<HTMLVideoElement>(null);
    const {
        playerState,
        togglePlay,
        toggleMute,
        handleVideoSpeed,
        handleVideoProgress,
        handleOnTimeUpdate
    } = useVideoPlayer(playerRef)
    /*const {play, pause, isPlaying} = useContext(PlayerContext);

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
    }, [])*/

    return (
        <div className={styles.VideoWrapper}>
            <video
                className={styles.Video}
                src={mediaSrc}
                ref={playerRef}
                onTimeUpdate={handleOnTimeUpdate}
            />
            <div className={styles.Controls}>
                <div className={styles.Actions}>
                    <button onClick={togglePlay}>
                        {!playerState.isPlaying ? (<PlayIcon/>) : (<PauseIcon/>)}
                    </button>
                </div>
                <input
                    className={styles.SeekBar}
                    type="range"
                    min="0"
                    max="100"
                    value={playerState.progress}
                    onChange={handleVideoProgress}
                />
                <select
                    className={styles.Velocity}
                    value={playerState.speed}
                    onChange={handleVideoSpeed}
                >
                    <option value="0.50">0.50x</option>
                    <option value="1">1x</option>
                    <option value="1.25">1.25x</option>
                    <option value="2">2x</option>
                </select>
                <button className={styles.MuteBtn} onClick={toggleMute}>
                    {!playerState.isMuted ? (<VolumeFullIcon/>) : (<VolumeMuteIcon/>)}
                </button>
            </div>
        </div>
    );
}
