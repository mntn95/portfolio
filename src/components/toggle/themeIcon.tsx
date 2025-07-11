import React from "react";
import { motion } from "framer-motion";
import type { ThemeIconProps } from "@/types";

const ThemeIcon: React.FC<ThemeIconProps> = ({
    darkTheme,
    showWhenDark,
    children,
}) => (
    <motion.span
        animate={{ scale: darkTheme === showWhenDark ? 1 : 0 }}
        className="absolute block rounded-full bg-zinc-50 p-1 text-4xl dark:bg-zinc-800"
    >
        {children}
    </motion.span>
);

export default ThemeIcon;
