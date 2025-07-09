"use client";

import React from "react";
import { Heading } from "@/base-components";
import ProjectsButtons from "./projectsButtons";
import ProjectsList from "./projectsList";

const Projects: React.FC = () => {
    const [tech, setTech] = React.useState<string>("All");
    const [index, setIndex] = React.useState<number>(0);

    return (
        <div className="min-h-screen py-20 px-80">
            <Heading text="Projects" />
            <ProjectsButtons
                setTech={setTech}
                index={index}
                setIndex={setIndex}
            />
            <ProjectsList tech={tech} />
        </div>
    );
};

export default Projects;
