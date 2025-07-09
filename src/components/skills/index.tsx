"use client";

import * as React from "react";
import { Heading } from "@/base-components";
import SkillsList from "./skillsList";

const Skills: React.FC = () => (
    <div
        id="skills"
        className="min-h-screen flex flex-col items-center justify-center gap-y-20"
    >
        <Heading text="Skills" />
        <SkillsList />
    </div>
);

export default Skills;
