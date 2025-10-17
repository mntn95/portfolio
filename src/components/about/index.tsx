"use client";

import * as React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Layout } from "@/base-components";
import AboutTextContent from "./aboutTextContent";

const About: React.FC = () => {
    const { t } = useTranslation("about");

    return (
        <Layout id="about" title={t("title")}>
            <div className="w-full flex items-center justify-between md:justify-center">
                <AboutTextContent />
            </div>
        </Layout>
    );
};

export default About;
