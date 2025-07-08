"use client";

import * as React from "react";
import { questions } from "@/assets";
import type { QuestionData } from "@/types";
import Question from "./question";

const QuestionsList: React.FC = () => (
    <div className="pt-12">
        <ul className="flex flex-col gap-y-3">
            {questions.map((question: QuestionData, index: number) => (
                <Question key={index} index={index} question={question} />
            ))}
        </ul>
    </div>
);

export default QuestionsList;
