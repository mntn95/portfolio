import * as React from "react";
import { motion } from "framer-motion";

import { Image } from "@/base-components";

import { getStarIcon, getStarValue } from "./helpers";

const Review = ({
    comment,
    image,
    name,
    slides,
    stars,
}: {
    comment: string;
    image: string;
    name: string;
    slides: Array<HTMLDivElement>;
    stars: number[];
}) => (
    <motion.div
        initial={{ x: "100%" }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4 border border-yellow-500 bg-zinc-50 p-14 lg:p-5 rounded-xl"
        // @ts-expect-error : Typescript doesn't understand slides must be typed as an array to use push
        ref={(element: HTMLDivElement) => slides && slides.push(element)}
    >
        <Image
            className="w-[130px] aspect-square rounded-full border border-yellow-500 p-4 object-contain"
            src={image}
            alt="Reviews Image"
            width={130}
            height={130}
        />
        <h1 className="text-2xl md:text-xl text-center tracking-wider text-yellow-600">
            {name}
        </h1>
        <p className="text-lg md:text-sm text-justify font-extralight tracking-wide text-gray-600 first-letter:pl-2">
            {comment}
        </p>
        <div className="flex flex-col items-center justify-center gap-y-2">
            <span className="text-lg font-light text-yellow-600 mr-3">
                {getStarValue(stars)}
            </span>
            <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                {stars.map((starValue, index) => (
                    <span key={index}>{getStarIcon(starValue)}</span>
                ))}
            </div>
        </div>
    </motion.div>
);

export default Review;
