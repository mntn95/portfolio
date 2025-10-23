"use client";
import React from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const ScrollProgressBar: React.FC = () => {
    const progress = useScrollProgress();

    return (
        <div className="fixed top-0 left-0 w-full z-50 opacity-70">
            <div
                className="h-2.5 bg-border"
                style={{ width: `${progress}%` }}
                role="progressbar"
                aria-label="Scroll progress"
                aria-valuenow={Math.round(progress)}
                aria-valuemin={0}
                aria-valuemax={100}
            />
        </div>
    );
};

export default ScrollProgressBar;
