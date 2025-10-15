"use client";

import * as React from "react";

import Copyright from "./copyright";

const Footer: React.FC = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="w-full pt-20 pb-3 xxl:pt-6">
            <Copyright />
        </footer>
    );
};

export default Footer;
