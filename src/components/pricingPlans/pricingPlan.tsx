"use client";

import * as React from "react";

import { motion } from "framer-motion";

import { CheckIcon } from "@/assets";
import type { PricingPlanProps } from "@/types";

const PricingPlan: React.FC<PricingPlanProps> = ({ index, plan }) => {
    const { features, isHighlighted, pricing, recommended, title } = plan;
    return (
        <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{
                duration: 0.4,
                delay: index * 0.2,
                scale: { duration: 0.15 },
            }}
            viewport={{ once: true }}
            key={index}
            className={`sm:w-[270px] bg-zinc-50 flex flex-col gap-y-6 p-6 border border-red-400 rounded-xl text-gray-600 ${isHighlighted ? "w-[370px] xl:w-[320px] bg-white" : "w-[350px] xl:w-[300px] bg-zinc-50"}`}
        >
            <h1 className="text-3xl lg:text-lg font-light tracking-wide text-center">
                {title}
            </h1>
            <span className="text-2xl lg:text-xl text-center">{pricing}</span>
            <ul className="flex flex-col gap-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-x-3">
                        <span
                            className={`text-2xl ${isHighlighted ? "text-red-300" : " text-yellow-500"}`}
                        >
                            {CheckIcon}
                        </span>
                        <span className="text-[15px] font-light tracking-wide">
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
            <p className="text-sm font-light text-center">
                <span className="font-semibold">Ideal for:</span>
                {recommended}
            </p>
        </motion.div>
    );
};

export default PricingPlan;
