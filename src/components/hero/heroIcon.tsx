import * as React from "react";
import type { HeroIconProps } from "@/types";

const HeroIcon: React.FC<HeroIconProps> = ({ icon }) => (
    <a
        href="#"
        className="rounded-lg hover:bg-red-400 hover:text-white transition-colors"
    >
        {icon}
    </a>
);

export default HeroIcon;
