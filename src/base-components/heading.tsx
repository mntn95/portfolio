import * as React from "react";
import type { HeadingProps } from "@/types";

const Heading: React.FC<HeadingProps> = ({ text }) => (
    <h1 className="text-3xl sm:text-2xl font-bold text-gray-600 mb-14 self-start dark:text-white transition-colors">
        {text}
    </h1>
);

export { Heading };
