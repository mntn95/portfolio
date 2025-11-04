import * as React from "react";
import { motion } from "framer-motion";
import { heroLinks } from "@/assets";
import { useIsMobile } from "@/hooks/useIsMobile";
import type { HeroButtonsProps } from "@/types";
import HeroIcon from "./heroIcon";
import { Button, Link } from "@/base-components";
import cn from "classnames";

const HeroButtons: React.FC<HeroButtonsProps> = () => {
    const isMobile = useIsMobile();
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 }}
            className={cn(
                "mt-10 flex justify-center pointer-events-auto",
                isMobile ? "flex-col gap-y-2" : "flex-row gap-x-10",
            )}
        >
            {heroLinks.map(({ href, icon, label }, index) => (
                <Link
                    className={cn(isMobile ? "mx-auto" : undefined)}
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
};

export default HeroButtons;
