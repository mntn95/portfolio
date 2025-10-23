"use client";

import * as React from "react";
import { services } from "@/assets";
import type { ServiceData } from "@/types";
import ServiceCard from "./serviceCard";

const ServicesList: React.FC = () => (
    <div
        className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 
    gap-8 w-full"
    >
        {services.map((service: ServiceData, index: number) => (
            <ServiceCard key={index} index={index} service={service} />
        ))}
    </div>
);

export default ServicesList;
