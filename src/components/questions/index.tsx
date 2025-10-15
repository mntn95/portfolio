"use client";

import * as React from "react";
import { Layout } from "@/base-components";
import QuestionsList from "./questionsList";

const Questions: React.FC = () => (
    <Layout id="questions" title="Questions fréquentes">
        <QuestionsList />
    </Layout>
);

export default Questions;
