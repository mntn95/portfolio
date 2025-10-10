"use client";

import * as React from "react";

import { motion } from "framer-motion";

import { Image, isPair } from "@/base-components";
import type { ProjectProps } from "@/types";

const Project: React.FC<ProjectProps> = ({ data, index }) => {
    const [show, setShow] = React.useState(false);

    const { name, desc, url } = data;

    return (
        <motion.div
            initial={{ opacity: 0, y: isPair(index) ? 100 : -100 }}
            className="relative w-[350px] sm:w-full h-max border border-yellow-400 rounded-lg cursor-pointer"
            whileInView={{ opacity: 1, y: 0 }}
            onClick={() => setShow(!show)}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
            <Image
                src={url}
                className="rounded-lg opacity-70"
                alt="project-image"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: show ? 1 : 0 }}
                className="absolute top-0 w-full h-full flex flex-col items-center justify-center grap-y-2 bg-white p-6 rounded-lg dark:bg-zinc-700/95 transition-colors"
            >
                <h2 className="text-lg font-bold tracking-wide text-gray-500 dark:text-white transition-colors">
                    {name}
                </h2>
                <p className="text-justify text-gray-500 first-letter:pl-2 dark:text-gray-100 transition-colors">
                    {desc}
                </p>
            </motion.div>
        </motion.div>
    );
};

export default Project;
