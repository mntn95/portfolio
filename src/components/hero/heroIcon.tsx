import * as React from "react";
import type { HeroIconProps } from "@/types";

const HeroIcon: React.FC<HeroIconProps> = ({ icon, href, index }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative rounded-lg hover:bg-warning hover:text-white dark:hover:text-theme-dark-white transition-colors"
        style={{
            top: index === 1 ? "1px" : "0px",
        }}
    >
        {icon}
    </a>
);

export default HeroIcon;
