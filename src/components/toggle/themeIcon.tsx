import React from "react";
import { motion } from "framer-motion";
import type { LanguageIconProps } from "@/types";

const LanguageIcon: React.FC<LanguageIconProps> = ({
    currentLanguage,
    showWhenLanguage,
    children,
}) => (
    <motion.span
        animate={{ scale: currentLanguage === showWhenLanguage ? 1 : 0 }}
        className="absolute block rounded-full bg-white p-1 text-4xl bg-theme-background"
    >
        {children}
    </motion.span>
);

export default LanguageIcon;
