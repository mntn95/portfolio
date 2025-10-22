"use client";

import React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Layout } from "@/base-components";
import ProjectsButtons from "./projectsButtons";
import ProjectsList from "./projectsList";

const Projects: React.FC = () => {
    const { t } = useTranslation("projects");
    const [tech, setTech] = React.useState<string>("all");
    const [index, setIndex] = React.useState<number>(0);

    return (
        <Layout id="projects" title={t("title")} alignTop>
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
