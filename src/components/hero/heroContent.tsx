"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import type { HeroContentProps } from "@/types";

const HeroContent: React.FC<HeroContentProps> = () => (
    <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center justify-center gap-y-3 font-light capitalize"
    >
        <h1 className="text-center text-8xl uppercase font-bold tracking-wider text-gray-500 sm:text-2xl dark:text-white transition-colors">
            <TypeAnimation
                sequence={["Mathieu Nguyen"]}
                speed={1}
                cursor={false}
            />
        </h1>
        <p className="text-2xl sm:text-base uppercase tracking-wider text-gray-700 dark:text-gray-200 transition-colors text-center">
            l’expertise au service de votre vision
        </p>
        <p className="text-md sm:text-xs text-center tracking-wider text-red-500 dark:text-red-500/70 transition-colors">
            React - Next - TypeScript - Tailwind
        </p>
    </motion.div>
);

export default HeroContent;
