"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import type { HeroContentProps } from "@/types";

const HeroContent: React.FC<HeroContentProps> = () => (
    <div className="flex flex-col gap-y-3 font-light capitalize">
        <h1 className="text-center text-8xl uppercase font-bold tracking-wider text-theme-light-text sm:text-5xl dark:text-theme-dark-text transition-colors">
            <TypeAnimation
                sequence={["Mathieu Nguyen"]}
                speed={50}
                cursor={false}
            />
        </h1>
        <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="text-2xl sm:text-lg uppercase tracking-wider text-theme-light-text dark:text-theme-dark-text transition-colors text-center"
        >
            développeur web indépendant au service de votre réussite
        </motion.p>
        <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="text-md sm:text-sm text-center tracking-wider text-warning transition-colors"
        >
            React - Next - TypeScript - Tailwind
        </motion.p>
    </div>
);

export default HeroContent;
