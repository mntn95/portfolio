"use client";

import * as React from "react";

const HeroContent: React.FC = () => (
    <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
        <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl">
            My name is Mathieu Nguyen &
        </h1>
        <p className="text-lg tracking-wider text-gray-700">
            I am a Front-End Web Developer 🙃
        </p>
    </div>
);

export default HeroContent;
