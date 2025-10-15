"use client";

import * as React from "react";
import { Layout } from "@/base-components";
import ServicesList from "./servicesList";

const Services: React.FC = () => (
    <Layout id="services" title="Prestations">
        <div className="w-full max-w-6xl mx-auto">
            <ServicesList />
        </div>
    </Layout>
);

export default Services;
