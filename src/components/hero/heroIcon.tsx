import * as React from "react";
import type { HeroIconProps } from "@/types";

const HeroIcon: React.FC<HeroIconProps> = ({ icon, index }) => (
    <div
        className="relative rounded-lg"
        style={{
            top: index === 1 ? "1px" : "0px",
        }}
    >
        {icon}
    </div>
);

export default HeroIcon;
