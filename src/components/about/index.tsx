"use client";

import * as React from "react";
import { aboutText } from "@/assets";
import { Layout } from "@/base-components";
import AboutTextContent from "./aboutTextContent";
const About: React.FC = () => (
    <Layout id="about" title="À propos de moi">
        <div className="w-full flex items-center justify-between md:justify-center">
            <AboutTextContent text={aboutText} />
        </div>
    </Layout>
);

export default About;
