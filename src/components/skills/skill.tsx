import * as React from "react";
import { motion } from "framer-motion";

import { Image } from "@/base-components";
import type { SkillProps, SkillAnimationVariants } from "@/types";

const Skill: React.FC<SkillProps> = ({ icon, index, name }) => {
    const animationParams: SkillAnimationVariants = {
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3 + index * 0.07,
            },
        }),
        hidden: {
            opacity: 0,
            y: 30,
        },
    };

    return (
        <motion.div
            custom={index}
            variants={animationParams}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.1 }}
            viewport={{ margin: "50px", once: true }}
            key={index}
            className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 px-5 py-2 lg:px-2"
        >
            <Image
                src={icon}
                alt={name}
                width={100}
                height={100}
                className="h-[40px] w-auto"
            />
            <p className="text-sm text-gray-600">{name}</p>
        </motion.div>
    );
};

export default Skill;
