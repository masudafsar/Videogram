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
                mediaSrc={videoMeta.src}
                className={styles.Video}
                loop
                muted
                preload="auto"
                controls={false}
                poster={videoMeta.small_poster}
            />
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
                    {videoMeta.avatar && (
                        <a
                            href={`https://www.aparat.com/${videoMeta.username}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className={styles.Avatar}
                                src={videoMeta.avatar}
                                alt={videoMeta.displayName}
                            />
                        </a>
                    )}
                    <a
                        href={`https://www.aparat.com/${videoMeta.username}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {videoMeta.displayName}
                    </a>
                </div>
            </header>
            <footer className={styles.CardFooter}>
                <div className={styles.Description}>{videoMeta.description}</div>
            </footer>
        </Container>
    );
}
