import {AxiosResponse} from "axios";
import {mostViewedVideosRequest, mostViewedVideosResponse} from "../../types/api/video/video/mostViewedVideos";
import {Axios} from "../Axios";

export const mostViewedVideosApi = (params: mostViewedVideosRequest = {}) => {
    return Axios.get<mostViewedVideosResponse,
        AxiosResponse<mostViewedVideosResponse,
            mostViewedVideosRequest>,
        mostViewedVideosRequest>(
        '/api/mockApi.json',
        {
            params
        });
}
