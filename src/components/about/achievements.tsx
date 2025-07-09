import React from "react";
import { motion, useMotionValue } from "framer-motion";
import type { AchievementsProps } from "@/types";

const Achievements: React.FC<AchievementsProps> = ({
    amount,
    children,
    title,
}) => {
    const number = useMotionValue(0);

    const count = (amount: number) => {
        let i = 0;
        const updateCount = () => {
            let timeout;
            if (i <= amount) {
                number.set(i++);
                timeout = setTimeout(updateCount, 0);
            } else {
                clearTimeout(timeout);
            }
        };
        updateCount();
    };

    return (
        <div className="flex items-end gap-x-3">
            <span className="text-4xl lg:text-2xl text-gray-300 ">
                {children}
            </span>
            <h1 className="flex flex-col gap-y-2">
                <motion.span
                    className="text-2xl lg:text-xl font-light text-yellow-500"
                    onViewportEnter={() => count(amount)}
                    viewport={{ once: true }}
                >
                    {number}
                </motion.span>
                <span className="text-sm tracking-wide text-gray-500 dark:text-white transition-colors">
                    {title}
                </span>
            </h1>
        </div>
    );
};

export { Achievements };
