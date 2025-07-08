"use client";

import * as React from "react";
import { animate, motion } from "framer-motion";

import { arrowIcons, reviews } from "@/assets";
import { Heading, isPair } from "@/base-components";
import type { ReviewData } from "@/types";

import Review from "./review";

const Reviews: React.FC = () => {
    const [index, setIndex] = React.useState<number>(0);
    const [direction, setDirection] = React.useState<boolean>(false);

    const prevIndex = React.useRef<number>(0);
    const slides = React.useRef<Array<HTMLDivElement>>([]);

    const isIndexZero = index === 0;
    const isIndexLength = index === reviews.length - 1;

    React.useEffect(() => {
        const currentSlide = slides.current[index];
        const previousSlide = slides.current[prevIndex.current];

        const isIndexPair = isPair(index);

        if (direction) {
            animate(currentSlide, { scale: 1, rotate: 0 }, { delay: 0.2 });
            animate(previousSlide, { x: "100%" });
        } else {
            animate(currentSlide, { x: 0 }, { delay: 0.3 });
            animate(previousSlide, {
                scale: isIndexZero ? 1 : 0.4,
                rotate: isIndexZero ? 0 : isIndexPair ? 10 : -10,
            });
        }
        prevIndex.current = index;
    }, [index, direction, isIndexZero]);

    return (
        <div className="my-20 px-96">
            <Heading text="Reviews" />
            <div className="flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className=" relative w-[800px] lg:w-[600px] md:w-[95%] sm:w-[280px] h-[500px] lg:h-[450px] md:h-[400px] sm:h-[600px] flex items-center justify-center overflow-hidden"
                >
                    {reviews.map((review: ReviewData, index: number) => (
                        <Review
                            {...review}
                            key={index}
                            slides={slides.current}
                        />
                    ))}
                </motion.div>
                <div className="flex gap-x-4 text-4xl text-yellow-500 mt-5">
                    <button
                        className={`${isIndexZero ? "opacity-30 pointer-events-none" : "opacity-100 pointer-events-auto"} hover:scale-150 transition-all`}
                        onClick={() => {
                            setDirection(true);
                            setIndex(index - 1);
                        }}
                    >
                        {arrowIcons[0]}
                    </button>
                    <button
                        className={`${isIndexLength ? "opacity-30 pointer-events-none" : "opacity-100 pointer-events-auto"} hover:scale-150 transition-all`}
                        onClick={() => {
                            setDirection(false);
                            setIndex(index + 1);
                        }}
                    >
                        {arrowIcons[1]}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
