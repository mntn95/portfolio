import * as React from "react";
import { motion } from "framer-motion";

import type { ReviewProps } from "@/types";

import { getStarIcon, getStarValue } from "./helpers";

const Review: React.FC<ReviewProps> = ({ comment, name, slides, stars }) => (
    <motion.div
        initial={{ x: "100%" }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4 border border-yellow-500 bg-zinc-50 p-14 lg:p-5 rounded-xl dark:bg-zinc-700 transition-colors"
        ref={(element: HTMLDivElement) => {
            if (slides) slides.push(element);
        }}
    >
        <h1 className="text-2xl md:text-xl text-center tracking-wider text-yellow-600">
            {name}
        </h1>
        <p className="text-lg md:text-sm text-justify font-extralight tracking-wide text-gray-600 first-letter:pl-2 dark:text-white transition-colors">
            {comment}
        </p>
        <div className="flex flex-col items-center justify-center gap-y-2">
            <span className="text-lg font-light text-yellow-600 mr-3">
                {getStarValue(stars)}
            </span>
            <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                {stars.map((starValue, index) => (
                    <span key={index}>{getStarIcon(starValue)}</span>
                ))}
            </div>
        </div>
    </motion.div>
);

export default Review;
