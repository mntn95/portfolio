import * as React from "react";
import type { HeadingProps } from "@/types";

const Heading: React.FC<HeadingProps> = ({ text }) => (
    <h2 className="text-3xl uppercase sm:text-2xl font-bold text-theme-text self-start transition-colors py-10">
        {text}
    </h2>
);

export { Heading };
