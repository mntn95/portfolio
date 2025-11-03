"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "@/hooks/useTranslation";
import type { HeroContentProps } from "@/types";

const HeroContent: React.FC<HeroContentProps> = () => {
    const { t } = useTranslation("hero");

    return (
        <div className="flex flex-col gap-y-3 font-light capitalize">
            <h1 className="text-center text-8xl uppercase font-bold tracking-wider text-theme-text sm:text-5xl">
                <TypeAnimation
                    sequence={[1800, "Mathieu Nguyen"]}
                    speed={50}
                    cursor={false}
                />
            </h1>
            <motion.p
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8 }}
                className="text-2xl sm:text-lg uppercase tracking-wider text-theme-text text-center"
            >
                {t("subtitle")}
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 }}
                className="text-md sm:text-sm text-center tracking-wider text-warning"
            >
                {t("technologies")}
            </motion.p>
        </div>
    );
};

export default HeroContent;
