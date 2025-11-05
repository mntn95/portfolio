import { useState, useEffect, useRef } from "react";

export const useScrollProgress = (): number => {
    const [progress, setProgress] = useState(0);
    const requestAnimationFrameId = useRef<number | null>(null);

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        const calculateProgress = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = window.innerHeight;
            const denominator = scrollHeight - clientHeight;

            if (denominator <= 0) {
                setProgress(0);
                return;
            }

            const calculatedProgress = (scrollTop / denominator) * 100;
            const clampedProgress = Math.min(
                100,
                Math.max(0, calculatedProgress),
            );
            setProgress(clampedProgress);
        };

        const handleScroll = () => {
            if (requestAnimationFrameId.current !== null) {
                return;
            }

            requestAnimationFrameId.current = requestAnimationFrame(() => {
                calculateProgress();
                requestAnimationFrameId.current = null;
            });
        };

        calculateProgress();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (requestAnimationFrameId.current !== null) {
                cancelAnimationFrame(requestAnimationFrameId.current);
                requestAnimationFrameId.current = null;
            }
        };
    }, []);

    return progress;
};
