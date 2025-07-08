"use client";

import * as React from "react";
import { useMotionValue } from "framer-motion";
import type { WindowOffSet, MouseEventCoords } from "@/types";

import HeroLogo from "./heroLogo";
import HeroButtons from "./heroButtons";

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
            className="h-screen grid place-items-center"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
        >
            <div>
                <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
                    <HeroLogo
                        axisX={x}
                        axisY={y}
                        buttonHover={buttonHover}
                        isMouseMoving={isMouseMoving}
                        windowOffSet={windowOffSet}
                    />
                    <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl">
                        My name is Mathieu Nguyen &
                    </h1>
                    <p className="text-lg tracking-wider text-gray-700">
                        I am a Front-End Web Developer 🙃
                    </p>
                </div>
                <HeroButtons setButtonHover={setButtonHover} />
            </div>
        </div>
    );
};

export default Hero;
