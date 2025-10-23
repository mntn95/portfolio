import * as React from "react";
import { motion } from "framer-motion";
import { heroLinks } from "@/assets";
import type { HeroButtonsProps } from "@/types";
import HeroIcon from "./heroIcon";

const HeroButtons: React.FC<HeroButtonsProps> = () => (
    <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        className="mt-8 flex justify-center gap-x-5 text-3xl text-link sm:text-2xl pointer-events-auto"
    >
        {heroLinks.map(({ href, icon }, index) => (
            <HeroIcon href={href} icon={icon} key={index} index={index} />
        ))}
    </motion.div>
);

export default HeroButtons;
