export interface QuestionData {
    question?: string;
    answer?: string;
    questionKey?: string;
    answerKey?: string;
}

export interface QuestionProps {
    question: QuestionData;
    index: number;
}

import type { Variants } from "framer-motion";

export type AnimationVariants = Variants;
