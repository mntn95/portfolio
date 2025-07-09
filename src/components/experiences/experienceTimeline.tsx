"use client";

import * as React from "react";
import { motion, MotionValue } from "framer-motion";

type ExperienceTimelineT = {
    scrollY: MotionValue<number>;
};

const ExperienceTimeline: React.FC<ExperienceTimelineT> = ({ scrollY }) => (
    <motion.div
        className="absolute w-1 h-full rounded-full bg-gray-300 origin-top"
        initial={{ scaleY: 0 }}
        style={{ scaleY: scrollY }}
    />
);

export default ExperienceTimeline;
