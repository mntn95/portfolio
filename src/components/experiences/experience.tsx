"use client";

import * as React from "react";
import type { ExperienceProps } from "@/types";
import { isPair } from "../../base-components/helpers";
import ExperienceCard from "./experienceCard";
import ExperienceArrow from "./experienceArrow";
import ExperienceTimelineMarker from "./experienceTimelineMarker";

const Experience: React.FC<ExperienceProps> = ({
    education,
    experience,
    index,
    title,
    year,
}) => {
    const isEven = isPair(index);

    return (
        <div
            className={`w-[600px] xl:w-[480px] sm:w-full px-12 sm:px-0 relative ${
                isEven
                    ? "-left-[300px] xl:-left-[240px] lg:-left-0"
                    : "left-[300px] xl:left-[240px] lg:left-0"
            }`}
        >
            <ExperienceCard
                title={title}
                education={education}
                experience={experience}
                isPair={isEven}
            />
            <ExperienceArrow isPair={isEven} />
            <ExperienceTimelineMarker year={year} isPair={isEven} />
        </div>
    );
};

export default Experience;
