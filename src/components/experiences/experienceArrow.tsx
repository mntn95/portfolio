"use client";

import * as React from "react";
import { arrowLeftIcon } from "@/assets";

type ExperienceArrowT = {
    isPair: boolean;
};

const ExperienceArrow: React.FC<ExperienceArrowT> = ({ isPair }) => (
    <span
        className={`absolute top-20 text-red-300 -translate-y-1/2 ${
            isPair ? "left-full rotate-180" : "right-full"
        }`}
    >
        {arrowLeftIcon}
    </span>
);

export default ExperienceArrow;
