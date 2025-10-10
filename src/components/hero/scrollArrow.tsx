"use client";

import * as React from "react";
import { motion } from "framer-motion";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const ScrollArrow: React.FC = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex justify-center items-end pb-8 z-20 pointer-events-auto"
        >
            <motion.button
                onClick={scrollToAbout}
                className="group flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <KeyboardDoubleArrowDownIcon
                        sx={{
                            fontSize: 50,
                            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                        }}
                    />
                </motion.div>
                <motion.span
                    className="text-xs mt-1 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                >
                    Scroll down
                </motion.span>
            </motion.button>
        </motion.div>
    );
};

export default ScrollArrow;
