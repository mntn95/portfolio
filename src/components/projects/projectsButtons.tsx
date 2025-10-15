"use client";

import * as React from "react";
import { animate, motion } from "framer-motion";
import { projectsButton } from "@/assets";
import type { ProjectsButtonType } from "@/types";

type ProjectsButtonsT = {
    setTech: (tech: string) => void;
    index: number;
    setIndex: (index: number) => void;
};

const ProjectsButtons: React.FC<ProjectsButtonsT> = ({
    setTech,
    index,
    setIndex,
}) => {
    const prevIndex = React.useRef<number>(0);
    const buttonsRef = React.useRef<Array<HTMLDivElement>>([]);

    React.useEffect(() => {
        animate(buttonsRef.current[prevIndex.current], {
            scale: 1,
            opacity: 0.5,
        });
        animate(buttonsRef.current[index], {
            scale: 1.2,
            opacity: 1,
        });
        prevIndex.current = index;
    }, [index]);

    return (
        <div className="flex flex-wrap items-center justify-between gap-4 py-10">
            {projectsButton.map(
                (label: ProjectsButtonType, buttonIndex: number) => (
                    <motion.button
                        initial={{
                            scale: buttonIndex === 0 ? 1.2 : 1,
                        }}
                        key={`button-${buttonIndex}`}
                        // @ts-expect-error : Typescript doesn't understand slides must be typed as an array to use push
                        ref={(element: HTMLDivElement) =>
                            buttonsRef.current.push(element)
                        }
                        onClick={() => {
                            setTech(label);
                            setIndex(buttonIndex);
                        }}
                        className={`border border-border rounded-xl px-2 py-1 text-sm font-light tracking-wider bg-theme-light-surface dark:bg-theme-dark-surface text-theme-light-text dark:text-theme-dark-text ${
                            buttonIndex === index
                                ? "opacity-100"
                                : "opacity-50 hover:opacity-100"
                        }`}
                    >
                        {label}
                    </motion.button>
                ),
            )}
        </div>
    );
};

export default ProjectsButtons;
