"use client";

import * as React from "react";
import { animate, motion } from "framer-motion";
import { reviews } from "@/data";
import { isPair } from "@/base-components";
import type { ReviewData } from "@/types";
import Review from "./review";

type ReviewsCarouselT = {
    index: number;
    direction: boolean;
};

const ReviewsCarousel: React.FC<ReviewsCarouselT> = ({ index, direction }) => {
    const prevIndex = React.useRef<number>(0);
    const slides = React.useRef<Array<HTMLDivElement>>([]);

    const isIndexZero = index === 0;

    React.useEffect(() => {
        const currentSlide = slides.current[index];
        const previousSlide = slides.current[prevIndex.current];

        // Guard: ensure slides are mounted before animating
        if (!currentSlide || !previousSlide) return;

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
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative w-[800px] lg:w-[580px] md:w-[95%] sm:w-[300px] h-[500px] lg:h-[600px] md:h-[600px] sm:h-[700px] flex items-center justify-center overflow-hidden hover:drop-shadow-[0px_0px_3px_var(--color-border)]"
        >
            {reviews.map((review: ReviewData, reviewIndex: number) => (
                <Review
                    review={review}
                    key={reviewIndex}
                    slides={slides.current}
                    stars={review.stars}
                />
            ))}
        </motion.div>
    );
};

export default ReviewsCarousel;
