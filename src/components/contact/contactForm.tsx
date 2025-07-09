"use client";

import * as React from "react";
import { motion } from "framer-motion";
import FormField from "./formField";

const ContactForm: React.FC = () => (
    <motion.form
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3"
    >
        <div className="w-full flex lg:flex-col gap-x-3 lg:gap-y-3">
            <FormField
                type="text"
                placeholder="Your Name"
                name="name"
                required
            />
            <FormField
                type="email"
                placeholder="Your Email"
                name="email"
                required
            />
        </div>
        <FormField type="text" placeholder="Subject" name="subject" required />
        <FormField
            type="textarea"
            placeholder="Write Me..."
            name="message"
            required
        />
        <FormField type="submit" value="Send Message" />
    </motion.form>
);

export default ContactForm;
