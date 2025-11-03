"use client";
import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/base-components";

const Loader = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setIsLoading(true);
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <motion.div
            initial={{ top: 0 }}
            animate={{ top: isLoading ? 0 : "-100%" }}
            transition={{ duration: 0.5 }}
            className="fixed h-full w-full left-0 top-0 flex items-center justify-center bg-gradient-to-t from-yellow-50 to-red-50 z-50"
        >
            {isLoading && (
                <Image
                    width={150}
                    height={150}
                    src="/catloader.gif"
                    priority
                    alt="spinner"
                />
            )}
        </motion.div>
    );
};

export default Loader;
