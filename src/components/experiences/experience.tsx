"use client";
// This section has client side interactions, we tell next.js to use client side rendering for a smoother experience

import * as React from "react";

import { arrowLeftIcon } from "@/assets";

import { motion } from "framer-motion";

import { isPair } from "../base-components/helpers";

const Experience = ({
    education,
    experience,
    index,
    key,
    title,
    year,
}: {
    education: string;
    experience: Array<string>;
    index: number;
    key: string;
    title: string;
    year: number;
}) => (
    <div
        className={`w-[600px] xl:w-[480px] sm:w-full px-12 sm:px-0 relative ${
            isPair(index)
                ? "-left-[300px] xl:-left-[240px] lg:-left-0"
                : "left-[300px] xl:left-[240px] lg:left-0"
        }`}
        key={key}
    >
        <motion.div
            initial={{
                opacity: 0,
                x: isPair(index) ? -80 : 80,
            }}
            transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 50,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col gap-y-3 rounded-md border bg-white p-4 tracking-wide sm:text-sm"
        >
            <h1 className="text-xl sm:text-lg font-light text-gray-700">
                {title}
            </h1>
            <p className="text-gray-800">
                <span className="block font-light">Education:</span>
                <span className="block pl-2 font-extralight">{education}</span>
            </p>
            <div className="text-gray-800">
                <span className="font-light">Experience:</span>
                <ul className="pl-2">
                    {experience.map((item, index) => (
                        <li key={index} className="my-1 font-extralight">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <span
                className={`absolute top-20 text-red-300 -translate-y-1/2 ${isPair(index) ? "left-full rotate-180" : "right-full"}`}
            >
                {arrowLeftIcon}
            </span>
        </motion.div>
        <div
            className={`w-14 absolute top-20 border border-gray-300 rounded-full aspect-square grid place-items-center text-red-400 font-light -translate-y-1/2 z-10 bg-white ${
                isPair(index)
                    ? "left-full -translate-x-1/2 lg:left-1/2"
                    : "right-full translate-x-1/2 lg:right-1/2"
            }`}
        >
            {year}
        </div>
    </div>
);

export default Experience;
