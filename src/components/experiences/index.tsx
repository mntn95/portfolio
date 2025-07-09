"use client";
// This section has client side interactions, we tell next.js to use client side rendering for a smoother experience

import * as React from "react";
import { useScroll, useSpring } from "framer-motion";
import { experiences } from "@/assets";
import { Heading } from "@/base-components";
import type { ExperienceData } from "@/types";
import Experience from "./experience";
import ExperienceTimeline from "./experienceTimeline";
import ExperienceImage from "./experienceImage";

const Experiences: React.FC = () => {
    const containerRef = React.useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 95%", "end end"],
    });

    const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 });

    return (
        <div id="experiences" className="py-20 px-96 relative">
            <Heading text={"Experience & Education"} />
            <ExperienceImage src="/education.png" alt="Experience Image" />

            <div
                ref={containerRef}
                className="w-full h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10"
            >
                {experiences.map((item: ExperienceData, index: number) => (
                    <Experience
                        {...item}
                        index={index}
                        key={`experience-${index}`}
                    />
                ))}
                <ExperienceTimeline scrollY={scrollY} />
            </div>
        </div>
    );
};

export default Experiences;
