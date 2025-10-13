"use client";

import * as React from "react";
import { arrowIcons, reviews } from "@/assets";

type ReviewsNavigationT = {
    index: number;
    setIndex: (index: number) => void;
    setDirection: (direction: boolean) => void;
};

const ReviewsNavigation: React.FC<ReviewsNavigationT> = ({
    index,
    setIndex,
    setDirection,
}) => {
    const isIndexZero = index === 0;
    const isIndexLength = index === reviews.length - 1;

    return (
        <div className="flex gap-x-4 text-4xl text-link mt-5">
            <button
                className={`${isIndexZero ? "opacity-30 pointer-events-none" : "opacity-100 pointer-events-auto"} hover:scale-150 transition-all`}
                onClick={() => {
                    setDirection(true);
                    setIndex(index - 1);
                }}
            >
                {arrowIcons[0]}
            </button>
            <button
                className={`${isIndexLength ? "opacity-30 pointer-events-none" : "opacity-100 pointer-events-auto"} hover:scale-150 transition-all`}
                onClick={() => {
                    setDirection(false);
                    setIndex(index + 1);
                }}
            >
                {arrowIcons[1]}
            </button>
        </div>
    );
};

export default ReviewsNavigation;
