import React, {useCallback, useEffect, useRef} from "react";

import styles from "./Card.module.scss"
import {VideoEntity} from "../../types/entity/videoEntity";
import {Container} from "../container/Container";

interface Props {
    video: VideoEntity
}

export const Card: React.FC<Props> = ({video}) => {
    const {attributes: videoMeta} = video;
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        videoRef.current?.pause();
    })

    const handleClickVideo = useCallback(() => {
        if (videoRef.current?.paused)
            videoRef.current?.play();
        else
            videoRef.current?.pause();
    }, [])

    return (
        <Container className={styles.Card}>
            <video
                ref={videoRef}
                className={styles.Video}
                // autoPlay
                // muted
                // playsInline
                loop
                preload="auto"
                controls={false}
                poster={videoMeta.big_poster}
                onClick={handleClickVideo}
            >
                <source src={videoMeta.preview_src} type="video/mp4"/>
            </video>
            <header className={styles.CardHeader}>
                <h2 className={styles.Title}>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={`https://www.aparat.com/v/${videoMeta.uid}`}
                    >{videoMeta.title}</a>
                </h2>
                <div
                    className={styles.Profile}>
                    {videoMeta.profilePhoto && (
                        <a
                            href={`https://www.aparat.com/${videoMeta.username}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className={styles.Avatar}
                                src={videoMeta.profilePhoto}
                                alt={videoMeta.sender_name}
                            />
                        </a>
                    )}
                    <a
                        href={`https://www.aparat.com/${videoMeta.username}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {videoMeta.sender_name}
                    </a>
                </div>
            </header>
            <footer className={styles.CardFooter}>
                <div className={styles.Description}>{videoMeta.description}</div>
            </footer>
        </Container>
    );
}
