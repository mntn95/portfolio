"use client";

import * as React from "react";
import { motion } from "framer-motion";

type ExperienceCardT = {
    title: string;
    education: string;
    experience: string[];
    isPair: boolean;
};

const ExperienceCard: React.FC<ExperienceCardT> = ({
    title,
    education,
    experience,
    isPair,
}) => (
    <motion.div
        initial={{
            opacity: 0,
            x: isPair ? -80 : 80,
        }}
        transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 50,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative flex flex-col gap-y-3 rounded-md border border-red-300 bg-white p-4 tracking-wide sm:text-sm dark:bg-zinc-700 transition-colors"
    >
        <h1 className="text-xl sm:text-lg font-light text-gray-700 dark:text-white">
            {title}
        </h1>
        <p className="text-gray-800 dark:text-gray-100">
            <span className="block font-light">Education:</span>
            <span className="block pl-2 font-extralight">{education}</span>
        </p>
        <div className="text-gray-800 dark:text-gray-200 transition-colors">
            <span className="font-light">Experience:</span>
            <ul className="pl-2">
                {experience.map((item, idx) => (
                    <li key={idx} className="my-1 font-extralight">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </motion.div>
);

export default ExperienceCard;
