"use client";

import { Heading } from "@/base-components";
import { questions } from "@/assets";
import React from "react";
import type { QuestionData } from "@/types";

import Question from "./question";

const Questions: React.FC = () => (
    <div className="py-20 px-96">
        <Heading text="Questions and Answers" />
        <div className="pt-12">
            <ul className="flex flex-col gap-y-3">
                {questions.map((question: QuestionData, index: number) => (
                    <Question key={index} index={index} question={question} />
                ))}
            </ul>
        </div>
    </div>
);

export default Questions;
