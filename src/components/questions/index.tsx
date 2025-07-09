"use client";

import * as React from "react";
import { Heading } from "@/base-components";
import QuestionsList from "./questionsList";

const Questions: React.FC = () => (
    <div id="questions" className="py-20">
        <Heading text="Questions and Answers" />
        <QuestionsList />
    </div>
);

export default Questions;
