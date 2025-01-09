"use client";
// This section has client side interactions, we tell next.js to use client side rendering for a smoother experience

import * as React from "react";
import Image from "next/image";

import { experiences } from "@/assets";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

import Heading from "../base-components/heading";

import Experience from "./experience";

const Experiences = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 95%", "end end"],
    });

    const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 });

    return (
        <div className="py-20 px-96 relative">
            <Heading text={"Experience & Education"} />
            <Image
                className="absolute -top-4 right-96 opacity-70 lg:hidden"
                src={"/education.png"}
                alt="Experience Image"
                width={400}
                height={400}
            />

            <div
                ref={containerRef}
                className="w-full h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10"
            >
                {experiences.map((item, index) => (
                    <Experience
                        {...item}
                        index={index}
                        key={`experience-${index}`}
                    />
                ))}
                <motion.div
                    className="absolute w-1 h-full rounded-full bg-gray-300 origin-top"
                    initial={{ scaleY: 0 }}
                    style={{ scaleY: scrollY }}
                ></motion.div>
            </div>
        </div>
    );
};

export default Experiences;
