"use client";

import * as React from "react";
import { aboutText } from "@/assets";
import { Heading } from "@/base-components";
import AboutTextContent from "./aboutTextContent";
const About: React.FC = () => (
    <div id="about" className="min-h-screen flex flex-col justify-center">
        <Heading text="À propos de moi" />
        <div className="w-full flex items-center justify-between md:justify-center">
            <AboutTextContent text={aboutText} />
        </div>
    </div>
);

export default About;
