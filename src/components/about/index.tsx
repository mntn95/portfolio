"use client";

import * as React from "react";
import { aboutText } from "@/assets";
import { Heading } from "@/base-components";
import AboutImage from "./aboutImage";
import AboutTextContent from "./aboutTextContent";
/* import AboutAchievements from "./aboutAchievements";
 */
const About: React.FC = () => (
    <div id="about" className="min-h-screen flex flex-col justify-center">
        <Heading text="About Me" />
        <div className="w-full flex items-center justify-between md:justify-center">
            <AboutImage src="/aboutme.gif" alt="About Image" />
            <AboutTextContent text={aboutText} />
        </div>
        {/*         <AboutAchievements />
         */}
    </div>
);

export default About;
