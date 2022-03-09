import React from "react";

import styles from "./Card.module.scss"
import {VideoEntity} from "../../types/entity/videoEntity";
import {Container} from "../container/Container";
import {VideoPlayer} from "../player/VideoPlayer";

interface Props {
    video: VideoEntity
}

export const Card: React.FC<Props> = ({video}) => {
    const {attributes: videoMeta} = video;

    return (
        <Container className={styles.Card}>
            <VideoPlayer
                playerId={`video-${videoMeta.id}`}
                className={styles.Video}
                loop
                preload="auto"
                controls={false}
                poster={videoMeta.small_poster}
            >
                <source src={videoMeta.preview_src} type="video/mp4"/>
            </VideoPlayer>
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
