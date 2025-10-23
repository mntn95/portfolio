"use client";

import * as React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Layout } from "@/base-components";
import QuestionsList from "./questionsList";
import Footer from "../footer";

const Questions: React.FC = () => {
    const { t } = useTranslation("questions");

    return (
        <Layout id="questions" title={t("title")}>
            <QuestionsList />
            <Footer />
        </Layout>
    );
};

export default Questions;
