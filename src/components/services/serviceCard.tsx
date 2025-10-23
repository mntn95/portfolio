"use client";

import * as React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { useTranslation } from "@/hooks/useTranslation";
import { DesktopMonitorIcon, AtomSymbolIcon, FlutterLogoIcon } from "./icons";
import type { ServiceCardProps } from "@/types";

const ServiceCard: React.FC<ServiceCardProps> = ({ index, service }) => {
    const { t } = useTranslation("services");
    const { key } = service;

    const getVariantConfig = () => {
        switch (key) {
            case "websites":
                return {
                    icon: <DesktopMonitorIcon />,
                    highlightColor: "text-pink-400",
                };
            case "collaboration":
                return {
                    icon: <AtomSymbolIcon />,
                    highlightColor: "text-blue-400",
                };
            case "maintenance":
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
            className={`flex flex-col items-center gap-y-4 p-6 rounded-lg border border-border text-theme-text bg-theme-surface transition-all duration-300 drop-shadow-[0px_0px_4px_var(--color-border)]`}
        >
            <div className="flex justify-center">{icon}</div>
            <h3 className="text-xl font-bold mb-2 text-center">
                <span className={highlightColor}>{t(service.title)}</span>
            </h3>
            <p className="text-lg mb-3">{t(service.subtitle)}</p>
            {Object.values(service.description).map((item, descIndex) => (
                <p key={descIndex} className="text-sm leading-relaxed">
                    {t(item)}
                </p>
            ))}

            <div className="w-full">
                <h4
                    className={classNames(
                        "text-sm font-semibold mb-2",
                        "text-warning",
                    )}
                >
                    {t("examples")}
                </h4>
                <ul className="text-xs text-left space-y-1">
                    {Object.values(service.examples).map((item, itemIndex) => (
                        <li key={itemIndex}>{t(item as string)}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
