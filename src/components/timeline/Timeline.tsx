import React, {useEffect, useState} from "react";

import styles from "./Timeline.module.scss";
import {mostViewedVideosApi} from "../../api/video/mostViewedVideos";
import {VideoEntity} from "../../types/entity/videoEntity";

interface Props {

}

export const Timeline: React.FC<Props> = ({}) => {
    const [videos, setVideos] = useState<VideoEntity[]>();

    useEffect(() => {
        mostViewedVideosApi()
            .then(resp => {
                setVideos(resp.data.data);
            });
    }, [])

    return (
        <div className={styles.Timeline}/>
    );
}
