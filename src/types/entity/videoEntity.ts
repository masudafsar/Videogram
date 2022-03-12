import {GeneralEntity} from "./generalEntity";

export interface VideoEntity extends GeneralEntity {
    attributes: {
        "id": number;
        "uid": string;

        "title": string;
        "description": string;

        "username": string;
        "displayName":string;
        "avatar": string;

        "big_poster": string;
        "small_poster": string;
        "duration": number;

        "visit_count": number;
        "like_count": number;
        "comment_count": number;

        "src": string;
    }
}
