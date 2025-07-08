import * as React from "react";
import { heroIcons } from "@/assets";
import type { HeroButtonsProps } from "@/types";
import HeroIcon from "./heroIcon";

const HeroButtons: React.FC<HeroButtonsProps> = ({ setButtonHover }) => (
    <>
        <div className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600 sm:text-2xl">
            {heroIcons.map((icon, index) => (
                <HeroIcon icon={icon} key={index} />
            ))}
        </div>
        <a
            href="#"
            className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
        >
            Talk to me
        </a>
    </>
);

export default HeroButtons;
