"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

import type { ReviewProps } from "@/types";

import { getStarIcon, getStarValue } from "./helpers";

const Review: React.FC<ReviewProps> = ({ review, slides, stars }) => {
    const { t } = useTranslation("reviews");

    if (!review || !review.nameKey || !review.commentKey) return null;

    return (
        <motion.div
            initial={{ x: "100%" }}
            className="absolute inset-0 flex flex-col items-center justify-evenly gap-y-3 lg:gap-y-4 border border-border bg-theme-surface p-8 lg:p-5 rounded-xl transition-colors"
            ref={(element: HTMLDivElement) => {
                if (slides) slides.push(element);
            }}
        >
            <h1 className="text-2xl md:text-xl text-center tracking-wider text-link">
                {t(review.nameKey)}
            </h1>
            <p className="text-lg md:text-sm text-justify tracking-wide text-theme-text first-letter:pl-2 transition-colors">
                {t(review.commentKey)}
            </p>
            <div className="flex flex-col items-center justify-center gap-y-2">
                <span className="text-lg font-light text-link mr-3">
                    {getStarValue(stars)} / 5
                </span>
                <div className="flex items-center gap-x-2 text-2xl text-border">
                    {stars.map((starValue, index) => (
                        <span key={index}>{getStarIcon(starValue)}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Review;
