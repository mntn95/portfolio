"use client";

import * as React from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { Layout } from "@/base-components";
import QuestionsList from "./questionsList";

const Questions: React.FC = () => {
    const { t } = useTranslation("questions");

    return (
        <Layout id="questions" title={t("title")}>
            <QuestionsList />
        </Layout>
    );
};

export default Questions;
