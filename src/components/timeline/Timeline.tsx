import React, {useEffect, useState} from "react";

import {mostViewedVideosApi} from "../../api/video/mostViewedVideos";
import {VideoEntity} from "../../types/entity/videoEntity";
import {Card} from "../card/Card";

import styles from "./Timeline.module.scss";
import {PlayerProvider} from "../player/PlayerProvider";

interface Props {

}

export const Timeline: React.FC<Props> = () => {
    const [videos, setVideos] = useState<VideoEntity[]>();

    useEffect(() => {
        mostViewedVideosApi()
            .then(resp => {
                setVideos(resp.data.data);
            });
    }, [])

    return (
        <PlayerProvider>
            <div className={styles.Timeline}>
                {videos?.map(video => {
                    return (
                        <React.Fragment key={video.id}>
                            {video.type === "Video" && (<Card video={video}/>)}
                        </React.Fragment>
                    );
                })}
            </div>
        </PlayerProvider>
    );
}
