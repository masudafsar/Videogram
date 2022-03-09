import React from "react";

export interface ITimelineContext {
    currentPlatingVideo?: React.RefObject<HTMLVideoElement>;
    setCurrentPlatingVideo?: (videoRef: React.RefObject<HTMLVideoElement>) => void;
}

export const TimelineContext = React.createContext<ITimelineContext>({})
