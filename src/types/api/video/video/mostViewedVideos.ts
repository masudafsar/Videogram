import {VideoEntity} from "../../../entity/videoEntity";

export interface mostViewedVideosRequest {
}

export interface mostViewedVideosResponse {
    data: VideoEntity[];
}
