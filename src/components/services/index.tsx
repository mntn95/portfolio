"use client";

import * as React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Layout } from "@/base-components";
import ServicesList from "./servicesList";

const Services: React.FC = () => {
    const { t } = useTranslation("services");

    return (
        <Layout id="services" title={t("title")}>
            <div className="w-full max-w-6xl mx-auto">
                <ServicesList />
            </div>
        </Layout>
    );
};

export default Services;
