"use client";

import * as React from "react";
import { useMotionValue } from "framer-motion";
import type { WindowOffSet, MouseEventCoords } from "@/types";
import HeroButtons from "./heroButtons";
import HeroContent from "./heroContent";
import ParticlesBackground from "./particlesBackground";

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
        <div
            id="home"
            className="h-screen w-full relative grid place-items-center"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
        >
            <ParticlesBackground />
            <div className="relative z-10 w-full flex justify-center pointer-events-none">
                <div className="w-full max-w-[calc(100vw-70px)]">
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
    );
};

export default Hero;
