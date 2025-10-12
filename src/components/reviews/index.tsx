"use client";

import * as React from "react";
import { Heading } from "@/base-components";
import ReviewsCarousel from "./reviewsCarousel";
import ReviewsNavigation from "./reviewsNavigation";

const Reviews: React.FC = () => {
    const [index, setIndex] = React.useState<number>(0);
    const [direction, setDirection] = React.useState<boolean>(false);

    return (
        <div id="reviews" className="my-20">
            <Heading text="Avis" />
            <div className="mt-5 flex flex-col items-center justify-center">
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
