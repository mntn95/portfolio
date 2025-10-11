"use client";

import * as React from "react";
import { Heading } from "@/base-components";
import ServicesList from "./servicesList";

const Services: React.FC = () => (
    <>
        <Heading text="Prestations" />
        <div
            id="services"
            className="min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="w-full max-w-6xl mx-auto">
                <ServicesList />
            </div>
        </div>
    </>
);

export default Services;
