"use client";

import * as React from "react";
import { useMotionValue } from "framer-motion";
import type { WindowOffSet, MouseEventCoords } from "@/types";
import HeroButtons from "./heroButtons";
import HeroContent from "./heroContent";
import ParticlesBackground from "./particlesBackground";
import { Layout } from "@/base-components";

const Hero: React.FC = () => {
    const [windowOffSet, setWindowOffSet] = React.useState<WindowOffSet>({
        innerWidth: 0,
        innerHeight: 0,
    });

    const [isMouseMoving, setIsMouseMoving] = React.useState<boolean>(false);

    const [buttonHover, setButtonHover] = React.useState<boolean>(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY }: MouseEventCoords) => {
        x.set(clientX);
        y.set(clientY);
    };

    const handleMouseEnter = () => {
        const { innerWidth, innerHeight } = window;
        setWindowOffSet({
            innerWidth,
            innerHeight,
        });
        setIsMouseMoving(true);
    };

    return (
        <Layout id="home" showHeading={false}>
            <div
                className="h-full w-full relative flex flex-col"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
            >
                <ParticlesBackground />
                <div className="relative z-0 w-full flex-1 flex justify-center items-center pointer-events-none">
                    <div className="w-full max-w-full">
                        <HeroContent
                            axisX={x}
                            axisY={y}
                            buttonHover={buttonHover}
                            isMouseMoving={isMouseMoving}
                            windowOffSet={windowOffSet}
                        />
                        <HeroButtons setButtonHover={setButtonHover} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Hero;
