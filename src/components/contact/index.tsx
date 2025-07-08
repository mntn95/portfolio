"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Heading, Image } from "@/base-components";

const Contact = () => {
    return (
        <div className="h-screen py-20 px-96">
            <Heading text="Get in touch" />
            <div className="w-full h-full my-auto flex lg:flex-col items-center justify-between lg:justify-center gap-x-20 lg:gap-x-0 gap-y-20">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Image
                        className="w-[400px] rounded-md opacity-80"
                        src={"/contact.gif"}
                        alt="contact_image"
                    />
                </motion.div>
                <motion.form
                    initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3"
                >
                    <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
                        <input
                            className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
                            placeholder="Your Name"
                            type="text"
                        />
                        <input
                            className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
                            placeholder="Your Email"
                            type="email"
                        />
                    </div>
                    <input
                        className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
                        placeholder="Subject"
                        type="text"
                    />
                    <textarea
                        className="max-h-[250px] min-h-[150px] w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
                        placeholder="Write Me..."
                    ></textarea>
                    <input
                        className="w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-sm font-light tracking-wider text-white outline-none hover:bg-yellow-500 transition-colors cursor-pointer"
                        type="submit"
                        value="Send Message"
                    />
                </motion.form>
            </div>
        </div>
    );
};

export default Contact;
