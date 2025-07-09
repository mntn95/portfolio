"use client";

import * as React from "react";
import { Heading } from "@/base-components";
import QuestionsList from "./questionsList";

const Questions: React.FC = () => (
    <div className="py-20 px-96">
        <Heading text="Questions and Answers" />
        <QuestionsList />
    </div>
);

export default Questions;
