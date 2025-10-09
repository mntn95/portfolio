"use client";

import * as React from "react";
import { motion } from "framer-motion";
import type { HeroContentProps } from "@/types";

import HeroLogo from "./heroLogo";

const HeroContent: React.FC<HeroContentProps> = ({
    axisX,
    axisY,
    buttonHover,
    isMouseMoving,
    windowOffSet,
}) => (
    <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col items-center justify-center gap-y-3 font-light capitalize"
    >
        <HeroLogo
            axisX={axisX}
            axisY={axisY}
            buttonHover={buttonHover}
            isMouseMoving={isMouseMoving}
            windowOffSet={windowOffSet}
        />
        <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl dark:text-white transition-colors">
            My name is Mathieu Nguyen &
        </h1>
        <p className="text-lg tracking-wider text-gray-700 dark:text-gray-200 transition-colors text-center">
            I am a Front-End Web Developer 🙃
        </p>
    </motion.div>
);

export default HeroContent;
