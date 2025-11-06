"use client";

import * as React from "react";
import { skills } from "@/data";
import type { SkillData } from "@/types";
import Skill from "./skill";

const SkillsList: React.FC = () => (
    <div className="w-full flex justify-between pt-5 flex-wrap sm:gap-x-2 md:gap-x-6 gap-x-8 gap-y-8 lg:gap-y-6">
        {skills.map(({ icon, name }: SkillData, index: number) => (
            <Skill key={index} icon={icon} name={name} index={index} />
        ))}
    </div>
);

export default SkillsList;
