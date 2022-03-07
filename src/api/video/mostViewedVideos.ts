import axios, {AxiosResponse} from "axios";
import {mostViewedVideosRequest, mostViewedVideosResponse} from "../../types/api/video/video/mostViewedVideos";

export const mostViewedVideosApi = (params: mostViewedVideosRequest = {}) => {
    return axios.get<mostViewedVideosResponse,
        AxiosResponse<mostViewedVideosResponse,
            mostViewedVideosRequest>,
        mostViewedVideosRequest>(
        '/mostViewedVideos.json',
        {
            params
        });
}
