"use client";

import * as React from "react";
import { aboutText } from "@/assets";
import { Heading } from "@/base-components";
import AboutImage from "./aboutImage";
import AboutTextContent from "./aboutTextContent";
import AboutAchievements from "./aboutAchievements";

const About: React.FC = () => (
    <div className="min-h-screen px-96 flex flex-col items-center justify-center">
        <Heading text="About Me" />
        <div className="w-full flex items-center justify-between md:justify-center">
            <AboutImage src="/about-me.png" alt="About Image" />
            <AboutTextContent text={aboutText} />
        </div>
        <AboutAchievements />
    </div>
);

export default About;
