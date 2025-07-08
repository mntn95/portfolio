"use client";

import * as React from "react";

import { skills } from "@/assets";
import { Heading } from "@/base-components";

import Skill from "./skill";

const Skills = (): React.ReactNode => (
    <div className="min-h-screen flex flex-col items-center justify-center gap-y-20 px-96">
        <Heading text="Skills" />
        <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
            {skills.map(({ icon, name }, index) => (
                <Skill key={index} icon={icon} name={name} index={index} />
            ))}
        </div>
    </div>
);

export default Skills;
