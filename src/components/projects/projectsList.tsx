"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/assets";
import type { ProjectData } from "@/types";
import Project from "./project";

type ProjectsListT = {
    tech: string;
};

const ProjectsList: React.FC<ProjectsListT> = ({ tech }) => (
    <div className="min-h-[1000px] flex flex-wrap items-center justify-center gap-5">
        {projectsData
            .filter((project) =>
                project.tech.some((item) =>
                    tech === "all" ? true : item === tech,
                ),
            )
            .map((data: ProjectData, index: number) => (
                <motion.div key={`data-${index}`} layout>
                    <Project index={index} data={data} />
                </motion.div>
            ))}
    </div>
);

export default ProjectsList;
