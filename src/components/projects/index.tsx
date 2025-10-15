"use client";

import React from "react";
import { Layout } from "@/base-components";
import ProjectsButtons from "./projectsButtons";
import ProjectsList from "./projectsList";

const Projects: React.FC = () => {
    const [tech, setTech] = React.useState<string>("All");
    const [index, setIndex] = React.useState<number>(0);

    return (
        <Layout id="projects" title="Projets">
            <ProjectsButtons
                setTech={setTech}
                index={index}
                setIndex={setIndex}
            />
            <ProjectsList tech={tech} />
        </Layout>
    );
};

export default Projects;
