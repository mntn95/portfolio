"use client";

import * as React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { DesktopMonitorIcon, AtomSymbolIcon, FlutterLogoIcon } from "./icons";
import type { ServiceCardProps } from "@/types";

const ServiceCard: React.FC<ServiceCardProps> = ({ index, service }) => {
    const { variant, title, subtitle, description, examples } = service;

    const getVariantConfig = () => {
        switch (variant) {
            case "software-dev":
                return {
                    icon: <DesktopMonitorIcon />,
                    highlightColor: "text-pink-400",
                };
            case "frontend-dev":
                return {
                    icon: <AtomSymbolIcon />,
                    highlightColor: "text-blue-400",
                };
            case "flutter-dev":
                return {
                    icon: <FlutterLogoIcon />,
                    highlightColor: "text-orange-400",
                };
            default:
                return {
                    icon: <DesktopMonitorIcon />,
                    highlightColor: "text-pink-400",
                };
        }
    };

    const { icon, highlightColor } = getVariantConfig();

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
            className={`flex flex-col items-center gap-y-4 p-6 rounded-lg border border-yellow-400 text-gray-600 dark:text-white bg-zinc-50 dark:bg-zinc-700 transition-all duration-300 hover:shadow-lg`}
        >
            <div className="flex justify-center">{icon}</div>
            <h3 className="text-xl font-bold mb-2 text-center">
                <span className={highlightColor}>{title.split(" ")[0]}</span>
                {title.split(" ").slice(1).length > 0 && (
                    <span> {title.split(" ").slice(1).join(" ")}</span>
                )}
            </h3>
            {subtitle && <p className="text-lg mb-3">{subtitle}</p>}
            {Array.isArray(description) ? (
                description.map((item, index) => (
                    <p key={index} className="text-sm leading-relaxed">
                        {item}
                    </p>
                ))
            ) : (
                <p className="text-sm leading-relaxed">{description}</p>
            )}

            {examples.map((example, exampleIndex) => (
                <div key={exampleIndex} className="w-full">
                    <h4
                        className={classNames(
                            "text-sm font-semibold mb-2",
                            "text-red-400",
                        )}
                    >
                        {example.title}
                    </h4>
                    <ul className="text-xs text-left space-y-1">
                        {example.content.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </motion.div>
    );
};

export default ServiceCard;
