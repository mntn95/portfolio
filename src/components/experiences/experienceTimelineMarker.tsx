"use client";

import * as React from "react";

type ExperienceTimelineMarkerT = {
    year: number;
    isPair: boolean;
};

const ExperienceTimelineMarker: React.FC<ExperienceTimelineMarkerT> = ({
    year,
    isPair,
}) => (
    <div
        className={`w-14 absolute top-20 border border-gray-300 rounded-full aspect-square grid place-items-center text-red-400 font-light -translate-y-1/2 z-10 bg-white ${
            isPair
                ? "left-full -translate-x-1/2 lg:left-1/2"
                : "right-full translate-x-1/2 lg:right-1/2"
        }`}
    >
        {year}
    </div>
);

export default ExperienceTimelineMarker;
