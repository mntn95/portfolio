"use client";

import * as React from "react";
import { Heading } from "@/base-components";
import ReviewsCarousel from "./reviewsCarousel";
import ReviewsNavigation from "./reviewsNavigation";

const Reviews: React.FC = () => {
    const [index, setIndex] = React.useState<number>(0);
    const [direction, setDirection] = React.useState<boolean>(false);

    return (
        <div className="my-20 px-96">
            <Heading text="Reviews" />
            <div className="flex flex-col items-center justify-center">
                <ReviewsCarousel index={index} direction={direction} />
                <ReviewsNavigation
                    index={index}
                    setIndex={setIndex}
                    setDirection={setDirection}
                />
            </div>
        </div>
    );
};

export default Reviews;
