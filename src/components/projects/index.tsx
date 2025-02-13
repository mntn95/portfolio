"use client";

import React from "react";

import { animate, motion } from "framer-motion";

import Heading from "../base-components/heading";

import Project from "./project";

import { projectsData, projectsButton } from "@/assets";

const Projects = (): React.ReactNode => {
    const [tech, setTech] = React.useState<string>("All");
    const [index, setIndex] = React.useState<number>(0);
    const prevIndex = React.useRef<number>(0);
    const buttonsRef = React.useRef<Array<HTMLDivElement>>([]);

    React.useEffect(() => {
        animate(buttonsRef.current[prevIndex.current], {
            opacity: 0.5,
            scale: 1,
        });
        animate(buttonsRef.current[index], {
            opacity: 1,
            scale: 1.2,
        });
        prevIndex.current = index;
    }, [index]);

    return (
        <div className="min-h-screen py-20 px-80">
            <Heading text="Projects" />
            <div className="flex flex-wrap items-center justify-between gap-4 py-10">
                {projectsButton.map((label, index) => (
                    <motion.button
                        initial={{
                            opacity: index === 0 ? 1 : 0.5,
                            scale: index === 0 ? 1.2 : 1,
                        }}
                        key={`button-${index}`}
                        // @ts-expect-error : Typescript doesn't understand slides must be typed as an array to use push
                        ref={(element: HTMLDivElement) =>
                            buttonsRef.current.push(element)
                        }
                        onClick={() => {
                            setTech(label);
                            setIndex(index);
                        }}
                        className="border border-yellow-500 rounded-xl px-2 py-1 text-sm font-light tracking-wider text-gray-400"
                    >
                        {label}
                    </motion.button>
                ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5">
                {projectsData
                    .filter((project) =>
                        project.tech.some((item) =>
                            tech === "All" ? true : item === tech,
                        ),
                    )
                    .map((data, index) => (
                        <motion.div key={`data-${index}`} layout>
                            <Project index={index} data={data} />
                        </motion.div>
                    ))}
            </div>
        </div>
    );
};

export default Projects;
