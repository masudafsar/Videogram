import {VideoEntity} from "../../../entity/videoEntity";

export interface mostViewedVideosRequest {
    next_max?: number;
    limit?: number;
}

export interface mostViewedVideosResponse {
    links: any;
    data: VideoEntity[];
}
