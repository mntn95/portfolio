"use client";

import * as React from "react";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

import { Image, isPair, Link } from "@/base-components";
import type { ProjectProps } from "@/types";

const Project: React.FC<ProjectProps> = ({ data, index }) => {
    const { t } = useTranslation("projects");
    const [show, setShow] = React.useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: isPair(index) ? 100 : -100 }}
            className="relative sm:w-full h-max border border-border rounded-lg cursor-pointer"
            whileInView={{ opacity: 1, y: 0 }}
            onClick={() => setShow(!show)}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
            <Image
                src={data.imageUrl}
                className="rounded-lg opacity-70"
                alt="project-image"
                width={data.width}
                height={data.height}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: show ? 1 : 0 }}
                className="absolute top-0 w-full h-full flex flex-col items-center justify-center justify-evenly bg-text-white p-6 rounded-lg bg-theme-surface"
            >
                <h2 className="text-md font-bold tracking-wide text-theme-text transition-colors">
                    {t(data.nameKey)}
                </h2>
                <p className="text-justify sm:text-xs text-sm text-theme-text first-letter:pl-2 transition-colors">
                    {t(data.descKey)}
                </p>
                {data.url && (
                    <div className="p-2">
                        <Link
                            href={data.url}
                            target="_blank"
                            className={`${show ? "pointer-events-auto" : "pointer-events-none"} text-theme-text hover:underline`}
                        >
                            {t("link_to_website")}
                        </Link>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
};

export default Project;
