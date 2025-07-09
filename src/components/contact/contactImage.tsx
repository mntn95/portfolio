"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Image } from "@/base-components";

type ContactImageT = {
    src: string;
    alt: string;
};

const ContactImage: React.FC<ContactImageT> = ({ src, alt }) => (
    <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
    >
        <Image
            className="w-[400px] rounded-md opacity-80"
            src={src}
            alt={alt}
        />
    </motion.div>
);

export default ContactImage;
