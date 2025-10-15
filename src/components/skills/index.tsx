"use client";

import * as React from "react";
import { Layout } from "@/base-components";
import SkillsList from "./skillsList";

const Skills: React.FC = () => (
    <Layout id="skills" title="Skills">
        <SkillsList />
    </Layout>
);

export default Skills;
