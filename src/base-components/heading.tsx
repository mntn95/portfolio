import * as React from "react";
import type { HeadingProps } from "@/types";

const Heading: React.FC<HeadingProps> = ({ text }) => (
    <h2 className="text-3xl uppercase sm:text-2xl font-bold text-gray-600 mb-14 self-start dark:text-white transition-colors py-10">
        {text}
    </h2>
);

export { Heading };
