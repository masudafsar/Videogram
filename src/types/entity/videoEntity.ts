import {GeneralEntity} from "./generalEntity";

export interface VideoEntity extends GeneralEntity {
    attributes: {
        "id": string;
        "title": string;
        "description": string;
        "username": string;
        "userid": string;
        // "tags": [];
        "uid": string;
        "isHidden": boolean;
        "visit_cnt": string;
        // "process": string;
        "sender_name":string;
        "big_poster": string;
        "small_poster": string;
        "profilePhoto": string;
        "duration": string;
        "sdate": string;
        "sdate_timediff": number;
        "frame": string;
        "official": string;
        "autoplay": boolean;
        "360d": boolean;
        "brand_priority": string;
        "like_cnt": string;
        "comment_cnt": number;
        "preview_src": string;
        // "file_link_all": string;
        // "file_link": string;
        // "videovisit": string;
        // "like": string;
        // "share": null;
        // "meta": string;
        "catId": string;
        // "tag_rel_id": string
    }
}
