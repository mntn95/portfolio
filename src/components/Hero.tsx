"use client";

import * as React from "react";

import Image from "next/image";

import { heroIcons } from "@/assets";
import { useMotionValue } from "framer-motion";

type HeroT = ({}) => React.ReactNode;

const Hero: HeroT = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = ({
        clientX,
        clientY,
    }: {
        clientX: number;
        clientY: number;
    }) => {
        x.set(clientX);
        y.set(clientY);
    };

    return (
        <div
            className="h-screen grid place-items-center"
            onMouseMove={handleMouseMove}
        >
            <div>
                <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
                    <div className="flex items-center justify-center">
                        <Image
                            src={"/person.png"}
                            alt="My Image"
                            width={400}
                            height={400}
                            priority
                            className="h-auto w-[150px]"
                        />
                        <span className="absolute text-3xl font-semibold text-white">
                            Hey
                        </span>
                    </div>
                    <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500">
                        My name is Mathieu Nguyen &
                    </h1>
                    <p className="text-lg tracking-wider text-gray-700">
                        I am a Front-End Web Developer 🙃
                    </p>
                </div>
                <div className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600">
                    {heroIcons.map((icon, i) => (
                        <a
                            href="#"
                            key={i}
                            className="rounded-lg hover:bg-red-400 hover:text-white transition-colors"
                        >
                            {icon}
                        </a>
                    ))}
                </div>
                <a
                    href="#"
                    className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
                >
                    Talk to me
                </a>
            </div>
        </div>
    );
};

export default Hero;
