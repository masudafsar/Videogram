import React, {useEffect, useState} from "react";

import {ITimelineContext, TimelineContext} from "../../contexts/TimelineContext";
import {mostViewedVideosApi} from "../../api/video/mostViewedVideos";
import {VideoEntity} from "../../types/entity/videoEntity";
import {Card} from "../card/Card";

import styles from "./Timeline.module.scss";

interface Props {

}

export const Timeline: React.FC<Props> = () => {
    const [videos, setVideos] = useState<VideoEntity[]>();
    const [timelineDetails, setTimelineDetails] = useState<ITimelineContext>({});

    useEffect(() => {
        mostViewedVideosApi()
            .then(resp => {
                setVideos(resp.data.data);
            });
    }, [])

    return (
        <TimelineContext.Provider value={timelineDetails}>
            <div className={styles.Timeline}>
                {videos?.map(video => {
                    return (
                        <React.Fragment key={video.id}>
                            {video.type === "Video" && (<Card video={video}/>)}
                        </React.Fragment>
                    );
                })}
            </div>
        </TimelineContext.Provider>
    );
}
