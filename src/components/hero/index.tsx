"use client";

import * as React from "react";
import { useMotionValue } from "framer-motion";
import type { WindowOffSet, MouseEventCoords } from "@/types";
import HeroLogo from "./heroLogo";
import HeroButtons from "./heroButtons";
import HeroContent from "./heroContent";

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
            className="h-screen grid place-items-center"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
        >
            <div>
                <HeroLogo
                    axisX={x}
                    axisY={y}
                    buttonHover={buttonHover}
                    isMouseMoving={isMouseMoving}
                    windowOffSet={windowOffSet}
                />
                <HeroContent />
                <HeroButtons setButtonHover={setButtonHover} />
            </div>
        </div>
    );
};

export default Hero;
