"use client";

import * as React from "react";
import { Heading } from "@/base-components";
import ContactImage from "./contactImage";
import ContactForm from "./contactForm";

const Contact: React.FC = () => (
    <div className="h-screen py-20 px-96">
        <Heading text="Get in touch" />
        <div className="w-full h-full my-auto flex lg:flex-col items-center justify-between lg:justify-center gap-x-20 lg:gap-x-0 gap-y-20">
            <ContactImage src="/contact.gif" alt="contact_image" />
            <ContactForm />
        </div>
    </div>
);

export default Contact;
