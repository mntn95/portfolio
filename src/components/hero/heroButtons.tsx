import * as React from "react";
import { motion } from "framer-motion";
import { heroLinks } from "@/constants";
import type { HeroButtonsProps } from "@/types";
import HeroIcon from "./heroIcon";
import { Button, Link } from "@/base-components";

const HeroButtons: React.FC<HeroButtonsProps> = () => (
    <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
        className="mt-10 flex justify-center pointer-events-auto sm:flex-col s:gap-y-2 md:flex-row md:gap-x-2 flex-row gap-x-10"
    >
        {heroLinks.map(({ href, icon, label }, index) => (
            <Link
                className="sm:mx-auto"
                href={href}
                target="_blank"
                key={index}
            >
                <Button variant={index === 0 ? "default" : "filled"}>
                    <span className="text-xl">
                        {
                            <HeroIcon
                                href={href}
                                icon={icon}
                                key={index}
                                index={index}
                            />
                        }
                    </span>
                    <span>{label}</span>
                </Button>
            </Link>
        ))}
    </motion.div>
);

export default HeroButtons;
