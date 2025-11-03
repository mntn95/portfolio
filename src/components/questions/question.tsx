"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { QuestionArrow } from "@/assets";
import type { QuestionProps, AnimationVariants } from "@/types";

const Question: React.FC<QuestionProps> = ({ question, index }) => {
    const { t } = useTranslation("questions");
    const [show, setShow] = React.useState<boolean>(false);

    const variants: AnimationVariants = {
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.07,
            },
        }),
        hidden: { opacity: 0, x: -30 },
    };

    if (!question || !question.questionKey || !question.answerKey) return null;

    return (
        <motion.li
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "50px", once: true }}
            className="border border-border p-1 rounded-lg"
            variants={variants}
        >
            <h3
                onClick={() => setShow(!show)}
                className={`flex items-center text-xl font-extralight text-theme-text hover:text-link tracking-wide cursor-pointer ${show && "border-b text-link"}`}
            >
                <motion.span animate={{ rotate: show ? 180 : 0 }}>
                    {QuestionArrow}
                </motion.span>
                <span>{t(question.questionKey)}</span>
            </h3>
            <motion.p
                initial={{ scaleY: 0, height: 0, opacity: 0 }}
                animate={
                    show
                        ? {
                              scaleY: 1,
                              height: "auto",
                              opacity: 1,
                          }
                        : {
                              scaleY: 0,
                              height: 0,
                              opacity: 0,
                          }
                }
                transition={{
                    duration: 0.1,
                    type: "spring",
                    stiffness: show ? 250 : 50,
                    opacity: { delay: show ? 0.2 : 0 },
                }}
                className="box-border origin-top pl-8 text-lg font-extralight tracking-wide text-theme-text first-letter:pl-3"
                style={{
                    wordWrap: "break-word",
                }}
            >
                {t(question.answerKey)}
            </motion.p>
        </motion.li>
    );
};

export default Question;
