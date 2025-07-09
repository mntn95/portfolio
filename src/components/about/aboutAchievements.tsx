"use client";

import * as React from "react";
import { aboutData } from "@/assets";
import type { AboutData } from "@/types";
import { Achievements } from "./achievements";

const AboutAchievements: React.FC = () => (
    <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
        {aboutData.map(({ amount, icon, title }: AboutData, index: number) => (
            <Achievements key={index} title={title} amount={amount}>
                {icon}
            </Achievements>
        ))}
    </div>
);

export default AboutAchievements;
