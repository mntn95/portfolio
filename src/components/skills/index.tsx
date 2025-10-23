"use client";

import * as React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Layout } from "@/base-components";
import SkillsList from "./skillsList";

const Skills: React.FC = () => {
    const { t } = useTranslation("skills");

    return (
        <Layout id="skills" title={t("title")}>
            <SkillsList />
        </Layout>
    );
};

export default Skills;
