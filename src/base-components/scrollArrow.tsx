"use client";

import * as React from "react";
import { motion } from "framer-motion";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { smoothScrollToId } from "@/lib/ui/navHelpers";
import cn from "classnames";

type ScrollArrowProps = {
    direction: "up" | "down";
    targetId: string;
};

const ScrollArrow: React.FC<ScrollArrowProps> = ({ direction, targetId }) => {
    const handleActivate = React.useCallback(() => {
        smoothScrollToId(targetId);
        // focus handled in Layout after scroll
    }, [targetId]);

    const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleActivate();
        }
    };

    const buttonClassName = cn(
        "sm:hidden md:hidden lg:hidden group text-theme-text",
        "absolute left-1/2 -translate-x-1/2 z-20 pointer-events-auto",
        {
            "bottom-8": direction === "down",
            "top-8": direction === "up",
        },
    );

    return (
        <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            type="button"
            role="button"
            aria-label={
                direction === "down"
                    ? "Scroll to next section"
                    : "Scroll to previous section"
            }
            tabIndex={0}
            onClick={handleActivate}
            onKeyDown={onKeyDown}
            className={buttonClassName}
        >
            <div className="[filter:drop-shadow(0_2px_4px_rgba(0,0,0,0.1))]">
                {direction === "down" ? (
                    <KeyboardDoubleArrowDownIcon sx={{ fontSize: 40 }} />
                ) : (
                    <KeyboardDoubleArrowUpIcon sx={{ fontSize: 40 }} />
                )}
            </div>
        </motion.button>
    );
};

export default ScrollArrow;
