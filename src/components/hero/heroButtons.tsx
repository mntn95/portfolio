import * as React from "react";
import { motion } from "framer-motion";
import { heroLinks } from "@/assets";
import type { HeroButtonsProps } from "@/types";
import HeroIcon from "./heroIcon";

const HeroButtons: React.FC<HeroButtonsProps> = ({ setButtonHover }) => (
    <>
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex justify-center gap-x-5 text-3xl text-yellow-600 sm:text-2xl pointer-events-auto"
        >
            {heroLinks.map(({ href, icon }, index) => (
                <HeroIcon href={href} icon={icon} key={index} index={index} />
            ))}
        </motion.div>
        <motion.a
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            href="#"
            className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
        >
            Talk to me
        </motion.a>
    </>
);

export default HeroButtons;
